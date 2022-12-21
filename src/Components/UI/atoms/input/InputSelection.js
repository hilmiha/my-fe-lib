import FormInput from "../../molecules/form-input/FormInput"
import { RiCheckboxCircleFill, RiErrorWarningFill, RiArrowDownSLine, RiArrowUpSLine, RiCheckFill} from "react-icons/ri";
import { useContext, useEffect, useRef, useState } from "react";
import ClickOutsiteDetector from "../wrapper/ClickOutsiteDetector";
import FocusTrap from 'focus-trap-react'

import { WindowContext } from "../../../../Contexts/WindowContext";
import DropdownListSelection from "../../molecules/dropdown/DropdownListSelection";

const InputSelection = (props) =>{
    const {windowSize} = useContext(WindowContext)
    
    const [isSelectionShown, setIsSelectionShown] = useState(false)
    const showSelection = () =>{
        if(!props.schema.isDisabled){
            setIsSelectionShown(!isSelectionShown)
        }
    }

    const [selectedItemLable, setSelectedItemLabel] = useState('')
    const setingUpSelectedItemLabel = (value) =>{
        const collections = [...props.schema.listSelection]
        let tampItemsLabel = ''

        collections.forEach((collection)=>{
            collection.list.forEach((itm)=>{
                if(value === itm.value){
                    tampItemsLabel = itm.label
                }
            })
        })

        setSelectedItemLabel(tampItemsLabel)
    }
    const setValue = (value) =>{
        setingUpSelectedItemLabel(value)

        props.setValue(value)
        showSelection()
    }

    useEffect(()=>{
        setingUpSelectedItemLabel(props.value)
    },[])

    const buttonSelect = useRef(null);
    return(
        <FocusTrap active={isSelectionShown}>
            <div className={(isSelectionShown && windowSize<=2)?(''):('relative')}>
                
                <div className="relative" onClick={showSelection}>
                    {
                        props.isError?(
                            <div className="absolute right-4 top-1/3 flex">
                                {
                                    isSelectionShown?(
                                        <RiArrowUpSLine className="text-grays-400 dark:text-grays-600 cursor-pointer"/>
                                    ):(
                                        <RiArrowDownSLine className="text-grays-400 dark:text-grays-600 cursor-pointer"/>
                                    )
                                }
                                <RiErrorWarningFill className="text-danger-500 ml-4"/>
                            </div>
                        ):(
                            props.isWarning?(
                                <div className="absolute right-4 top-1/3 flex">
                                    {
                                        isSelectionShown?(
                                            <RiArrowUpSLine className="text-grays-400 dark:text-grays-600 cursor-pointer"/>
                                        ):(
                                            <RiArrowDownSLine className="text-grays-400 dark:text-grays-600 cursor-pointer"/>
                                        )
                                    }
                                    <RiErrorWarningFill className="text-warning-500 ml-4"/>
                                </div>
                            ):(
                                props.isSuccess?(
                                    <div className="absolute right-4 top-1/3 flex">
                                        {
                                            isSelectionShown?(
                                                <RiArrowUpSLine className="text-grays-400 dark:text-grays-600 cursor-pointer"/>
                                            ):(
                                                <RiArrowDownSLine className="text-grays-400 dark:text-grays-600 cursor-pointer"/>
                                            )
                                        }
                                        <RiCheckboxCircleFill className="text-success-500 ml-4"/>
                                    </div>
                                ):(
                                    <div className="absolute right-4 top-1/3 flex">
                                        {
                                            isSelectionShown?(
                                                <RiArrowUpSLine className="text-grays-400 dark:text-grays-600 cursor-pointer"/>
                                            ):(
                                                <RiArrowDownSLine className="text-grays-400 dark:text-grays-600 cursor-pointer"/>
                                            )
                                        }
                                    </div>
                                )
                            )
                        )
                    }
                    <button 
                        ref={buttonSelect}
                        type="button"
                        className={
                            "w-full flex justify-between items-center rounded-md text-grays-900 dark:text-grays-100 placeholder-grays-300 dark:placeholder-grays-700 "+
                            (props.schema.isDisabled?(
                                "bg-grays-200 dark:bg-grays-800 cursor-default "
                            ):(
                                "bg-base-background-top dark:bg-baseDark-background-top "
                            ))
                            + "border focus:outline-none disabled:focus:ring-0 pl-4 py-2 " +
                            (props.isError?(
                                "pr-20 border-danger-500 focus:ring-danger-200 dark:focus:ring-danger-800 "
                            ):(
                                props.isWarning?(
                                    "pr-20 border-warning-500 focus:ring-warning-200 dark:focus:ring-warning-800 "
                                ):(
                                    props.isSuccess?(
                                        "pr-20 border-success-500 focus:ring-success-200 dark:focus:ring-success-800 "
                                    ):(
                                        (props.schema.isDisabled?('border-grays-200 dark:border-grays-800 focus:ring-0 '):('border-grays-300 dark:border-grays-700 focus:ring-2 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-200 dark:focus:ring-primary-800 '))+"pr-12 "
                                    )
                                )
                            ))
                        }
                    >
                        <div>
                            {
                                selectedItemLable!==''?(
                                    <span>{selectedItemLable}</span>
                                ):(
                                    <span className="text-grays-300 dark:text-grays-700">{props.schema.placeholder}</span>
                                )
                            }
                        </div>
                        
                    </button>
                </div>
                
                {
                    isSelectionShown&&(
                        <ClickOutsiteDetector action={showSelection} buttonRef={buttonSelect}>
                            <DropdownListSelection 
                                schema ={props.schema}
                                itemType={'dropdownItem'}
                                value={props.value}
                                setValue={setValue} 

                                showSelection={showSelection}

                                
                                // listSelection={props.schema.listSelection} 
                                
                                // isSearchInput={props.schema.isSearchInput}
                            />
                        </ClickOutsiteDetector>
                    )
                }
                
            </div>
        </FocusTrap>
    )
}

export default InputSelection