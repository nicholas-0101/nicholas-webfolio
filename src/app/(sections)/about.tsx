function AboutSection() {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center">
            <div className="mx-auto flex flex-col lg:flex-row gap-12">

                <div className="flex-1 text-center lg:text-left">
                    <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-tight pt-11">
                        DESIGNING IMPACTFUL<br />
                        WEBSITES & MEMORABLE<br />
                        DIGITAL JOURNEYS
                    </h1>
                </div>

                <div className="flex-1 flex flex-col gap-6 text-left">
                    <p className="text-base sm:text-lg md:text-xl text-[#3b3b3b]">
                        Hey, I'm Nicholas, a web developer with a passion for blending clean code with captivating design. My journey into web development began with a fascination for how things work on the web, which quickly turned into a full-time pursuit. With hands-on experience across personal, freelance, and collaborative projects, I've developed a strong foundation in both front-end and back-end development, but I more focused on front-end development.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-[#5e5c5c] font-serif">
                        I specialize in building modern, responsive websites using technologies like JavaScript, React, and Node.js — always with an eye for performance and user experience. I enjoy turning complex problems into elegant, functional solutions that not only work seamlessly but feel intuitive for the end user.
                        At the core of my work are values that guide every project I take on: timeliness, attention to detail, and clear communication with clients. I believe that good code is only part of the story — great collaboration and reliability make the process smooth and successful. Whether it's crafting something from scratch or improving what's already there, let's create something remarkable — together.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;