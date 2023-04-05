import Header from "./components/Header"
import Mainbody from "./components/Mainbody";
import Navbar from "./components/Navbar";
import shadowPic from "../public/shadowphoto.png"

export default function App() {
return (
<>      

    <Navbar />
    <div className="flex flex-wrap gap-2 h-full">
        
        <div className=" text-white h-26 flex-auto ml-20 mr-10 mt-5">
            <img src={shadowPic} alt="picture of me" />
        </div>
        <div className="bg-blue-500 text-white h-26 max-w-1/2 flex-auto mt-5">
            <div className="char_bio">
                
            </div>
        </div>
    </div>
    {/* <Header /> */}
    
</>
);
}
