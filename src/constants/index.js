export const myProjects = [
  {
    id: 1,
    title: "Harmony Hub - Socialize & Stream Music",
    description:
      "An interactive music platform that enables users to listen to albums, chat with others, and see real-time activity updates.",
    subDescription: [
      "Built with TypeScript, Express.js, MongoDB, and Socket.IO for a seamless user experience.",
      "Includes an admin panel for managing songs, albums, and viewing platform stats.",
    ],
    href: "https://harmonyhub-0vql.onrender.com",
    logo: "",
    image: "/assets/projects/harmonyhub.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "ExpressJS",
        path: "/assets/logos/expressjs.svg",
      },
      {
        id: 5,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Brinebounty",
    description:
      "A cross-platform mobile application for ordering and managing raw seafood, built using Flutter, Firebase, and Firestore.",
    subDescription: [
      "Built two Flutter apps for customers and admins with real-time data sync via Firebase Firestore.",
      "Integrated Fast2SMS for automated SMS notifications and Firebase Authentication for secure access control.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/brinebounty.png",
    tags: [
      {
        id: 1,
        name: "Flutter",
        path: "/assets/logos/flutter.svg",
      },
      {
        id: 2,
        name: "Firebase",
        path: "/assets/logos/firebase.svg",
      },
      {
        id: 3,
        name: "Fast2SMS",
        path: "/assets/logos/fast2sms.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Movie Recommendation System",
    description:
      "A content-based recommendation engine that suggests similar movies based on user-selected titles.",
    subDescription: [
      "Developed the recommendation model using machine learning in Jupyter Notebook with cosine similarity on movie features.",
      "Built an interactive web UI using Streamlit, styled and tested through PyCharm for a smooth user experience.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/movie-recomm.png",
    tags: [
      {
        id: 1,
        name: "Jupyter",
        path: "/assets/logos/jupyter.svg",
      },
      {
        id: 2,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 3,
        name: "Pycharm",
        path: "/assets/logos/pycharm.svg",
      },
      {
        id: 4,
        name: "Streamlit",
        path: "/assets/logos/streamlit.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Gemini Clone",
    description:
      "A Generative AI chatbot web app inspired by Google Gemini, built with modern front-end tools.",
    subDescription: [
      "Developed using React, Vite, and the Gemini API to enable real-time AI interactions.",
      "Deployed seamlessly on Vercel with a responsive, user-friendly interface.",
    ],
    href: "https://sri-gemini.vercel.app",
    logo: "",
    image: "/assets/projects/geminiclone.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Vite",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Food Ordering App UI & Delivery Partner UI",
    description:
      "A complete responsive food ordering app UI along with a delivery partner interface, designed and developed for Hoppy Mobility Services Pvt Ltd using Flutter.",
    subDescription: [
      "Built a cross-platform food ordering UI and a delivery partner UI with modular, responsive design.",
      "Implemented seamless navigation, cart flow, order tracking, and delivery management with clean architecture.",
    ],
    href: "https://github.com/Sri-Sudharsan-S/Hoppy-Mobility-Rider-App",
    logo: "",
    image: "/assets/projects/hoppy-order.png",
    tags: [
      {
        id: 1,
        name: "Flutter",
        path: "/assets/logos/flutter.svg",
      },
      {
        id: 2,
        name: "Android Studio",
        path: "/assets/logos/androidstudio.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Hoppy Mobility Portfolio",
    description:
      "A fully responsive portfolio app for Hoppy Mobility Services Pvt Ltd, developed in Flutter, showcasing the company’s home page, services, contact, about, and team members profiles.",
    subDescription: [
      "Implemented multiple UI features including carousel sliders, animated gradient borders, and smooth transitions using various Flutter dependencies.",
      "Designed engaging and interactive sections such as team profiles, service listings, and contact forms for a seamless user experience.",
    ],
    href: "https://github.com/Sri-Sudharsan-S/hoppy-mobility-portfolio",
    logo: "",
    image: "/assets/projects/hoppy-port.png",
    tags: [
      {
        id: 1,
        name: "Flutter",
        path: "/assets/logos/flutter.svg",
      },
      {
        id: 2,
        name: "Android Studio",
        path: "/assets/logos/androidstudio.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/srisudharsans/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Github",
    href: "https://github.com/Sri-Sudharsan-S",
    icon: "/assets/socials/github.svg",
  },
];

export const experiences = [
  {
    title: "Frontend Developer Intern",
    job: "11/12/2023 - 26/12/2023",
    date: "Saalcomp Manufacturing India Pvt Ltd, Chennai",
    contents: [
      "Worked as a Frontend Developer on the login page interface of the HRIMS (Human Resource Information Management System) internal website, used for employee data management, improving user experience.",
      "Developed an adhoc internal website to support various company operations.",
      "Learned the basics of Xamarin, which was used by the company to develop a testing mobile application for their products, specifically chargers.",
    ],
  },
  {
    title: "Flutter Developer Intern",
    job: "1/3/24 - 31/5/24",
    date: "Hoppy Mobility Services Pvt Ltd, Mumbai",
    contents: [
      "Led the transformation of the company’s portfolio website from WordPress to Flutter Web, resolving responsive design issues and enhancing overall visual appeal and user experience.",
      "Developed comprehensive UI components for a food ordering app, including login, home, profile, ordering, cart, and payment pages.",
      "Built UI pages for the food delivery partner app such as payout, profile, and available orders pages, ensuring consistency and usability across platforms.",
    ],
  },
];