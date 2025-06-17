'use client';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useMemo, useRef, useEffect, useState } from 'react';

// Hook to detect screen width (Tailwind md = 768px)
const useIsMediumUp = () => {
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const update = () => setIsMdUp(window.innerWidth >= 768);
    update();

    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return isMdUp;
};

const WaterTunnelEffect = () => {
  const ref = useRef<THREE.Points>(null!);

  const points = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 10000; i++) {
      const t = i / 1000;
      const radius = 20 + 5 * Math.sin(t * 2 * Math.PI);
      const angle = t * Math.PI * 4;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      const z = t * 100 - 50;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!ref.current) return;
    ref.current.rotation.z = Math.sin(clock.elapsedTime * 0.3) * 0.3;
    ref.current.rotation.y = pointer.x * 0.6;
    ref.current.rotation.x = pointer.y * 0.4;
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#000000"
        size={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

const WaterTunnel = () => {
  const isMdUp = useIsMediumUp();

  if (!isMdUp) return null; // do not render Three.js at all

  return (
    <div className="absolute top-0 left-0 w-full h-full z-5">
      <Canvas camera={{ position: [0, 0, 50], fov: 80 }}>
        <ambientLight intensity={0.5} />
        <WaterTunnelEffect />
      </Canvas>
    </div>
  );
};

export default WaterTunnel;