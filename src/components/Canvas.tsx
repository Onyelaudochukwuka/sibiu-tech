import React, { type FC, useEffect, useRef, CanvasHTMLAttributes } from 'react';

export interface ICanvasProps {
}

const Canvas: FC<ICanvasProps> = (props) => {
  const canvasRef = useRef(null);

  const draw = (ctx: any) => {
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(50, 100, 20, 0, 2 * Math.PI);
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    // const context = canvas!.getContext('2d');

    // Our draw come here
    // draw(context);
  }, [draw]);

  return <canvas ref={canvasRef} {...props} />;
};
export default Canvas;
