// components/Navbar.tsx
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from '../ui/Button/Button';
import Logo from './Logo';
import MenuIconLgScreen from '../icons/MenuIconLgScreen';
import MenuIconLgScreenDark from '../icons/MenuIconLgScreenDark';
import LogoDark from './LogoDark';

const NavbarJumbo: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bgOpacityDisplayed, setBgOpacityDisplayed] = useState(true);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Current scroll position

      if (scrollY > 400) {
        setBgOpacityDisplayed(false);
      } else {
        setBgOpacityDisplayed(true);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      {
        bgOpacityDisplayed &&
        <nav className={`bg-opacity-0 p-8 z-50`}>
          <div className="container mx-auto flex justify-between items-center px-[5vw]">
            <div className="flex items-center gap-6">
                <Logo />
                <div className="hidden md:flex md:justify-between gap-6 z-10">
                  <a className='text-white' href={"/"}>
                    Ride With Us
                  </a>
                  <a className='text-white' href={"/drivers"}>
                    Drive With Us
                  </a>
                  <a className='text-white' href={"/sharp"}>
                    Drive For Us
                  </a>
                </div>     
            </div>
            <div className="hidden md:flex items-center space-x-4 mb-3 z-10">
                <a className='text-white' href={"/about-us"}>
                  About
                </a>
                <a className='text-white' href={"/support"}>
                  Support
                </a>
                <a href={"/signup"}>
                    <button className="text-xs text-[#000] rounded-md bg-[#FDFDFD] py-2 px-4">{'Sign Up'}</button>
                </a>
                <button><MenuIconLgScreen /></button>
            </div>
            <div className="md:hidden block">
              <button
                onClick={toggleMobileMenu}
                className="block text-white text-2xl focus:outline-none"
              >
                &#8801;
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden block">
              <div className="flex flex-col justify-between gap-3 items-center justify-center py-4 z-20 bg-[#FFF]">
                <a className='text-[#000]' href={"/"}>
                  Ride With Us
                </a>
                <a className='text-[#000]' href={"/drivers"}>
                  Drive With Us
                </a>
                <a className='text[#000]' href={"/sharp"}>
                  Drive For Us
                </a>
              </div>
              <ul className="flex flex-col space-y-2 items-center">
                <li>
                    <a href={"https://kabukaburider.page.link/app"}>
                        <Button
                        title={'Download Rider App'}
                        className="!text-[16px] mt-6"
                        size="medium" />
                    </a>
                </li>
                <li>
                    <a href={"https://kabukabudriver.page.link/app"}>
                        <Button
                        title={'Download Driver App'}
                        className="!text-[16px] mt-6"
                        size="medium" />
                    </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      }
    </>
  );
};

export default NavbarJumbo;
