const Button = (props) =>{

    const onClickAction = () =>{
        props.onClickAction()
    }

    return(
        <button
            type="button"
            className={
                (props.schema.widht!==undefined?(props.schema.widht+' '):('')) +
                "rounded-md border px-4 py-2 focus:ring-2 focus:outline-none " +
                (props.schema.theme==='primary'?(
                    "text-grays-100 border-primary-300 dark:border-primary-700 bg-primary-600 hover:bg-primary-500 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-200 dark:focus:ring-primary-800"
                ):(
                    props.schema.theme==='secondary'?(
                        "text-primary-600 dark:text-primary-700 border-primary-200 dark:border-primary-300 bg-primary-200 dark:bg-primary-300 hover:border-primary-600 hover:dark:border-primary-700 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-200 dark:focus:ring-primary-800"
                    ):(
                        "text-grays-500 border-grays-300 dark:border-grays-700 bg-base-background-top dark:bg-baseDark-background-top hover:bg-grays-100 hover:dark:bg-grays-900 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-200 dark:focus:ring-primary-800"
                    )
                ))
            }
            onClick={onClickAction}
        >
            <div className="flex justify-center items-center">
                {props.schema.icon!==undefined&&(<span className="mr-1">{props.schema.icon}</span>)}
                {props.schema.label}
            </div>
        </button>
    )
}

export default Button