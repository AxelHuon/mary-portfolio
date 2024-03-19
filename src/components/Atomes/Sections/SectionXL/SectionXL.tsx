import React, { ForwardedRef } from 'react';

import styled from 'styled-components';
import { device } from '@/utils/breakpoint';

interface SectionXLProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

const Section = styled.section<SectionXLProps>`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-inline: 20px;
  overflow: visible;

  @media (${device.tablet}) {
    max-width: 95%;
  }
  @media (${device.desktopM}) {
    padding-inline: 0;
    max-width: 1550px;
  }
`;

const ContainerSectionL = styled.aside``;
const SectionXL = React.forwardRef<HTMLDivElement, SectionXLProps>(
  ({ children, backgroundColor }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <Section ref={ref} backgroundColor={backgroundColor}>
        <ContainerSectionL>{children}</ContainerSectionL>
      </Section>
    );
  },
);

SectionXL.displayName = 'SectionXL';

export default SectionXL;
