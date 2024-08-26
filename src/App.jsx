import { Canvas } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import Scene from './component/Scene'
import {Bloom, EffectComposer, ToneMapping} from '@react-three/postprocessing'

import React from 'react'
import './styles.css';

const App = () => {

  return (
    <Canvas flat camera={{ fov: 60 }}>
      <OrbitControls />
      <ambientLight />
      <Scene />
      <EffectComposer>
      <Bloom
        mipmapBlur
        intensity={2} // The bloom intensity.
        luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
        luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
      />
      </EffectComposer>
      
    </Canvas>
  )
}

export default App