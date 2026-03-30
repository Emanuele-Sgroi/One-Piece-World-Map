"use client";

import React from "react";
import { Stats, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Globe = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <OrbitControls />
      <Stats />
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
      <mesh>
        <sphereGeometry args={[2.6, 32, 32]} />
        <meshStandardMaterial map={onePieceMap} />
      </mesh>
    </>
  );
};

export default Globe;
