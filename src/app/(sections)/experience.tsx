const experience = [
    {
        id: 1,
        jobTitle: "Full-Stack Web Developer — Freelance",
        year: "2022 - Present",
        jobDescription:
            <ul>
                <li>• Designed and developed responsive web applications using React, and Node.js.</li>
                <li>• Worked with clients to transform business needs into functional, scalable digital solutions.</li>
                <li>• Built RESTful APIs and integrated third-party services (e.g., payment gateways, CMS, analytics).</li>
                <li>• Handled full project lifecycles from wireframing to deployment and post-launch optimization.</li>
            </ul>
    },
    {
        id: 2,
        jobTitle: "Front-End Developer — PixelForge Studio",
        year: "2021 - 2022",
        jobDescription:
            <ul>
                <li>• Developed modern UI components using React, TypeScript, and Tailwind CSS.</li>
                <li>• Collaborated with UI/UX designers to turn prototypes into clean, accessible interfaces.</li>
                <li>• Optimized website performance, SEO structure, and mobile responsiveness.</li>
                <li>• Maintained version control and code reviews using Git and GitHub in Agile teams.</li>
            </ul>
    },
    {
        id: 3,
        jobTitle: "Web Development Intern — NovaTech Solutions",
        year: "2020 - 2021",
        jobDescription:
            <ul>
                <li>• Assisted in building internal tools with HTML, CSS, and JavaScript.</li>
                <li>• Gained experience in backend development using Node.js and Express.</li>
                <li>• Participated in daily standups, code reviews, and sprint planning.</li>
                <li>• Learned best practices in writing maintainable code and debugging.</li>
            </ul>
    },

]

function ExperienceSection() {
    const printExperience = () => {
        return experience.map((val: any) => (
            <div key={val.id} className="p-[5px]">
                <h2 className="text-[24px] font-sans">{val.jobTitle}</h2>
                <h2 className="text-[18px] font-sans">{val.year}</h2>
                <h3 className="text-[18px] text-[#5e5c5c] py-3">{val.jobDescription}</h3>
            </div>
        ));
    };

    return (
        <section id="experience" className="min-h-screen flex flex-col justify-center">
            <div className="flex flex-col-reverse lg:flex-row gap-8 w-full">

                <div className="flex flex-col flex-2/3 gap-[10px]">
                    {printExperience()}
                </div>

                <div className="flex flex-col flex-1/3 justify-center gap-[10px] text-center lg:text-right pt-10">
                    <h1 className="text-[42px] font-sans">MY EXPERIENCE</h1>
                    <h1 className="text-[18px]">
                        <ul>
                            <li>“Information is not knowledge. The only source of knowledge is experience. You need experience to gain wisdom.”</li>
                            <li className="text-[14px] text-[#5e5c5c]">— Albert Einstein</li>
                        </ul>
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;