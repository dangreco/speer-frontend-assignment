import React from 'react';

type AnimationCallback = (time: number) => void;

const useAnimationFrame = (callback: AnimationCallback) => {

    // Use useRef for mutable variables that we want to persist
    // without triggering a re-render on their change
    const requestRef = React.useRef();
    const previousTimeRef = React.useRef();

    const animate = (time: number) => {
        if (previousTimeRef.current != undefined) {
            const deltaTime = time - previousTimeRef.current!;
            callback(deltaTime)
        }
        // @ts-ignore
        previousTimeRef.current = time;
        // @ts-ignore
        requestRef.current = requestAnimationFrame(animate);
    }

    React.useEffect(() => {
        // @ts-ignore
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current!);
    }, []); // Make sure the effect runs only once
}

export default useAnimationFrame;