import React from 'react';
import { Colors } from '@/utils/Theme/colors';
import { IconTProps } from '@/components/Atoms/Icons/Icon.t';

export const IconWind: React.FC<IconTProps> = ({
  width = 14,
  height = 14,
  color = Colors.PRIMARY,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 77 44" fill="none">
      <path
        d="M7.63574 17.2303C14.7008 11.3248 22.6549 11.0359 30.6849 11.1166C40.7071 11.2176 50.8474 11.895 59.5222 2.94678"
        stroke={color}
        strokeWidth="2.76298"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.27637 35.4202C9.95343 27.6861 18.9334 23.6318 29.0604 23.5498C34.3594 23.5075 39.6144 24.6309 44.9222 24.1711C56.8806 23.1354 68.5057 17.1006 74.7407 6.56104"
        stroke={color}
        strokeWidth="2.76298"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55.2728 33.5352C51.1341 35.638 46.7254 37.1108 42.0411 37.182C32.7127 37.324 23.2041 34.8887 15.4434 41.6634"
        stroke={color}
        strokeWidth="2.76298"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
