import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

// Preload the model
useGLTF.preload('/models/nwaaSPT.glb', true); // true enables draco compression

export default function CarModel({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) {
  const modelRef = useRef();
  const { scene } = useGLTF('/models/nwaaSPT.glb', true); // true enables draco compression

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={position}
      rotation={rotation}
      scale={[scale, scale, scale]}
    />
  );
} 