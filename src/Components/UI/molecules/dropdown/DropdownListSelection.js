import FormInput from "../form-input/FormInput"
import ListItem from "../list/ListItem";

import { useContext, useEffect, useState } from "react";

import { WindowContext } from "../../../../Contexts/WindowContext";
import ListSelection from "../list/ListSelection";

const DropdownListSelection = (props) =>{
    const {windowSize} = useContext(WindowContext)
    
    const handleParentClick = event => {
        event.preventDefault();
    
        if (event.target === event.currentTarget) {
          props.showSelection()
        }
    };
      
    useEffect(()=>{
        if(windowSize<=2){
            document.body.style.overflow = 'hidden';
            return()=>{
                document.body.style.overflow = 'unset';
            }
        }
    },[windowSize])

    if(windowSize<=2){
        return(
            <div className="absolute top-0 left-0 w-full h-full">
                <div 
                    className="sticky top-0 backdrop-blur-sm bg-base-background/60 dark:bg-baseDark-background-top/40  h-screen z-10 flex justify-center items-start px-4 pt-16"
                    onClick={handleParentClick}
                >
                    <div className="bg-base-background-mid dark:bg-baseDark-background-mid w-full border border-grays-300 dark:border-grays-700 max-h-[400px] overflow-y-scroll rounded-md">
                        <ListSelection 
                            schema={props.schema}
                            itemType={props.itemType}
                            setValue={props.setValue}
                            value={props.value}
                        />
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className="absolute top-full left-0 bg-base-background-mid dark:bg-baseDark-background-mid w-full border border-grays-300 dark:border-grays-700 max-h-80 overflow-y-scroll z-10 rounded-md mt-1">
                <ListSelection
                    schema={props.schema}
                    itemType={props.itemType}
                    setValue={props.setValue}
                    value={props.value}
                />
            </div>
        )
    }
}

export default DropdownListSelection