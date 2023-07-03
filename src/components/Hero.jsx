import React, { useEffect, useState } from "react";
import hero from "../assets/images/hero.png";
import "./animate.css";
// import "./neon-animation.css"; // Import the CSS file for the neon animation

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={hero}
          alt=""
          className={`md:w-11/12 h-full object-cover image-transition ${
            animate && "animate"
          }`}
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold text-fade-in">
            <span className="text-purple-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is{" "}
            <span
              className={`text-slide-in ${animate ? "typing-animation" : ""}`}
            >
              <span className={`text-loading ${animate ? "animate__animated animate__fadeIn" : ""}`}>
                Muhammad Atiq
              </span>
            </span>
          </h1>
          <h4 className="md:text-2xl mb-2 text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            MERAN-Stack Developer
          </h4>
          <a href="./src/assets/Code_a_program.pdf" download>
            <button className={`btn bg-purple-600 p-4 rounded ${animate ? "neon-animation" : ""}`}>
              Download Resume
            </button>
          </a>
          {/* <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
