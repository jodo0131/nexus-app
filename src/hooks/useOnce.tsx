import { useEffect, useRef } from 'react';

const useOnce = (
  effect: () => void | (() => void | undefined),
  deps: unknown[] = [],
) => {
  const hasExecutedRef = useRef(false);

  useEffect(() => {
    if (hasExecutedRef.current) return;

    const cleanup = effect();
    hasExecutedRef.current = true;

    // eslint-disable-next-line consistent-return
    return () => {
      if (typeof cleanup === 'function') {
        cleanup();
      }
    };
  }, deps);
};

export default useOnce;
