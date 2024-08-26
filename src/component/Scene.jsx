import React, {useRef} from 'react'
import {OrbitControls, useTexture} from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const Scene = () => {
    let tex =  useTexture('./cybg_1.png')
    let cyl = useRef(null);
    useFrame((state, delta) => {
        cyl.current.rotation.y += delta
    })
  return (
    <group rotation={[0,1.4,0.4]}>
    <mesh ref={cyl}>
        <cylinderGeometry args={[2, 2, 2, 60, 60, true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
      </group>
  )
}

export default Scene