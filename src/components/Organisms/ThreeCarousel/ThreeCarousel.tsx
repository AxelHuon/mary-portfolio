import * as THREE from 'three';
import { Mesh } from 'three';
import { useRef, useState, useEffect } from 'react';
import { Canvas, ThreeEvent, useFrame } from '@react-three/fiber';
import { Image, ScrollControls, useScroll, useTexture } from '@react-three/drei';
import { easing } from 'maath';
import { Colors } from '@/theme/colors';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './util';

gsap.registerPlugin(ScrollTrigger);

interface RigProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  children?: React.ReactNode;
}

interface CardProps {
  url: string;
  [key: string]: any;
}

interface BannerProps {
  position?: [number, number, number];
}

function Rig(props: RigProps) {
  const ref = useRef<THREE.Group>(null!);
  const scroll = useScroll();

  useEffect(() => {
    const triggerElement = document.querySelector('.HomeWorks__Container');
    const trigger = ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      pin: true,
      onUpdate: self => {
        if (ref.current) {
          const progress = self.progress;
          gsap.to(ref.current.rotation, {
            y: progress * Math.PI * 2,
            ease: 'none',
          });
        }
      },
    });

    return () => trigger.kill();
  }, []);
  useFrame((state, delta) => {
    if (ref.current && state.events && state.events.update) {
      ref.current.rotation.z = Math.PI / 16;
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
      <bentPlaneGeometry attach="geometry" args={[0.1, 1, 1, 20, 20]} />
    </Image>
  );
}

function Banner({ position }: BannerProps) {
  const ref = useRef<Mesh>(null!);
  const texture = useTexture('/images/gallery/works.svg');
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  const scroll = useScroll();
  useFrame((state, delta) => {
    if (ref.current && state.events && ref.current.material) {
      const material = ref.current.material as MeshSineMaterialProps;
      if (material.time !== undefined) {
        material.time.value += Math.abs(scroll.delta) * 4;
      }
      material.map.offset.x += delta / 2;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <cylinderGeometry args={[1.6, 1.6, 0.14, 128, 16, true]} />
      <meshSineMaterial
        map={texture}
        map-anisotropy={16}
        map-repeat={[30, 1]}
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    </mesh>
  );
}

export const ThreeCarousel = () => (
  <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
    <fog attach="fog" args={[Colors.PRIMARY, 8.5, 12]} />
    <ScrollControls pages={3}>
      <Rig>
        <Carousel />
      </Rig>
      <Banner position={[0, -0.15, 0]} />
    </ScrollControls>
  </Canvas>
);
