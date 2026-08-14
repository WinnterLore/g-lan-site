import { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { MeshDistortMaterial, Icosahedron, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Crystal() {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)
  const { viewport } = useThree()

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.08
      meshRef.current.rotation.y += delta * 0.12
    }
    if (groupRef.current) {
      const targetX = (state.pointer.y * viewport.height) / 40
      const targetY = (state.pointer.x * viewport.width) / 40
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.04)
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.04)
    }
  })

  return (
    <group ref={groupRef}>
      <Icosahedron ref={meshRef} args={[1.6, 2]}>
        <MeshDistortMaterial
          color="#8c53f2"
          emissive="#3a1a70"
          roughness={0.15}
          metalness={0.6}
          distort={0.35}
          speed={1.6}
        />
      </Icosahedron>
    </group>
  )
}

function Sparks({ count = 400 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 4 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = radius * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.015
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#c9adfb"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  )
}

export function HeroScene({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[4, 4, 4]} intensity={40} color="#ac83f8" />
          <pointLight position={[-4, -2, -4]} intensity={20} color="#5c22b8" />
          <Crystal />
          <Sparks />
        </Suspense>
      </Canvas>
    </div>
  )
}
