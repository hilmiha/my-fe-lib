import { useState } from 'react'
import { RiCheckboxCircleFill, RiErrorWarningFill } from "react-icons/ri";

import './ToggleThick.css'


const ToggleThick = (props) =>{

    const changChecked = () =>{
        props.setValue(!props.value)
    }
    return(
        <div className='flex items-center'>
            <button type='button' 
                className="relative border focus:border-primary-500 dark:focus:border-primary-500 border-grays-300 dark:border-grays-700 focus:ring focus:ring-primary-200 dark:focus:ring-primary-800 focus:outline-none mr-4 rounded-full" onClick={changChecked}
            >
                {/* <!-- input --> */}
                <input type="checkbox" tabIndex={-1} className="sr-only" checked={props.value} onChange={changChecked}/>
                {/* <!-- line --> */}
                <div className="base block bg-grays-100 dark:bg-grays-900 w-12 h-6 rounded-full"></div>
                {/* <!-- dot --> */}
                <div className="dot absolute left-1 top-1 bg-grays-500 w-4 h-4 rounded-full transition"></div>
            </button>
            <div className='cursor-pointer'  onClick={changChecked}>
                {
                    props.label&&(
                        props.label
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