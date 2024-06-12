import React from 'react';
import { Colors } from '@/utils/Theme/colors';
import { IconTProps } from '@/components/Atoms/Icons/Icon.t';

export const ExplodeIcon: React.FC<IconTProps> = ({
  width = 14,
  height = 14,
  color = Colors.PRIMARY,
}) => {
  return (
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
  );
};
