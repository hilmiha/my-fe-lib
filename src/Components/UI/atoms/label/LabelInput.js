const LabelInput = (props) =>{
    if(props.label !== '' && props.label !==undefined){
        return(
            <span className={"text-primary-700 dark:text-primary-300 block " + (props.marginNull?('m-0'):('mb-2'))}>
                {props.label}
            </span>
        )
    }else{
        return(
            <></>
        )
    }
    
}

export default LabelInput