import { useEffect } from "react";
import Checkbox from "../../atoms/input/Checkbox";
import ItemDropdown from "../../atoms/item-dropdown/ItemDropdown";
import ItemDropdownCheckbox from "../../atoms/item-dropdown/ItemDropdownCheckbox";
import ItemDropdownFlag from "../../atoms/item-dropdown/ItemDropdownFlag";

const ListItem = (props) =>{
    const onClickItemAction = (value) =>{
        props.onClickItemAction(value)
    }
    
    switch (props.itemType) {
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
                                            return(
                                                // <div className="pb-3 pl-4" key={itemList.value}>
                                                    // <Checkbox 
                                                    //     label={itemList.label}
                                                    //     value={itemList.value}
                                                    //     onClick={(value)=>{onClickItemAction(value)}}
                                                    //     isSelected={props.value.includes(itemList.value)}
                                                    // />
                                                    
                                                // </div>
                                                <ItemDropdownCheckbox
                                                    key={itemList.value}
                                                    itemList={itemList} 
                                                    onClickItemAction={(value)=>{onClickItemAction(value)}}
                                                    isSelected={props.value.includes(itemList.value)}
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
                                                    isSelected={itemList.code===props.value.code}
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