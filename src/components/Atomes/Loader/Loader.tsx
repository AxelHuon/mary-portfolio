'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Colors } from '@/theme/colors';

import { IconStars, IconExplode, IconWind } from '@/components/Atomes/Icons/Icons';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
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

const Loader = () => {
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

  return (
    <LoaderContainer>
      <LoaderImgContainer>
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
