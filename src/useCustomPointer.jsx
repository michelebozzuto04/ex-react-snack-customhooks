import { useEffect, useState } from "react";

export default function useCustomPointer(pointer) {
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function updatePosition(event) {
            setCoordinates({ x: event.clientX, y: event.clientY });
        }
        document.querySelector('html').style.cursor = 'none';
        window.addEventListener('mousemove', updatePosition);
    }, []);

    const customPointer = <div
        style={{
            position: 'absolute',
            top: `${coordinates.y}px`,
            left: `${coordinates.x}px`,
            cursor: 'none',
            transform: 'translate(-50 %, -50 %)'
        }}
    >
        {pointer}
    </div>

    return customPointer
}
