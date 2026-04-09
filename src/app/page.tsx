import SkillsSection from "./(sections)/skills";
import AboutSection from "./(sections)/about";
import ExperienceSection from "./(sections)/experience";
import PortofolioSection from "./(sections)/portofolio";
import TestimonialSection from "./(sections)/testimonial";
import ContactSection from "./(sections)/contact";
import HomeSection from "./(sections)/home";
import Navbar from "./coreComponents/navbar";

export default function Section() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div
        className={
          "flex-1 h-screen overflow-y-auto overflow-hidden scroll-smooth snap-y snap-mandatory snap-always pt-4 space-y-0 bg-[#e4e4e0] font-serif"
        }
        style={{ scrollPaddingTop: "48px" }}
      >
        <div className="w-screen m-auto">
          <section
            className="snap-start min-h-screen p-[40px] xl:px-[40px] xl:py-[20px]"
            id="home"
          >
            <HomeSection />
          </section>
          <section
            className="snap-start min-h-screen px-[40px]"
            id="about"
          >
            <AboutSection />
          </section>
          <section
            className="snap-start min-h-screen p-[40px] xl:px-[40px] xl:py-[20px]"
            id="skills"
          >
            <SkillsSection />
          </section>
          <section
            className="snap-start min-h-screen p-[40px] xl:px-[40px] xl:py-[20px]"
            id="testimonial"
          >
            <TestimonialSection />
          </section>
          <section
            className="snap-start min-h-screen p-[40px] xl:px-[40px] xl:py-[20px]"
            id="experience"
          >
            <ExperienceSection />
          </section>
          <section
            className="snap-start min-h-screen p-[40px] pb-[80px] xl:px-[40px] xl:pt-[40px] xl:pb-[100px]"
            id="portofolio"
          >
            <PortofolioSection />
          </section>
          <section
            className="snap-start min-h-screen p-[40px] pt-[60px] xl:px-[40px] xl:pt-[80px] xl:pb-0 bg-black"
            id="contact"
          >
            <ContactSection />
          </section>
        </div>
      </div>
    </div>
  );
}
