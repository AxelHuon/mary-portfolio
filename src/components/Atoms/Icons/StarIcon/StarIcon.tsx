import React from 'react';
import { IconTProps } from '@/components/Atoms/Icons/Icon.t';
import { Colors } from '@/utils/Theme/colors';

const StarIcon: React.FC<IconTProps> = ({ width = 14, height = 14, color = Colors.PRIMARY }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 81 86" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M78.2752 21.6313C34.7661 47.9632 27.4369 51.0935 10.3114 35.6346C14.5577 50.4079 12.6185 61.1496 4.70312 72.1377C24.2922 66.1771 27.8654 71.6232 37.8103 78.4384C31.69 59.1475 40.2728 52.799 78.2752 21.6313Z"
        stroke={color}
        strokeWidth="3.5"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M61.9443 60.8589C62.566 62.8861 62.8128 65.0376 63.2116 67.115"
        stroke={color}
        strokeWidth="3.5"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M53.7598 73.9205C55.3721 73.6741 57.0004 73.2166 58.5933 72.8447"
        stroke={color}
        strokeWidth="3.5"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M65.1651 76.6489C65.1605 78.6396 65.517 81.2121 66.1444 83.1321"
        stroke={color}
        strokeWidth="3.5"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M70.3076 70.915C72.457 71.0884 74.7218 70.2225 76.8701 69.9556"
        stroke={color}
        strokeWidth="3.5"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.8965 4.25049C23.1296 6.52409 23.5147 8.76803 23.9672 11.004"
        stroke={color}
        strokeWidth="3.5"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9492 17.0017C15.63 16.8555 17.3032 16.632 18.9633 16.332"
        stroke={color}
        strokeWidth="3.5"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.7695 20.4321C25.805 22.5586 26.23 24.8185 26.6608 26.9096"
        stroke={color}
        strokeWidth="3.5"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.1514 14.6113C33.0917 14.1299 34.8857 13.4773 36.8922 13.248"
        stroke={color}
        strokeWidth="3.5"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StarIcon;
