import { useEffect, useState } from "react";
import { RiCheckboxCircleFill, RiErrorWarningFill } from "react-icons/ri";

const InputTextArea = (props) =>{

    function detectScrollbar()
    {
        const elem = document.getElementById(props.schema.field);
        if (elem.clientHeight < elem.scrollHeight)
            return true
        else
            return false
    }

    const [hasScrollbar, setHasScrollbar] = useState(false)

    const setValue = (event) =>{
        setHasScrollbar(detectScrollbar())
        props.setValue(event.target.value)
    }

    

    useEffect(()=>{
        setHasScrollbar(detectScrollbar())
    },[])
    

    

    return(
        <div className="relative rounded-3xl">
            {
                props.isError?(
                    <RiErrorWarningFill className="text-danger-500 absolute top-4 right-4"/>
                ):(
                    props.isWarning?(
                        <RiErrorWarningFill className={"text-warning-500 absolute top-4 "+(hasScrollbar?('right-8'):('right-4')) }/>
                    ):(
                        props.isSuccess&&(
                            <RiCheckboxCircleFill className="text-success-500 absolute top-4 right-4"/>
                        )
                    )
                )
            }
            <textarea
                id={props.schema.field}
                value={props.value}
                onChange={setValue}

                rows={10}
                disabled={props.schema.isDisabled}
                placeholder={props.schema.placeholder}
                minLength={props.schema.minLength}
                maxLength={(props.schema.maxLength?(props.schema.maxLength+1):(undefined))}
                className={
                    "w-full rounded-md text-grays-900 dark:text-grays-100 placeholder-grays-300 dark:placeholder-grays-700 "+
                    (props.schema.isDisabled?(
                        "bg-grays-200 dark:bg-grays-800 "
                    ):(
                        "bg-base-background-top dark:bg-baseDark-background-top "
                    )) 
                    + "border focus:ring-2 focus:outline-none " +
                    (props.isError?(
                        "pl-4 pr-12 py-2 border-danger-500 focus:ring-danger-200 dark:focus:ring-danger-800 "
                    ):(
                        props.isWarning?(
                            "pl-4 pr-12 py-2 border-warning-500 focus:ring-warning-200 dark:focus:ring-warning-800 "
                        ):(
                            props.isSuccess?(
                                "pl-4 pr-12 py-2 border-success-500 focus:ring-success-200 dark:focus:ring-success-800 "
                            ):(
                                (props.schema.isDisabled?('border-grays-200 dark:border-grays-800 '):('border-grays-300 dark:border-grays-700 '))+"px-4 py-2 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-200 dark:focus:ring-primary-800"
                            )
                        )
                    ))
                }
            >
            </textarea>
        </div>
    )
}

export default InputTextArea