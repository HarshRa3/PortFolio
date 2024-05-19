import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import HtmlIcon from "../assets/SkillIcon/html-1.svg";
import JsIcon from "../assets/SkillIcon/logo-javascript.svg";
import CSSIcon from "../assets/SkillIcon/css-3.svg";
import TailwindIcon from "../assets/SkillIcon/tailwind-css-2.svg";
import BootStrapIcon from "../assets/SkillIcon/bootstrap-4.svg";
import ReactIcon from "../assets/SkillIcon/react-2.svg";
import NextIcon from "../assets/SkillIcon/next-js.svg";
import materialIcon from "../assets/SkillIcon/material-ui-1.svg";
import GitIcon from "../assets/SkillIcon/github-icon.svg";
import AlignX from "../assets/projectImg/AlignXImg.png";
import Polling from "../assets/projectImg/PollImg.png";
import todoImg from '../assets/projectImg/todo.png'
import AdminDashboardImg from '../assets/projectImg/AdminDashboard.png'
export const HeaderData = [
  { name: "Home", path: "/", icon: HomeIcon },
  { name: "About Us", path: "about_us", icon: InfoIcon },
  { name: "Portfolio", path: "projects" },
  { name: "Contact Us", path: "contact_us", icon: ContactPageIcon },
];
export const SkillStaticData = [
  {
    name: "HTML",
    icon: HtmlIcon,
  },
  {
    name: "CSS",
    icon: CSSIcon,
  },
  {
    name: "JavaScript",
    icon: JsIcon,
  },
  {
    name: "Bootstrap",
    icon: BootStrapIcon,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
  },
  {
    name: "Material UI",
    icon: materialIcon,
  },
  {
    name: "React JS",
    icon: ReactIcon,
  },
  {
    name: "Next JS",
    icon: NextIcon,
  },
  {
    name: "GITHUB",
    icon: GitIcon,
  },
];
export const ProjectsData = [
  {
    img: AlignX,
    title: "AlignX",
    desc: "AlignX Is A Client Project. I Have Handle All Frontend Functionality Using React JS.",
    url: "https://alignxupdated.netlify.app/",
  },
  {
    img: AdminDashboardImg,
    title: "Admin Dashboard",
    desc: "It is a Admin Dashboard Web Application created by Next JS and MUI",
    url: "https://github.com/HarshRa3/userAuthentication-typescript/tree/branch1",
  },
  {
    img: Polling,
    title: "Poll Management",
    desc: "It is a Poll management app created by react JS. (CRUD Using API)",
    url: "https://pollmangement.netlify.app/",
  },
  {
    img: todoImg,
    title: "Todo App",
    desc: "It is a CRUD Web Application created by React JS and MUI",
    url: "https://todoappf.netlify.app/",
  },
  
];
export const experienceData=[
  {
    company:'DUCAT',
    role:'Web Designing',
    experienceTime:'(Sept-2022 - feb-2023)',
    desc:"I have successfully completed 6 month Web Designing Certificate program at DUCAT Noida Sector 16 Branch, earning a Certificate ID: 31122022884209370 and Student ID: 26833. This certification signifies my proficiency in web design principles, front-end development, and user experience (UX) design. Throughout the program, I acquired practical skills in HTML, CSS, JavaScript, JQuery, Bootstrap, Adove Photoshop, Dreamviewer and responsive web design techniques. I also gained expertise in creating visually appealing and user-friendly websites. This certificate demonstrates my ability to craft engaging web interfaces, enhance user experiences, and effectively transform design concepts into functional websites. I look forward to applying these skills in contributing to dynamic web projects and delivering seamless online experiences for users."
  },
  {
    company:'Excellence Technology Pvt. Ltd.',
    role:'JR. React JS Developer',
    experienceTime:'(Nov-2023 - May-2024)',
    desc:'Excellence Technology Pvt. Ltd. is a versatile technology company that delves into various technologies, including Python, React.js, Node.js, Vue.js, Next.js, Ruby on Rails (ROR), Angular, and more. During my tenure at Excellence Technology, I accumulated 6 months of experience primarily focused on React.js, Next.js, Tailwind CSS, Material-UI (MUI), and Bootstrap. As a frontend developer in this company, I contributed to the design and development of client projects, ensuring the delivery of high-quality and efficient solutions tailored to their requirements. My responsibilities also extended to collaborating with design teams to create visually appealing user interfaces that enhance user experience and engagement. Additionally, I leveraged Chart.js to visualize data effectively, further enriching the design and functionality of our web applications.'
  },


]