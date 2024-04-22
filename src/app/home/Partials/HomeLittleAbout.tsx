import React, { useRef } from 'react';
import SectionXL from '@/components/Atomes/Sections/SectionXL/SectionXL';
import TextStyled from '@/components/Atomes/TextStyled/TextStyled';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import styled from 'styled-components';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import { Colors } from '@/theme/colors';
import { device } from '@/utils/breakpoint';

gsap.registerPlugin(SplitText, DrawSVGPlugin);

const ContainerLittleText = styled.section`
  height: 80vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  aside > div {
    position: relative;
    @media (${device.laptopM}) {
      margin: 0 auto;
      max-width: 70%;
    }
    p {
      z-index: 100;
      span {
        font-weight: 600;
      }
    }
  }
`;

const ContainerSvg = styled.div`
  position: absolute;
  top: -5%;
  left: 2%;
  transform: rotate(5deg);
  @media (max-width: ${device.laptopM}) {
    top: -10%;
    left: -5%;
  }
`;

const ContainerCircle = styled.div`
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  display: none;
  @media (${device.laptopM}) {
    display: block;
  }
`;

const HomeLittleAbout: React.FC = () => {
  const aboutTextRef = useRef<HTMLDivElement>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const splitTitle = new SplitText('p', { type: 'words' });
      gsap.set(splitTitle.words, { opacity: 0.1 });
      gsap.set('#path', { drawSVG: 0 });
      gsap.set('#circle', { drawSVG: false });
      gsap.to(splitTitle.words, {
        stagger: 0.2,
        duration: 2,
        opacity: 1,
        scrollTrigger: {
          markers: false,
          start: 'top 60%',
          end: 'top 20%',
          trigger: aboutTextRef.current,
          scrub: true,
        },
      });
      gsap.to('#path', {
        drawSVG: '45%',
        scrollTrigger: {
          markers: false,
          start: 'top 60%',
          end: 'top 0%',
          trigger: aboutTextRef.current,
          scrub: true,
        },
      });
      gsap.to('#circle', {
        drawSVG: '40%',
        scrollTrigger: {
          markers: false,
          start: 'top 60%',
          end: 'top 0%',
          trigger: aboutTextRef.current,
          scrub: true,
        },
      });
    },
    { scope: aboutTextRef },
  );

  return (
    <ContainerLittleText>
      <SectionXL>
        <div ref={aboutTextRef}>
          <ContainerCircle>
            <svg width="1072" height="458" fill="none" viewBox="0 0 1072 458">
              <path
                id={'circle'}
                stroke={Colors.PRIMARY}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="1.5"
                strokeWidth="2.763"
                d="M82.29 118.62c78.29-28.77 165.851-47.06 255.94-57.56 92.27-10.76 187.83-12.23 280.89-4.2 91.57 7.91 181.32 25.22 260.93 53.49 40.59 14.41 79.27 31.28 109.89 52.86 31.03 21.87 54.39 48.16 63.92 76.31 9.5 28.08 3.04 57.16-20.4 82.3-23.54 25.24-60.759 45.021-101.119 60.571-44.71 17.22-94.231 30.17-144.581 40.31-53.61 10.79-109.25 18.159-165.52 21.819-111.03 7.23-226.99.94-332.25-21.86-98.28-21.28-189.63-61.379-229.01-120.769-18.09-27.27-23.51-57.011-13.52-85.801 9.89-28.53 32.27-55.18 62.89-77.85 31.7-23.48 71.24-42.44 115.71-56.77 48.74-15.7 102.091-25.77 156.361-32.09 54.1-6.31 109.39-9 164.48-9.42 55.67-.42 111.61 1.86 166.12 8.81 52.98 6.76 104.69 17.92 150.76 35.05 41.24 15.33 77.42 35.87 104.75 59.79 27.07 23.69 46.129 51.12 50.699 79.78 4.67 29.32-6.35 58.43-29.199 84.45-47.7 54.31-137.46 93.011-231.82 115.051-97.79 22.85-205.111 29.689-309.391 23.989-100.5-5.5-201.64-23.44-284.34-58.6-38.82-16.5-73.58-36.98-99.34-60.94-22.64-21.04-38.43-44.48-46.49-68.99-15.79-48.05-.34-99.28 46.23-139.91 50.19-43.8 132.73-68.8 215.47-84.82C371.54 15.97 468.361 7.78 564.151 7.24c21.41-.12 42.76.24 64.13.91 20.15.63 40.51 1.12 60.49 2.88 5.85.52 8.379-4.81 2.469-5.33-21.37-1.88-42.739-3.93-64.339-4.74-22.84-.86-45.76-1.11-68.63-.89-49.25.47-98.46 3.1-147.1 7.74-48.8 4.65-97.15 11.39-143.941 20.9-43.29 8.8-85.66 19.89-124.06 34.78-37.21 14.42-69.32 32.95-93.43 55.17-22.96 21.15-38.3 45.22-45.24 70.03-14.2 50.75 5.61 103.981 53.67 146.731 56.86 50.58 148.32 84.089 244.35 102.53 101.26 19.44 211.25 24.009 316.45 15.309 106.12-8.78 210.091-32.75 292.181-74.3 78.42-39.69 135.679-98.07 122.169-160.96-12.85-59.78-80.21-112.75-165.7-143.57-97.24-35.05-214.06-44.78-326.02-43.56-112.71 1.22-229.89 11.5-329.39 44.77-88.23 29.49-161.91 80.4-180.28 140.75-9.19 30.21-3.3 61.18 16.41 89.54 19.98 28.75 51.88 54.36 91.28 74.78 85.79 44.46 200.93 64.65 312.23 71.76 115.42 7.37 233.91-.619 343.66-23.079 51.38-10.52 102.07-23.86 147.48-41.72 41.52-16.34 79.64-37.101 103.35-63.461 23.52-26.15 29.94-55.95 20.69-84.98-9.31-29.22-33.37-56.42-64.97-79.28-30.91-22.36-70.399-39.87-111.849-54.79-40.42-14.55-83.66-26.32-128.31-35.48C670.861 51 573.74 43.22 477.6 45.01c-95.36 1.77-190.38 12.75-278.69 34.38-41.44 10.15-81.4 22.29-118.96 36.85-2.49.97-.22 3.33 2.35 2.39l-.01-.01z"
              ></path>
            </svg>
          </ContainerCircle>
          <ContainerSvg ref={svgContainerRef}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="63"
              height="91"
              fill="none"
              viewBox="0 0 63 91"
            >
              <path
                id={'path'}
                stroke={Colors.PRIMARY}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="1.5"
                strokeWidth="2.763"
                d="M23.188 4.706c.026 7.248-2.44 20.361 16.525 23.53-11.772 1.7-16.271 10.799-16.523 22.47-.288-8.81.92-18.983-18.393-21.772C23.333 27.47 23.075 12.156 23.188 4.706zM41.593 40.07c.026 7.248-4.912 20.707 14.052 23.876-11.772 1.699-13.798 10.451-14.05 22.123-.288-8.81-.879-19.06-14.275-22 12.985-1.55 12.766-14.108 14.273-24zM3.073 2.599c3.061 3.54 5.488 7.648 8.63 11.113M32.782 16.332c2.292-1.887 4.458-4.037 6.315-6.358M12.487 40.73c-3.08 2.854-5.94 6.033-8.725 9.175M31.639 47.275c.336.515.742.983 1.107 1.477M27.822 76.599c.733-.73 1.492-1.433 2.213-2.174M49.38 52.854c3.243-2.935 6.064-6.16 8.794-9.568M50.17 76.853c3.825 2.379 6.485 7.277 9.131 10.856"
              ></path>
            </svg>
          </ContainerSvg>
          <TextStyled $align={'center'} as={'p'} type={'CalloutRegular'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dignissimos dolore,
            eligendi eum illo inventore ipsum <span>laudantium libero</span> minus nobis non, odio
            pariatur praesentium quia quo sit tempora? <span>Accusantium at deserunt</span>, harum
            libero nulla pariatur perspiciatis quaerat saepe sed sit.
          </TextStyled>
        </div>
      </SectionXL>
    </ContainerLittleText>
  );
};

export default HomeLittleAbout;
