import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Octahedron } from '@react-three/drei'
import * as THREE from 'three'

function Shard() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.15
      ref.current.rotation.y += delta * 0.2
    }
  })
  return (
    <Octahedron ref={ref} args={[1.4, 0]}>
      <MeshDistortMaterial
        color="#7433e0"
        emissive="#2a1354"
        roughness={0.2}
        metalness={0.7}
        distort={0.25}
        speed={1.2}
      />
    </Octahedron>
  )
}

export function FloatingShard({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]} gl={{ alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[3, 3, 3]} intensity={30} color="#ac83f8" />
          <Shard />
        </Suspense>
      </Canvas>
    </div>
  )
}
