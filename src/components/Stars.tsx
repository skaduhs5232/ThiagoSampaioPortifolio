// src/components/Stars.tsx
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import { useRef, useState, Suspense } from 'react';
import * as THREE from 'three';
import '../assets/styles/Stars.scss';

const generateRandomPositions = (count: number, radius: number): Float32Array => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const x = (Math.random() - 0.5) * 2 * radius;
    const y = (Math.random() - 0.5) * 2 * radius;
    const z = (Math.random() - 0.5) * 2 * radius;
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  return positions;
};

interface StarsProps {
  mode: string;
}

const Stars: React.FC<StarsProps> = ({ mode }) => {
  const ref = useRef<THREE.Group>(null);
  const [positions] = useState(() => generateRandomPositions(5000, 1.2));

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      <Points positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={mode === 'dark' ? '#f272c8' : '#000000'} 
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

interface StarsCanvasProps {
  mode: string;
}

const StarsCanvas: React.FC<StarsCanvasProps> = ({ mode }) => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100em', zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars mode={mode} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
