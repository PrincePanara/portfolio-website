export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "web" | "mobile" | "ui-ux";
  tags: string[];
  coverImage: string;
  screenshots: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
  year: string;
  status: "live" | "in-progress" | "archived";
}

export const projects: Project[] = [
  {
    id: "boxcricker",
    title: "BoxCricker",
    description: "A complete UI/UX experience for BoxCricker, including both User Panel and Admin Panel interfaces.",
    longDescription: "Designed a complete UI/UX experience for BoxCricker, including both User Panel and Admin Panel interfaces. Created all application screens, user flows, wireframes, and interactive layouts with a focus on usability, accessibility, and modern design principles. The project included dashboard screens, user management, authentication flows, analytics pages, settings panels, and responsive mobile-friendly designs to ensure a seamless user experience across devices.",
    category: "ui-ux",
    tags: ["Figma"],
    coverImage: "/images/projects/boxcricker.png",
    screenshots: [],
    liveUrl: "https://www.figma.com/design/cgq7TYXC1wqds5oaa0vq6F/BOX-NEW-1?node-id=46-25&t=BBuvHANrawc0Bfby-1",
    featured: true,
    year: "2024",
    status: "live",
    metrics: [
      { label: "Type", value: "UI/UX Design" }
    ]
  },
  {
    id: "empella-exports",
    title: "Empella Exports",
    description: "A complete Admin Panel and Dashboard for an Enterprise Inventory Management System, designed for scalability and efficiency.",
    longDescription: "Designed a complete Admin Panel for an Inventory Management System used to manage inventory, products, stock levels, suppliers, purchase orders, sales orders, reports, and business operations. Created all major screens, workflows, dashboards, data tables, analytics views, and management interfaces with a focus on usability, efficiency, and modern enterprise design standards. The design streamlines business operations, improves inventory visibility, and provides administrators with powerful tools for managing day-to-day processes through an intuitive and scalable user experience.",
    category: "ui-ux",
    // tags: ["Figma", "Dashboard Design", "Inventory Management", "Enterprise Software", "Admin Panel", "Data Management"],
    tags: ["Figma"],
    coverImage: "/images/projects/empella-exports.png",
    screenshots: [],
    liveUrl: "https://www.figma.com/design/tyf4TWrymKWzzBT89MnTEz/Empella-Exports?node-id=0-1&p=f&t=ps5Za6a3bZFWrw4w-0",
    featured: true,
    year: "2025",
    status: "live",
    metrics: [
      { label: "Role", value: "UI/UX Designer" },
      { label: "Team Size", value: "Solo" },
      { label: "Type", value: "UI/UX Design" }
    ]
  },
  {
    id: "momentroom",
    title: "MomentRoom",
    description: "An AI-powered mobile application that automatically transforms short video clips into professionally edited reels.",
    longDescription: "Designed a mobile application that automatically transforms short video clips into professionally edited reels. Created complete UI/UX designs for clip uploads, group-based memory organization, automatic reel generation, media management, sharing features, and user profiles, delivering a simple and engaging content creation experience.",
    category: "ui-ux",
    tags: ["Figma", "Mobile App", "UI/UX Design"],
    coverImage: "/images/projects/momentroom.png",
    screenshots: [],
    liveUrl: "https://www.figma.com/design/VvmwrAL9Vd8N1mJc0Fr3k6/MomentRoom-App-UI?t=BBuvHANrawc0Bfby-1",
    featured: true,
    year: "2024",
    status: "live",
    metrics: [
      { label: "Type", value: "Mobile Application" }
    ]
  },
  {
    id: "hostelhub",
    title: "HostelHub",
    description: "A smart mobile application for hostel residents and administrators to streamline operations and communication.",
    longDescription: "Designed a complete mobile application for hostel residents and administrators to streamline hostel operations and communication. Created end-to-end UI/UX designs for room management, visitor approvals, payments, complaints, event management, notices, facility booking, meal schedules, attendance tracking, emergency support, and hostel announcements. Focused on creating an intuitive, user-friendly, and modern experience that simplifies daily hostel activities for students and administrators.",
    category: "ui-ux",
    tags: ["Figma", "Mobile App", "UI/UX Design", "Management System"],
    coverImage: "/images/projects/hostelhub.png",
    screenshots: [],
    liveUrl: "https://www.figma.com/design/11NMOI4LrrC0KZHSMOyXdt/Hostel-Manegment-UI-Bro?node-id=0-1&t=BBuvHANrawc0Bfby-1",
    featured: true,
    year: "2024",
    status: "live",
    metrics: [
      { label: "Type", value: "Mobile Application" }
    ]
  },

];

export const featuredProjects = projects.filter((p) => p.featured);
