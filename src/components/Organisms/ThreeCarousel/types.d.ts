import 'three';

declare module 'three' {
  export interface Material {
    time?: { value: number };
  }
}
