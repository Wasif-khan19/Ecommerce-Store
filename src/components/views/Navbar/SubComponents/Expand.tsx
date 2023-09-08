import { FC } from "react"
import { HiOutlineChevronDown } from "react-icons/hi"
import { NavbarArray, NavbarItemType } from "@/components/utils/NavbarArrayandTypes"
import Link from "next/link"
import { useState } from "react"

const Expand: FC<{ item: NavbarItemType }> = ({ item }) => {
    const [isExpended, setExpanded] = useState<boolean>(false);
    const [isTimeOut, setTimeOut] = useState<boolean>(false);

    function handleExpand() {
        setExpanded(!isExpended);
        setTimeout(() => {
            setTimeOut(!isTimeOut)
        }, 200);

    }
    return (
        <li className={`${isExpended ? "h-32" : "h-12"} list-none text-white bg-black rounded-md duration-300`}>
            <div onClick={handleExpand} className=" py-2 px-3 flex duration-300 rounded-md items-center justify-between">
                <Link href={item.href}>{item.label}</Link>
                {item.isDropDown ? <HiOutlineChevronDown className="mt-1 group-hover:rotate-0 duration-300" size={15} /> : ""}
            </div>
            <div className="flex flex-col space-y-1 mt-2">
                {isExpended && item.dropDownData?.map((subItem: NavbarItemType, index: number) => (
                    <Link key={index} className="py-1 px-5 duration-300 bg-[#ffc300] text-black " href={subItem.href}>
                        {subItem.label}
                    </Link>
                ))}
            </div>
        </li>
    )
}

export default Expand
