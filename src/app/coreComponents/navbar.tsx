import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#e4e4e0] z-[100] px-4">
      <div className="max-w-screen mx-auto">
        <div
          id="nav-menu"
          className="
            flex md:gap-[50px] gap-[35px] py-1 md:py-2 font-sans text-[20px]
            whitespace-nowrap overflow-x-auto
            lg:justify-center
            sm:justify-between
            scroll-smooth"
        >
          <Link href="#home" className="hover:underline">
            HOME
          </Link>
          <Link href="#about" className="hover:underline">
            MORE ABOUT ME
          </Link>
          <Link href="#skills" className="hover:underline">
            MY SKILLS
          </Link>
          <Link href="#testimonial" className="hover:underline">
            TESTIMONIAL
          </Link>
          <Link href="#experience" className="hover:underline">
            MY EXPERIENCE
          </Link>
          <Link href="#portofolio" className="hover:underline">
            MY PORTOFOLIO
          </Link>
          <Link href="#contact" className="hover:underline">
            CONTACT ME
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// import Link from "next/link";
// import { useState, useEffect } from "react";

// function Navbar() {
//   const [activeSection, setActiveSection] = useState("");

//   useEffect(() => {
//     const handleScroll = () => {
//       // Get sections as HTMLElements
//       const sections = document.querySelectorAll(
//         "section[id]"
//       ) as NodeListOf<HTMLElement>;
//       let current = "";

//       sections.forEach((section) => {
//         // Now we can safely access HTMLElement properties
//         const sectionTop = section.offsetTop;

//         const sectionHeight = section.clientHeight;
//         if (
//           window.scrollY >= sectionTop - 100 &&
//           window.scrollY < sectionTop + sectionHeight - 100
//         ) {
//           current = section.id;
//         }
//       });

//       setActiveSection(current);
//     };

//     // Initial call and event listener
//     handleScroll();
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-[#e4e4e0] z-[100] px-4">
//       <div className="max-w-screen mx-auto">
//         <div
//           id="nav-menu"
//           className="
//             flex md:gap-[50px] gap-[35px] py-1 md:py-2 font-sans text-[20px]
//             whitespace-nowrap overflow-x-auto
//             lg:justify-center
//             sm:justify-between
//             scroll-smooth"
//         >
//           <Link
//             href="#home"
//             className={`hover:underline ${
//               activeSection === "home" ? "border-b-2 border-black" : ""
//             }`}
//           >
//             HOME
//           </Link>
//           <Link
//             href="#about"
//             className={`hover:underline ${
//               activeSection === "about" ? "border-b-2 border-black" : ""
//             }`}
//           >
//             MORE ABOUT ME
//           </Link>
//           <Link
//             href="#skills"
//             className={`hover:underline ${
//               activeSection === "skills" ? "border-b-2 border-black" : ""
//             }`}
//           >
//             MY SKILLS
//           </Link>
//           <Link
//             href="#testimonial"
//             className={`hover:underline ${
//               activeSection === "testimonial" ? "border-b-2 border-black" : ""
//             }`}
//           >
//             TESTIMONIAL
//           </Link>
//           <Link
//             href="#experience"
//             className={`hover:underline ${
//               activeSection === "experience" ? "border-b-2 border-black" : ""
//             }`}
//           >
//             MY EXPERIENCE
//           </Link>
//           <Link
//             href="#portofolio"
//             className={`hover:underline ${
//               activeSection === "portofolio" ? "border-b-2 border-black" : ""
//             }`}
//           >
//             MY PORTOFOLIO
//           </Link>
//           <Link
//             href="#contact"
//             className={`hover:underline ${
//               activeSection === "contact" ? "border-b-2 border-black" : ""
//             }`}
//           >
//             CONTACT ME
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import { useActiveSection } from "@/hooks/useActiveSession";

// function Navbar() {
//   const sectionIds = [
//     "home",
//     "about",
//     "skills",
//     "testimonial",
//     "experience",
//     "portofolio",
//     "contact",
//   ];

//   const active = useActiveSection(sectionIds);
//   console.log("Active section:", active);

//   const navItems = [
//     { id: "home", label: "HOME" },
//     { id: "about", label: "MORE ABOUT ME" },
//     { id: "skills", label: "MY SKILLS" },
//     { id: "testimonial", label: "TESTIMONIAL" },
//     { id: "experience", label: "MY EXPERIENCE" },
//     { id: "portofolio", label: "MY PORTOFOLIO" },
//     { id: "contact", label: "CONTACT ME" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-[#e4e4e0] z-[100] px-4">
//       <div className="max-w-screen mx-auto">
//         <div
//           id="nav-menu"
//           className="
//             flex md:gap-[50px] gap-[35px] py-1 md:py-2 font-sans text-[20px]
//             whitespace-nowrap overflow-x-auto
//             lg:justify-center
//             sm:justify-between
//             scroll-smooth"
//         >
//           {navItems.map((item) => (
//             <Link
//               key={item.id}
//               href={`#${item.id}`}
//               className={`
//     hover:underline transition
//     ${active === item.id ? "border-b-2 border-black font-bold" : ""}
//   `}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
