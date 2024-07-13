'use client';

import { FC } from 'react';

import { decrement, increment, selectCounter, setupValue, selectSecondValue } from '../model/slice';
import { AppButton, ThemeButton } from '@/shared/ui/AppButton';
import { useAppDispatch, useAppSelector } from '@/app/store-provider/lib/hooks';

interface ICounter {
  propsVale: number;
}

export const Counter: FC<ICounter> = ({ propsVale }) => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector(selectCounter);
  const secondValue = useAppSelector(selectSecondValue);

  return (
    <div>
      <h1>{`propsVale ${propsVale}`}</h1>
      <h1>{`secondValue ${value}`}</h1>
      <h1>{`secondValue ${secondValue}`}</h1>
      <AppButton onClick={() => dispatch(increment())} theme={ThemeButton.OUTLINE} label="плюс 1" />
      <AppButton onClick={() => dispatch(decrement())} theme={ThemeButton.OUTLINE} label="минус 1" />
      <AppButton
        onClick={() => dispatch(setupValue(Number(prompt())))}
        theme={ThemeButton.OUTLINE}
        label="установить"
      />
    </div>
  );
};
