'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Colors } from '@/theme/colors';

import { IconExplode, IconStars, IconWind } from '@/components/Atomes/Icons/Icons';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import LogoMary from '@/components/Atomes/Icons/LogoMary';

gsap.registerPlugin(CustomEase);

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  height: 100vh;
  position: fixed;
  width: 100%;
  background-color: ${Colors.WHITE};
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-image: url('/images/textures/noise.gif');
    background-size: contain;
    opacity: 0.05;
  }
`;

const LoaderImgContainer = styled.div`
  position: relative;

  width: 300px;
  height: 300px;

  margin: auto;
  z-index: 1;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const ContainerLogoMary = styled.div`
  position: absolute;
  right: -10%;
  bottom: -20%;
`;

const Loader = () => {
  const LoaderContainerRef = useRef<HTMLDivElement>(null);

  const images = [
    '/images/gallery/gallery1.webp',
    '/images/gallery/mary.webp',
    '/images/gallery/gallery2.webp',
    '/images/gallery/gallery3.webp',
    '/images/gallery/gallery4.webp',
    '/images/gallery/gallery5.webp',
    '/images/gallery/gallery6.webp',
  ];

  const [imageIndex, setImageIndex] = useState<number>(0);
  const [imageSrc, setImageSrc] = useState<string>(images[imageIndex]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timeoutIds: NodeJS.Timeout[] = [];
    let delay = 3000;
    for (let i = 1; i < images.length; i++) {
      delay /= 2;
      const timeoutId = setTimeout(() => {
        setImageIndex(i);
        setImageSrc(images[i]);
      }, delay);
      timeoutIds.push(timeoutId);
    }

    return () => timeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
  }, []);

  useGSAP(() => {
    CustomEase.create('custom', 'M0,0 C0.85,0 0.2,1 1,1');

    setTimeout(() => {
      gsap.to(LoaderContainerRef.current, {
        duration: 1,
        translateY: '-100%',
        ease: 'custom',
      });
    }, 2500);
  });

  return (
    <LoaderContainer ref={LoaderContainerRef}>
      <LoaderImgContainer>
        <ContainerLogoMary>
          <LogoMary width={'100px'} height={'100px'} />
        </ContainerLogoMary>
        <IconStars
          width={51}
          height={51}
          color={Colors.PRIMARY}
          style={{
            position: 'absolute',
            zIndex: 1,
            top: '-7%',
            right: '-7%',
          }}
        />
        <IconExplode
          width={97}
          height={92}
          color={Colors.PRIMARY}
          style={{
            position: 'absolute',
            zIndex: 1,

            top: '11%',
            left: '-15%',
          }}
        />
        <IconWind
          width={47}
          height={44}
          color={Colors.PRIMARY}
          style={{
            position: 'absolute',
            zIndex: 1,
            bottom: '-6%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
        <Image src={imageSrc} alt="Loader" width={200} height={200} draggable={false} />
      </LoaderImgContainer>
    </LoaderContainer>
  );
};

export default Loader;
