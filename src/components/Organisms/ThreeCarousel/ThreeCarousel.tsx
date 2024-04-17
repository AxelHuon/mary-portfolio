// ThreeCarousel.tsx
import * as THREE from 'three';
import { useRef, useState } from 'react';
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber';
import { Image, ScrollControls, useScroll, useTexture } from '@react-three/drei';
import { easing } from 'maath';
import { Colors } from '@/theme/colors';
import './util';
interface RigProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  children?: React.ReactNode;
}

interface CardProps {
  url: string;
  [key: string]: any; // Pour passer d'autres props dynamiquement au composant Image
}

interface BannerProps {
  position?: [number, number, number];
}

// Définition du composant Rig
function Rig(props: RigProps) {
  const ref = useRef<THREE.Group>(null);
  const scroll = useScroll();
  useFrame((state, delta) => {
    if (ref.current && state.events && state.events.update) {
      ref.current.rotation.y = -scroll.offset * (Math.PI * 2);
      state.events.update();
      easing.damp3(
        state.camera.position,
        [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
        0.3,
        delta,
      );
      state.camera.lookAt(0, 0, 0);
    }
  });

  return <group ref={ref} {...props} />;
}

// Définition du composant Carousel
function Carousel({ radius = 1.4, count = 8 }) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <Card
          key={i}
          url={`/images/gallery/gallery${Math.floor(i % 6) + 1}.webp`}
          position={[
            Math.sin((i / count) * Math.PI * 2) * radius,
            0,
            Math.cos((i / count) * Math.PI * 2) * radius,
          ]}
          rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
        />
      ))}
    </>
  );
}

// Définition du composant Card

function Card({ url, ...props }: CardProps) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, hover] = useState(false);

  const pointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    hover(true);
  };

  const pointerOut = () => hover(false);

  useFrame((state, delta) => {
    if (ref.current) {
      // Assurez-vous que les propriétés `scale` et `material` existent sur l'objet référencé
      if (ref.current.scale && ref.current.material) {
        easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
        easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta);
        easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1.5, 0.2, delta);
      }
    }
  });

  return (
    <Image
      ref={ref}
      url={url}
      transparent
      side={THREE.DoubleSide}
      onPointerOver={pointerOver}
      onPointerOut={pointerOut}
      {...props}
    >
      {/* Utilisation de BentPlaneGeometry avec les arguments spécifiés */}
      <bentPlaneGeometry attach="geometry" args={[0.1, 1, 1, 20, 20]} />
    </Image>
  );
}

// Définition du composant Banner
function Banner(props: BannerProps) {
  const ref = useRef<THREE.Mesh>(null);

  const texture = useTexture('/images/gallery/works.png');
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  const scroll = useScroll();
  useFrame((state, delta) => {
    if (ref.current && ref.current.material.map) {
      ref.current.material.time.value += Math.abs(scroll.delta) * 4;
      ref.current.material.map.offset.x += delta / 2;
    }
  });
  return (
    <mesh ref={ref} {...props}>
      <cylinderGeometry args={[1.6, 1.6, 0.14, 128, 16, true]} />
      <meshSineMaterial
        map={texture}
        mapAnisotropy={16}
        mapRepeat={[30, 1]}
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    </mesh>
  );
}

// Composant ThreeCarousel principal
export const ThreeCarousel = () => (
  <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
    <fog attach="fog" args={[Colors.PRIMARY, 8.5, 12]} />
    <ScrollControls pages={4} infinite>
      <Rig>
        <Carousel />
      </Rig>
      <Banner position={[0, -0.15, 0]} />
    </ScrollControls>
  </Canvas>
);
