'use client';

import styled from 'styled-components';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { Colors } from '@/utils/Theme/colors';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectContent } from '@/api/storyblok/types/projects';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const ArticleContainer = styled.div`
  min-height: 100vh;
  background-color: ${Colors.WHITE};
`;

const MainImageContainer = styled.div`
  margin-top: 100px;
  height: 50vh;
  width: 100%;
  position: relative;
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function Project({ content }: { content: ProjectContent }) {
  return (
    <>
      <ArticleContainer>
        <h1>{content.title}</h1>
        <MainImageContainer>
          <img src={content.image.filename} width={1060} height={699} alt={content.image.alt} />
        </MainImageContainer>
      </ArticleContainer>
    </>
  );
}
