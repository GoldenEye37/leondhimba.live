import './App.css'
import HeroSection from "./sections/heroSection.jsx";
import EducationSection from "./sections/educationSection.jsx";
import SkillsSection from "./sections/skillsSection.jsx";
import ExperiencesSection from "./sections/experiencesSection.jsx";
import ProjectsSection from "./sections/projectsSection.jsx";

function App() {

  return (
      <section className={`custom-scrollbar`}>
          <HeroSection/>
          <EducationSection/>
          <SkillsSection/>
          <ExperiencesSection/>
          <ProjectsSection/>
      </section>
  )
}

export default App
