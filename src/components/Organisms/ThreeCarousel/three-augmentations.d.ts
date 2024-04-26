// three-augmentations.d.ts
import 'three';

declare module 'three' {
  export interface Shader {
    uniforms: { [uniform: string]: THREE.IUniform };
    vertexShader: string;
    fragmentShader: string;
  }
}
