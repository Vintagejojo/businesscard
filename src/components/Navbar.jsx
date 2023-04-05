import {BsLinkedin, BsTwitter, BsFacebook } from 'react-icons/bs';


function Navbar() {
    return (
        <div className=" left-0 z-0 h-screen w-16 flex flex-col gap-x-10 bg-primary text-stone-400">
            <br className='superspace'/>
            <NavbarIcon icon={<BsLinkedin size="28" />} />
            <NavbarIcon icon={<BsTwitter size="28" />} />
            <NavbarIcon icon={<BsFacebook size="28" />} />
            
        </div>
    );
};

const NavbarIcon = ({ icon} ) => (
    <div className="navbar-icon">
        {icon}
    </div>
);

export default Navbar;