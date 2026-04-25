"use client";

import React, { useRef, useEffect, useContext } from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import { OrbitControls as OrbitControlsType } from "three-stdlib";
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { AppShellContext } from "@/providers/AppShell";

const Globe = () => {
  const controlRef = useRef<OrbitControlsType>(null);
  const { setZoomIn, setZoomOut } = useContext(AppShellContext);

  useEffect(() => {
    setZoomIn(() => () => {
      controlRef.current?.object.position.multiplyScalar(0.9);
      controlRef.current?.update();
    });
    setZoomOut(() => () => {
      controlRef.current?.object.position.multiplyScalar(1.1);
      controlRef.current?.update();
    });
  }, []);

  return (
    <Canvas className="w-full h-full">
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <OrbitControls
        ref={controlRef}
        minDistance={3.5}
        maxDistance={5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
};

const Scene = () => {
  const onePieceMap = useLoader(
    TextureLoader,
    "/textures/one-piece-world-map.jpeg",
  );

  return (
    <>
      <ambientLight intensity={1.9} />
      <directionalLight />
      <mesh scale={[1, 0.96, 1]}>
        <sphereGeometry args={[2.8, 35, 35]} />
        <meshStandardMaterial map={onePieceMap} />
      </mesh>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </>
  );
};

export default Globe;
