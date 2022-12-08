import FormInput from "../../molecules/form-input/FormInput"
import ListItem from "../list/ListItem";

import { useContext, useEffect, useState } from "react";

import { WindowContext } from "../../../../Contexts/WindowContext";

const DropDownList = (props) =>{
    const {windowSize} = useContext(WindowContext)

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

    const collections = [...props.listSelection]
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
    
    const handleParentClick = event => {
        event.preventDefault();
    
        if (event.target === event.currentTarget) {
          props.showSelection()
        }
      };
      
    useEffect(()=>{
        if(windowSize<=2){
            document.body.style.overflow = 'hidden';
            return()=>{
                document.body.style.overflow = 'unset';
            }
        }
    },[windowSize])

    if(windowSize<=2){
        return(
            <div className="absolute top-0 left-0 w-full h-full">
                <div 
                    className="sticky top-0 backdrop-blur-sm bg-base-background/60 dark:bg-baseDark-background-top/40  h-screen z-10 flex justify-center items-start px-4 pt-16"
                    onClick={handleParentClick}
                >
                    <div className="bg-grays-100 dark:bg-grays-900 w-full border border-grays-300 dark:border-grays-700 max-h-[400px] overflow-y-scroll rounded-md">
                        {
                            (props.isSearchInput)&&(
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
                                onClickItemAction={(listItem)=>{props.selectItem(listItem)}}
                                selectedItem = {props.selectedItem}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className="absolute top-full left-0 bg-grays-100 dark:bg-grays-900 w-full border border-grays-300 dark:border-grays-700 max-h-80 overflow-y-scroll z-10 rounded-md mt-1">
                {
                    (props.isSearchInput)&&(
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
                        onClickItemAction={(listItem)=>{props.selectItem(listItem)}}
                        selectedItem = {props.selectedItem}
                    />
                </div>
            </div>
        )
    }
}

export default DropDownList