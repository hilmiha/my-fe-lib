import { useEffect, useState } from "react"
import FormInput from "../form-input/FormInput"
import ListItem from "./ListItem"

const ListSelection = (props) =>{
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
        props.setValue(value)
    } 

    return(
        <>
            {
                (props.schema.isSearchInput)&&(
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
                )
            }
            
            <div className="p-1">
                <ListItem 
                    itemType={props.itemType} 
                    collections={shownCollection} 
                    onClickItemAction={onClickItemAction}
                    value={props.value}
                />
            </div>
        </>
    )
}

export default ListSelection