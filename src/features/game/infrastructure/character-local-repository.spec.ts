import { CharacterLocalRepository } from './character-local-repository'
import { CharacterMother } from '../../../../tests/character-mother'
import {instance, mock, when} from 'ts-mockito'

describe('CharacterLocalRepository', () => {
  it('should find all characters', async () => {
    const { characterLocalRepository, storage } = setup()
    when(storage.getItem('characters')).thenReturn(`[{ "name": "Brad Pitt" }, { "name": "Angelina Jolie" }]`)

    const actual = await characterLocalRepository.findAll()

    expect(actual).toEqual([CharacterMother.bradPitt(), CharacterMother.angelinaJolie()])
  })
})

function setup() {
  const storage = mock<Storage>()
  return {
    storage,
    characterLocalRepository: new CharacterLocalRepository(instance(storage))
  }
}
