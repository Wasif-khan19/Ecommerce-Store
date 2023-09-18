import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";


const Footer = () => {
  return (
    <footer className="text-black body-font">
      <div className= "container px-5 py-16 mx-auto flex md:items-start text-start  lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="space-y-6 w-64 flex-shrink-0 md:mx-0 mx-auto text-start md:text-left">
          <Link
            href={"/"}
            className="flex title-font font-medium items-start md:justify-start justify-start text-black"
          >
            <Image src={"/logo.png"} alt="logo" width={100} height={100} />
          </Link>
          <p className="mt-2 font-semibold text-lg text-center">
            An Online Shopping store that give you too much varities and 
            high quality everyday fashion products.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-start">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font tracking-widest mb-3 text-xl font-bold">
              Company
            </h2>
            <nav className="list-none mb-10 space-y-4">
              <li>
                <a className="text-black cursor-pointer">About</a>
              </li>
              <li>
                <a className="text-black cursor-pointer">Terms of Use</a>
              </li>
              <li>
                <a className="text-black cursor-pointer">Privacy Policy</a>
              </li>
              <li>
                <a className="text-black cursor-pointer">How it Works</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font tracking-widest mb-3 text-xl font-bold">
              Events
            </h2>
            <nav className="list-none mb-10 space-y-4">
              <li>
                <a className="text-black cursor-pointer">Discounts</a>
              </li>
              <li>
                <a className="text-black cursor-pointer">Promotions</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font tracking-widest mb-3 text-xl font-bold">
              Support
            </h2>
            <nav className="list-none mb-10 space-y-4">
              <li>
                <a className="text-black cursor-pointer">Support Carrer</a>
              </li>
              <li>
                <a className="text-black cursor-pointer">24h Service</a>
              </li>
              <li>
                <a className="text-black cursor-pointer">Quick Chat</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font tracking-widest mb-3 text-xl font-bold">
              Contact
            </h2>
            <nav className="list-none mb-10 space-y-4">
              <li>
                <a className="text-black cursor-pointer">Whatsapp</a>
              </li>
              <li>
                <a className="text-black cursor-pointer">Email Us</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-white border-t-2 rounded-md">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-black text-sm text-center sm:text-left">
            © copyright Sahal Sooq
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <div>
              <Link href={"https://github.com/Wasif-khan19"}>
                <AiFillGithub size={20} className="mr-2" />
              </Link>
            </div>
            <div>
              <Link href={"https://twitter.com/WasifKh05957381"}>
                <AiOutlineTwitter size={20} className="mr-2" />
              </Link>
            </div>
            <div>
              <Link href={"https://www.facebook.com/profile.php?id=100055704636250"}>
                <FaFacebookSquare size={20} className="mr-2" />
              </Link>
            </div>
            <div>
              <Link href={"https://www.instagram.com/muhammad_wasif19/"}>
                <AiFillInstagram size={20} className="mr-2" />
              </Link>
            </div>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
