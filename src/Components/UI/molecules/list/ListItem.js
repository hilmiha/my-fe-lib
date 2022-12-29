import { useEffect, useRef, useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import Checkbox from "../../atoms/input/Checkbox";
import ItemDropdown from "../../atoms/item-dropdown/ItemDropdown";
import ItemDropdownCheckbox from "../../atoms/item-dropdown/ItemDropdownCheckbox";
import ItemDropdownFlag from "../../atoms/item-dropdown/ItemDropdownFlag";
import ItemNavSide from "../../atoms/item-nav/ItemNavSide";
import ItemNavTop from "../../atoms/item-nav/ItemNavTop";
import ItemNavTopCascade from "../../atoms/item-nav/ItemNavTopCascade";
import ClickOutsiteDetector from "../../atoms/wrapper/ClickOutsiteDetector";

const ListItem = (props) =>{
    const onClickItemAction = (value) =>{
        props.onClickItemAction(value)
    }

    const [dropdownOpen, setDropdownOpen] = useState([])
    const setDropdownOpenList = (index) =>{
        let tampDropdownOpen = [...dropdownOpen]
        if(tampDropdownOpen.includes(index)){
            tampDropdownOpen = tampDropdownOpen.filter((item)=>{return(item!==index)})
        }else{
            tampDropdownOpen.push(index)
        }
        setDropdownOpen(tampDropdownOpen)
    }
    const dropdownButtonRef = useRef(null);
    
    switch (props.itemType) {
        case 'ItemNavTop':
            return(
                <div className="flex space-x-2">
                    {
                        (props.collections).map((collection, index)=>{
                            const list= collection.list
                            const isCollectionSelected = list.find((item)=>{return(props.value===item.value)})
                            return(
                                <div key={index}>
                                    {
                                        collection.title!==undefined?(
                                            <ItemNavTopCascade collection={collection} list={list} onClickItemAction={onClickItemAction} isCollectionSelected={isCollectionSelected} value={props.value}/>
                                        ):(
                                            <div className="flex space-x-2">
                                                {
                                                    list.map((itemList)=>{
                                                        // const selected = props.value.find((itm)=>{return(itm===itemList.value)})
                                                        return(
                                                            <ItemNavTop
                                                                key={itemList.value}
                                                                schema={itemList}
                                                                onClickItemAction={onClickItemAction}
                                                                isActive={props.value===itemList.value}
                                                            />
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    }
                                    
                                </div>
                            )
                        })
                    }
                </div>
            )
        case 'ItemNavSide':
            return(
                <div>
                    {
                        (props.collections).map((collection, index)=>{
                            const list= collection.list
                            const isCollectionSelected = list.find((item)=>{return(props.value===item.value)})
                            return(
                                <div key={index}>
                                    {
                                        collection.title!==undefined&&(
                                            <div className="my-2">
                                                <ItemNavSide
                                                    isActive={(isCollectionSelected!==undefined?(true):(false))}
                                                    onClickItemAction={()=>{setDropdownOpenList(index)}}
                                                    schema={
                                                        {
                                                            icon:collection.icon,
                                                            secIcon:((dropdownOpen.includes(index))?(<RiArrowUpSLine size={'20px'}/>):(<RiArrowDownSLine size={'20px'}/>)),
                                                            label:collection.title
                                                        }
                                                    }
                                                />
                                            </div>
                                        )
                                    }
                                    {
                                        ((dropdownOpen.includes(index)) && collection.title!==undefined)&&(
                                            <div className="flex flex-col space-y-2 p-2 ml-4 my-2 bg-base-background-mid dark:bg-baseDark-background-mid rounded-md rounded-t-0">
                                                {
                                                    list.map((itemList)=>{
                                                        // const selected = props.value.find((itm)=>{return(itm===itemList.value)})
                                                        return(
                                                            <ItemNavSide
                                                                key={itemList.value}
                                                                schema={itemList}
                                                                onClickItemAction={onClickItemAction}
                                                                isActive={props.value===itemList.value}
                                                            />
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    }
                                    {
                                        (collection.title===undefined)&&(
                                            <div className="flex flex-col space-y-2">
                                                {
                                                    list.map((itemList)=>{
                                                        // const selected = props.value.find((itm)=>{return(itm===itemList.value)})
                                                        return(
                                                            <ItemNavSide
                                                                key={itemList.value}
                                                                schema={itemList}
                                                                onClickItemAction={onClickItemAction}
                                                                isActive={props.value===itemList.value}
                                                            />
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    }
                                    
                                </div>
                            )
                        })
                    }
                </div>
            )
        case 'dropdownItemCheckbox':
            return(
                <div>
                    {
                        (props.collections).map((collection, index)=>{
                            const list= collection.list
                            return(
                                <div key={index}>
                                    {
                                        (collection.title!==undefined)&&(
                                            <div className="py-2 px-1 text-grays-500">
                                                <span>{collection.title}</span>
                                            </div>
                                        )
                                    }
                                    {
                                        list.map((itemList)=>{
                                            const selected = props.value.find((itm)=>{return(itm===itemList.value)})
                                            return(
                                                <ItemDropdownCheckbox
                                                    key={itemList.value}
                                                    itemList={itemList} 
                                                    onClickItemAction={onClickItemAction}
                                                    isSelected={(selected!==undefined?(selected):(false))}
                                                />
                                            )
                                        })
                                    }
                                    {
                                        (index < props.collections.length-1)&&(
                                            <div className="border border-grays-300 dark:border-grays-700 h-[1px] border-x-0 border-t-0 my-2"></div>
                                        )
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            )
            break;

        case 'dropdownItem':
            return(
                <div>
                    {
                        (props.collections).map((collection, index)=>{
                            const list= collection.list
                            return(
                                <div key={index}>
                                    {
                                        (collection.title!==undefined)&&(
                                            <div className="py-2 px-1 text-grays-500">
                                                <span>{collection.title}</span>
                                            </div>
                                        )
                                    }
                                    {
                                        list.map((itemList)=>{
                                            return(
                                                <ItemDropdown 
                                                    key={itemList.value}
                                                    itemList={itemList} 
                                                    onClickItemAction={(value)=>{onClickItemAction(value)}}
                                                    isSelected={itemList.value===props.value}
                                                />
                                            )
                                        })
                                    }
                                    {
                                        (index < props.collections.length-1)&&(
                                            <div className="border border-grays-300 dark:border-grays-700 h-[1px] border-x-0 border-t-0 my-2"></div>
                                        )
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            )
            break;
            
        case 'dropdownItemFlag':
            return(
                <div>
                    {
                        (props.collections).map((collection, index)=>{
                            const list= collection.list
                            return(
                                <div key={index}>
                                    {
                                        (collection.title!==undefined)&&(
                                            <div className="py-2 px-1 text-grays-500">
                                                <span>{collection.title}</span>
                                            </div>
                                        )
                                    }
                                    {
                                        list.map((itemList)=>{
                                            return(
                                                <ItemDropdownFlag
                                                    key={itemList.code}
                                                    country={itemList} 
                                                    onClickItemAction={(value)=>{props.onClickItemAction(value)}}
                                                    isSelected={itemList.code===props.value}
                                                />
                                            )
                                        })
                                    }
                                    {
                                        (index < props.collections.length-1)&&(
                                            <div className="border border-grays-300 dark:border-grays-700 h-[1px] border-x-0 border-t-0 my-2"></div>
                                        )
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            )
            break;
            
        default:
            break;
    }
}

export default ListItem