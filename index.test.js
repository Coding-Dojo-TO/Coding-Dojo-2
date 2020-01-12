const {
  sum,
  subtract,
  verifyInput,
  getLcd,
  getLcm
} = require('./index')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('minus 3 - 2 to equal 1', () => {
  expect(subtract(3, 2)).toBe(1);
});

test('verify if the inputs are natural number',()=>{
  expect(verifyInput(20,8)).toBe(true)
  expect(verifyInput(0,8)).toBe(false)
  expect(verifyInput(20,8.5)).toBe(false)
  expect(verifyInput('a','b')).toBe(false)
})

test('get lowest non-1 divisor. if there is not, return 1', () => {
  expect(getLcd(20,8)).toBe(2)
  expect(getLcd(6,3)).toBe(3)
  expect(getLcd(5,2)).toBe(1)
  expect(getLcd(1,2)).toBe(1)
})

test('get Lcm', () => {
  expect(getLcm(20,8)).toBe(40)
  expect(getLcm(48,36)).toBe(144)
  expect(getLcm(2,5)).toBe(10)
  expect(getLcm(6,3)).toBe(6)
  expect(getLcm(1,3)).toBe(3)
  expect(getLcm(1,1)).toBe(1)
  expect(getLcm(8,1.5)).toBe(false)
  expect(getLcm(-1,8)).toBe(false)
  expect(getLcm('a',8)).toBe(false)
})
