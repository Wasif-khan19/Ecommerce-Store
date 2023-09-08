'use client'
import { NavbarArray, NavbarItemType } from "@/components/utils/NavbarArrayandTypes"
import Image from "next/image"
import Link from "next/link"
import { FaOpencart } from 'react-icons/fa'
import { BiChevronDown } from 'react-icons/bi'
import { BiSearch } from "react-icons/bi"
import DropDown from "./SubComponents/DropDown"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from 'react-icons/io'
import Expand from '@/components/views/Navbar/SubComponents/Expand'

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false)
  const [cartItemNumber, setcartItemNumber] = useState<number>(0)
  return (
    <div className="">
      <div className="py-5 sticky top-0 flex justify-between items-center space-x-4">
        <div className="w-36 flex-shrink-0">
          <Image src={"/logo.png"} alt="logo" width={100} height={100} />
        </div>
        <div className="hidden lg:flex justify-between items-center w-full">
          <ul className="flex space-x-10 font-semibold text-xl items-center justify-center">
            {NavbarArray.map((item: NavbarItemType, index: number) => (
              // eslint-disable-next-line react/jsx-key 
              <li className="flex items-center relative hover:underline rounded-md px-3 py-1 text-lg font-medium cursor-pointer group">
                <Link href={item.href}>{item.label}</Link>
                {item.isDropDown ? <BiChevronDown size={20} className='-rotate-180 group-hover:rotate-0 duration-300' /> : ""}
                {item.isDropDown && <div className={`invisible group-hover:visible py-4 px-2 min-w-[7.8rem] left-1 top-10 bg-white border-2 border-black text-center rounded-md absolute`}>
                  <DropDown item={item} />
                </div>}
              </li>
            ))}
          </ul>
          <div className="border-2 border-black flex items-center bg-white text-gray-600 pl-3 rounded-md" >
            <BiSearch />
            <input
              type="text"
              className="focus:outline-none pl-1 pr-5 py-1 w-80 rounded-r-md"
              placeholder="Search in Our Store"
            />
          </div>
          <div className="relative flex items-center justify-center">
            <button aria-label="save and add to cart items" className="flex rounded-3xl text-white py-3 px-5 bg-black hover:text-black transition ease-in duration-300 hover:bg-blue-800">
              <div className="text-white hover:text-black absolute right-1 top-2 w-4 h-4 text-xs font-semibold rounded-full flex justify-center items-center">{cartItemNumber}</div>
              <FaOpencart size={25} className="mr-2" />CART
            </button>
          </div>
        </div>
        <div className="cursor-pointer" onClick={() => setNavbarOpen(!isNavbarOpen)}>
          {isNavbarOpen ?
            <div className="flex lg:hidden"><IoMdClose size={30} /></div>
            :
            <div className="flex lg:hidden"><GiHamburgerMenu size={25} /></div>
          }
        </div>
      </div>
      {
        isNavbarOpen && <Mobilenavbar />
      }
    </div>
  )
}

export default Navbar

const Mobilenavbar = () => {
  return (
    <div className="w-full px-6 py-4">
      {
        NavbarArray.map((item: NavbarItemType, index: number) => {
          return (
            <Expand key={index} item={item} />
          )
        })
      }
    </div>
  )
}
