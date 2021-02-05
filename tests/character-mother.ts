import { Character } from '../src/features/game/domain/character'

export class CharacterMother {
  static bradPitt(): Character {
    return {
      name: 'Brad Pitt'
    }
  }
  static angelinaJolie(): Character {
    return {
      name: 'Angelina Jolie'
    }
  }
}
