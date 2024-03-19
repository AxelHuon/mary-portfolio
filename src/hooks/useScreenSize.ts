import { useEffect, useLayoutEffect, useState } from 'react';

import { BreakPointType, getSizeInNumber } from '@/utils/breakpoint';

const isBrowser = typeof window !== 'undefined';

const useScreenSize = (size: BreakPointType) => {
  const breakpoint = getSizeInNumber(size);
  const [isScreenSize, setIsScreenSize] = useState<boolean>(true);

  const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return;
    }

    const handleResize = () => {
      if (breakpoint) {
        setIsScreenSize(window.innerWidth >= breakpoint);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isScreenSize;
};

export default useScreenSize;
