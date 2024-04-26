interface BentPlaneGeometryProps {
  attach?: string;
  args: [number, number, number, number, number];
}

interface MeshSineMaterialProps {
  attach?: string;
  time?: { value: number };
  map?: any;
}

declare namespace JSX {
  interface IntrinsicElements {
    bentPlaneGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> &
      BentPlaneGeometryProps;

    meshSineMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> &
      THREE.MeshBasicMaterialParameters;
  }
}
