import { useState, useEffect } from 'react';

export function useTheme() {
  const [dark, setDark] = useState(() => {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  });

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setDark(document.documentElement.getAttribute('data-theme') === 'dark');
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const toggleDark = (v) => {
    const isDark = typeof v === 'boolean' ? v : !dark;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    setDark(isDark);
  };

  return { dark, toggleDark };
}
