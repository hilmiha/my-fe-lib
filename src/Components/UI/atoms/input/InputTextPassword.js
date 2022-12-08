import { useState } from "react";
import { RiCheckboxCircleFill, RiErrorWarningFill, RiLockPasswordFill, RiEyeFill, RiEyeCloseLine } from "react-icons/ri";


const EyeOpen = (props) =>{
    return(
        <RiEyeFill/>
    )
}

const EyeClose = (props) =>{
    return(
        <RiEyeCloseLine />
    )
}

const EyePassword = (props) =>{
    return(
        <button
            type="button"
            className="text-grays-400 dark:text-grays-600 cursor-pointer rounded-md border border-transparent focus:ring-2 focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-200 dark:focus:ring-primary-800" 
            onClick={props.showPassword}
        >
            {
                props.isPasswordShown?(
                    <EyeClose showPassword={props.showPassword}/>
                    
                ):(
                    <EyeOpen showPassword={props.showPassword}/>
                )
            }
        </button>
    )
}

const InputTextPassword = (props) =>{

    const setValue = (event) =>{
        props.setValue(event.target.value)
    }

    const [isPasswordShown, setIsPasswordShown] = useState(false)

    const showPassword = () =>{
        setIsPasswordShown(!isPasswordShown)
    }

    return(
        <div className="relative">
            {
                props.schema.isShowIcon&&(
                    <RiLockPasswordFill className="text-grays-500 absolute top-1/3 left-4"/>
                )
            }
            

            <input 
                type={isPasswordShown?('text'):('password')}
                disabled={props.schema.isDisabled}
                placeholder={props.schema.placeholder}
                minLength={props.schema.minLength}
                maxLength={(props.schema.maxLength?(props.schema.maxLength+1):(undefined))}

                autoComplete="on"

                value={props.value}
                onChange={setValue}
                className={
                    "w-full rounded-md text-grays-900 dark:text-grays-100 "+
                    (props.schema.isDisabled?(
                        "bg-grays-200 dark:bg-grays-800 placeholder-grays-400 dark:placeholder-grays-600 "
                    ):(
                        "bg-grays-100 dark:bg-grays-900 placeholder-grays-400 dark:placeholder-grays-600 "
                    )) 
                    + "border focus:ring-2 focus:outline-none py-2 " +
                    (props.schema.isShowIcon?('pl-12 '):('pl-4 '))+
                    (props.isError?(
                        "pr-20 border-danger-500 focus:ring-danger-200 dark:focus:ring-danger-800 "
                    ):(
                        props.isWarning?(
                            "pr-20 border-warning-500 focus:ring-warning-200 dark:focus:ring-warning-800 "
                        ):(
                            props.isSuccess?(
                                "pr-20 border-success-500 focus:ring-success-200 dark:focus:ring-success-800 "
                            ):(
                                (props.schema.isDisabled?('border-grays-200 dark:border-grays-800 '):('border-grays-300 dark:border-grays-700 '))+"pr-12 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-200 dark:focus:ring-primary-800 "
                            )
                        )
                    ))
                }
            />
            {
                props.isError?(
                    <div className="absolute right-4 top-1/3 flex">
                        <EyePassword isPasswordShown={isPasswordShown} showPassword={showPassword}/>
                        <RiErrorWarningFill className="text-danger-500 ml-4"/>
                    </div>
                ):(
                    props.isWarning?(
                        <div className="absolute right-4 top-1/3 flex">
                            <EyePassword isPasswordShown={isPasswordShown} showPassword={showPassword}/>
                            <RiErrorWarningFill className="text-warning-500 ml-4"/>
                        </div>
                    ):(
                        props.isSuccess?(
                            <div className="absolute right-4 top-1/3 flex">
                                <EyePassword isPasswordShown={isPasswordShown} showPassword={showPassword}/>
                                <RiCheckboxCircleFill className="text-success-500 ml-4"/>
                            </div>
                        ):(
                            <div className="absolute right-4 top-1/3 flex">
                                <EyePassword isPasswordShown={isPasswordShown} showPassword={showPassword}/>
                            </div>
                        )
                    )
                )
            }
        </div>
    )
}

export default InputTextPassword