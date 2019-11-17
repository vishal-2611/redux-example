import { ADD, HI } from '../constants';
export function plsadd(payloadvalue) {
  return {
    type: ADD,
    payload: payloadvalue
  };
}

export function sayhi(payloadvalue) {
  const a = payloadvalue + 8 + 'priya';
  return {
    type: HI,
    payload: a
  };
}
