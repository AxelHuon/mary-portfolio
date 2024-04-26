'use client';

import styled from 'styled-components';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { Colors } from '@/theme/colors';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { works } from '@/data/works';
import Image from 'next/image';
import { notFound } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const ArticleContainer = styled.div`
  min-height: 100vh;
  background-color: ${Colors.WHITE};
`;

const MainImageContainer = styled.div`
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

export default function Page({ params }: { params: { slug: string } }) {
  const work = works.find(item => item.slug === params.slug);
  if (!work) {
    return notFound();
  }
  return (
    <>
      <ArticleContainer>
        <MainImageContainer>
          <Image src={work?.urlImage} width={1060} height={699} alt={work.slug} />
        </MainImageContainer>
      </ArticleContainer>
    </>
  );
}
