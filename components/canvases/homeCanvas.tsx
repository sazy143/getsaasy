import React, { useCallback, useEffect } from "react";
let x = 0;
function draw(ctx, width, height) {
  ctx.clearRect(0, 0, width, height);
  if (x > 200) x = 0;
  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.moveTo(x, 0);
  ctx.lineTo(x, 100);
  ctx.stroke();

  setTimeout(() => {
    requestAnimationFrame(() => {
      x++;
      draw(ctx, width, height);
    });
  }, 1000 / 10);
}
export default function HomeCanvas() {
  const canvasRef = React.useRef(null);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    draw(ctx, width, height);
  }, [canvasRef.current]);

  return (
    <>
      <canvas ref={canvasRef} width={width / 2} height={height / 2} />
    </>
  );
}
