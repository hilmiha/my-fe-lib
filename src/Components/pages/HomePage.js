import SidebarNavigation from "../UI/organisms/sidebar-navigation/SidebarNavigation"
import SidebarTemplate from "../templates/SidebarTemplate"
import StackedTemplate from "../templates/StackedTemplate"
import TopbarNavigation from "../UI/organisms/topbar-navigation/TopbarNavigation"

const HomePage = () =>{

    

    return(
        // <SidebarTemplate
        //     sideLeftContent={
        //         <SidebarNavigation/>
        //     }
        //     mainContent={
        //         <div className="text-base-black dark:text-base-white text-3xl">
        //             Dashboard
        //         </div>
        //     }
        // />
        <StackedTemplate
            sideTopContent={
                <TopbarNavigation/>
            }
            mainContent={
                <div className="text-base-black dark:text-base-white text-3xl">
                    Dashboard
                </div>
            }
        />
    )
}

export default HomePage