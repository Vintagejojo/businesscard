import Header from "./components/Header"
import Mainbody from "./components/Mainbody";
import Navbar from "./components/Navbar";

export default function App() {
return (
<>  
    <div className="flex">
        <Navbar />
        <div className="bg-red-500 text-white h-26 flex-auto ml-20 z- mr-10">
            <p>Flex 1</p>
        </div>
        <div className="bg-blue-500 text-white h-26 flex-auto">
            <p>Flex 2</p>
        </div>
    </div>
    {/* <Header /> */}
    <div className="flex flex-wrap">
        
    </div>
    
</>
);
}
