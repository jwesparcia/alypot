import React from "react";
import { Facebook, Instagram } from "lucide-react";
import { Twitter } from "lucide-react";


const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="bg-pink-200/100 font-barlow text-[0.8rem] md:text-[1.2rem] w-auto p-2 md:grid md:grid-cols-2 flex ">
      <div className=" flex justify-center gap-5 w-4xl  items-center">
        <div className="ml-4">
          <h1>@{year}</h1>
        </div>
        <div className=" w-auto">
          <h1>Alysa Loraine Alinea, RN</h1>
        </div>
      </div>

      <div className=" gap-5  font-barlow p-5 ">
        <h1 className="text-center mb-1">Follow Me</h1>
        <div className="flex gap-5 justify-center items-center">
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
