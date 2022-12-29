import { useState } from "react"
import { RiGlobalLine } from "react-icons/ri"
import ListNavigation from "../../molecules/list/ListNavigation"
import ProfileContainer from "../../molecules/profile-container/ProfileContainet"
import TrioButtons from "../../molecules/trio-buttons/TrioButtons"

const SidebarNavigation = () =>{

    const [selectedNavItem, setSelectedNavItem] = useState('item0')
    const listNavItem = [
        {
            list:[
                {
                    value:'item0',
                    path:'/item0',
                    label:'item0',
                    icon:<RiGlobalLine/>
                },
                {
                    value:'item1',
                    path:'/item1',
                    label:'item1',
                    icon:<RiGlobalLine/>
                },
                {
                    value:'item2',
                    path:'/item2',
                    label:'item2',
                    icon:<RiGlobalLine/>
                },
            ]
        },
        {
            title:'hello1',
            icon:<RiGlobalLine/>,
            list:[
                {
                    value:'item3',
                    path:'/item3',
                    label:'item3',
                    icon:<RiGlobalLine/>
                },
                {
                    value:'item4',
                    path:'/item4',
                    label:'item4',
                    icon:<RiGlobalLine/>
                },
                {
                    value:'item5',
                    path:'/item5',
                    label:'item5',
                    icon:<RiGlobalLine/>
                },
            ]
        }
    ]

    return(
        <>
            <div className="p-4 grow overflow-hidden flex flex-col">
                <div className="grow overflow-auto">
                    <ListNavigation
                        selectedNavItem={selectedNavItem} 
                        setSelectedNavItem={setSelectedNavItem}
                        schema={
                            {
                                itemType:'ItemNavSide',
                                listNavItem:listNavItem
                            }
                        }
                    />
                </div>
            </div>
            <div className="min-h-[55px] p-4">
                <TrioButtons/>
            </div>
            
            <div className="min-h-[55px] p-4 flex items-center border border-b-0 border-x-0 border-grays-300 dark:border-gray-700">
                <ProfileContainer size='md'/>
            </div>
        </>
    )
}

export default SidebarNavigation