import ListItem from "./ListItem"

const ListNavigation = (props) =>{
    const onClickItemAction = (value) =>{
        if(value!==props.selectedNavItem){
            props.setSelectedNavItem(value)
        }
    } 
    return(
        <div className="p-1">
            <ListItem 
                itemType={props.schema.itemType} 
                collections={props.schema.listNavItem} 
                onClickItemAction={onClickItemAction}
                value={props.selectedNavItem}
            />
        </div>
    )
}

export default ListNavigation