import React, { useEffect, useState } from 'react'

export default function useKeyPress(key) {

    const [isEnterPressed, setIsEnterPressed] = useState(false)

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key !== key) {
                return
            }
            setIsEnterPressed(true);
        }
        function handleKeyUp(event) {
            if (event.key !== key) {
                return
            }
            setIsEnterPressed(false);
        }

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
    }, [])

    return isEnterPressed
}