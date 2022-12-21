import { useState } from "react"
import { BsCheckLg } from "react-icons/bs";
import { RiCheckboxCircleFill, RiErrorWarningFill } from "react-icons/ri";


const Checkbox = (props) =>{
    const onClick = () =>{
        if(!props.schema.isDisabled){
            if(props.value!==true && props.value!==false){
                props.onClick({
                    value:props.value ,
                    label:props.label
                })
            }else{
                props.onClick(!props.isSelected)
            }
        }
    }

    return(

        <div className='relative'>
            <div className="flex items-center">
                <button type='button' 
                    className={
                        (props.isSelected?(
                            (props.schema.isDisabled?('bg-primary-100 dark:bg-primary-200 '):('bg-primary-200 dark:bg-primary-300 '))
                        ):(
                            (props.schema.isDisabled?("bg-grays-200 dark:bg-grays-800 "):("bg-base-background-top dark:bg-baseDark-background-top "))
                        ))+
                        "flex items-center justify-center h-6 w-6 relative border focus:border-primary-500 dark:focus:border-primary-500 border-grays-300 dark:border-grays-700 focus:ring focus:ring-primary-200 dark:focus:ring-primary-800 focus:outline-none mr-4 rounded-md" 
                    }
                    onClick={onClick}
                    disabled={props.schema.isDisabled}
                >
                    <input type="checkbox" tabIndex={-1} className="sr-only" checked={props.isSelected} onChange={onClick} disabled={props.schema.isDisabled}/>
                    
                    {
                        props.schema.isDisabled?(
                            <BsCheckLg className={(props.isSelected?('block '):('hidden '))+'text-primary-300 dark:text-primary-400 text-xs'}/>
                        ):(
                            <BsCheckLg className={(props.isSelected?('block '):('hidden '))+'text-primary-500 dark:text-primary-700 text-xs'}/>
                        )
                    }
                </button>
                <div className={(props.schema.isDisabled?('cursor-default '):('cursor-pointer '))+'text-grays-900 dark:text-grays-100'} onClick={onClick}>
                    {
                        props.schema.label&&(
                            props.schema.label
                        )
                    }
                </div>
            </div>
            <div className="absolute top-1 right-0">
                {
                    props.isError?(
                        <RiErrorWarningFill className="text-danger-500 ml-2"/>
                    ):(
                        props.isWarning?(
                            <RiErrorWarningFill className="text-warning-500 ml-2"/>
                        ):(
                            props.isSuccess&&(
                                <RiCheckboxCircleFill className="text-success-500 ml-2"/>
                            )
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Checkbox