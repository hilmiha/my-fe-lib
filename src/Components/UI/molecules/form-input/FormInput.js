import { validate } from "../../../../Services/Validate"

import LabelInput from "../../atoms/label/LabelInput"
import LabelInputInfo from "../../atoms/label/LabelInputInfo"
import InputText from "../../atoms/input/InputText"
import InputTextNumberic from "../../atoms/input/InputTextNumberic"
import InputTextEmail from "../../atoms/input/InputTextEmail"
import InputTextPassword from "../../atoms/input/InputTextPassword"
import InputTextSearch from "../../atoms/input/InputTextSearch"
import InputTextArea from "../../atoms/input/InputTextArea"
import InputPhoneNumber from "../../atoms/input/InputPhoneNumber"
import InputSelection from "../../atoms/input/InputSelection"
import InputNumber from "../../atoms/input/InputNumber"
import ToggleThick from "../../atoms/input/ToggleThick"
import Checkbox from "../../atoms/input/Checkbox"
import ListItem from "../list/ListItem"
import ListMultiSelection from "../list/ListMultiSelection"
import InputMultiSelection from "../../atoms/input/InputMultiSelection"

const FormInput = (props) =>{
    const field = props.schema.field

    const doWarningValidation = (value, option) =>{
        const tempFieldInfo = {...props.fieldInfo}
        tempFieldInfo.warning[field]=validate(value,props.schema.warningValidationList, option)
        props.setFieldInfo(tempFieldInfo)
    }
    
    const setValue = (value, option) =>{
        const tempFieldValue = {...props.fieldList}
        if(value !== tempFieldValue[field]){
            tempFieldValue[field] = value
            props.setFieldList(tempFieldValue)
            
            doWarningValidation(value, option)
        }
        
    }

    switch (props.schema.type) {
        case 'inputText':
            return(
                <div>
                    <LabelInput label={props.schema.label}/>
                    <InputText
                        schema={props.schema}
                        isError={props.fieldInfo.error[field]?.length > 0}
                        isWarning={props.fieldInfo.warning[field]?.length > 0}
                        isSuccess={props.fieldInfo.success[field] !== undefined}
                        value={props.fieldList[field]}
                        setValue={setValue}
                    />
                    <LabelInputInfo
                        errorList={props.fieldInfo.error[field]}
                        warningList={props.fieldInfo.warning[field]}
                        successList={props.fieldInfo.success[field]}
                    />
                </div>
            )

        case 'inputTextEmail':
            return(
                <div>
                    <LabelInput label={props.schema.label}/>
                    <InputTextEmail
                        schema={props.schema}
                        isError={props.fieldInfo.error[field]?.length > 0}
                        isWarning={props.fieldInfo.warning[field]?.length > 0}
                        isSuccess={props.fieldInfo.success[field] !== undefined}
                        value={props.fieldList[field]}
                        setValue={setValue}
                    />
                    <LabelInputInfo
                        errorList={props.fieldInfo.error[field]}
                        warningList={props.fieldInfo.warning[field]}
                        successList={props.fieldInfo.success[field]}
                    />
                </div>
            )

        case 'inputTextPassword':
            return(
                <div>
                    <LabelInput label={props.schema.label}/>
                    <InputTextPassword
                        schema={props.schema}
                        isError={props.fieldInfo.error[field]?.length > 0}
                        isWarning={props.fieldInfo.warning[field]?.length > 0}
                        isSuccess={props.fieldInfo.success[field] !== undefined}
                        value={props.fieldList[field]}
                        setValue={setValue}
                    />
                    <LabelInputInfo
                        errorList={props.fieldInfo.error[field]}
                        warningList={props.fieldInfo.warning[field]}
                        successList={props.fieldInfo.success[field]}
                    />
                </div>
            )

        case 'inputTextNumberic':
            return(
                <div>
                    <LabelInput label={props.schema.label}/>
                    <InputTextNumberic
                        schema={props.schema}
                        isError={props.fieldInfo.error[field]?.length > 0}
                        isWarning={props.fieldInfo.warning[field]?.length > 0}
                        isSuccess={props.fieldInfo.success[field] !== undefined}
                        value={props.fieldList[field]}
                        setValue={setValue}
                    />
                    <LabelInputInfo
                        errorList={props.fieldInfo.error[field]}
                        warningList={props.fieldInfo.warning[field]}
                        successList={props.fieldInfo.success[field]}
                    />
                </div>
            )
        
        case 'inputTextSearch':
            return(
                <div>
                    <LabelInput label={props.schema.label}/>
                    <InputTextSearch
                        schema={props.schema}
                        isError={props.fieldInfo.error[field]?.length > 0}
                        isWarning={props.fieldInfo.warning[field]?.length > 0}
                        isSuccess={props.fieldInfo.success[field] !== undefined}
                        value={props.fieldList[field]}
                        setValue={setValue}
                    />
                </div>
            )
        
        case 'inputTextArea':
            return(
                <div>
                    <LabelInput label={props.schema.label}/>
                    <InputTextArea
                        schema={props.schema}
                        isError={props.fieldInfo.error[field]?.length > 0}
                        isWarning={props.fieldInfo.warning[field]?.length > 0}
                        isSuccess={props.fieldInfo.success[field] !== undefined}
                        value={props.fieldList[field]}
                        setValue={setValue}
                    />
                    <LabelInputInfo
                        errorList={props.fieldInfo.error[field]}
                        warningList={props.fieldInfo.warning[field]}
                        successList={props.fieldInfo.success[field]}
                    />
                </div>
            )

        case 'inputPhoneNumber':
            return(
                <div>
                    <LabelInput label={props.schema.label}/>
                    <InputPhoneNumber
                        schema={props.schema}
                        isError={props.fieldInfo.error[field]?.length > 0}
                        isWarning={props.fieldInfo.warning[field]?.length > 0}
                        isSuccess={props.fieldInfo.success[field] !== undefined}
                        value={props.fieldList[field]}
                        setValue={setValue}
                    />
                    <LabelInputInfo
                        errorList={props.fieldInfo.error[field]}
                        warningList={props.fieldInfo.warning[field]}
                        successList={props.fieldInfo.success[field]}
                    />
                </div>
            )  
        
        case 'inputSelection':
        return(
            <div>
                <LabelInput label={props.schema.label}/>
                <InputSelection
                    schema={props.schema}
                    isError={props.fieldInfo.error[field]?.length > 0}
                    isWarning={props.fieldInfo.warning[field]?.length > 0}
                    isSuccess={props.fieldInfo.success[field] !== undefined}
                    value={props.fieldList[field]}
                    setValue={setValue}
                />
                <LabelInputInfo
                    errorList={props.fieldInfo.error[field]}
                    warningList={props.fieldInfo.warning[field]}
                    successList={props.fieldInfo.success[field]}
                />
            </div>
        )

        case 'inputMultiSelection':
        return(
            <div>
                <div className="flex items-center mb-2">
                    <LabelInput marginNull={true} label={props.schema.label}/>
                    <span className="text-grays-500 ml-2">({props.schema.minSelected&&(props.schema.minSelected+' ')}~{props.schema.maxSelected&&(' '+props.schema.maxSelected)})</span>
                </div>
                <div className="flex flex-wrap">
                    {
                        props.fieldList[field].len
                    }
                    {
                        props.fieldList[field].map((item)=>{
                            return(
                                <div className="bg-primary-200 rounded-md px-2 py-1 mr-2 mb-2">
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
                <InputMultiSelection
                    schema={props.schema}
                    isError={props.fieldInfo.error[field]?.length > 0}
                    isWarning={props.fieldInfo.warning[field]?.length > 0}
                    isSuccess={props.fieldInfo.success[field] !== undefined}

                    errorList={props.fieldInfo.error[field]}
                    warningList={props.fieldInfo.warning[field]}
                    successList={props.fieldInfo.success[field]}

                    value={props.fieldList[field]}
                    setValue={setValue}
                />
                <LabelInputInfo
                    errorList={props.fieldInfo.error[field]}
                    warningList={props.fieldInfo.warning[field]}
                    successList={props.fieldInfo.success[field]}
                />
            </div>
        )

        case 'inputNumber':
            return(
                <div>
                    <div className="flex items-center mb-2">
                        <LabelInput marginNull={true} label={props.schema.label}/>
                        <span className="text-grays-500 ml-2">({props.schema.min&&(props.schema.min+' ')}~{props.schema.max&&(' '+props.schema.max)})</span>
                    </div>
                    <InputNumber
                        schema={props.schema}
                        isError={props.fieldInfo.error[field]?.length > 0}
                        isWarning={props.fieldInfo.warning[field]?.length > 0}
                        isSuccess={props.fieldInfo.success[field] !== undefined}
                        value={props.fieldList[field]}
                        setValue={setValue}
                    />
                    <LabelInputInfo
                        errorList={props.fieldInfo.error[field]}
                        warningList={props.fieldInfo.warning[field]}
                        successList={props.fieldInfo.success[field]}
                    />
                </div>
            )
        
        case 'toggleThick':
            return(
                <div className="flex mb-3">
                    <ToggleThick 
                        schema={props.schema}
                        isError={props.fieldInfo.error[field]?.length > 0}
                        isWarning={props.fieldInfo.warning[field]?.length > 0}
                        isSuccess={props.fieldInfo.success[field] !== undefined}
                        value={props.fieldList[field]}
                        setValue={setValue}
                        label={<LabelInput marginNull={true} label={props.schema.label}/>}
                    />
                    <div className="ml-2">
                        <LabelInputInfo
                            errorList={props.fieldInfo.error[field]}
                            warningList={props.fieldInfo.warning[field]}
                            successList={props.fieldInfo.success[field]}
                        />
                    </div>
                </div>
            )   

        case 'checkbox':
            return(
                <>
                    <Checkbox 
                        isError={props.fieldInfo.error[field]?.length > 0}
                        isWarning={props.fieldInfo.warning[field]?.length > 0}
                        isSuccess={props.fieldInfo.success[field] !== undefined}

                        label={props.schema.label}
                        value={props.fieldList[field]}
                        onClick={setValue}
                        isSelected={props.fieldList[field]}
                    />
                    <LabelInputInfo
                        errorList={props.fieldInfo.error[field]}
                        warningList={props.fieldInfo.warning[field]}
                        successList={props.fieldInfo.success[field]}
                    />
                </>
            )   
            
        default:
            return(
                <>Field Type Undefined...</>
            )
    }
    
}

export default FormInput