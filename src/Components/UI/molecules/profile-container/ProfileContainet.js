import { useRef, useState } from "react"
import { RiLogoutBoxRLine } from "react-icons/ri"
import ButtonSquare from "../../atoms/button/ButtonSquare"
import ClickOutsiteDetector from "../../atoms/wrapper/ClickOutsiteDetector"

const ProfileContainer = (props) => {
    const [showMore,setShowMore] = useState(false)
    const setingShowMore = () =>{
        setShowMore(!showMore)
    }
    const buttonShowMoreRef = useRef(null)
    return(
        <div className="w-full flex items-center space-x-4">
            {
                props.size==='sm'&&(
                    <div>
                        <button ref={buttonShowMoreRef} onClick={setingShowMore} onMouseOver={setingShowMore} type="button" className="rounded-full bg-slate-800 flex items-center justify-center min-w-[38px] max-w-[38px] h-[38px] border border-grays-300 dark:border-grays-700 focus:ring-2 focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-200 dark:focus:ring-primary-800 ">
                            img
                        </button>
                        {
                            showMore&&(
                                <ClickOutsiteDetector action={setingShowMore} buttonRef={buttonShowMoreRef}>
                                    <div className="absolute bg-base-background-mid dark:bg-baseDark-background-mid p-2 right-4 mt-1 rounded border border-grays-300 dark:border-grays-700">
                                        <div className="flex bg-base-background-top dark:bg-baseDark-background-top p-4 rounded">
                                            <div className="truncate space-y-2 grow mr-8">
                                                <div className="truncate text-black dark:text-white">
                                                    Hilmi Hidayat Arfisko
                                                </div>
                                                <div className="truncate text-xs">
                                                    hilmi.hidayat@alpabit.com
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <ButtonSquare
                                                    schema={
                                                        {
                                                            theme:'transparent',
                                                            isBordered:true,
                                                            size:'md',
                                                            icon:<RiLogoutBoxRLine size={'18px'}/>
                                                        }
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </ClickOutsiteDetector>
                            )
                        }
                        
                    </div>
                    
                )
            }
            {
                props.size==='md'&&(
                    <>
                        <div className="truncate space-y-2 grow">
                            <div className="truncate text-black dark:text-white">
                                Hilmi Hidayat Arfisko
                            </div>
                            <div className="truncate text-xs">
                                hilmi.hidayat@alpabit.com
                            </div>
                        </div>

                        <div className="flex items-center">
                            <ButtonSquare
                                schema={
                                    {
                                        theme:'transparent',
                                        isBordered:true,
                                        size:'md',
                                        icon:<RiLogoutBoxRLine size={'18px'}/>
                                    }
                                }
                            />
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default ProfileContainer