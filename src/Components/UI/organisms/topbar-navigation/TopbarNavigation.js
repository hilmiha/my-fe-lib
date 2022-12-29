import { useContext, useState } from "react"
import { RiGlobalLine } from "react-icons/ri"
import { WindowContext } from "../../../../Contexts/WindowContext"
import ListNavigation from "../../molecules/list/ListNavigation"
import ProfileContainer from "../../molecules/profile-container/ProfileContainet"
import TrioButtons from "../../molecules/trio-buttons/TrioButtons"

const TopbarNavigation = () =>{
    const {windowSize, darkMode} = useContext(WindowContext)

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
                    label:'sadasdasda',
                    icon:<RiGlobalLine/>
                },
                {
                    value:'item4',
                    path:'/item4',
                    label:'iteasdasdaasdm4',
                    icon:<RiGlobalLine/>
                },
                {
                    value:'item5',
                    path:'/item5',
                    label:'iteasdasdadsam5',
                    icon:<RiGlobalLine/>
                },
            ]
        }
    ]

    return(
        <>
            {
                windowSize<3?(
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
                ):(
                    <div className="flex overflow-auto ml-8 grow">
                        <ListNavigation
                            selectedNavItem={selectedNavItem} 
                            setSelectedNavItem={setSelectedNavItem}
                            schema={
                                {
                                    itemType:'ItemNavTop',
                                    listNavItem:listNavItem
                                }
                            }
                        />
                    </div>
                )
            }
            
            <div className={(windowSize<3?('p-4'):(''))}>
                <TrioButtons/>
            </div>
            <div className={"flex items-center border border-b-0 border-x-0 border-grays-300 dark:border-gray-700 " + (windowSize<3?('p-4'):('border-t-0')) }>
                <ProfileContainer size={(windowSize<3?('md'):('sm'))}/>
            </div>
        </>
    )
}

export default TopbarNavigation