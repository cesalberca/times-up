import { UseCase } from '../../../core/use-case'
import { Engine } from '../domain/engine'
import { injectable } from 'tsyringe'

@injectable()
export class GuessRightUseCase implements UseCase {
  constructor(private readonly engine: Engine) {}

  async execute(): Promise<void> {
    this.engine.guessRight()
  }
}
