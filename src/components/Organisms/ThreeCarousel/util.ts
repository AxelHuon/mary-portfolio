import * as THREE from 'three';
import { extend } from '@react-three/fiber';

// Création de BentPlaneGeometry qui hérite de THREE.PlaneGeometry
export class BentPlaneGeometry extends THREE.PlaneGeometry {
  constructor(
    radius: number,
    width: number,
    height: number,
    widthSegments: number,
    heightSegments: number,
  ) {
    super(width, height, widthSegments, heightSegments);
    let p = this.parameters;
    let hw = p.width * 0.5;
    let a = new THREE.Vector2(-hw, 0);
    let b = new THREE.Vector2(0, radius);
    let c = new THREE.Vector2(hw, 0);
    let ab = new THREE.Vector2().subVectors(a, b);
    let bc = new THREE.Vector2().subVectors(b, c);
    let ac = new THREE.Vector2().subVectors(a, c);
    let r = (ab.length() * bc.length() * ac.length()) / (2 * Math.abs(ab.cross(ac)));
    let center = new THREE.Vector2(0, radius - r);
    let baseV = new THREE.Vector2().subVectors(a, center);
    let baseAngle = baseV.angle() - Math.PI * 0.5;
    let arc = baseAngle * 2;
    let uv = this.attributes.uv;
    let pos = this.attributes.position;
    let mainV = new THREE.Vector2();
    for (let i = 0; i < uv.count; i++) {
      let uvRatio = 1 - uv.getX(i);
      let y = pos.getY(i);
      mainV.copy(c).rotateAround(center, arc * uvRatio);
      pos.setXYZ(i, mainV.x, y, -mainV.y);
    }
    pos.needsUpdate = true;
  }
}

// Création de MeshSineMaterial qui hérite de THREE.MeshBasicMaterial
export class MeshSineMaterial extends THREE.MeshBasicMaterial {
  time: { value: number };

  constructor(parameters: THREE.MeshBasicMaterialParameters = {}) {
    super(parameters);
    this.setValues(parameters);
    this.time = { value: 0 };
  }

  onBeforeCompile(shader: THREE.Shader) {
    shader.uniforms.time = this.time;
    shader.vertexShader = `uniform float time; ${shader.vertexShader}`;
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `vec3 transformed = vec3(position.x, position.y + sin(time + uv.x * PI * 4.0) / 4.0, position.z);`,
    );
  }
}

// Extension de @react-three/fiber avec les nouveaux matériaux
extend({ MeshSineMaterial, BentPlaneGeometry });
