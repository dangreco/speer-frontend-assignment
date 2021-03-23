import React, { useEffect, useRef } from 'react';
import useDimensions from 'react-cool-dimensions';

import './styles.css'

export type ImageRevealProps = {
    url: string;
    color: any;
}

const ImageReveal: React.FC<ImageRevealProps> = ({
    url,
    color
}) => {

    const { ref, width, height } = useDimensions<HTMLDivElement>();
    const canvasContainer = useRef(null);

    useEffect(() => {

        if (!canvasContainer) return;

        // @ts-ignore
        let canvas = canvasContainer.current.children[0];
        let ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        ctx.beginPath();
        ctx.rect(0, 0, width, height);
        ctx.fillStyle = color
        ctx.fill();


        ctx.globalCompositeOperation = 'destination-out';

        ctx.beginPath();
        ctx.arc(450, 350, 200, 0, 2 * Math.PI);
        ctx.fill();


        ctx.beginPath();
        ctx.arc(300, 600, 250, 0, 2 * Math.PI);
        ctx.fill();

        
        ctx.beginPath();
        ctx.arc(width - 150, height - 150, 300, 0, 2 * Math.PI);
        ctx.fill();


        canvas.addEventListener("mousemove", (e: MouseEvent) => {
            var x = e.offsetX;
            var y = e.offsetY;;

            ctx.beginPath();
            ctx.arc(x, y, 200, 0, 2 * Math.PI);
            ctx.fill();
        })

    }, [width, height])

    return (
        <div
            className="ImageReveal"
            style={{
                backgroundImage: `url("${url}")`
            }}
            ref={ref}
        >
            <div className="CanvasContainer" ref={canvasContainer}>
                <canvas></canvas>
            </div>
        </div>
    )

}

export default ImageReveal;