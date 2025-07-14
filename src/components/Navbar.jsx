import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
const Navbar = () => {
  return (
    <>
      <nav className="bg-radial-[at_50%_5%] from-white to-100%">
        <div className="p-7 text-4xl md:text-center text-center border-b-2 font-satisfy">
          <h1>Alysa Loraine's SN to RN Academic Portfolio</h1>
        </div>
        <div className="md:flex justify-center rounded-b-2xl hidden ">
          <div className="flex justify-center gap-12  w-3xl p-2 text-[0.8rem] md:text-[1rem] font-barlow font-medium">
            <Link to={"/"}>Home</Link>
            <Link to={"/resume"}>Resume</Link>
            <Link to={"/examplesofwork"}>Examples of Work</Link>
            <Link to={"/educationalexperience"}>Educational Experience</Link>
          </div>
        </div>

        <BurgerMenu/>
      </nav>
    </>
  );
};

export default Navbar;
