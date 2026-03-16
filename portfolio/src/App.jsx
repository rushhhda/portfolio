import "./App.css";
import Navbar from "./components/navbar/navbar.jsx";
import Header from "./components/header/header.jsx";
import About from "./components/about/about.jsx";
import Projects from "./components/projects/projects.jsx";
import Section from "./components/projects/section.jsx";
import Skills from "./components/skills/skills.jsx";
import Contact from "./components/contact/contact.jsx";
function App() {
  const projects = [
    {
      img: "https://play-lh.googleusercontent.com/5ENdgpFsRhQt9y_ySp9UK_p-CL0TmhSwW5pKmmzzIW0OLFR3EvAtzAGm6c_IkkfgVg",
      pName: "TIC-TAC-TOE",
      desc: "Multiplayer game- Built using HTML CSS and JavaScript.",
      gitHub: "https://github.com/rushhhda/tic-tac-toe",
      live: "https://tictacctoegame.netlify.app",
    },
    {
      img: "https://img.freepik.com/premium-photo/cyberpunk-cafe-with-robotic-waiters-holographic-menus-steamp-interior-room-neon-light-vr-concept_1020495-198437.jpg?w=2000",
      pName: "CAFE WEBSITE",
      desc: "A responsive cafe's website- Built using HTML and CSS.",
      gitHub: "https://github.com/rushhhda/cafe-website",
      live: " https://brewandbrown.netlify.app ",
    },

    {
      img: "https://cdn.vectorstock.com/i/1000v/02/48/neon-video-games-vector-23460248.avif",
      pName: "PIG GAME",
      desc: "Multiplayer game- Built using HTML CSS and JavaScript.",
      gitHub: "https://github.com/rushhhda/Pig-game",
      live: "https://piggggamee.netlify.app/",
    },
    {
      img: "https://img.freepik.com/premium-vector/photo-gallery-illustration-museum-visitor-view-exhibition-modern-abstract-paintings-picture_2175-23903.jpg?semt=ais_hybrid&w=740&q=80",
      pName: "PHOTO GALLERY",
      desc: "React and tailwind based project-Photo gallery with search and favourites feature.",
      gitHub: "https://github.com/rushhhda/photoGallery",
      live: "https://photogallryy.netlify.app/",
    },
  ];
  return (
    <div className="parent">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}

export default App;
