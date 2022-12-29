import FocusTrap from "focus-trap-react"
import { useEffect, useRef, useState } from "react"
import { useContext } from "react"
import { RiCloseLine, RiMenuLine } from "react-icons/ri"
import { WindowContext } from "../../Contexts/WindowContext"
import ButtonSquare from "../UI/atoms/button/ButtonSquare"
import ClickOutsiteDetector from "../UI/atoms/wrapper/ClickOutsiteDetector"

const SidebarTemplate = (props) =>{
    const {windowSize, darkMode} = useContext(WindowContext)


    const [isSideShown, setIsSideShown] = useState(false)
    const settingIsSideShown = () =>{
        if(window.innerWidth<1024){
            setIsSideShown(!isSideShown)
        }
    }
    const buttonShowSide = useRef(null)
    useEffect(() => {
        if(windowSize>=3){
            setIsSideShown(true)
        }else{
            setIsSideShown(false)
        }
    }, [windowSize])
    

    return(
        <div className={(darkMode?('dark'):(''))}>
            <div className="text-grays-600 dark:text-grays-400 text-sm flex relative">
                {
                    (isSideShown)&&(
                        <ClickOutsiteDetector action={settingIsSideShown} buttonRef={buttonShowSide}>
                            <FocusTrap active={(isSideShown && windowSize<3)}>
                                <div 
                                    className={
                                        windowSize<=1?(
                                            "absolute h-full w-full z-30"
                                        ):(
                                            windowSize<3?(
                                                "absolute h-full min-w-[280px] max-w-[280px] z-30"
                                            ):(
                                                'sticky top-0 min-w-[280px] max-w-[280px]'
                                            )
                                        )
                                    }
                                >
                                    <div className={
                                        "bg-base-background-top dark:bg-baseDark-background-top min-h-screen max-h-screen overflow-hidden flex flex-col sticky top-0 border border-y-0 border-l-0 border-grays-300 dark:border-gray-700 "+
                                        (windowSize<2?('border-x-0'):('border-l-0'))
                                    }>
                                        <div className="min-h-[55px] px-4 flex items-center border border-t-0 border-x-0 border-grays-300 dark:border-gray-700">
                                            <div className="grow flex items-center">
                                                Header
                                            </div>
                                            {
                                                windowSize<3&&(
                                                    <div className="pl-4">
                                                        <ButtonSquare
                                                            schema={
                                                                {
                                                                    theme:'transparent',
                                                                    isBordered:true,
                                                                    size:'md',
                                                                    icon:<RiCloseLine size={'16px'}/>
                                                                }
                                                            }
                                                            onClickAction={settingIsSideShown}
                                                        />
                                                    </div>
                                                )
                                            }
                                        </div>
                                        {
                                            props.sideLeftContent
                                        }
                                    </div>
                                </div>
                            </FocusTrap>
                        </ClickOutsiteDetector>
                    )
                }
                {
                    (isSideShown && windowSize<3)&&(
                        <div className="absolute backdrop-blur-sm bg-base-background-top/60 dark:bg-baseDark-background-top/40 h-full w-full z-20 pointer-events-auto"/>
                    )
                }
                
                <div className="bg-base-background-mid dark:bg-baseDark-background-mid grow min-h-screen">
                    {
                        windowSize<3&&(
                            <div className="px-4 min-h-[55px] border border-x-0 border-t-0 border-grays-300 dark:border-gray-700 bg-base-background-top dark:bg-baseDark-background-top sticky top-0 z-10 flex justify-end items-center ">
                                <div className="absolute w-full h-full p-4 left-0 flex items-center pointer-events-none">
                                    Header
                                </div>
                                <div className="absolute right-4">
                                    <ButtonSquare
                                        schema={
                                            {
                                                theme:'transparent',
                                                isBordered:true,
                                                size:'md',
                                                label:'Submit',
                                                icon:<RiMenuLine size={'16px'}/>,
                                                ref:buttonShowSide
                                            }
                                        }
                                        onClickAction={()=>{setIsSideShown(!isSideShown)}}
                                    />
                                </div>
                            </div>
                        )
                    }
                    <div className={
                        windowSize>=3?('p-8'):('p-4')
                    }>
                        {
                            props.mainContent
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarTemplate