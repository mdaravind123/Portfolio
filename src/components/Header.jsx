import React from "react";
export default function Header() {
  return (
    <div className="flex justify-around m-2">
      <div>
        <h1 className="text-green-400 text-[30px] font-[Poppins] font-normal p-3">
          Aravind
        </h1>
      </div>
      <div>
        <nav>
          <ul className="flex justify-center gap-12 p-5 w-full">
            <a href="#">
              <li className="text-[20px] font-[Poppins] font-normal text-green-400 hover:underline cursor-pointer transition-all">
                Home
              </li>
            </a>
            <a href="/about">
              <li className="text-[20px] font-[Poppins] font-normal text-green-400 hover:underline cursor-pointer transition-all">
                About Us
              </li>
            </a>
            <a href="#">
              <li className="text-[20px] font-[Poppins] font-normal text-green-400 hover:underline cursor-pointer transition-all">
                Skills
              </li>
            </a>
            <a href="">
              <li className="text-[20px] font-[Poppins] font-normal text-green-400 hover:underline cursor-pointer transition-all">
                Projects
              </li>
            </a>
            <a href="">
              <li className="text-[20px] font-[Poppins] font-normal text-green-400 hover:underline cursor-pointer transition-all">
                Experience
              </li>
            </a>
            <a href="">
              <li className="text-[20px] font-[Poppins] font-normal text-green-400 hover:underline cursor-pointer transition-all">
                Contact
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
}
