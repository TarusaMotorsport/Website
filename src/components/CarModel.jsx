import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const MODEL_PATH = '/models/nwaaSPT_draco.glb';
const DRACO_PATH = '/draco/';

// Preload the model
useGLTF.preload(MODEL_PATH, DRACO_PATH);

export default function CarModel({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, scrollProgress = 0 }) {
  const modelRef = useRef();
  const { scene } = useGLTF(MODEL_PATH, DRACO_PATH);

  useFrame((state, delta) => {
    if (!modelRef.current) return;

    // Constant slow auto-rotation on Y axis (spin effect)
    modelRef.current.rotation.y += delta * 0.35;

    // Scroll-driven: tilt the car forward and slide it slightly as user scrolls
    const scrollTilt = scrollProgress * 0.4; // tilt forward up to ~23 degrees
    modelRef.current.rotation.x = scrollTilt;

    // Subtle floating bob animation
    const time = state.clock.elapsedTime;
    modelRef.current.position.y = position[1] + Math.sin(time * 1.2) * 0.04;

    // Scroll-driven position shift — car drifts left as you scroll
    modelRef.current.position.x = position[0] - scrollProgress * 0.8;
  });

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