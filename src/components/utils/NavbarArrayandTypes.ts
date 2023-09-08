export interface NavbarItemType{
    label:string,
    href:string,
    isDropDown:boolean,
    dropDownData?: Array<NavbarItemType>,
}

export const NavbarArray: Array<NavbarItemType>=[
    {
        label:"HOME",
        href:"/home",
        isDropDown: false,
    },
    {
        label:"HOME AND KITCHEN",
        href:"/home and kitchen",
        isDropDown: true,
        dropDownData:[
            {
                label:"Kitchen",
                href:"/home and kitchen/kitchen",
                isDropDown: false,
            },
            {
                label:"Home ",
                href:"/home and kitchen/home",
                isDropDown: false,
            }
        ]
    },
    {
        label:"WATCHES",
        href:"/watches",
        isDropDown: true,
        dropDownData:[
            {
                label:"Sport",
                href:"/watches/sport",
                isDropDown: false,
            },
            {
                label:"Fashion",
                href:"/watches/fashion",
                isDropDown: false,
            }
        ]
    },
]
