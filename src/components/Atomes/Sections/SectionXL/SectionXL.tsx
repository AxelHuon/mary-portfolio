import React, { ForwardedRef } from 'react';

import styled from 'styled-components';
import { device } from '@/utils/breakpoint';
import { Colors } from '@/theme/colors';

interface SectionXLProps {
  children: React.ReactNode;
  bgcolor?: string;
  as?: string;
}

const Section = styled.section<SectionXLProps>`
  position: relative;
  width: 100%;
  overflow: visible;
  background-color: ${props => props.bgcolor || Colors.WHITE};
`;

const ContainerSectionXL = styled.aside`
  margin: 0 auto;
  @media (${device.tablet}) {
    max-width: 95%;
  }
  @media (${device.desktopM}) {
    padding-inline: 0;
    max-width: 1550px;
  }
`;

const SectionXL = React.forwardRef<HTMLDivElement, SectionXLProps>(
  ({ children, bgcolor, as = 'section' }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <Section as={as} ref={ref} bgcolor={bgcolor}>
        <ContainerSectionXL>{children}</ContainerSectionXL>
      </Section>
    );
  },
);

SectionXL.displayName = 'SectionXL';

export default SectionXL;
