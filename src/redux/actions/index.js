export const START_COUNT = 'START_COUNT';
export const DOWN_COUNT = 'DOWN_COUNT';
export const DOWN_COUNT_SECONDS = 'DOWN_COUNT_SECONDS';
export const DOWN_COUNT_MINUTES = 'DOWN_COUNT_MINUTES';

export const startCount = (value) => ({
  type: START_COUNT,
  minutes: Number(value),
})

export const downCount_Minutes = (value) => ({
  type: DOWN_COUNT_MINUTES,
  minutes: Number(value),
})

export const downCount_Seconds = (value) => ({
  type: DOWN_COUNT_SECONDS,
  seconds: Number(value),
})

export const downCount = () => ({
  type: DOWN_COUNT,
  count: Number(),
})