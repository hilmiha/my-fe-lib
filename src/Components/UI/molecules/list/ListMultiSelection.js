import PreviousMap from "postcss/lib/previous-map"
import { RiCheckboxCircleFill, RiErrorWarningFill } from "react-icons/ri";

import { useEffect, useState } from "react"
import FormInput from "../form-input/FormInput"
import ListItem from "./ListItem"

const ListMultiSelection = (props) =>{
    const [fieldList, setFieldList] = useState(
        {
            searchSelection:''
        }
    )
    const [fieldInfo, setFieldInfo] = useState({
		error:{},
		warning:{},
		success:{}
	})
    const fieldSchemas = {
        field:'searchSelection',
        type:'inputTextSearch',
        placeholder:'Search...',
        isShowIcon:true,
        isDisabled:false,
        isNoBorder:true,
        warningValidationList:{},
        errorValidationList:{}
    }

    const collections = [...props.schema.listSelection]
    const [shownCollection, setShownCollection] = useState([...collections])

    const filterCollection = (keyword) =>{
        const temFilteredCollection = []
        collections.map((collection)=>{
            const tampListItems = collection.list.filter((itmList)=>{return(itmList.label.toLowerCase().includes(keyword.toLowerCase()))})
            if(tampListItems.length>0){
                temFilteredCollection.push({
                    title:collection.title,
                    list:[...tampListItems]
                })
            }
        })
        return(temFilteredCollection)
    }
    useEffect(()=>{
        setShownCollection(filterCollection(fieldList.searchSelection))
    },[fieldList])

    const onClickItemAction = (value) =>{
        let tampSelectedValue = [...props.value]
        
        if(tampSelectedValue.includes(value)){
            tampSelectedValue = tampSelectedValue.filter((itmValue)=>{return(itmValue!==value)});
        }else{
            if(tampSelectedValue.length < (props.schema.maxSelected)){
                tampSelectedValue.push(value)
            }
        }
        props.setValue(tampSelectedValue)
    } 

    return(
        <>
            {
                (props.schema.isSearchInput)&&(
                    <div className="sticky top-0 pt-2 pb-1 px-1 bg-inherit z-10">
                        <FormInput
                            schema={fieldSchemas}
                            fieldList={fieldList}
                            setFieldList={setFieldList}

                            fieldInfo={fieldInfo}
                            setFieldInfo={setFieldInfo}
                            key={fieldSchemas.field}
                        />
                    </div>
                )
            }
            <div className="p-1">
                <ListItem
                    itemType={props.itemType}
                    collections={shownCollection}
                    value={props.value}
                    onClickItemAction={onClickItemAction}
                />
            </div>
            <div className="absolute bottom-0 right-0">
                {
                    props.isError?(
                        <RiErrorWarningFill className="text-danger-500 ml-4 my-2"/>
                    ):(
                        props.isWarning?(
                            <RiErrorWarningFill className="text-warning-500 ml-4 my-2"/>
                        ):(
                            props.isSuccess&&(
                                <RiCheckboxCircleFill className="text-success-500 ml-4 my-2"/>
                            )
                        )
                    )
                }
            </div>
        </>
    )
}

export default ListMultiSelection