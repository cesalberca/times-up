import { injectable } from 'tsyringe'
import { Timer } from './timer'

@injectable()
export class Engine {
  currentTeam: 'first' | 'second' = 'first'

  firstTeamPoints = 0
  secondTeamPoints = 0

  constructor(private readonly timer: Timer) {}

  changeTeams() {
    this.currentTeam = this.currentTeam === 'first' ? 'second' : 'first'
  }

  guessRight() {
    if (!this.timer.hasFinished()) {
      if (this.currentTeam === 'first') {
        this.firstTeamPoints++
      } else {
        this.secondTeamPoints++
      }
    }
  }
}
