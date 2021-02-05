import { Engine } from './engine'
import { instance, mock, when } from 'ts-mockito'
import { Timer } from './timer'

describe('Engine', () => {
  it('should increase current team points when guessing right', () => {
    const { engine, timer } = setup()
    when(timer.hasFinished()).thenReturn(false)

    engine.guessRight()

    expect(engine.firstTeamPoints).toBe(1)
  })

  it('should increase current team points when guessing right two times in a row', () => {
    const { engine, timer } = setup()
    when(timer.hasFinished()).thenReturn(false)

    engine.guessRight()
    engine.guessRight()

    expect(engine.firstTeamPoints).toBe(2)
  })

  it('should not increase current team points if the timer has finished', () => {
    const { engine, timer } = setup()
    when(timer.hasFinished()).thenReturn(false).thenReturn(true)

    engine.guessRight()
    engine.guessRight()

    expect(engine.firstTeamPoints).toBe(1)
  })

  it('should change teams', () => {
    const { engine, timer } = setup()
    when(timer.hasFinished()).thenReturn(false)

    engine.guessRight()
    engine.changeTeams()
    engine.guessRight()

    expect(engine.secondTeamPoints).toBe(1)
  })
})

function setup() {
  const timer = mock(Timer)
  return {
    timer,
    engine: new Engine(instance(timer))
  }
}
