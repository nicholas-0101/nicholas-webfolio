import { Button } from "@/components/ui/button";

const portofolio = [
  {
    id: 1,
    title: "01. Landing Page for a Startup Product Launch",
    technologies: (
      <div className="flex gap-[5px] whitespace-nowrap overflow-x-auto scroll-smooth">
        <a href="https://en.wikipedia.org/wiki/Photoshop" target="_blank">
          <Button
            type="button"
            variant={"default"}
            size={"sm"}
            className="rounded-full hover:underline"
          >
            Photoshop
          </Button>
        </a>
        <a href="https://en.wikipedia.org/wiki/HTML" target="_blank">
          <Button
            type="button"
            variant={"default"}
            size={"sm"}
            className="rounded-full hover:underline"
          >
            HTML
          </Button>
        </a>
        <a href="https://en.wikipedia.org/wiki/CSS" target="_blank">
          <Button
            type="button"
            variant={"default"}
            size={"sm"}
            className="rounded-full hover:underline"
          >
            CSS
          </Button>
        </a>
        <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">
          <Button
            type="button"
            variant={"default"}
            size={"sm"}
            className="rounded-full hover:underline"
          >
            JavaScript
          </Button>
        </a>
        <a href="https://en.wikipedia.org/wiki/Next.js" target="_blank">
          <Button
            type="button"
            variant={"default"}
            size={"sm"}
            className="rounded-full hover:underline"
          >
            Next.js
          </Button>
        </a>
      </div>
    ),

    star: (
      <div>
        <ul>
          <li>
            <span className="font-bold text-black">Situation: </span>A startup
            launching a productivity tool needed a landing page to collect email
            signups, introduce the product, and highlight its key features. The
            site had to be visually appealing, responsive, and built fast.
          </li>
          <li>
            <span className="font-bold text-black">Task: </span>I was
            responsible for designing and developing the entire landing page —
            including layout, animations, mobile responsiveness, and integration
            with a basic mailing list system.
          </li>
          <li>
            <span className="font-bold text-black">Action: </span>
            Using Photoshop, I created hero graphics and icons that matched the
            brand identity. Then I built the site using Next.js, structuring
            pages with HTML, CSS, and JavaScript. I added scroll-based
            animations and a responsive layout to engage visitors. Finally, I
            connected the email form to a third-party form handler.
          </li>
          <li>
            <span className="font-bold text-black">Result: </span>
            The landing page generated over 1,200 email signups during the
            pre-launch phase. It received positive feedback for its smooth
            animations and polished look. The client noted a significant drop in
            bounce rate compared to their previous page.
          </li>
        </ul>
      </div>
    ),
    visit: "Visit:",
    demo: "https://www.XYZproducts.com/landing-page",
  },
  {
    id: 2,
    title: "02. Admin Panel for Small Business Inventory",
    technologies: (
      <div className="flex gap-[5px] whitespace-nowrap overflow-x-auto scroll-smooth">
        <a href="https://en.wikipedia.org/wiki/Figma" target="_blank">
          <Button
            type="button"
            variant={"default"}
            size={"sm"}
            className="rounded-full hover:underline"
          >
            Figma
          </Button>
        </a>
        <a href="https://en.wikipedia.org/wiki/TypeScript" target="_blank">
          <Button
            type="button"
            variant={"default"}
            size={"sm"}
            className="rounded-full hover:underline"
          >
            TypeScript
          </Button>
        </a>
        <a href="https://en.wikipedia.org/wiki/CSS" target="_blank">
          <Button
            type="button"
            variant={"default"}
            size={"sm"}
            className="rounded-full hover:underline"
          >
            CSS
          </Button>
        </a>
        <a href="https://en.wikipedia.org/wiki/Next.js" target="_blank">
          <Button
            type="button"
            variant={"default"}
            size={"sm"}
            className="rounded-full hover:underline"
          >
            Next.js
          </Button>
        </a>
      </div>
    ),

    star: (
      <div>
        <ul>
          <li>
            <span className="font-bold text-black">Situation: </span>A local
            business owner needed a lightweight, internal web app to manage
            their store's product inventory and stock levels without relying on
            spreadsheets or third-party tools.
          </li>
          <li>
            <span className="font-bold text-black">Task: </span>I was tasked
            with designing and building a simple yet functional admin interface
            where the client could view, add, and update product details with
            ease.
          </li>
          <li>
            <span className="font-bold text-black">Action: </span>I designed the
            layout and flow using Figma, focusing on simplicity and clarity.
            Then I built the interface using Next.js with TypeScript and custom
            CSS, creating dynamic components for product listings and forms.
            Though no database integration was required for the MVP, the UI was
            structured to support future API integration.
          </li>
          <li>
            <span className="font-bold text-black">Result: </span>
            The client reported significantly faster inventory updates and fewer
            manual errors. They appreciated the minimal interface and mentioned
            plans to expand the tool based on its current usability.
          </li>
        </ul>
      </div>
    ),
    visit: "Visit:",
    demo: "www.store-admin.dev ",
  },
  {
    id: 3,
    title: "03. Creative Portfolio Website for a Freelance Designer",
    technologies: (
      <div className="flex gap-[5px] whitespace-nowrap overflow-x-auto scroll-smooth">
        <a href="https://en.wikipedia.org/wiki/Figma" target="_blank">
          <Button
            type="button"
            variant={"default"}
            size={"sm"}
            className="rounded-full hover:underline"
          >
            Figma
          </Button>
        </a>
        <a href="https://en.wikipedia.org/wiki/HTML" target="_blank">
          <Button
            type="button"
            variant={"default"}
            size={"sm"}
            className="rounded-full hover:underline"
          >
            HTML
          </Button>
        </a>
        <a href="https://en.wikipedia.org/wiki/CSS" target="_blank">
          <Button
            type="button"
            variant={"default"}
            size={"sm"}
            className="rounded-full hover:underline"
          >
            CSS
          </Button>
        </a>
        <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">
          <Button
            type="button"
            variant={"default"}
            size={"sm"}
            className="rounded-full hover:underline"
          >
            JavaScript
          </Button>
        </a>
        <a href="https://en.wikipedia.org/wiki/Next.js" target="_blank">
          <Button
            type="button"
            variant={"default"}
            size={"sm"}
            className="rounded-full hover:underline"
          >
            Next.js
          </Button>
        </a>
      </div>
    ),

    star: (
      <div>
        <ul>
          <li>
            <span className="font-bold text-black">Situation: </span>A freelance
            graphic designer needed a visually compelling portfolio to showcase
            their work and attract new clients. The goal was to build a site
            that balanced modern design with fast performance and responsive
            layouts for all devices.
          </li>
          <li>
            <span className="font-bold text-black">Task: </span>I was
            responsible for designing the layout and developing the full website
            — from a custom landing page and project gallery to a contact form
            and smooth page transitions.
          </li>
          <li>
            <span className="font-bold text-black">Action: </span>I started by
            designing the UI/UX in Figma with input from the client. Then I
            implemented the front-end using HTML, CSS, and JavaScript in a
            Next.js environment. I added responsive grids, smooth scrolling, and
            animated transitions to bring the designer's work to life. I also
            ensured accessibility and optimized assets for fast load times.{" "}
          </li>
          <li>
            <span className="font-bold text-black">Result: </span>
            The site improved the designer's visibility, bringing in over 300
            portfolio views per week and doubling inquiry submissions within a
            month. The client praised the site's clean look and ease of use
            across devices.{" "}
          </li>
        </ul>
      </div>
    ),
    visit: "Visit:",
    demo: "https://www.aiueo.com/portofolio",
  },
];

function PortofolioSection() {
  const printPortofolio = () => {
    return portofolio.map((val: any) => (
      <section key={val.id} className="p-[5px] w-full">
        <h2 className="text-[24px] font-sans">{val.title}</h2>
        <h3 className="text-[18px] text-[#5e5c5c] py-3">{val.star}</h3>
        <h2 className="text-[12px] text-[#e4e4e0] font-sans">
          {val.technologies}
        </h2>
        {/* <div className="flex gap-[10px]">
          <h2 className="text-[14px] py-3">{val.visit}</h2>
          <p className="text-[14px] py-3 cursor-pointer hover:underline">
            <a href="https://dummy-app-apfv.vercel.app/" target="_blank">
              {val.demo}
            </a>
          </p>
        </div> */}
        <div className="flex gap-[10px]">
          <h2 className="text-[14px] py-3">{val.visit}</h2>
          <a
            href="https://dummy-app-apfv.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] py-3 cursor-pointer hover:underline truncate whitespace-nowrap overflow-hidden max-w-screen"
          >
            {val.demo}
          </a>
        </div>
      </section>
    ));
  };

  return (
    <div id="portofolio" className="flex flex-col gap-0">
      <h1 className="text-[42px] font-sans text-center lg:text-left pt-10">
        MY PORTOFOLIO
      </h1>

      <div className="flex flex-col gap-5">{printPortofolio()}</div>
    </div>
  );
}

export default PortofolioSection;
