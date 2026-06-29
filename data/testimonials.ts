export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
  review: string;
  projectType: string;
  date: string;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Alex Morrison",
    role: "CEO",
    company: "NovaTech Solutions",
    rating: 5,
    review: "Prince is an exceptional developer and designer. He built our entire SaaS platform from scratch — the UI is stunning, the performance is incredible, and the code quality is top-notch. He communicated perfectly throughout the project. Highly recommend!",
    projectType: "SaaS Development",
    date: "2024-11",
    featured: true,
  },
  {
    id: "t2",
    name: "Sarah Chen",
    role: "Product Manager",
    company: "Luminary Digital",
    rating: 5,
    review: "Working with Prince was a game-changer for us. His design sensibility is on another level — he understands both business goals and user needs simultaneously. Our app redesign increased user retention by 45%. We'll definitely work with him again.",
    projectType: "UI/UX Redesign",
    date: "2024-09",
    featured: true,
  },
  {
    id: "t3",
    name: "Marcus Johnson",
    role: "Startup Founder",
    company: "LaunchKit",
    rating: 5,
    review: "Prince delivered our MVP in 3 weeks. The mobile app he built with Flutter is smooth, beautiful, and exactly what we envisioned. He also contributed ideas that made the product significantly better. Truly a 10x developer.",
    projectType: "Mobile App Development",
    date: "2024-07",
    featured: true,
  },
  {
    id: "t4",
    name: "Priya Sharma",
    role: "Creative Director",
    company: "BrandWave Agency",
    rating: 5,
    review: "Prince's ability to translate brand concepts into digital experiences is remarkable. He created a website that perfectly captures our agency's identity while pushing creative boundaries. Our clients love it.",
    projectType: "Web Design & Development",
    date: "2024-05",
    featured: false,
  },
  {
    id: "t5",
    name: "James Whitfield",
    role: "CTO",
    company: "DataPulse Inc.",
    rating: 5,
    review: "We hired Prince to build our analytics dashboard. His React skills are excellent, and his eye for data visualization made the charts not just functional but genuinely beautiful. The engineers on my team were impressed.",
    projectType: "Dashboard Development",
    date: "2024-03",
    featured: false,
  },
  {
    id: "t6",
    name: "Emma Laurent",
    role: "E-commerce Manager",
    company: "MaisonLux",
    rating: 5,
    review: "Prince built our luxury e-commerce site and the results speak for themselves — conversion rate up 38%, bounce rate down 28%. He's meticulous, creative, and a pleasure to work with.",
    projectType: "E-commerce Development",
    date: "2023-12",
    featured: false,
  },
];

export const featuredTestimonials = testimonials.filter((t) => t.featured);
