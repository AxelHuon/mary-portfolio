import { BreakPointType } from '@/utils/BreakPoints/breakpoints.t';

export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobileXL: '540px',
  tablet: '768px',
  tabletL: '860px',
  laptop: '1024px',
  laptopM: '1264px',
  laptopL: '1441px',
  desktopM: '1601px',
  desktopL: '1960px',
  desktopXL: '560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileXL: `(min-width: ${size.mobileXL})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletL: `(min-width: ${size.tabletL})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopM: `(min-width: ${size.laptopM})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktopM: `(min-width: ${size.desktopM})`,
  desktopL: `(min-width: ${size.desktopL})`,
  desktopXL: `(min-width: ${size.desktopXL})`,
};

export const getSizeInNumber = (device: BreakPointType) => {
  const pixelString = size[device];
  if (pixelString) {
    return parseInt(pixelString, 10);
  }
  return null;
};
