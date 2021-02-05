import { Character } from './character'

export interface CharacterRepository {
  findAll(): Promise<Character[]>
}
