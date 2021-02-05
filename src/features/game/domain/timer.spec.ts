import { Timer } from './timer'

jest.useFakeTimers()

describe('Timer', () => {
  it('should start a timer in the given time', () => {
    const { timer } = setup()

    timer.start(10)

    jest.advanceTimersByTime(3_000)

    expect(timer.hasFinished()).toBe(false)
  })

  it.skip('should check that the timer is finished', () => {
    const { timer } = setup()

    timer.start(3)

    jest.advanceTimersByTime(3_000)

    expect(timer.hasFinished()).toBe(true)
  })

})

function setup() {
  return {
    timer: new Timer()
  }
}
