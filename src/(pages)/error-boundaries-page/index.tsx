'use client';

import { useState } from 'react';

export const ErrorBoundariesPage = () => {
  const [isShowError, setIsShowError] = useState(false);

  const [arr, setArr] = useState<null | Array<string>>(['123']);

  return (
    <>
      <button
        onClick={() => {
          setArr(null);
          setIsShowError(true);
        }}
      >
        Click for show error page
      </button>
      {isShowError && arr?.map((item) => <>{item}</>)}
    </>
  );
};
