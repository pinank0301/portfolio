export const portfolioData = {
    bio: {
        name: "Pinank Trivedi",
        title: "Full Stack Developer",
        tagline: "20 ★ Engineer ★ FullStack Developer",
        description: "Hi there, I'm Pinank, a final year undergrad pursuing Engineering. I love to build cool products that make people's lives easier. I play, read books, and participate in hackathons for fun.",
        links: {
            resume: "https://drive.google.com/file/d/1B3ZqAcDXgMABwfbg9HR3V8XIVuxZQnhC/view?usp=sharing",
            email: "pinanktrivedi694@gmail.com",
            github: "https://github.com/pinank0301",
            linkedin: "https://www.linkedin.com/in/pinank-trivedi/"
        }
    },
    experience: [
        {
            role: "Python Development Intern",
            company: "CommuneEquation Media Pvt. Ltd.",
            description: [
                "Worked on Python modules for data processing",
                "Implemented features, optimized scripts, debugging",
                "Collaborated in team workflows"
            ]
        },
        {
            role: "Technical Lead",
            company: "IEEE TCET",
            description: [
                "Led technical initiatives & website building",
                "Managed setups, worked on programming projects",
                "Conducted technical events"
            ]
        },
        {
            role: "Hackathon Participant",
            company: "SIH & Others",
            description: [
                "Built solutions under time constraints",
                "Experience with real-world apps"
            ]
        }
    ],
    projects: [
        {
            title: "Quick AI",
            description: "SaaS AI platform for content & media tools",
            tech: "React + Express + Gemini API + NeonDB + Clerk",
            features: [
                "Article writing",
                "Title generator",
                "Image editing (BG/object removal)",
                "Billing integration",
                "Modular UI"
            ],
            github: "https://github.com/pinank0301/QuickAI",
            live: "https://quickai-pin.vercel.app/"
        },
        {
            title: "Soshable",
            description: "Volunteer & event management platform",
            tech: "React + Firebase",
            features: [
                "Real-time updates",
                "Volunteer registration",
                "Digital certificates"
            ],
            github: "https://github.com/pinank0301/The-Brute-Force",
            live: "https://the-brute-force.vercel.app/"
        },
        {
            title: "Gender & Age Recognition System",
            description: "Real-time live camera model",
            tech: "Python + OpenCV + Caffe",
            features: ["Tkinter GUI desktop app"],
            github: "https://github.com/pinank0301/Gender-and-Age-Detection",
            live: "https://github.com/pinank0301/Gender-and-Age-Detection"
        },
        {
            title: "Estate Agent Website (Frontend UI Hackathon)",
            description: "Estate Agent Website made in 12 hours with no use of AI",
            tech: "React + Tailwind CSS + ShadCn + Zennit UI components",
            features: [
                "Framer Motion",
                "Chatbot Support for customers"
            ],
            github: "https://github.com/pinank0301/Zennit-Hackathon",
            live: "https://estate-agent-pro.vercel.app/"
        }
    ],
    skills: [
        "HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "Python",
        "React", "Shadcn", "Next.js", "Express.js", "Node.js", "MongoDB",
        "SQL", "PostgreSQL", "Langchain", "AWS"
    ],
    education: [
        {
            title: "B.E. in Electronics & Telecommunication",
            institution: "TCET",
            year: "2022 - 2026",
            grade: "8.81 CGPA",
            description: "Pursuing Bachelor of Engineering with a focus on Electronics and Telecommunication."
        },
        {
            title: "Higher Secondary (12th)",
            institution: "Thomas Baptista Jr. College",
            year: "2020 - 2022",
            grade: "63.17%",
            description: "Completed Higher Secondary Education in Science stream."
        },
        {
            title: "Secondary (10th)",
            institution: "Nazareth Convent School",
            year: "2020",
            grade: "89%",
            description: "Completed Secondary Education."
        }
    ]
};

export function getPortfolioContext() {
    return `
    You are a terminal-style chatbot assistant for Pinank Trivedi's portfolio website.
    Your goal is to answer questions about Pinank based on the following information.
    Keep your answers concise, professional, and in a tech-savvy tone suitable for a terminal interface.
    Do not hallucinate information not present here.

    BIO:
    Name: ${portfolioData.bio.name}
    Title: ${portfolioData.bio.title}
    Tagline: ${portfolioData.bio.tagline}
    Description: ${portfolioData.bio.description}
    Links: Resume (${portfolioData.bio.links.resume}), Email (${portfolioData.bio.links.email}), GitHub (${portfolioData.bio.links.github}), LinkedIn (${portfolioData.bio.links.linkedin})

    EXPERIENCE:
    ${portfolioData.experience.map(exp => `- ${exp.role} at ${exp.company}: ${exp.description.join(", ")}`).join("\n")}

    PROJECTS:
    ${portfolioData.projects.map(proj => `- ${proj.title}: ${proj.description} (Tech: ${proj.tech}). Features: ${proj.features.join(", ")}. Links: GitHub (${proj.github}), Live (${proj.live})`).join("\n")}

    SKILLS:
    ${portfolioData.skills.join(", ")}

    EDUCATION:
    ${portfolioData.education.map(edu => `- ${edu.title} at ${edu.institution} (${edu.year}). Grade: ${edu.grade}. ${edu.description}`).join("\n")}
  `;
}
