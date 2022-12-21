import { useState } from 'react'
import { RiCheckboxCircleFill, RiErrorWarningFill } from "react-icons/ri";

import './ToggleThick.css'


const ToggleThick = (props) =>{

    const changChecked = () =>{
        if(!props.schema.isDisabled){
            props.setValue(!props.value)
        }
    }
    return(
        <div className='flex items-center'>
            <button type='button' 
                className={
                    "relative border focus:border-primary-500 dark:focus:border-primary-500 border-grays-300 dark:border-grays-700 focus:ring focus:ring-primary-200 dark:focus:ring-primary-800 focus:outline-none mr-4 rounded-full"
                }
                onClick={changChecked}
                disabled={props.schema.isDisabled}
            >
                {/* <!-- input --> */}
                <input type="checkbox" tabIndex={-1} className="sr-only" checked={props.value} onChange={changChecked} disabled={props.schema.isDisabled}/>
                {/* <!-- line --> */}
                <div className={
                    'base block w-12 h-6 rounded-full '+ 
                    (props.schema.isDisabled?('bg-grays-200 dark:bg-grays-800 '):("bg-base-background-mid dark:bg-baseDark-background-mid "))
                }></div>
                {/* <!-- dot --> */}
                <div className={
                    "dot absolute left-1 top-1 w-4 h-4 rounded-full transition " + 
                    (props.schema.isDisabled?('bg-grays-400 dark:bg-grays-600'):('bg-grays-500 dark:bg-grays-700'))
                    
                }></div>
            </button>
            <div className={(props.schema.isDisabled?('cursor-default '):('cursor-pointer '))+'text-grays-900 dark:text-grays-100'}  onClick={changChecked}>
                {
                    props.schema.label&&(
                        props.schema.label
                    )
                }
            </div>
            {
                props.isError?(
                    <RiErrorWarningFill className="text-danger-500 ml-4"/>
                ):(
                    props.isWarning?(
                        <RiErrorWarningFill className="text-warning-500 ml-4"/>
                    ):(
                        props.isSuccess&&(
                            <RiCheckboxCircleFill className="text-success-500 ml-4"/>
                        )
                    )
                )
            }
            
        </div>
    )
}

export default ToggleThick