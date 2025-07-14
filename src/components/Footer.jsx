import React from "react";
import { Facebook, Instagram } from "lucide-react";
import { Twitter } from "lucide-react";


const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="bg-pink-200/100 font-barlow text-[0.8rem] md:text-[1.2rem] w-auto p-2 md:grid md:grid-cols-2 flex flex-col">
      <div className=" flex justify-center gap-1 items-center p-2 ">
        <div className="">
          <h1>@{year}</h1>
        </div>
        <div className=" ">
          <h1>Alysa Loraine Alinea, RN</h1>
        </div>
      </div>

      <div className=" gap-5  font-barlow p-2 ">
        <h1 className="text-center mb-3">Follow Me</h1>
        <div className="flex gap-3 justify-center items-center">
          <div className="flex ">
             <Facebook/>Facebook
          </div>
           <div className="flex">
             <Twitter/>Twitter
          </div>
          <div className="flex">
             <Instagram/>Instagram
          </div>

        </div>
      
      </div>

      
    
    </div>
  );
};

export default Footer;
