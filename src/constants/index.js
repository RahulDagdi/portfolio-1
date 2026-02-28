import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/Apple-Weather-app.png";
import project3 from "../assets/projects/calculator.png";
import project4 from "../assets/projects/webPage.png";
import project5 from "../assets/projects/BookStore.webp";
import project6 from "../assets/projects/Blog-Website.png";
import project7 from "../assets/projects/LaxParking.png";
import project8 from "../assets/projects/KiteCareers.png";
import project9 from "../assets/projects/RdxShow.png";



export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With  1.5 Year  of hands-on experience, I have honed my skills in front-end technologies like HTML CSS Javascript and React with Bootstrap and Tailwind Css as well as back-end technologies like Node.js, Express and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1.5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
     {
  year: "2025 December - Present",
  role: "Frontend Web Developer",
  company: "SoftHunters Pvt Ltd",
  description: `Leading the development of responsive and user-centric web applications, focusing on building scalable frontend architectures and delivering high-performance user experiences. Collaborating closely with UI/UX designers, backend developers, and stakeholders to translate business requirements into interactive, accessible, and maintainable interfaces. Implementing modern best practices, optimizing application performance, and ensuring cross-browser compatibility across multiple devices.`,
  technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS" , "Bootstrap", "REST APIs", "Git"]
},

  {
      year:"0 - 6 Months" ,   // "2024 - Present"
      role: "Mern Stack Developer",
      company:"Grass solution as a Trainee",
      description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
      technologies: ["HTML","CSS","Javascript", "React.js", "Node.js","Express", "mongoDB"],
    },
  {
      year:"0 - 6 Months" ,   // "2024 - Present"
      role: "C Programming Language",
      company:"Zeetron networks (IIHT)",
      description: `Led a team in building software using C, focusing on performance and efficient algorithms. Collaborated with stakeholders to set requirements and timelines.`,
      technologies: ["OS", "Compilers"],
    },
  {
      year:"0 - 6 Months" ,   // "2024 - Present"
      role: "C++ Programing",
      company:"Grass solution as a Trainee",
      description: `Led a team in developing software solutions with C++, focusing on optimizing performance-critical applications and implementing complex data structures and algorithms. Integrated system-level features and collaborated closely with stakeholders to define project requirements, design system architecture, and establish deliverable timelines..`,
      technologies: ["OS", "Compilers"] ,
    }, 
  
];

export const PROJECTS = [
{
  title: "LaxParking",
  image: project7,
  description:
    "LaxParking is an airport parking booking website that allows travelers to easily reserve secure parking spaces near the airport. The platform provides real-time availability, flexible booking options, and a smooth reservation process. It features a responsive design, user-friendly interface, booking management system, and secure payment integration to ensure a seamless experience for customers planning their trips.",

  technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "Laravel"],

  link: "https://laxparking.com/",
},
{
  title: "Kite Careera",
  image: project8,
  description:
    "Kite Careera is an educational platform offering a wide range of online courses and interactive learning resources. Users can enroll in courses, access structured study materials, and take quizzes to test their knowledge. The website includes user authentication, course management, quiz modules, and a responsive interface to provide an engaging and accessible learning experience.",

  technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "Laravel"],

  link: "https://kites.thesunflowerresort.org",
},

{
  title: "Movie Ticket Booking WebSite[Work in Progress]",
  image: project9,
  description:
    "Movie Ticket Booking Website is a modern full-stack web application that allows users to explore the latest movies, view detailed information, check show timings, and book tickets online. The platform integrates TMDB REST APIs to fetch real-time movie data including posters, ratings, and overviews. It features secure user authentication using Clerk, interactive seat selection, and a responsive UI built with React.js and Tailwind CSS. The backend is powered by Node.js and Express.js with MongoDB Atlas for efficient data management. This project is currently under development with upcoming features like payment gateway integration and booking history dashboard.",


 technologies: ["REACT.JS", "Tailwind CSS" ,"NODE.JS","EXPRESS.JS","MONGODB-ATLAS" , "REST APIs TMDB", "Clerk - User Authentication"],

  link: " ",
},

  {
    title: "Blog WebSite [Work in Progress]",
    image: project6,
    description:
      " The Blog Web Page is a full-stack application built with React.js, CSS, Node.js, Express.js, and MongoDB Atlas. It allows users to create, edit, and manage blog posts with a sleek and responsive design. The front-end ensures smooth navigation, while the back-end handles secure data management and API requests. This project highlights expertise in full-stack development and user-centric design.  ",
    technologies: ["REACT.JS", "CSS" ,"NODE.JS","EXPRESS.JS","MONGODB-ATLAS"],
    
    link : " ",
  },

  {
    title: "Netflix Login Page Clone",
    image: project1,
    description:
      "Netflix Login Page Clone is a front-end project that replicates the design of the Netflix login page using only HTML and CSS. This project captures Netflix’s sleek, minimalistic interface with responsive design elements and a dark theme. Featuring a centered login form with fields for email and password, along with a styled “Sign In” button, this clone provides an authentic Netflix-like experience. The project demonstrates skills in HTML structuring and CSS styling, including flexbox layouts, background images, and custom fonts for a polished UI.",
    technologies: ["HTML", "CSS", "JS"],
    link : "https://netflix-clone-h2pej6w1e-rahul-dagdis-projects.vercel.app/",
  },

  {
    title: "Weather Api WebApp",
    image: project2,
    description:
      "Weather API WebApp is a sleek, responsive application designed to provide real-time weather information for any location. Utilizing a weather API, it displays current temperature, humidity, wind speed, and conditions. With an intuitive interface, users can easily search and access weather details, making it a practical tool for daily weather tracking.",
    technologies: ["HTML", "CSS", "JS"],
    link : "https://weather-api-tau-two.vercel.app/",

  },
  
  {
    title: "Calculator",
    image: project3,
    description:
      "Simple Calculator WebApp is a basic calculator application built with HTML, CSS, and JavaScript. It includes essential arithmetic functions like addition, subtraction, multiplication, and division. The interface is designed with a clean, minimalist layout, featuring responsive buttons and a display screen to show calculations. JavaScript handles the logic behind button inputs and operations, while CSS is used to create an intuitive and user-friendly design. This project demonstrates proficiency in DOM manipulation, event handling, and creating interactive web applications with responsive styling.",
    technologies: ["HTML", "CSS", "JS"],
    link : "https://rahuldagdi.github.io/Calculator/",

  },
 
  {
    title: "Design Web Page",
    image: project4,
    description:
      "Basic Front-End Design Web Page is a clean, responsive single-page layout created with HTML, CSS, and Bootstrap. This web page features a structured, organized layout with a navigation bar, hero section, content sections, and footer. Bootstrap is used to ensure mobile-friendly responsiveness, enabling the layout to adjust seamlessly across different screen sizes. Custom CSS enhances the styling, creating a modern, professional appearance with well-defined typography, color schemes, and spacing. This project highlights foundational front-end skills in designing accessible and visually appealing web pages.",
    technologies: ["HTML", "CSS", "BOOTSTRAP"],
    link : "https://rahuldagdi.github.io/Website-Front-end-Design/",

  },
 
  

];

export const CONTACT = {
  address: "Jaipur , Rajasthan India (302001)",
  phoneNo: "+91 9358809096",
  email: "rahuldagdi5756@gmail.com",
};
