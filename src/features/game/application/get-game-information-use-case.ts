import {UseCase} from '../../../core/use-case'
import {Engine} from '../domain/engine'
import {injectable} from 'tsyringe'
import {GameInformation} from "./game-information";

@injectable()
export class GetGameInformationUseCase implements UseCase<GameInformation> {
  constructor(private readonly engine: Engine) {}

  async execute(): Promise<GameInformation> {
    return {
      firstTeamPoints: this.engine.firstTeamPoints,
      secondTeamPoints: this.engine.secondTeamPoints
    }
  }
}
