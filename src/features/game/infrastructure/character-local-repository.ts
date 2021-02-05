import { CharacterRepository } from '../domain/character-repository'
import { inject, injectable } from 'tsyringe'
import { Character } from '../domain/character'
import { STORAGE } from '../../../core/types'

@injectable()
export class CharacterLocalRepository implements CharacterRepository {
  constructor(@inject(STORAGE) private readonly storage: Storage) {}

  async findAll(): Promise<Character[]> {
    const charactersStringified = this.storage.getItem('characters')

    if (charactersStringified === null) {
      return []
    } else {
      const characters = JSON.parse(charactersStringified)
      return characters
    }
  }
}
