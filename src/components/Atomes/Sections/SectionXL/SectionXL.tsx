import React, { ForwardedRef } from 'react';

import styled from 'styled-components';
import { Colors } from '@/theme/colors';
import { device } from '@/utils/breakpoint';

interface SectionXLProps {
  children: React.ReactNode;
  $bgcolor?: string;
  as?: string;
}

const Section = styled.section<SectionXLProps>`
  position: relative;
  width: 100%;
  overflow: visible;
  background-color: ${props => props.$bgcolor || Colors.WHITE};
`;

const ContainerSectionXL = styled.aside`
  margin: 0 auto;
  max-width: 90%;
  z-index: 999;
  @media (${device.laptopM}) {
    max-width: 1150px;
  }
  @media (${device.laptopL}) {
    max-width: 1300px;
  }
  @media (${device.desktopM}) {
    max-width: 1550px;
  }
  @media (${device.desktopL}) {
    max-width: 1700px;
  }
`;

const SectionXL = React.forwardRef<HTMLDivElement, SectionXLProps>(
  ({ children, $bgcolor, as = 'section' }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <Section as={as} ref={ref} $bgcolor={$bgcolor}>
        <ContainerSectionXL>{children}</ContainerSectionXL>
      </Section>
    );
  },
);

SectionXL.displayName = 'SectionXL';

export default SectionXL;
