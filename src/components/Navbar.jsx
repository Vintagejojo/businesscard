import {BsLinkedin, BsTwitter, BsFacebook, BsYinYang, BsYoutube, BsMailbox2 } from 'react-icons/bs';


function Navbar() {
    return (
        <div className="fixed left-0 z-0 h-screen w-16 flex flex-col gap-x-10 bg-primary text-stone-400">
            <NavbarIcon icon={<BsLinkedin size="28" />} />
            <NavbarIcon icon={<BsTwitter size="28" />} />
            <NavbarIcon icon={<BsFacebook size="28" />} />
            <NavbarIcon icon={<BsYinYang size="28" />} />
            <NavbarIcon icon={<BsYoutube size="28" />} />
            <NavbarIcon icon={<BsMailbox2 size="28" />} />
            
        </div>
    );
};

const NavbarIcon = ({ icon} ) => (
    <div className="navbar-icon">
        {icon}
    </div>
);

export default Navbar;