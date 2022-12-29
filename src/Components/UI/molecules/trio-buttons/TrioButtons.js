import { useContext } from "react"
import { RiMoonClearLine, RiNotification4Line, RiSettings4Line, RiSunLine } from "react-icons/ri"
import { WindowContext } from "../../../../Contexts/WindowContext"
import ButtonSquare from "../../atoms/button/ButtonSquare"

const TrioButtons = () => {
    const {windowSize, darkMode, toggleTheme} = useContext(WindowContext)
    return(
        <div className="flex space-x-4">
            <ButtonSquare
                schema={
                    {
                        theme:'transparent',
                        isBordered:false,
                        size:'md',
                        icon:(darkMode?(<RiSunLine size={'20px'}/>):(<RiMoonClearLine size={'20px'}/>))
                    }
                }
                onClickAction={toggleTheme}
            />
            <ButtonSquare
                schema={
                    {
                        theme:'transparent',
                        isBordered:false,
                        size:'md',
                        icon:(<RiSettings4Line size={'20px'}/>)
                    }
                }
            />
            <ButtonSquare
                schema={
                    {
                        theme:'transparent',
                        isBordered:false,
                        size:'md',
                        icon:(<RiNotification4Line size={'20px'}/>)
                    }
                }
            />
        </div>
    )
}

export default TrioButtons