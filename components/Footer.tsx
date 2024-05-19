import { socialMedia } from "@/data";
import { profile } from "console";
import { FaLocationArrow } from "react-icons/fa";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full mb=[100px] pb-10 lg:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] mb=[100px]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level
        </h1>
        <br />
        <p className="text-white-200 md:mt-10">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goal.
        </p>
        <br />
        <a href="mailto:mail@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex flex-col mt-16 md:flex-row justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024
        </p>
        <br />
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img
                src={profile.img}
                alt={profile.id.toString()}
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
