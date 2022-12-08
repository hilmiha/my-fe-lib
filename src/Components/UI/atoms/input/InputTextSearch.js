import './InputTextSearch.css'
import { RiCheckboxCircleFill, RiErrorWarningFill, RiSearchEyeLine, RiCloseFill } from "react-icons/ri";

const CrossClearSearch = (props) =>{
    return(
        <>
            {
                props.value!==''&&(
                    <RiCloseFill className='text-grays-400 dark:text-grays-600 cursor-pointer' onClick={props.clearSearchField}/>
                )
            }
        </>
    )
}
const InputTextSearch = (props) =>{

    const setValue = (event) =>{
        props.setValue(event.target.value)
    }

    const clearSearchField = () =>{
        props.setValue('')
    }
    

    return(
        <div className="relative">
            {
                props.schema.isShowIcon&&(
                    <RiSearchEyeLine className="absolite text-grays-500 absolute top-1/3 left-4"/>
                )
            }
            {
                props.isError?(
                    <div className="absolute right-4 top-1/3 flex">
                        <CrossClearSearch value={props.value} clearSearchField={clearSearchField}/>
                        <RiErrorWarningFill className="text-danger-500 ml-4"/>
                    </div>
                ):(
                    props.isWarning?(
                        <div className="absolute right-4 top-1/3 flex">
                            <CrossClearSearch value={props.value} clearSearchField={clearSearchField}/>
                            <RiErrorWarningFill className="text-warning-500 ml-4"/>
                        </div>
                    ):(
                        props.isSuccess?(
                            <div className="absolute right-4 top-1/3 flex">
                                <CrossClearSearch value={props.value} clearSearchField={clearSearchField}/>
                                <RiCheckboxCircleFill className="text-success-500 ml-4"/>
                            </div>
                        ):(
                            <div className="absolute right-4 top-1/3 flex">
                                <CrossClearSearch value={props.value} clearSearchField={clearSearchField}/>
                            </div>
                        )
                    )
                )
            }

            <input 
                type={'search'}
                disabled={props.schema.isDisabled}
                placeholder={props.schema.placeholder}
                minLength={props.schema.minLength}
                maxLength={(props.schema.maxLength?(props.schema.maxLength+1):(undefined))}

                value={props.value}
                onChange={setValue}
                className={
                    "searchCostum w-full rounded-md text-grays-900 dark:text-grays-100 "+
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
        </div>
    )
}

export default InputTextSearch