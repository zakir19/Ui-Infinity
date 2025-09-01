import { useEffect } from 'react';

export const usePageTitle = (title?: string) => {
  useEffect(() => {
    const baseTitle = 'UIinfinity';
    const fullTitle = title ? `${title} - ${baseTitle}` : baseTitle;
    document.title = fullTitle;
  }, [title]);
};
