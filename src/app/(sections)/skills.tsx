const skill = [
    {
        id: 1,
        skillName: "JAVASCRIPT",
        skillDesc: "is a programming language and core technology of the World Wide Web, alongside HTML and CSS.",
    },
    {
        id: 2,
        skillName: "TYPESCRIPT",
        skillDesc: "is a high-level programming language that adds static typing with optional type annotations to JavaScript.",
    },
    {
        id: 3,
        skillName: "CSS",
        skillDesc: "is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML.",
    },
    {
        id: 4,
        skillName: "HTML",
        skillDesc: "is the standard markup language for documents designed to be displayed in a web browser. ",
    },
    {
        id: 5,
        skillName: "NODE.JS",
        skillDesc: "is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more.",
    },
    {
        id: 6,
        skillName: "REACT",
        skillDesc: "is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more 'seamless'.",
    },
]

function SkillsSection() {
    const printSkill = () => {
        return skill.map((val: any) => (
            <div
                key={val.id}
                className="p-[5px] flex flex-col gap-[5px] flex-1 min-w-[250px]"
            >
                <h2 className="text-[24px] font-sans">{val.skillName}</h2>
                <p className="text-[18px] text-[#5e5c5c] py-3">{val.skillDesc}</p>
            </div>
        ));
    };

    return (
        <section id="skills" className="min-h-screen flex flex-col justify-center">
            <div className="flex flex-col lg:flex-row gap-8 w-full">

                <h1 className="text-[42px] font-sans text-center lg:text-left lg:w-1/4 pt-10">
                    MY SKILLS
                </h1>

                <div className="flex flex-col sm:flex-row flex-wrap gap-[10px] w-full lg:w-3/4">
                    {printSkill()}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;