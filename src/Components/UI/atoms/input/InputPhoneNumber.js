import { useContext, useEffect, useRef, useState } from "react"
import { AsYouType } from 'libphonenumber-js'

import { countryList, getCountryOnCode, getCountryOnNumInput, getCountryList} from "../../../../Services/ContryList"

import { RiCheckboxCircleFill, RiErrorWarningFill, RiArrowDownSLine, RiArrowUpSLine, RiCheckFill} from "react-icons/ri";
import ClickOutsiteDetector from "../wrapper/ClickOutsiteDetector";
import FormInput from "../../molecules/form-input/FormInput";
import FocusTrap from 'focus-trap-react'
import ItemDropdownFlag from "../item-dropdown/ItemDropdownFlag";
import DropdownListSelection from "../../molecules/dropdown/DropdownListSelection";
import { WindowContext } from "../../../../Contexts/WindowContext";

const CountrySelection = (props) =>{
    const [fieldList, setFieldList] = useState({
        searchCountry:''
    })
    const [fieldInfo, setFieldInfo] = useState({
		error:{},
		warning:{},
		success:{}
	})
    const fieldSchemas = {
        field:'searchCountry',
        type:'inputTextSearch',
        placeholder:'Search Country...',
        isShowIcon:true,
        isDisabled:false,
        isNoBorder:true,
        warningValidationList:{},
        errorValidationList:{}
    }

    const [countryListShow, setCountryListShow] = useState([...countryList])

    useEffect(()=>{
        setCountryListShow(getCountryList(fieldList.searchCountry))
    },[fieldList])

    return(
        <div className="absolute top-full left-0 bg-grays-100 dark:bg-grays-900 w-full border border-grays-300 dark:border-grays-700 max-h-80 overflow-y-scroll z-10 rounded-md mt-1">
            <div className="sticky top-0 pt-2 pb-1 px-1 bg-inherit">
                <FormInput
                    schema={fieldSchemas}
                    fieldList={fieldList}
                    setFieldList={setFieldList}

                    fieldInfo={fieldInfo}
                    setFieldInfo={setFieldInfo}
                    key={fieldSchemas.field}
                />
            </div>
            <div className="p-1">
                {
                    countryListShow.map((country)=>{
                        return(
                            <ItemDropdownFlag
                                key={country.code}
                                country={country} 
                                onClickItemAction={(value)=>{props.selectCountry(value)}}
                                isSelected={country.code===props.selectedOption.code}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

const InputPhoneNumber = (props) =>{
    const {windowSize} = useContext(WindowContext)
    const asTyping = new AsYouType()
    const [phoneNumber, setPhoneNumber] = useState('')

    const [selectedOption,setSelectedOption] = useState({flag:"🇮🇩",dial_code:"+62",code:'ID'})

    useEffect(()=>{
        if(props.schema.optionSelected){
            setSelectedOption(getCountryOnCode(props.schema.optionSelected))
        }
    },[])

    const [paddingLeftInput, setPaddingLeftInput] = useState('pl-10 ')
    useEffect(()=>{
        if(selectedOption.dial_code===''){
            setPaddingLeftInput('pl-4 ')
        }else if(selectedOption.dial_code.length<3){
            setPaddingLeftInput('pl-[34px] ')
        }else if(selectedOption.dial_code.length<4){
            setPaddingLeftInput('pl-[45px] ')
        }else if(selectedOption.dial_code.length<5){
            setPaddingLeftInput('pl-[52px] ')
        }else if(selectedOption.dial_code.length<6){
            setPaddingLeftInput('pl-16 ')
        }else{
            
        }
    },[selectedOption])

    const setValue = (event) =>{
        let tampValue
        if(event.target){
            tampValue = event.target.value
        }else{
            tampValue = event
        }
        

        if(tampValue!==''){
            const asTypingValue = asTyping.input(selectedOption.dial_code+tampValue)
            let regxDialCode = '^\\'
            for (let elm of selectedOption.dial_code) {
                if(elm==='+'){
                    regxDialCode = regxDialCode+elm
                }else{
                    regxDialCode = regxDialCode+elm+'( )?'
                }
            }
            const reRegexDialCode =  new RegExp(regxDialCode)
            setPhoneNumber(asTypingValue.replace(reRegexDialCode,''))
            props.setValue(selectedOption.dial_code+tampValue.split(' ').join(''), {phoneNumberOrigin:selectedOption.code})
        }else{
            setPhoneNumber('')
            props.setValue('', {phoneNumberOrigin:selectedOption.code})
        }
    }

    const onBeforeInput = (event) =>{
        var reg = /^\d+$/;
        if(!reg.test(event.data)){
            event.preventDefault()
        }
    }
    

    const buttonCountry = useRef(null);
    const [isSelectionShown, setIsSelectionShown] = useState(false)
    const showSelection = () =>{
        setIsSelectionShown(!isSelectionShown)
    }

    const selectCountry =(countryInfo)=>{
        const tampSelected = {...selectedOption}

        if(countryInfo.flag!==tampSelected.flag){
            tampSelected['flag']=countryInfo.flag
            tampSelected['dial_code']=countryInfo.dial_code
            tampSelected['code']=countryInfo.code
            setValue('')
            setSelectedOption(tampSelected)
        }
        setIsSelectionShown(false)
    }

    return(
        <FocusTrap active={isSelectionShown}>
                <div className={(isSelectionShown && windowSize<=2)?('flex'):('flex relative')}>
                    {
                        !props.schema.fixedOption&&(
                            <>
                                        
                                <button
                                    ref={buttonCountry}
                                    type="button"
                                    className={
                                        "rounded-md rounded-r-none pl-4 pr-1 flex items-center cursor-pointer "+
                                        (props.schema.isDisabled?(
                                            "bg-grays-200 dark:bg-grays-800 "
                                        ):(
                                            "bg-grays-100 dark:bg-grays-900 "
                                        )) +
                                        "border border-r-transparent dark:border-r-transparent  focus:z-10 focus:ring-2 focus:outline-none " +
                                        (props.isError?(
                                            "border-danger-500 focus:border-r-danger-500 dark:focus:border-r-danger-500 focus:ring-danger-200 dark:focus:ring-danger-800 "
                                        ):(
                                            props.isWarning?(
                                                "border-warning-500 focus:border-r-warning-500 dark:focus:border-r-warning-500 focus:ring-warning-200 dark:focus:ring-warning-800 "
                                            ):(
                                                props.isSuccess?(
                                                    "border-success-500 focus:border-r-success-500 dark:focus:border-r-success-500 focus:ring-success-200 dark:focus:ring-success-800 "
                                                ):(
                                                    (props.schema.isDisabled?('border-grays-200 dark:border-grays-800 '):('border-grays-300 dark:border-grays-700 '))+"px-4 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-200 dark:focus:ring-primary-800"
                                                )
                                            )
                                        )) 
                                    }
                                    onClick={showSelection}
                                >
                                    <span className="w-6 text-2xl">{selectedOption.flag}</span>
                                    {
                                        isSelectionShown?(
                                            <RiArrowUpSLine className="text-grays-400 dark:text-grays-600 ml-2"/>
                                        ):(
                                            <RiArrowDownSLine className="text-grays-400 dark:text-grays-600 ml-2"/>
                                        )
                                    }
                                </button>
                                
                                {
                                    isSelectionShown&&(
                                        <ClickOutsiteDetector action={showSelection} buttonRef={buttonCountry}>
                                            <DropdownListSelection 
                                                itemType={'dropdownItemFlag'}
                                                schema={
                                                    {
                                                        isSearchInput:true,
                                                        listSelection:[
                                                            {
                                                                list:countryList
                                                            },
                                                        ]
                                                    }
                                                }
                                                value={selectedOption}
                                                setValue={selectCountry}
                                                showSelection={showSelection}
                                                isSearchInput={true}
                                            />
                                        </ClickOutsiteDetector>
                                    )
                                }
                            </>
                        )
                    }
                    <div className="flex relative grow">
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
                        <div 
                            className={
                                "absolute h-full pl-4 pr-0 flex items-center rounded-md rounded-r-none text-gray-900 dark:text-gray-100 border border-transparent"
                            }
                        >
                            {selectedOption.dial_code}
                        </div>
                        <input 
                            type='tel'
                            disabled={props.schema.isDisabled}
                            placeholder={props.schema.placeholder}

                            value={phoneNumber}
                            onChange={setValue}
                            onBeforeInput={onBeforeInput}
                            className={
                                "w-full rounded-md text-grays-900 dark:text-grays-100 "+
                                (props.schema.fixedOption?(''):('rounded-l-none '))+
                                (props.schema.isDisabled?(
                                    "bg-grays-200 dark:bg-grays-800 placeholder-grays-400 dark:placeholder-grays-600 "
                                ):(
                                    "bg-grays-100 dark:bg-grays-900 placeholder-grays-400 dark:placeholder-grays-600 "
                                )) 
                                + "border focus:ring-2 focus:outline-none " +
                                paddingLeftInput +
                                (props.isError?(
                                    "pr-12 py-2 border-danger-500 focus:ring-danger-200 dark:focus:ring-danger-800 "
                                ):(
                                    props.isWarning?(
                                        "pr-12 py-2 border-warning-500 focus:ring-warning-200 dark:focus:ring-warning-800 "
                                    ):(
                                        props.isSuccess?(
                                            "pr-12 py-2 border-success-500 focus:ring-success-200 dark:focus:ring-success-800 "
                                        ):(
                                            (props.schema.isDisabled?('border-grays-200 dark:border-grays-800 '):('border-grays-300 dark:border-grays-700 '))+"pr-4 py-2 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-200 dark:focus:ring-primary-800"
                                        )
                                    )
                                ))
                            }
                        />
                    </div>
            </div>
       </FocusTrap>
    )
}

export default InputPhoneNumber