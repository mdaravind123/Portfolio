import React from "react";
import Header from "../components/header";

export default function About() {
  return (
    <div className="2xl:container mx-auto h-screen">
      <div className="w-[98%] mx-auto grid grid-cols-1">
        <div>
          <Header />
          <h1 className="text-black text-[48px] font-[Poppins] font-normal text-center mb-5">
            About Me
          </h1>
        </div>
        <main>
          <div className="w-[98%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-[90vh] lg:h-[80vh]">
            <div className="flex flex-col items-center h-[90vh] lg:h-[80vh]">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://ik.imagekit.io/bagqqfegz/portfolio/Screenshot%202024-07-07%20203338.png?updatedAt=1720365062856"
                  alt="pic"
                  className="w-[300px] h-[350px] md:w-[400px] md:h-[500px] rounded-[5%]"
                />
                <p className="text-black text-[20px] font-[Poppins] font-normal w-full text-center lg:text-left lg:hidden mt-5">
                  I'm a Passionate Full Stack Developer focused on building
                  robust and dynamic Web Applications. With a strong foundation
                  in both Frontend and backend Technologies, I thrive to create
                  seamless and efficient User Experiences.
                </p>
              </div>
            </div>
            <div>
              <p className="text-black text-[20px] font-[Poppins] font-normal w-full text-center lg:text-left hidden lg:block">
                I'm a Passionate Full Stack Developer focused on building robust
                and dynamic Web Applications. With a strong foundation in both
                Frontend and backend Technologies, I thrive to create seamless
                and efficient User Experiences.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
