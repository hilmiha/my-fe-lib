import { useEffect, useRef } from "react";

const ClickOutsiteDetector = (props) => {
    const wrapperRef = useRef(null);
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if ((wrapperRef.current && !wrapperRef.current.contains(event.target)) && !(props.buttonRef && props.buttonRef.current && props.buttonRef.current.contains(event.target))) {
                props.action()
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [wrapperRef]);
  
    return <div ref={wrapperRef}>{props.children}</div>;
}

export default ClickOutsiteDetector