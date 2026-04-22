import HomeSection from "./(sections)/home";
import AboutSection from "./(sections)/about";
import SkillsSection from "./(sections)/skills";
import PortofolioSection from "./(sections)/projects";
import ExperienceSection from "./(sections)/experience";
import ContactSection from "./(sections)/contact";
import Navbar from "./coreComponents/navbar";
import Footer from "./coreComponents/footer";

export default function Section() {
  return (
    <div className="relative bg-[#0a0a0a]">
      <Navbar />

      <main>
        <section id="home">
          <HomeSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="projects">
          <PortofolioSection />
        </section>

        <section id="experiences">
          <ExperienceSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
