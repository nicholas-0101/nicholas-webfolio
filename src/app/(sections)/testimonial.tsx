const testimony = [
  {
    id: 1,
    name: "Emma R.",
    jobTitle: "Founder, Bloom Studio",
    img: "avatar",
    testimony: "Working with Nicholas was a game-changer. The website not only looks beautiful, but also performs flawlessly. Communication was smooth, deadlines were met, and the results exceeded expectations."
  },
  {
    id: 2,
    name: "David K.",
    jobTitle: "Product Manager, TechNova",
    img: "avatar",
    testimony: "Professional, detail-oriented, and truly understands user experience. Nicholas brought our ideas to life with clean code and sleek design. Highly recommended for any web project."
  },
  {
    id: 3,
    name: "Alisa M.",
    jobTitle: "Creative Director, Luna Agency",
    img: "avatar",
    testimony: "What impressed me most was the blend of design sense and technical skill. Nicholas turned our brief into a visually stunning, responsive site that our users love."
  },
  {
    id: 4,
    name: "Jason T.",
    jobTitle: "Marketing Lead, BrightPath Co.",
    img: "avatar",
    testimony: "Our site's engagement and load times improved dramatically. Nicholas was proactive, easy to work with, and delivered high-quality code and clean design — ahead of schedule!"
  },
  {
    id: 5,
    name: "Clara W.",
    jobTitle: "UX Designer, IndieSoft",
    img: "avatar",
    testimony: "Collaborating with Nicholas was seamless. They translated our wireframes into pixel-perfect, accessible components with attention to every detail. A developer who truly gets design."
  },
  {
    id: 6,
    name: "Michael B.",
    jobTitle: "Freelance Consultant",
    img: "avatar",
    testimony: "One of the most reliable developers I've worked with. From clear communication to thoughtful suggestions, Nicholas made the process stress-free and the outcome truly professional."
  },
  {
    id: 7,
    name: "Sophie L.",
    jobTitle: "Startup Founder, Taskly",
    img: "avatar",
    testimony: "Nicholas quickly understood our product and translated it into a stunning, high-performing site. His attention to detail and reliability truly stood out."
  }
]

function TestimonialSection() {
  const printTestimony = () => {
    return testimony.map((val: any) => (
      <div key={val.id} className="p-[5px] flex-1 min-w-[250px]">
        <h2 className="text-[24px] font-sans">{val.name}</h2>
        <h2 className="text-[18px] font-sans">{val.jobTitle}</h2>
        <p className="text-[18px] text-[#5e5c5c] py-3">{val.testimony}</p>
      </div>
    ));
  };

  return (
    <section id="testimonial" className="min-h-screen flex flex-col justify-center">
      <h1 className="text-[42px] font-sans text-center lg:text-left mb-8 pt-10">TRUSTED BY</h1>

      <div className="flex flex-col sm:flex-row flex-wrap gap-[10px] w-full">
        {printTestimony()}
      </div>
    </section>
  );
}

export default TestimonialSection;