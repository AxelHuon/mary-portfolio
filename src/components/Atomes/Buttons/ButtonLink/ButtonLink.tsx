import React, { useRef } from 'react';
import Link from 'next/link';
import { StyledButton } from './ButtonLink.style';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  href?: string;
  isNextLink?: boolean;
  backgroundColor?: string;
  color?: string;
};

const ButtonLink: React.FC<ButtonProps> = ({
  onClick,
  children,
  href,
  isNextLink = true,
  backgroundColor,
  color,
}) => {
  // Créez une référence pour le texte à animer
  const buttonRef = useRef<HTMLDivElement>(null);
  // Appliquez l'animation GSAP
  useGSAP(() => {
    if (!buttonRef.current) return;

    const splitText = new SplitText(buttonRef.current, {
      type: 'lines, chars',
      linesClass: 'lineChildren',
    });
    const timeline = gsap.timeline({ paused: true });

    timeline.from(splitText.chars, {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: '0% 50% -50',
      ease: 'back',
      stagger: 0.01,
    });

    buttonRef.current.addEventListener('mouseenter', () => timeline.play());
    buttonRef.current.addEventListener('mouseleave', () => timeline.reverse());
  }, [children]);

  if (isNextLink && href) {
    return (
      <StyledButton onClick={onClick} style={{ backgroundColor, color }}>
        <Link href={href} passHref>
          <div ref={buttonRef}>{children}</div>
        </Link>
      </StyledButton>
    );
  }

  return (
    <StyledButton onClick={onClick} style={{ backgroundColor, color }}>
      <div ref={buttonRef}>{children}</div>
    </StyledButton>
  );
};

export default ButtonLink;
