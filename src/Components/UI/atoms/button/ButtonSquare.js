const ButtonSquare = (props) =>{

    const onClickAction = () =>{
        props.onClickAction()
    }

    let size = 'w-[38px] h-[38px] '

    if(props.schema.size!==undefined){
        switch (props.schema.size) {
            case 'sm':
                size = 'w-[24px] h-[24px] '
                break;
            case 'md':
                size = 'w-[38px] h-[38px] '
                break;
            case 'lg':
                size = 'w-[52px] h-[52px] '
                break;
        
            default:
                break;
        }
    }

    return(
        <button
            ref={props.schema.ref?(props.schema.ref):(undefined)}
            type="button"
            className={
                (props.schema.idFullWidht?('w-full '):('')) +
                (props.schema.isBordered?('border '):('')) +
                "rounded-md border focus:ring-2 focus:outline-none " + size +
                (props.schema.theme==='primary'?(
                    (props.schema.isBordered?('border-primary-300 dark:border-primary-700 '):('border-transparent hover:border-grays-300 hover:dark:border-grays-700 ')) +
                    "text-grays-100 bg-primary-600 hover:bg-primary-500 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-200 dark:focus:ring-primary-800"
                ):(
                    props.schema.theme==='secondary'?(
                        (props.schema.isBordered?('border-primary-200 dark:border-primary-300 '):('border-transparent hover:border-grays-300 hover:dark:border-grays-700 ')) +
                        "text-primary-600 dark:text-primary-700  bg-primary-200 dark:bg-primary-300 hover:border-primary-600 hover:dark:border-primary-700 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-200 dark:focus:ring-primary-800"
                    ):(
                        (props.schema.isBordered?('border-grays-300 dark:border-grays-700 '):('border-transparent hover:border-grays-300 hover:dark:border-grays-700 ')) +
                        "text-grays-500 bg-base-background-top dark:bg-baseDark-background-top hover:bg-grays-100 hover:dark:bg-grays-900 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-200 dark:focus:ring-primary-800"
                    )
                ))
            }
            onClick={onClickAction}
        >
            <div className="flex justify-center items-center">
                
                {props.schema.icon!==undefined?(
                    <span>{props.schema.icon}</span>
                ):(
                    <>
                        {props.schema.label!==undefined?(
                            <span>{props.schema.label[0]}</span>
                        ):(
                            <></>
                        )}
                    </>
                )}
            </div>
        </button>
    )
}

export default ButtonSquare