import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function HomeSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-1">
      <div className="flex justify-center items-center -z-10">
        <Image
          src="/nicholas-avatar-2.webp"
          alt="profile"
          width={1000}
          height={1000}
          sizes="(max-width: 768px) 100vw, 1000px"
          priority
          className="object-cover rounded-b-full"
          fetchPriority="high"
        />
      </div>

      <div className="lg:absolute relative top-[100px] w-full flex flex-col lg:flex-row justify-between items-center px-4 gap-6">
        <div className="flex flex-col leading-none text-center lg:text-left h-screen">
          <h1 className="text-[#3b3b3b] text-[36px]">Hey! I'm Nicholas,</h1>
          <div className="h-[20px]" />
          <h1 className="text-black text-[64px] font-sans">A FRONTEND</h1>
          <h1 className="text-[#5e5c5c] text-[100px] italic">web</h1>
          <h1 className="text-black text-[64px] font-sans">DEVELOPER</h1>
          <div className="h-[20px]" />
          <p className="text-[#3b3b3b] text-[16px] max-w-xs mx-auto lg:mx-0">
            Turn your ideas into a stunning, interactive website with powerful
            visuals that captivate and engage your audience.
          </p>
          <div className="h-[50px]"/>
          <a href="#contact" className="w-29">
            <Button className="mt-4 inline-flex items-center gap-2 bg-black text-[#e4e4e0] text-lg px-6 py-3 rounded-full hover:bg-gray-800 transition font-sans cursor-pointer">
              Contact Me <ArrowRightIcon />
            </Button>
          </a>
        </div>

        <div className="text-center lg:text-right h-screen">
          <div>
            <h1 className="text-black text-[42px] font-sans">5+</h1>
            <p className="text-[#5e5c5c] text-[18px]">Years Experience</p>
          </div>
          <div className="h-[20px]" />
          <div>
            <h1 className="text-black text-[42px] font-sans">50+</h1>
            <p className="text-[#5e5c5c] text-[18px]">Projects Delivered</p>
          </div>
          <div className="h-[20px]" />
          <div>
            <h1 className="text-black text-[42px] font-sans">99%</h1>
            <p className="text-[#5e5c5c] text-[18px]">Client Satisfaction</p>
          </div>
          <div className="h-[20px]" />
          <div>
            <h1 className="text-black text-[42px] font-sans">10+</h1>
            <p className="text-[#5e5c5c] text-[18px]">Clients Worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
