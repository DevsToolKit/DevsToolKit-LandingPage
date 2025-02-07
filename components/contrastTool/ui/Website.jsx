"use client";
import ContrastHeroImage from "@/public/assets/ContrastHeroImage";
import React from "react";

function Website({ colors }) {
  return (
    <div
      className="w-full bg-white"
      style={{
        backgroundColor: colors.background,
      }}
    >
      <Hero colors={colors} />
      <WhyContrast colors={colors} />
      <HowItWorks colors={colors} />
      <FAQ colors={colors} />
      <Testimonials colors={colors} />
      <Footer colors={colors} />
    </div>
  );
}

const Hero = ({ colors }) => {
  return (
    <section className="w-full h-auto md:h-[80vh] flex flex-col md:flex-row justify-between items-center max-w-[1000px] mx-auto px-4 md:px-0 py-8 md:py-0">
      <div className="w-full flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <div className="max-w-[440px] p-[20px]">
          <h1
            className="text-[2.5rem] md:text-[3rem] leading-[1.2]"
            style={{
              color: colors.text,
            }}
          >
            Visualize Your Colors & Fonts <br /> On A Real Website
          </h1>
          <p
            className="text-[14px] md:text-[16px] mt-4"
            style={{
              color: colors.text,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            et voluptatibus cum dolor, ad ratione quam repellat vero nihil
            voluptate quibusdam aperiam.
          </p>
          <button
            className="px-6 py-3 bg-blue-500 mt-4 rounded-full text-white text-[14px] hover:bg-blue-600 transition duration-200"
            style={{
              backgroundColor: colors.primary,
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="w-full mt-8 md:mt-0 flex justify-center items-center">
        <div className="w-full md:w-[500px] h-[300px] md:h-[500px] flex justify-center items-center">
          <ContrastHeroImage colors={colors} />
        </div>
      </div>
    </section>
  );
};

const WhyContrast = ({ colors }) => {
  return (
    <section
      className="w-full min-h-[70vh] p-[20px] md:p-[40px]"
      style={{
        color: colors.text,
        backgroundColor: colors.secondary,
      }}
    >
      <h4 className="text-[2.5rem] text-center py-10">Why Realtime Colors?</h4>
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] ">
        {/* Card 1 */}
        <div className="w-full h-[400px] bg-white p-6 relative overflow-hidden rounded-md hover:scale-105 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-full">
            <video
              src="/assets/contrast/hourglass.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />
          <div className="relative z-10 text-white h-full flex flex-col justify-end">
            <h1 className="text-xl md:text-3xl font-bold mb-4">Saves Time</h1>
            <p className="text-[12px] md:text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              consectetur maxime aspernatur dolorum odit dolorem labore?
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full h-[400px] bg-white p-6 relative overflow-hidden rounded-md hover:scale-105 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-full">
            <video
              src="/assets/contrast/realistic.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />
          <div className="relative z-10 text-white h-full flex flex-col justify-end">
            <h1 className="text-xl md:text-3xl font-bold mb-4">Realistic</h1>
            <p className="text-[12px] md:text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              consectetur maxime aspernatur dolorum odit dolorem labore?
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full h-[400px] bg-white p-6 relative overflow-hidden rounded-md hover:scale-105 transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="/assets/contrast/simple.png"
              alt=""
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />
          <div className="relative z-10 text-white h-full flex flex-col justify-end">
            <h1 className="text-xl md:text-3xl font-bold mb-4">It's simple</h1>
            <p className="text-[12px] md:text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              consectetur maxime aspernatur dolorum odit dolorem labore?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = ({ colors }) => {
  return (
    <section
      className="w-full min-h-[70vh] p-[20px] max-w-[1000px] mx-auto md:p-[40px] flex flex-col justify-center items-center"
      style={{
        color: colors.text,
        backgroundColor: colors.background,
      }}
    >
      <h3 className="text-center text-[2.5rem]">How it works</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-[20px] mt-[50px]">
        {/* --card-- */}
        <div
          className="w-full h-[200px] p-[20px] rounded-lg"
          style={{
            backgroundColor: colors.accent,
          }}
        >
          <div className="px-[20px] py-[10px] w-fit h-fit flex justify-center items-center rounded-md bg-black text-white">
            1
          </div>
          <p className="text-[14px] mt-[20px]">
            Start with two neutral colors for the text and the background.
          </p>
        </div>
        {/* --card-- */}
        <div
          className="w-full h-[200px] p-[20px] rounded-lg"
          style={{
            backgroundColor: colors.accent,
          }}
        >
          <div className="px-[20px] py-[10px] w-fit h-fit flex justify-center items-center rounded-md bg-black text-white">
            2
          </div>
          <p className="text-[14px] mt-[20px]">
            Choose your primary and secondary colors. Primary is for main CTAs
            and sections, and Secondary is for less important buttons and info
            cards.
          </p>
        </div>
        {/* --card-- */}
        <div
          className="w-full h-[200px] p-[20px] rounded-lg"
          style={{
            backgroundColor: colors.accent,
          }}
        >
          <div className="px-[20px] py-[10px] w-fit h-fit flex justify-center items-center rounded-md bg-black text-white">
            3
          </div>
          <p className="text-[14px] mt-[20px]">
            Happy with the results? Press on “Export” and choose among different
            options to export in various formats, like .zip, .png, CSS, SCSS, QR
            Code, and more.
          </p>
        </div>
      </div>
    </section>
  );
};

const FAQ = ({ colors }) => {
  return (
    <section
      className="w-full min-h-[70vh] flex justify-center items-center"
      style={{
        color: colors.text,
        backgroundColor: colors.secondary,
      }}
    >
      <div className="w-full max-w-[1000px]">
        <h3 className="text-center text-[2.5rem] py-10">
          Frequently Asked Questions
        </h3>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[50px]">
          {/* FAQ 1 */}
          <div className="w-full p-[20px] rounded-lg bg-white shadow-md">
            <h4 className="text-xl font-semibold">What is Realtime Colors?</h4>
            <p className="text-[14px] mt-[10px]">
              Realtime Colors is a tool that helps designers visualize their
              color schemes and fonts on a real website, instantly giving you a
              preview of how everything looks together.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="w-full p-[20px] rounded-lg bg-white shadow-md">
            <h4 className="text-xl font-semibold">
              How do I export my designs?
            </h4>
            <p className="text-[14px] mt-[10px]">
              Once you're happy with your design, click the "Export" button to
              choose from different formats like .zip, .png, CSS, SCSS, QR Code,
              and more.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="w-full p-[20px] rounded-lg bg-white shadow-md">
            <h4 className="text-xl font-semibold">
              Can I use this tool for free?
            </h4>
            <p className="text-[14px] mt-[10px]">
              Yes! We offer a free version with limited features, and you can
              upgrade to premium for access to more advanced tools.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="w-full p-[20px] rounded-lg bg-white shadow-md">
            <h4 className="text-xl font-semibold">
              What browsers are supported?
            </h4>
            <p className="text-[14px] mt-[10px]">
              Realtime Colors works on modern browsers, including Chrome,
              Firefox, Safari, and Edge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="w-full min-h-[70vh] p-[20px] max-w-[1000px] mx-auto md:p-[40px] flex flex-col justify-center items-center">
      <h3 className="text-center text-[2.5rem]">What Our Users Say</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-[20px] mt-[50px]">
        {/* -- Testimonial 1 -- */}
        <div className="w-full h-[300px] p-[20px] rounded-lg bg-white shadow-md flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="User 1"
            className="w-[80px] h-[80px] rounded-full mb-[20px]"
          />
          <p className="text-[14px] text-center italic">
            "This tool made it so easy to create a color scheme that works
            perfectly for my site!"
          </p>
          <p className="mt-[10px] font-bold">John Doe</p>
        </div>
        {/* -- Testimonial 2 -- */}
        <div className="w-full h-[300px] p-[20px] rounded-lg bg-white shadow-md flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/women/1.jpg"
            alt="User 2"
            className="w-[80px] h-[80px] rounded-full mb-[20px]"
          />
          <p className="text-[14px] text-center italic">
            "I love how I can instantly see how different color combinations
            look together. Great tool!"
          </p>
          <p className="mt-[10px] font-bold">Jane Smith</p>
        </div>
        {/* -- Testimonial 3 -- */}
        <div className="w-full h-[300px] p-[20px] rounded-lg bg-white shadow-md flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/men/2.jpg"
            alt="User 3"
            className="w-[80px] h-[80px] rounded-full mb-[20px]"
          />
          <p className="text-[14px] text-center italic">
            "Fantastic experience! The export feature was a lifesaver for my
            project!"
          </p>
          <p className="mt-[10px] font-bold">Michael Johnson</p>
        </div>
        {/* -- Testimonial 4 -- */}
        <div className="w-full h-[300px] p-[20px] rounded-lg bg-white shadow-md flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="User 4"
            className="w-[80px] h-[80px] rounded-full mb-[20px]"
          />
          <p className="text-[14px] text-center italic">
            "Easy to use and the result is exactly what I was looking for.
            Highly recommend!"
          </p>
          <p className="mt-[10px] font-bold">Emily Davis</p>
        </div>
        {/* -- Testimonial 5 -- */}
        <div className="w-full h-[300px] p-[20px] rounded-lg bg-white shadow-md flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/men/3.jpg"
            alt="User 5"
            className="w-[80px] h-[80px] rounded-full mb-[20px]"
          />
          <p className="text-[14px] text-center italic">
            "Really helps in choosing the right color scheme without spending
            hours on trial and error."
          </p>
          <p className="mt-[10px] font-bold">David Lee</p>
        </div>
        {/* -- Testimonial 6 -- */}
        <div className="w-full h-[300px] p-[20px] rounded-lg bg-white shadow-md flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/women/3.jpg"
            alt="User 6"
            className="w-[80px] h-[80px] rounded-full mb-[20px]"
          />
          <p className="text-[14px] text-center italic">
            "A simple and effective tool for designers! Highly recommend it for
            anyone working with colors."
          </p>
          <p className="mt-[10px] font-bold">Olivia Williams</p>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ colors }) => {
  return (
    <div
      className="w-full py-5 flex items-center justify-center"
      style={{
        backgroundColor: colors.background,
        color: colors.text,
      }}
    >
      <p className="font-bold text-[14px]">
        Crafted with ❤️ by Developers for Developers 👨‍💻 and Designers 🎨
      </p>
    </div>
  );
};

export default Website;
