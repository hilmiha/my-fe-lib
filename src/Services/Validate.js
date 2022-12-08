import parseMax, {isValidPhoneNumber, parsePhoneNumber} from 'libphonenumber-js/max'

export const validate = (value, validationList, option) =>{
    let errorMessage = []

    for (const key in validationList) {
        switch (key) {
            case 'isRequired':
                if(validationList.isRequired && (value==='' || value===null || value===undefined || value==false)){
                    errorMessage.push('This Field Is Required')
                }
                break;

            case 'minLength':
                if(value.length < validationList.minLength){
                    errorMessage.push('Minimum '+validationList.minLength+' Characters')
                }
                break;

            case 'maxLength':
                if(value.length > validationList.maxLength){
                    errorMessage.push('Maximum '+validationList.maxLength+' Characters ['+(value.length)+'/'+validationList.maxLength+']')
                }
                break;
            
            case 'isEmail':
                const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
                if(validationList.isEmail && value!=='' && !(emailRegx.test(value))){
                    errorMessage.push('Email Address In Invalid')
                }
                break;
            
            case 'validPhoneNum':
                let countryOriginDiff = false
                if(option?.phoneNumberOrigin && value!==''){
                    // console.log(parseMax(value)?.country)
                    // console.log(option.phoneNumberOrigin)
                    if(parseMax(value)?.country){
                        countryOriginDiff = (parseMax(value)?.country !== option.phoneNumberOrigin)
                    }
                }

                if((validationList.validPhoneNum && isValidPhoneNumber(value)===false && value!=='') || countryOriginDiff ){
                    errorMessage.push('Phone Number Is Invalid')
                }
                break;

            case 'validPhoneNumFor':
                if(validationList.validPhoneNumFor === 'all'){
                    if(isValidPhoneNumber(value)===false && value!==''){
                        errorMessage.push('Phone Number Is Invalid')
                    }
                }else{
                    if(isValidPhoneNumber(value, validationList.validPhoneNumFor)===false && value!==''){
                        errorMessage.push('Phone Number Is Invalid')
                    }
                }   
                break;

            case 'min':
                if(validationList.min!==undefined && (value < validationList.min)){
                    errorMessage.push('Minimum Value Is ' + validationList.min)
                }
                break;

            case 'max':
                if(validationList.max!==undefined && (value > validationList.max)){
                    errorMessage.push('Maximum Value Is ' + validationList.max)
                }
                break;

            case 'minSelected':
                if(validationList.minSelected!==undefined &&(value.length < validationList.minSelected)){
                    errorMessage.push('Minimum Selected Item ' + validationList.minSelected)
                }
                break;

            case 'maxSelected':
                if(validationList.maxSelected!==undefined &&(value.length > validationList.maxSelected)){
                    errorMessage.push('Maximum Selected Item ' + validationList.maxSelected)
                }
                break;
        
            default:
                break;
        }
    }
    
    return(errorMessage)
}