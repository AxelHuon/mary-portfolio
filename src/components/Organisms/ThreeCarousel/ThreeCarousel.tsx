import * as THREE from 'three';
import { Mesh } from 'three';
import { useRef, useState } from 'react';
import { Canvas, ThreeEvent, useFrame } from '@react-three/fiber';
import { Image, ScrollControls, useScroll, useTexture } from '@react-three/drei';
import { easing } from 'maath';
import { Colors } from '@/utils/Theme/colors';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './util';
import { useGSAP } from '@gsap/react';
import { useWorkContext } from '@/context/WorkContext/WorkContext';
import { useRouter } from 'next/navigation';
import { ProjectPreview } from '@/api/storyblok/types/projects';

const styles = {
  threeCarousel: {
    overflow: 'hidden',
    height: '100vh',
  },
};

gsap.registerPlugin(ScrollTrigger);

interface RigProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  children?: React.ReactNode;
}

interface CarouselProps {
  radius?: number;
  count?: number;
  projects: ProjectPreview[];
}

interface CardProps {
  projects: ProjectPreview[];
  url: string;
  title: string;
  alt: string;
  href: string;
  [key: string]: any;
}

interface BannerProps {
  position?: [number, number, number];
}

function Rig(props: RigProps) {
  const ref = useRef<THREE.Group>(null!);

  useGSAP(() => {
    const triggerElement = document.querySelector('.HomeWorks__Container');
    const trigger = ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
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

function Carousel({ radius = 1.4, count = 8, projects }: CarouselProps) {
  return (
    <>
      {projects.map((item, index) => {
        count = projects.length;
        return (
          <Card
            projects={projects}
            href={item.full_slug}
            alt={item.full_slug}
            title={item.title}
            key={index}
            url={item.image.filename}
            position={[
              Math.sin((index / count) * Math.PI * 2) * radius,
              0,
              Math.cos((index / count) * Math.PI * 2) * radius,
            ]}
            rotation={[0, Math.PI + (index / count) * Math.PI * 2, 0]}
          />
        );
      })}
    </>
  );
}

function Card({ url, projects, ...props }: CardProps) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, hover] = useState(false);
  const { currentWorkHover, setCurrentWorkHover } = useWorkContext();
  const router = useRouter();
  const pointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    hover(true);
  };

  const pointerOut = () => hover(false);

  useFrame((state, delta) => {
    if (ref.current) {
      if (hovered) {
        // @ts-ignore
        const currentWork = projects?.find(element => element?.full_slug === ref.current?.alt);
        setCurrentWorkHover(currentWork ?? null);
      }
      if (ref.current.scale && ref.current.material) {
        easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
        easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta);
        easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1.5, 0.2, delta);
      }
    }
  });

  const handleClickImage = () => {
    router.push(`works/${props.href}`);
  };

  const proxyUrl = `/api${url.replace('https://a.storyblok.com', '')}`;

  return (
    <Image
      onPointerLeave={() => setCurrentWorkHover(null)}
      ref={ref}
      url={proxyUrl}
      onClick={() => handleClickImage()}
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

export const ThreeCarousel = ({ projects }: { projects: ProjectPreview[] }) => (
  <Canvas camera={{ position: [0, 0, 100], fov: 14 }} style={styles.threeCarousel}>
    <fog attach="fog" args={[Colors.PRIMARY, 8.5, 12]} />
    <ScrollControls pages={3} style={{ overflow: 'hidden' }}>
      <Rig>
        <Carousel projects={projects} />
      </Rig>
      <Banner position={[0, -0.15, 0]} />
    </ScrollControls>
  </Canvas>
);
