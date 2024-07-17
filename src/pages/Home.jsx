import React from "react";
import Header from "../components/header";
import "../css/animation.css";

export default function Home() {
  return (
    <div className="2xl:container mx-auto h-screen">
      <div className="w-[98%] mx-auto grid grid-cols-1">
        <div>
          <Header />
        </div>
      </div>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex justify-center items-center h-[90vh] tracking-in-contract-bck">
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start ">
            <h1 className="text-black text-[25px] font-[Poppins] font-normal">
              Software Developer
            </h1>
            <h1 className="text-black text-[48px] font-[Poppins] font-normal">
              Hello I'm
            </h1>
            <h1 className="text-black text-[48px] font-[Poppins] font-normal">
              M D Aravind
            </h1>
            <p className="text-black text-[20px] font-[Poppins] font-normal w-full text-center lg:text-left">
              I'm a Passionate Full Stack Developer aiming to build dynamic and
              Interactive websites and products which helps people and simplify
              their work
            </p>
            <div className="flex gap-7 my-5 flex-col lg:flex-row justify-center items-center">
              <a href="https://ik.imagekit.io/bagqqfegz/portfolio/M-D-Aravind-FlowCV-Resume-20240328.pdf?updatedAt=1720373722046">
                <button className="bg-green-400 text-white w-52 h-12 p-2 text-[20px] rounded-3xl border-solid border-[2px] border-white cursor-pointer">
                  <div className="flex justify-center item-center">
                    <p>Download CV</p>
                    <svg
                      viewBox="0 0 21 21"
                      fill="currentColor"
                      className="w-7 h-7"
                    >
                      <g
                        fill="none"
                        fillRule="evenodd"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6.5 10.5l4 4.232 4-4.191M10.5 3.5v11M4.5 17.5h12" />
                      </g>
                    </svg>
                  </div>
                </button>
              </a>
              <div className="flex gap-5">
                <a href="https://github.com/mdaravind123">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    className="w-10 h-10"
                  >
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/m-d-aravind-3008582a0/">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-10 h-10"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/mdaravind979/">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    className="w-10 h-10"
                  >
                    <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      fill="currentColor"
                      d="M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5H8V9H6V7h2V6c0-1.653 1.347-3 3-3h2v2h-2c-.55 0-1 .45-1 1v1h3l-.5 2H10v7h4.5c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5z"
                    />
                  </svg>
                </a>
                <a href="https://x.com/Aravind37973">
                  <img
                    src="https://ik.imagekit.io/bagqqfegz/portfolio/twitter.png?updatedAt=1720373452517"
                    className="w-10 h-10"
                    alt="twitter"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center order-1">
          <img
            src="https://ik.imagekit.io/bagqqfegz/portfolio/Screenshot%202024-07-07%20203338.png?updatedAt=1720365062856"
            className="w-[300px] rounded-[60%]"
            alt="myprofile"
          />
        </div>
      </div>
    </div>
  );
}
