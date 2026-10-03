import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }

  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    // Submit to Web3Forms
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: '3539b6db-d5fa-4910-adba-87c74d5bbad7',
        name,
        email,
        subject,
        message,
        from_name: name,
      }),
    });

    const data = await res.json();

    if (data.success) {
      return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } else {
      throw new Error(data.message || 'Failed to send message via Web3Forms');
    }
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: error.message || 'Failed to send email. Please try again later.' }, { status: 500 });
  }
}
