import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
const BurgerMenu = () => {
  const [isVisible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!isVisible);
  };
  return (
    <div className="md:hidden  flex justify-end p-4">
      

      {isVisible && (
        <div className="flex md:hidden h-40p-4 ml-auto mr-auto font-barlow">
          <div className=" flex flex-col justify-center items-center gap-5">
            <Link to={"/"}>Home</Link>
            <Link to={"/resume"}>Resume</Link>
            <Link to={"/examplesofwork"}>Examples of Work</Link>
            <Link to={"/educationalexperience"}>Educational Experience</Link>
          </div>
        </div>
      )}

      <button className="flex " onClick={handleClick}>
        {isVisible ? <X className=""/> : <Menu />}
      </button>
    </div>
  );
};

export default BurgerMenu;
