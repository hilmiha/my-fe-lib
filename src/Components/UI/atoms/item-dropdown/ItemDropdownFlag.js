import { useContext } from "react";
import { RiCheckFill} from "react-icons/ri";
import { WindowContext } from "../../../../Contexts/WindowContext";

const ItemDropdownFlag = (props) =>{
    const {windowSize} = useContext(WindowContext)

    const onClickItemAction = () =>{
        props.onClickItemAction({
            label:props.country.flag,
            value:props.country.code
        })
    }
    return(
        <button 
            type="button" 
            className={
                ((windowSize<=2)?('py-4 '):('py-2 '))+
                "px-4 hover:bg-grays-200 dark:hover:bg-gray-800 block w-full text-start border border-transparent focus:bg-base-background dark:focus:bg-baseDark-background focus:ring-2 focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-200 dark:focus:ring-primary-800" 
            }
            onClick={onClickItemAction}
        >
            <div className="flex justify-between items-center">
                <div>
                    <span className="inline-block mr-4">{props.country.flag}</span>
                    <span
                        className={
                            (props.isSelected)?('text-primary-600 dark:text-primary-400'):('text-grays-900 dark:text-grays-100')
                        }
                    >   
                        {props.country.label}
                    </span>
                    <span 
                        className={
                            (props.isSelected)?('text-primary-600 dark:text-primary-400 '):('text-grays-900 dark:text-grays-100 ')+
                            'inline-block pl-2'
                        }
                    > 
                        ({props.country.dial_code})
                    </span>
                </div>
                {
                    (props.isSelected)&&(
                        <RiCheckFill className="text-primary-600 dark:text-primary-400"/>
                    )
                }
            </div>
        </button>
    )
}

export default ItemDropdownFlag