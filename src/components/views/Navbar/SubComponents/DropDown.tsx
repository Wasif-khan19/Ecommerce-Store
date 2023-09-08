import { NavbarItemType } from "@/components/utils/NavbarArrayandTypes"
import { FC } from "react"
import Link from "next/link"

const DropDown:FC<{item: NavbarItemType}>  = ({item}) => {
  return (
    <ul>
      {item.dropDownData?.map((item: NavbarItemType, index: number)=>(
        // eslint-disable-next-line react/jsx-key
        <li className="hover:ml-2 group duration-300 hover:underline">
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default DropDown
