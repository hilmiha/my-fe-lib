import './InputMultiSelection.css'
import { RiCheckboxCircleFill, RiErrorWarningFill, RiArrowDownSLine, RiArrowUpSLine} from "react-icons/ri";
import { useContext, useEffect, useRef, useState } from "react";
import ClickOutsiteDetector from "../wrapper/ClickOutsiteDetector";
import FocusTrap from 'focus-trap-react'

import { WindowContext } from "../../../../Contexts/WindowContext";
import DropdownListMultiSelection from "../../molecules/dropdown/DropdownListMultiSelection";

const InputMultiSelection = (props) =>{
    const {windowSize} = useContext(WindowContext)
    
    const [isSelectionShown, setIsSelectionShown] = useState(false)
    const showSelection = (e) =>{
        if(e){
            e.preventDefault()
        }
        if(!props.schema.isDisabled){
            setIsSelectionShown(!isSelectionShown)
        }
    }

    const [pillSelected, setPillSelected] = useState([])
    const setingUpPillSelected = (value) =>{
        const collections = [...props.schema.listSelection]
        let tampListItemsLabel = []
        collections.forEach((collection)=>{
            collection.list.forEach((itm)=>{
                if(value.includes(itm.value)){
                    tampListItemsLabel.push(itm.label)
                }
            })
        })
        setPillSelected(tampListItemsLabel)
    }

    const setValue = (value) =>{
        setingUpPillSelected(value)
        props.setValue(value)
    }

    useEffect(()=>{
        setingUpPillSelected(props.value)
    },[])

    const buttonSelect = useRef(null);
    return(
        <FocusTrap active={isSelectionShown}>
            <div className={(isSelectionShown && windowSize<=2)?(''):('relative')}>
                <a 
                    href="/" 
                    onClick={showSelection} 
                    tabIndex={(props.schema.isDisabled?(-1):(0))}
                    ref={buttonSelect}
                    className={
                        "w-full flex justify-between items-center rounded-md text-grays-900 dark:text-grays-100 placeholder-grays-300 dark:placeholder-grays-700 "+
                        (props.schema.isDisabled?(
                            "bg-grays-200 dark:bg-grays-800 cursor-default "
                        ):(
                            "bg-base-background-top dark:bg-baseDark-background-top "
                        ))
                        + "border focus:outline-none disabled:focus:ring-0 pl-4 pt-2 " +
                        (props.value.length!==0?('pb-0 '):('pb-2 ')) +
                        (props.isError?(
                            "pr-20 border-danger-500 focus:ring-2 focus:ring-danger-200 dark:focus:ring-danger-800 "
                        ):(
                            props.isWarning?(
                                "pr-20 border-warning-500 focus:ring-2 focus:ring-warning-200 dark:focus:ring-warning-800 "
                            ):(
                                props.isSuccess?(
                                    "pr-20 border-success-500 focus:ring-2 focus:ring-success-200 dark:focus:ring-success-800 "
                                ):(
                                    (props.schema.isDisabled?('border-grays-200 dark:border-grays-800 focus:ring-0 '):('border-grays-300 dark:border-grays-700 focus:ring-2 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-200 dark:focus:ring-primary-800 '))+"pr-12 "
                                )
                            )
                        ))
                    }  
                >
                    <div className="w-full">
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
                        <div >
                            <div>
                                {
                                    pillSelected.length!==0?(
                                        // <span>{selectedItemLable}</span>
                                        <div className="flex overflow-auto selectedList">
                                            {
                                                pillSelected.map((item)=>{
                                                    return(
                                                        <div className="bg-primary-200 rounded-md px-2 mr-2 text-primary-700 text-xs py-[2px] mb-2 whitespace-nowrap" key={item}>
                                                            {item}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    ):(
                                        <span className="text-grays-300 dark:text-grays-700">{props.schema.placeholder}</span>
                                    )
                                }
                            </div>
                            
                        </div>
                    </div>
                </a>
                
                {
                    isSelectionShown&&(
                        <ClickOutsiteDetector action={showSelection} buttonRef={buttonSelect}>
                            <DropdownListMultiSelection
                                schema={props.schema}
                                itemType={'dropdownItemCheckbox'}
                                showSelection={showSelection}
                                value={props.value}
                                setValue={setValue} 

                                selectedItemLable={''}
                                errorList={props.errorList}
                                warningList={props.warningList}
                                successList={props.successList}
                                isError={props.isError}
                                isWarning={props.isWarning}
                                isSuccess={props.isSuccess}
                            />
                        </ClickOutsiteDetector>
                    )
                }
            </div>
        </FocusTrap>
    )
}

export default InputMultiSelection