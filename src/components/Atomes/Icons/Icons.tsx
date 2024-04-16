import React from 'react';
import { Colors } from '@/theme/colors';

import styled from 'styled-components';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconStars: React.FC<IconProps> = ({
  width = 14,
  height = 14,
  color = Colors.PRIMARY,
  style,
}) => {
  return (
    <IconWrapper style={style}>
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
    </IconWrapper>
  );
};

export const IconExplode: React.FC<IconProps> = ({
  width = 14,
  height = 14,
  color = Colors.PRIMARY,
  style,
}) => {
  return (
    <IconWrapper style={style}>
      <svg width={width} height={height} viewBox="0 0 167 162" fill="none">
        <path
          d="M127.593 80.0451C138.615 68.3976 150.779 57.6818 162.239 46.4641C146.487 45.5981 130.574 43.1187 114.791 43.8132C114.581 32.7057 113.904 21.6616 111.521 10.7531C102.05 19.8047 91.7831 28.6023 83.9443 39.1106C79.3262 26.6077 72.7765 14.1387 64.9843 3.34033C57.3999 15.7754 50.687 29.8028 46.4273 43.6629C35.7154 41.5943 24.4247 40.4403 13.5241 40.4191C16.7745 51.4526 21.0364 62.2023 25.0714 72.9711C18.1464 80.3373 11.7133 89.0692 6.67969 97.8815C13.9524 99.8189 21.5262 100.579 28.8964 102.084C27.3719 113.615 27.1132 125.307 26.4029 136.91C35.9274 132.542 44.8031 126.933 53.4222 121.013C58.8312 131.285 63.6125 141.863 68.9769 152.159C75.1428 142.123 81.3511 131.784 88.2125 122.191C95.7905 129.94 105.599 135.246 113.813 142.335C112.84 131.861 113.444 121.369 113.374 110.871C125.04 111.333 136.963 110.956 148.654 110.971C141.303 101.642 133.984 92.296 127.165 82.5647"
          stroke={color}
          strokeWidth="5"
          strokeMiterlimit="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconWrapper>
  );
};

export const IconWind: React.FC<IconProps> = ({
  width = 14,
  height = 14,
  color = Colors.PRIMARY,
  style,
}) => {
  return (
    <IconWrapper style={style}>
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
    </IconWrapper>
  );
};
