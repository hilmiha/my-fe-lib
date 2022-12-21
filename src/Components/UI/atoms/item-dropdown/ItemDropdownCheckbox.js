import { useContext } from "react";
import { RiCheckFill} from "react-icons/ri";
import { WindowContext } from "../../../../Contexts/WindowContext";
import Checkbox from "../input/Checkbox";

const ItemDropdownCheckbox = (props) =>{
    const {windowSize} = useContext(WindowContext)
    
    const onClickItemAction = (value) =>{
        props.onClickItemAction(value)
    }
    return(
        <div
            type="button" 
            className={ 
                ((windowSize<=2)?('py-4 '):('py-2 '))+
                "px-4 hover:bg-grays-200 dark:hover:bg-gray-800 block w-full text-start border border-transparent focus:bg-base-background dark:focus:bg-baseDark-background focus:ring-2 focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-200 dark:focus:ring-primary-800 cursor-pointer" 
            }
            onClick={()=>{onClickItemAction({value:props.itemList.value, label:props.itemList.label})}}
        >
            {/* <div className="flex justify-between items-center">
                <div>
                    <span
                        className={
                            (props.isSelected)?('text-primary-600 dark:text-primary-400'):('text-grays-900 dark:text-grays-100')
                        }
                    >{props.itemList.label}</span>
                </div>
                {
                    (props.isSelected)&&(
                        <RiCheckFill className="text-primary-600 dark:text-primary-400"/>
                    )
                }
            </div> */}
            <Checkbox
                // label={props.itemList.label}
                schema={{label:props.itemList.label}}
                value={props.itemList.value}
                onClick={onClickItemAction}
                isSelected={props.isSelected}
            />
        </div>
    )
}

export default ItemDropdownCheckbox