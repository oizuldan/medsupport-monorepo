import MobileDetect from 'mobile-detect';
import { useMemo } from 'react';

export const useMobileDetector = (md?: MobileDetect): MobileDetect =>
  useMemo(() => md || new MobileDetect(process.browser ? window.navigator.userAgent : ''), [md]);
