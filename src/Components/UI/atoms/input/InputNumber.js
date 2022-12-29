import { useState } from "react";
import bigDecimal from 'js-big-decimal'

import { RiCheckboxCircleFill, RiErrorWarningFill, RiAddLine, RiSubtractLine } from "react-icons/ri";
import ButtonSquare from "../button/ButtonSquare";

const InputNumber = (props) =>{
    const [valueShown, setValueShown] = useState(props.value?(props.value.toString()):(''))

    const setValue = (event) =>{
        var reg = /^(-)?\d{0,3}((\.\d{0,3})+(,(\d+)?)?)?|^$/;
        if(!reg.test(event.target.value)){
            event.preventDefault()
        }else{
            if((event.target.value==='-' && props.schema.min<0) || event.target.value===''){
                setValueShown(event.target.value)
                props.setValue(null)
            }else if(event.target.value==='-' && props.schema.min===0){
                event.preventDefault()
            }else {
                
                if(
                    (event.target.value.replace(/[^0-9]/g, '').length<=14 && (event.target.value.match(/,/g)||[]).length<=1 && ((/\d\-/.test(event.target.value)==false))) ||
                    (event.target.value.replace(/[^0-9]/g, '').length===15 && event.target.value[event.target.value.length-2]===',')
                ){
                    const front = event.target.value.split(',')[0]
                    const back = event.target.value.split(',')[1]
                    const tampValueString = front.split('.').join('') + (event.target.value.slice(-1)===','?'.':'') + (back?'.'+back:'')
                    const tampValueNumber = new bigDecimal(tampValueString)

                    const comparatorMax = ((props.schema.max!==undefined)?(new bigDecimal(props.schema.max+1)):(new bigDecimal('99999999999999.9')))
                    const comparatorMin = ((props.schema.min!==undefined)?(new bigDecimal(props.schema.min-1)):(new bigDecimal('-99999999999999.9')))
                    if(
                        (
                            tampValueNumber.compareTo(comparatorMax)===-1 && 
                            tampValueNumber.compareTo(comparatorMin)===1
                        ) ||
                        (tampValueNumber.compareTo(comparatorMax)===0) ||
                        (tampValueNumber.compareTo(comparatorMin)===0)

                    ){
                        props.setValue(parseFloat(tampValueNumber.value))

                        const newTargetValue = tampValueNumber.getPrettyValue()
                        const newFront = newTargetValue.split('.')[0]
                        const newBack = newTargetValue.split('.')[1]
                        const newTampValue = newFront.split(',').join('.') + (newTargetValue.slice(-1)==='.'?',':'') + (newBack?','+newBack:'')
                        setValueShown(newTampValue)
                    }
                    
                }else{
                    event.preventDefault()
                }
            }
        }
    }
    const addStep = () =>{
        if(valueShown==='-' || valueShown===''){
            const tampValueNumber = new bigDecimal('0')
            const stepValueNumber = new bigDecimal((props.schema.step?(props.schema.step):((props.schema.min?(props.schema.min):(1)))))
            const result = tampValueNumber.add(stepValueNumber).round(15)
            const comparatorMax = ((props.schema.max!==undefined)?(new bigDecimal(props.schema.max+1)):(new bigDecimal('99999999999999.9')))
            const comparatorMin = ((props.schema.min!==undefined)?(new bigDecimal(props.schema.min-1)):(new bigDecimal('-99999999999999.9')))
            if(
                (
                    result.compareTo(comparatorMax)===-1 && 
                    result.compareTo(comparatorMin)===1
                ) ||
                (result.compareTo(comparatorMax)===0) ||
                (result.compareTo(comparatorMin)===0)

            ){
                props.setValue(parseFloat(result.value))
                const newTargetValue = result.getPrettyValue()
                const newFront = newTargetValue.split('.')[0]
                const newBack = (newTargetValue.split('.')[1]?newTargetValue.split('.')[1].replace(/(0+)$/,''):'')

                const newTampValue = newFront.split(',').join('.') + (newTargetValue.slice(-1)==='.'?',':'') + (newBack!==''?','+newBack:'')
                setValueShown(newTampValue)
            }
        }else {
            if(valueShown.replace(/[^0-9]/g, '').length<=15){
                const front = valueShown.split(',')[0]
                const back = valueShown.split(',')[1]
                const tampValueString = front.split('.').join('') + (valueShown.slice(-1)===','?'.':'') + (back?'.'+back:'')
                const tampValueNumber = new bigDecimal(tampValueString)
                const stepValueNumber = new bigDecimal((props.schema.step?(props.schema.step):(1)))

                const result = tampValueNumber.add(stepValueNumber).round(15-(front.replace(/[^0-9]/g, '').length))

                
                const comparatorMax = ((props.schema.max!==undefined)?(new bigDecimal(props.schema.max+1)):(new bigDecimal('99999999999999.9')))
                const comparatorMin = ((props.schema.min!==undefined)?(new bigDecimal(props.schema.min-1)):(new bigDecimal('-99999999999999.9')))
                if(
                    (
                        result.compareTo(comparatorMax)===-1 && 
                        result.compareTo(comparatorMin)===1
                    ) ||
                    (result.compareTo(comparatorMax)===0) ||
                    (result.compareTo(comparatorMin)===0)

                ){
                    props.setValue(parseFloat(result.value))
                    const newTargetValue = result.getPrettyValue()
                    const newFront = newTargetValue.split('.')[0]
                    const newBack = (newTargetValue.split('.')[1]?newTargetValue.split('.')[1].replace(/(0+)$/,''):'')
                    const newTampValue = newFront.split(',').join('.') + (newTargetValue.slice(-1)==='.'?',':'') + (newBack?','+newBack:'')
                    setValueShown(newTampValue)
                }
            }else{
                
            }
            
        }
    }

    const subtractStep = () =>{
        
        if(valueShown==='-' || valueShown===''){
            if(props.schema.min!==0){
                const tampValueNumber = new bigDecimal('0')
                const stepValueNumber = new bigDecimal((props.schema.step?(props.schema.step):((props.schema.min?(props.schema.min*-1):(1)))))
                console.log(stepValueNumber)
                const result = tampValueNumber.subtract(stepValueNumber).round(15)
                const comparatorMax = ((props.schema.max!==undefined)?(new bigDecimal(props.schema.max+1)):(new bigDecimal('99999999999999.9')))
                const comparatorMin = ((props.schema.min!==undefined)?(new bigDecimal(props.schema.min-1)):(new bigDecimal('-99999999999999.9')))
                if(
                    (
                        result.compareTo(comparatorMax)===-1 && 
                        result.compareTo(comparatorMin)===1
                    ) ||
                    (result.compareTo(comparatorMax)===0) ||
                    (result.compareTo(comparatorMin)===0)

                ){
                    props.setValue(parseFloat(result.value))
                    const newTargetValue = result.getPrettyValue()
                    const newFront = newTargetValue.split('.')[0]
                    const newBack = (newTargetValue.split('.')[1]?newTargetValue.split('.')[1].replace(/(0+)$/,''):'')

                    const newTampValue = newFront.split(',').join('.') + (newTargetValue.slice(-1)==='.'?',':'') + (newBack!==''?','+newBack:'')
                    setValueShown(newTampValue)
                }
            }else{
                props.setValue(0)
                setValueShown('0')
            }
        }else {
            if(props.schema.min!==0 || (props.schema.min===0 && props.value!==0)){
                if(valueShown.replace(/[^0-9]/g, '').length<=15){
                    const front = valueShown.split(',')[0]
                    const back = valueShown.split(',')[1]
                    const tampValueString = front.split('.').join('') + (valueShown.slice(-1)===','?'.':'') + (back?'.'+back:'')
                    const tampValueNumber = new bigDecimal(tampValueString)
                    const stepValueNumber = new bigDecimal((props.schema.step?(props.schema.step):(1)))
                    console.log(stepValueNumber)
                    const result = tampValueNumber.subtract(stepValueNumber).round(15-(front.replace(/[^0-9]/g, '').length))
                    const comparatorMax = ((props.schema.max!==undefined)?(new bigDecimal(props.schema.max+1)):(new bigDecimal('99999999999999.9')))
                    const comparatorMin = ((props.schema.min!==undefined)?(new bigDecimal(props.schema.min-1)):(new bigDecimal('-99999999999999.9')))
                    if(
                        (
                            result.compareTo(comparatorMax)===-1 && 
                            result.compareTo(comparatorMin)===1
                        ) ||
                        (result.compareTo(comparatorMax)===0) ||
                        (result.compareTo(comparatorMin)===0)

                    ){
                        props.setValue(parseFloat(result.value))
                        const newTargetValue = result.getPrettyValue()
                        const newFront = newTargetValue.split('.')[0]
                        const newBack = (newTargetValue.split('.')[1]?newTargetValue.split('.')[1].replace(/(0+)$/,''):'')

                        const newTampValue = newFront.split(',').join('.') + (newTargetValue.slice(-1)==='.'?',':'') + (newBack!==''?','+newBack:'')
                        setValueShown(newTampValue)
                    }
                }else{
                    
                }
            }else{
                props.setValue(0)
                setValueShown('0')
            }
            
        }
    }

    const onBlur = (event) =>{
        if(event.target.value!=='' && event.target.value!=='-'){
            const front = (event.target.value.split(',')[0]?event.target.value.split(',')[0].replace(/^(0{1,3}(\.)?)+/,''):'')
            const back = (event.target.value.split(',')[1]?event.target.value.split(',')[1].replace(/(0+)$/,''):'')
            const tampValueString = front.split('.').join('') + (event.target.value.slice(-1)===','?'.':'') + (back!==''?'.'+back:'')
            const tampValueNumber = new bigDecimal(tampValueString)

            const newTargetValue = tampValueNumber.getPrettyValue()
            const newFront = newTargetValue.split('.')[0]
            const newBack = newTargetValue.split('.')[1]
            const newTampValue = newFront.split(',').join('.') + (newTargetValue.slice(-1)==='.'?',':'') + (newBack?','+newBack:'')
            setValueShown(newTampValue)
        }
    }

    const onBeforeInput = (event) =>{
        var reg = /^\d+$|^(-)?\d{1,3}((\.\d{0,3})+(,(\d+)?)?)?|^,$|^-$/;
        if(!reg.test(event.data)){
            event.preventDefault()
        }else{
            if(event.target.value.replace(/[^0-9]/g, '').length===15){
                if(event.data!=='-'){
                    event.preventDefault()
                }
            }
        }
    }

    return(
        <div className="flex w-full">
            <div className="grow relative">
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
                    inputMode="decimal"
                    disabled={props.schema.isDisabled}
                    placeholder={props.schema.placeholder}
                    minLength={props.schema.minLength}
                    maxLength={(props.schema.maxLength?(props.schema.maxLength+1):(undefined))}

                    value={valueShown}
                    onChange={setValue}
                    onBeforeInput={onBeforeInput}
                    onBlur={onBlur}
                    className={
                        "w-full rounded-md text-grays-900 dark:text-grays-100 placeholder-grays-300 dark:placeholder-grays-700 "+
                        (props.schema.isDisabled?(
                            "bg-grays-200 dark:bg-grays-800 "
                        ):(
                            "bg-base-background-top dark:bg-baseDark-background-top "
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
            {
                props.schema.isShowCounter&&(
                    <>
                        {/* <button 
                            type="button"
                            className={
                                "w-[38px] ml-2 rounded-md text-grays-500 flex justify-center items-center "+
                                (props.schema.isDisabled?(
                                    "bg-grays-200 dark:bg-grays-800 "
                                ):(
                                    "bg-base-background-top dark:bg-baseDark-background-top "
                                )) 
                                + "border focus:ring-2 focus:outline-none hover:bg-grays-100 hover:dark:bg-grays-900 " +
                                (props.isError?(
                                    "border-danger-500 focus:ring-danger-200 dark:focus:ring-danger-800 "
                                ):(
                                    props.isWarning?(
                                        "border-warning-500 focus:ring-warning-200 dark:focus:ring-warning-800 "
                                    ):(
                                        props.isSuccess?(
                                            "border-success-500 focus:ring-success-200 dark:focus:ring-success-800 "
                                        ):(
                                            (props.schema.isDisabled?('border-grays-200 dark:border-grays-800 '):('border-grays-300 dark:border-grays-700 '))+"focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-200 dark:focus:ring-primary-800"
                                        )
                                    )
                                ))
                            }
                            onClick={addStep}
                        >
                            <RiAddLine/>
                        </button>
                        <button 
                            type="button"
                            className={
                                "w-[38px] ml-2 rounded-md text-grays-500 flex justify-center items-center "+
                                (props.schema.isDisabled?(
                                    "bg-grays-200 dark:bg-grays-800 "
                                ):(
                                    "bg-base-background-top dark:bg-baseDark-background-top "
                                )) 
                                + "border focus:ring-2 focus:outline-none hover:bg-grays-100 hover:dark:bg-grays-900 " +
                                (props.isError?(
                                    "border-danger-500 focus:ring-danger-200 dark:focus:ring-danger-800 "
                                ):(
                                    props.isWarning?(
                                        "border-warning-500 focus:ring-warning-200 dark:focus:ring-warning-800 "
                                    ):(
                                        props.isSuccess?(
                                            "border-success-500 focus:ring-success-200 dark:focus:ring-success-800 "
                                        ):(
                                            (props.schema.isDisabled?('border-grays-200 dark:border-grays-800 '):('border-grays-300 dark:border-grays-700 '))+"focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-200 dark:focus:ring-primary-800"
                                        )
                                    )
                                ))
                            }
                            onClick={subtractStep}
                        >
                            <RiSubtractLine/>
                        </button> */}
                        
                        <div className="ml-2">
                            <ButtonSquare
                                schema={
                                    {
                                        theme:'transparent',
                                        isBordered:true,
                                        label:'Submit',
                                        icon:<RiAddLine/>
                                    }
                                }
                                onClickAction={addStep}
                            />
                        </div>
                        <div className="ml-2">
                            <ButtonSquare
                                schema={
                                    {
                                        theme:'transparent',
                                        isBordered:true,
                                        label:'Submit',
                                        icon:<RiSubtractLine/>
                                    }
                                }
                                onClickAction={subtractStep}
                            />
                        </div>
                    </>
                )
            }
            
        </div>
    )
}

export default InputNumber