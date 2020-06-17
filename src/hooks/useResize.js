import {useEffect, useState} from "react";

export const useResize = (myRef) => {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if (myRef.current) {
            setWidth(myRef.current.offsetWidth)
        }
        const handleResize = () => {
            setWidth(myRef.current.offsetWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [myRef])

    return { width }
}