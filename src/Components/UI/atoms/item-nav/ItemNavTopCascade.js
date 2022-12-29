import { useRef, useState } from "react"
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri"
import ClickOutsiteDetector from "../wrapper/ClickOutsiteDetector"
import ItemNavTop from "./ItemNavTop"
    
    
const ItemNavTopCascade = (props) =>{

    const [dropdownOpen, setDropdownOpen] = useState(false)
    const setDropdownOpenList = () =>{
        setDropdownOpen(!dropdownOpen)
    }
    const dropdownButtonRef = useRef(null);

    return(
        <>
            <div onMouseOver={setDropdownOpenList}>
                <ItemNavTop
                    isActive={(props.isCollectionSelected!==undefined?(true):(false))}
                    isHovered={dropdownOpen}
                    onClickItemAction={setDropdownOpenList}
                    schema={
                        {
                            ref:dropdownButtonRef,
                            icon:props.collection.icon,
                            secIcon:(dropdownOpen?(<RiArrowUpSLine size={'20px'}/>):(<RiArrowDownSLine size={'20px'}/>)),
                            label:props.collection.title
                        }
                    }
                />
            </div>
            {
                (dropdownOpen)&&(
                    <ClickOutsiteDetector action={setDropdownOpenList} buttonRef={dropdownButtonRef}>
                        <div className="absolute mt-1 space-y-2 p-2 bg-base-background-mid dark:bg-baseDark-background-mid rounded-md border border-grays-300 dark:border-grays-700">
                            {
                                props.list.map((itemList)=>{
                                    // const selected = props.value.find((itm)=>{return(itm===itemList.value)})
                                    return(
                                        <ItemNavTop
                                            key={itemList.value}
                                            schema={itemList}
                                            onClickItemAction={props.onClickItemAction}
                                            isActive={props.value===itemList.value}
                                        />
                                    )
                                })
                            }
                        </div>
                    </ClickOutsiteDetector>
                )
            }
        </>
    )
}

export default ItemNavTopCascade