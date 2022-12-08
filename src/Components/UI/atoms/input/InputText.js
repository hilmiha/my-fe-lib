import { RiCheckboxCircleFill, RiErrorWarningFill } from "react-icons/ri";



const InputText = (props) =>{

    const setValue = (event) =>{
        props.setValue(event.target.value)
    }

    return(
        <div className="relative">
            {
                props.isError?(
                    <RiErrorWarningFill className="text-danger-500 absolute top-1/3 right-4"/>
                ):(
                    props.isWarning?(
                        <RiErrorWarningFill className="text-warning-500 absolute top-1/3 right-4"/>
                    ):(
                        props.isSuccess&&(
                            <RiCheckboxCircleFill className="text-success-500 absolute top-1/3 right-4"/>
                        )
                    )
                )
            }
            <input 
                type='text'
                disabled={props.schema.isDisabled}
                placeholder={props.schema.placeholder}
                minLength={props.schema.minLength}
                maxLength={(props.schema.maxLength?(props.schema.maxLength+1):(undefined))}

                value={props.value}
                onChange={setValue}
                className={
                    "w-full rounded-md text-grays-900 dark:text-grays-100 "+
                    (props.schema.isDisabled?(
                        "bg-grays-200 dark:bg-grays-800 placeholder-grays-400 dark:placeholder-grays-600 "
                    ):(
                        "bg-grays-100 dark:bg-grays-900 placeholder-grays-400 dark:placeholder-grays-600 "
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
            />
        </div>
    )
}

export default InputText