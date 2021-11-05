import React, { useCallback, useEffect } from "react";
import * as THREE from "three";

export default function HomeCanvas() {
  const canvasRef = React.useRef(null);
  let width = 0;
  let height = 0;

  let render = (camera, scene, renderer) => {
    console.log("render", width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    renderer.render(scene, camera);
  };

  let setWH = (window) => {
    width = window.innerWidth / 1.5;
    height = window.innerHeight / 1.5;
  };

  useEffect(() => {
    //Set our constants
    console.log("useEffect triggered");
    setWH(window);
    const canvas = canvasRef.current;

    //set up ThreeJS essentials
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    let loader = new THREE.TextureLoader();
    renderer.setSize(width, height);

    //load mesh
    const texture = new THREE.TextureLoader().load("./globe.jpg");

    //Set up our scene
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.MeshBasicMaterial({
        map: texture,
      })
    );
    scene.add(sphere);

    //set camera position
    camera.position.z = 10;

    //🤮
    setTimeout(() => {
      render(camera, scene, renderer);
    }, 1000);

    //handle resize
    // window.addEventListener("resize", () => {
    //   console.log("resize", window.innerWidth, window.innerHeight);
    //   setWH(window);
    //   render(camera, scene, renderer);
    // });

    //Initial render
    render(camera, scene, renderer);
  }, [canvasRef.current]);

  return (
    <>
      <canvas ref={canvasRef} width={width / 2} height={height / 2} />
    </>
  );
}
