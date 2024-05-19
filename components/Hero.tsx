import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <Spotlight
        className="h-screen -top-40 -left-10 md:-left-32 md:-top-20"
        fill="grey"
      />
      <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      <div className="h-[50rem] w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center absolute justify-center top-0 left-0 ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="relative z-20 py-8 text-4xl font-bold text-transparent sm:text-7xl bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500"></p>
      </div>

      <div className="relative z-10 flex justify-center my-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="text-xs tracking-widest text-center text-blue-100 uppercase max-w-80">
            Dynamic Web Magic with Next.js
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5l lg:text-6xl"
            words="Profile Transforming Concepts into Seamless User Experiences"
          />

          <p className="mb-4 text-sm text-center md:tracking-wider md:text-lg lg:text-2xl">
            Hi, I&apos;m name, a Next.js Developer based in Japan.
          </p>
          <a
            href="#about"
            className="flex justify-center sm:flex sm:justify-center "
          >
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <br />
        </div>
      </div>
    </div>
  );
};
export default Hero;
