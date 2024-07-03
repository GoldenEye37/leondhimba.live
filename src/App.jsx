import './App.css'
import HeroSection from "./sections/heroSection.jsx";
import EducationSection from "./sections/educationSection.jsx";
import SkillsSection from "./sections/skillsSection.jsx";
import ExperiencesSection from "./sections/experiencesSection.jsx";

function App() {

  return (
      <section className={`custom-scrollbar`}>
          <HeroSection/>
          <EducationSection/>
          <SkillsSection/>
          <ExperiencesSection/>
      </section>
  )
}

export default App
