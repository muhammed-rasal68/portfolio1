import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Box, Torus, Icosahedron } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const FloatingShape = ({ position, rotation, scale, geometry }: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  geometry: 'sphere' | 'box' | 'torus' | 'icosahedron';
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
    }
  });

  const ShapeComponent = {
    sphere: <Sphere args={[1, 32, 32]} />,
    box: <Box args={[1.5, 1.5, 1.5]} />,
    torus: <Torus args={[1, 0.4, 16, 32]} />,
    icosahedron: <Icosahedron args={[1.2]} />,
  };

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1}
      floatingRange={[-0.2, 0.2]}
    >
      <mesh
        ref={meshRef}
        position={position}
        rotation={rotation}
        scale={scale}
      >
        {ShapeComponent[geometry]}
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
};

const CentralOrb = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z += 0.002;
    }
    if (glowRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      glowRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group>
      {/* Outer glow */}
      <mesh ref={glowRef} scale={2.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.1}
        />
      </mesh>
      
      {/* Main orb */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.5, 1]} />
          <MeshDistortMaterial
            color="#60a5fa"
            attach="material"
            distort={0.4}
            speed={3}
            roughness={0.1}
            metalness={0.9}
            emissive="#1d4ed8"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>

      {/* Inner core */}
      <mesh scale={0.8}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#93c5fd"
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
};

const OrbitingParticles = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      radius: 3 + Math.random() * 2,
      speed: 0.2 + Math.random() * 0.3,
      offset: Math.random() * Math.PI * 2,
      y: (Math.random() - 0.5) * 3,
      size: 0.03 + Math.random() * 0.05,
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle) => (
        <mesh
          key={particle.id}
          position={[
            Math.cos(particle.offset) * particle.radius,
            particle.y,
            Math.sin(particle.offset) * particle.radius,
          ]}
        >
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshBasicMaterial color="#60a5fa" transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
};

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          clearColor: 0x0a0e27,
          logarithmicDepthBuffer: true 
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          color="#1d4ed8"
        />

        <CentralOrb />
        <OrbitingParticles />

        <FloatingShape
          position={[-4, 2, -2]}
          rotation={[0, 0, 0]}
          scale={0.6}
          geometry="box"
        />
        <FloatingShape
          position={[4, -1, -3]}
          rotation={[0.5, 0, 0]}
          scale={0.5}
          geometry="torus"
        />
        <FloatingShape
          position={[-3, -2, 1]}
          rotation={[0, 0.5, 0]}
          scale={0.4}
          geometry="icosahedron"
        />
        <FloatingShape
          position={[3.5, 2.5, -1]}
          rotation={[0, 0, 0.5]}
          scale={0.35}
          geometry="sphere"
        />
      </Canvas>
    </div>
  );
};
