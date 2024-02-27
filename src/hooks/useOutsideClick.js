import { useEffect } from 'react';

export default function useOutsideClick(ref, expId, cdFunc) {
  const handler = (e) => {
    if (!ref.current.contains(e.target) && e.target.id !== expId) {
      cdFunc();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });
}
