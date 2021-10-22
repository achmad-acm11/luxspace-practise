import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    /* <!-- START: Section Hero --> */
    <section className="flex items-center hero">
      {/* <!-- START: Section Hero | Left Side --> */}
      <div className="w-full absolute z-20 inset-0 md:relative md:w-1/2 text-center flex flex-col justify-center hero-caption">
        <h1 className="text-3xl md:text-5xl leading-tight font-semibold">
          The Room <br className="" />
          You've Dreaming
        </h1>
        <h2 className="px-8 text-base md:px-0 md:text-lg my-6 tracking-wide">
          Kami menyediakan furniture berkelas yang
          <br className="hidden lg:block" />
          membuat ruangan terasa homey
        </h2>
        <div>
          <Link to="/" className="bg-pink-400 text-black hoever:bg-black hover:text-pink-400 rounded-full px-8 py-3 mt-4 inline-block flex-none transition duration-200">
            Explore Now
          </Link>
        </div>
      </div>
      {/* <!-- END: Section Hero | Left Side --> */}

      {/* <!-- START: Section Hero | Right Side --> */}
      <div className="w-full inset-0 md:relative md:w-1/2">
        <div className="relative hero-image">
          <div className="overlay inset-0 bg-black opacity-30 z-10"></div>
          <div className="overlay right-0 bottom-0 md:inset-0">
            <button
              className="video hero-cta focus:outline-none z-30 modal-trigger"
              data-content='<div className="w-screen pb-56 md:w-88 relative z-50">
                <div className="absolute w-full h-full">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/FniJvUiVprg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>'
            ></button>
          </div>
          <img src="images/content/image-hero.jpg" alt="House with sofa and some plants"
            className="absolute inset-0 md:relative w-full h-full object-cover object-center" />
        </div>
      </div>
      {/* <!-- END: Section Hero | Right Side --> */}
    </section>
    /* <!-- END: Section Hero --> */
  );
}
