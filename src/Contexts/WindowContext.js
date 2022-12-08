import { useState, createContext, useEffect } from "react";

export const WindowContext = createContext();

export const WindowContextProvider = (props) =>{
    const [windowSize, setWindowSize] = useState(0)

    useEffect(()=>{
        function changeWindowSize() {
            if(window.innerWidth >=	1536){
                if(windowSize!==5){
                    setWindowSize(5)
                }
            }else if(window.innerWidth >=1280 && window.innerWidth <=1536){
                if(windowSize!==4){
                    setWindowSize(4)
                }
            }else if(window.innerWidth >=1024 && window.innerWidth <1280){
                if(windowSize!==3){
                    setWindowSize(3)
                }
            }else if(window.innerWidth >=768 && window.innerWidth <1024){
                if(windowSize!==2){
                    setWindowSize(2)
                }
            }else if(window.innerWidth >=620 && window.innerWidth <768){
                if(windowSize!==1){
                    setWindowSize(1)
                }
            }else{
                if(windowSize!==0){
                    setWindowSize(0)
                }
            }
        }
        changeWindowSize()
        window.addEventListener('resize', changeWindowSize)
        return () => {
            window.removeEventListener('resize', changeWindowSize);
        };
    },[])

    // const [darkMode, setDarkMode] = useState(false)
    // const toggleTheme = () =>{
    //     setDarkMode(!darkMode)
    // }

    return(
        <WindowContext.Provider 
            value={{
                windowSize,
                setWindowSize
            }}
        >
            {props.children}
        </WindowContext.Provider>
    )
}