import { CounterSchema } from '../..';
import counterReducer, { decrement, increment } from '.';

describe('counterSlice.test', () => {
  test('decrement', () => {
    const state: CounterSchema = {
      value: 10,
      secondValue: 10,
    };

    expect(counterReducer(state, decrement())).toEqual({
      value: 9,
      secondValue: 10,
    });
  });
  test('increment', () => {
    const state: CounterSchema = {
      value: 10,
      secondValue: 10,
    };

    expect(counterReducer(state, increment())).toEqual({
      value: 11,
      secondValue: 10,
    });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, increment())).toEqual({
      value: 1,
      secondValue: 10,
    });
  });
});
