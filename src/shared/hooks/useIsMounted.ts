'use client';

import { useEffect, useState } from 'react';

interface IResult {
  isMounted: boolean;
}

/**
 * Хук, для отслеживания состояния компонента, помогает избегать проблем с гидрацией.
 * Если результат хука используется для условия рендера, необходимо "резервировать" место
 * путем установки mih значения высоты/ширины
 * @function
 * @returns {IResult} Объект с булевым значением isMounted.
 */

export const useIsMounted = (): IResult => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return { isMounted };
};
