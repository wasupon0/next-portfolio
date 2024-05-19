import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./InfiniteMovingCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from satisfied clients{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap max-lg:mt-10 justify-center p-4 gap-16 mt-10 antialiased items-center relative">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <img src={img} alt={name} className="md:w-10 w-5" />
              <img src={nameImg} alt={name} className="md:w-24 w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Clients;
