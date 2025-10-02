const projects = [
  {
    name: "My Case – Comprehensive Cases System",
    role: "Backend Developer",
    GitHub:"https://github.com/Kareem-Ibrahim-Mahmoud/MyCaseApp",
    period: "Sep 2023 – Jun 2024",
    points: [
      "Developed a Case Management system using ASP.NET Core, allowing users to manage cases and related details.",
      "Built a User Management system with login, registration, and role-based access control.",
      "Implemented Appointment Tracking for hearing dates and procedures.",
      "Added Document Attachment functionality for uploading legal files.",
      "Created a Search and Filter system to quickly find cases by keywords or categories.",
      "Integrated an Authorization System for secure access control.",
      "Associated cases with relevant parties like opponents, witnesses, and attorneys.",
      "Developed a Dashboard to display statistics on active cases and upcoming appointments."
    ],
    technologies: [
      "ASP.NET Core", "Entity Framework Core", "SQL Server", "JWT", "Clean Architecture"
    ]
  },
  {
    name: "OLX Website - Portfolio Showcase",
    role: "Frontend Developer",
    GitHub:"https://github.com/Kareem-Ibrahim-Mahmoud/OLX-Web",
    // No period mentioned, can be added if needed
    points: [
      "Developed a personal portfolio website to showcase my skills, experience, and projects as a software engineer.",
      "Responsive design for optimal viewing on all devices.",
      "Interactive and modern user interface."
    ],
    technologies: [
      "HTML", "CSS", "JavaScript"
    ]
  },
  {
    name: "Transport Company Management System",
    role: "Backend Developer",
    GitHub:"https://github.com/Transport-management-company",
    period: "Feb 2024 – Jun 2024",
    points: [
      "Developed backend with ASP.NET Core 6 and SQL for robust data handling.",
      "Facilitated user tasks by allowing the selection of transportation modes (land, sea, air).",
      "Implemented scheduling functionality to determine shipment dates based on vehicle availability and schedule.",
      "Developed a delivery date estimation feature based on distance, transportation type, and logistical factors.",
      "Managed fleet operations by tracking and maintaining vehicles for readiness.",
      "Organized trip routes and timings for efficient trip scheduling.",
      "Built a driver management system to record driver information and monitor performance."
    ],
    technologies: [
      "ASP.NET Core 6", "Entity Framework Core", "SQL Server", "Clean Architecture"
    ]
  }
];

export default projects;
