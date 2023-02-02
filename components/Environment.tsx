import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Environment, OrbitControls, Text } from '@react-three/drei'
import Model from './Model'

export default function App() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.7} />
        <Model />
        <OrbitControls />
        <Environment preset="forest" background />
      </Suspense>
    </Canvas>
  )
}
