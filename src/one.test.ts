import { expect, test } from 'vitest'

test('always passed test', () => {
  const res = 1+1;
  expect(res).toBe(2)
})