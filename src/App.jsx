import Header from "./components/Header"
import Mainbody from "./components/Mainbody";
import Navbar from "./components/Navbar";
import shadowPic from "./images/shadowphoto.png"

export default function App() {
return (
<>      

    <Navbar />
    <div className="flex flex-wrap gap-2 h-full">
        
        <div className=" text-white max-w-1/2 h-30 w-26 flex-auto ml-20 mr-10 mt-12">
            <img className="flex-auto h-60 w-45 ml-8" src={shadowPic} alt="picture of me" />
        </div>
        <div className=" text-white h-26 max-w-1/2 flex-auto mt-5">
            <div className="">
                <h2 className="my_name mt-20 text-4xl font-['Roboto']">
                    Jordan Roland
                </h2>
                <p className="italic  ">Full Stack Engineer</p>
                <br></br>
                <p className="char_bio">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    </div>
    {/* <Header /> */}
    
</>
);
}
