"use client";

import React from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Globe = () => {
  return (
    <Canvas className="w-full h-full">
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <OrbitControls
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
