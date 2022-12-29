const ItemNavTop = (props) =>{

    const onClickItemAction = () =>{
        props.onClickItemAction(props.schema.value)
    }

    return(
        <button 
            ref={props.schema.ref?(props.schema.ref):(undefined)}
            className={
                "w-full flex items-center text-left px-4 min-h-[38px] rounded-md border focus:ring-2 focus:outline-none " +
                (
                    props.isActive?(
                        'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 border-primary-200 dark:border-primary-800 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-200 dark:focus:ring-primary-800'
                    ):(
                        props.isHovered?(
                            'bg-base-background-mid dark:bg-baseDark-background-mid border-grays-300 dark:border-grays-700 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-200 dark:focus:ring-primary-800'
                        ):(
                            (props.schema.isBordered?('border-grays-300 dark:border-gray-700 '):('border-transparent hover:border-grays-300 dark:hover:border-grays-700 ')) +
                            'bg-base-background-top dark:bg-baseDark-background-top hover:bg-base-background-mid dark:hover:bg-baseDark-background-mid focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-200 dark:focus:ring-primary-800'
                        )
                        
                    )
                )
            }
            onClick={onClickItemAction}
        >
            <div className="grow flex items-center pointer-events-none ">
                {
                    props.schema.icon&&(
                        <span className="mr-4">{props.schema.icon}</span>
                    )
                }
                {
                    props.schema.label&&(
                        <span>{props.schema.label}</span>
                    )
                }
            </div>
            {
                props.schema.secIcon&&(
                    <div className="flex items-center ml-4 pointer-events-none ">
                        <span>{props.schema.secIcon}</span>
                    </div>
                )
            }
            
        </button>
    )
}

export default ItemNavTop