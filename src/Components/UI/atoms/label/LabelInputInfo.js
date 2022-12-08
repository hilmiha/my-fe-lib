const LabelInputInfo = (props) =>{
    if(props.errorList?.length > 0){
        return(
            <span 
                className="
                    block
                    text-right
                    mt-1
                    text-danger-500"
            >
                {props.errorList[0]}
            </span>
        )
    }else if(props.warningList?.length > 0){
        return(
            <span 
                className="
                    block
                    text-right
                    mt-1
                    text-warning-500"
            >
                {props.warningList[0]}
            </span>
        )
    }else if(props.successList?.length > 0){
        return(
            <span 
                className="
                    block
                    text-right
                    mt-1
                    text-success-500"
            >
                {props.successList[0]}
            </span>
        )
    }else{
        return(
            <span className="block mt-1 whitespace-pre">
                {" "}
            </span>
        )
    }
}

export default LabelInputInfo