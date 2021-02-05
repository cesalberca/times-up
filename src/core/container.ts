import { container } from 'tsyringe'
import { STORAGE } from './types'
import { Engine } from '../features/game/domain/engine'
import { Timer } from '../features/game/domain/timer'

container.register(STORAGE, { useValue: localStorage })
container.registerSingleton(Engine)
container.registerSingleton(Timer)
