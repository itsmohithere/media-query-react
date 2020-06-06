import { useEffect, useState } from 'react';
import getQueryHandler, { checkCon } from './handlers';

export default function useMediaQuery({ query }) {
  const [isRender, setIsRender] = useState(false);

  const checkQuery = () => {
    setIsRender(checkCon(getQueryHandler(query)));
  };

  useEffect(() => {
    checkQuery();
  }, []);
  return isRender;
}
