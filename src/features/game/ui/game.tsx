import { FC, useEffect, useState } from 'react'
import { useDi } from '../../../core/use-di'
import { GuessRightUseCase } from '../application/guess-right-use-case'
import { GetGameInformationUseCase } from '../application/get-game-information-use-case'
import { GameInformation } from '../application/game-information'
import { Timer } from '../domain/timer'

export const Game: FC = () => {
  const guessRightUseCase = useDi(GuessRightUseCase)
  const timer = useDi(Timer)
  const getGameInformationUseCase = useDi(GetGameInformationUseCase)
  const [gameInformation, setGameInformation] = useState<GameInformation>({
    secondTeamPoints: 0,
    firstTeamPoints: 0
  })

  useEffect(() => {
    fetchGameInformation()
  }, [])

  async function fetchGameInformation() {
    const x = await getGameInformationUseCase.execute()
    setGameInformation(x)
  }

  return (
    <main>
      <h1>Times up</h1>
      <h2>First team {gameInformation.firstTeamPoints}</h2>
      <h2>Second team {gameInformation.secondTeamPoints}</h2>
      <button onClick={() => timer.start(60)}>Start</button>
      <button
        onClick={async () => {
          await guessRightUseCase.execute()
          fetchGameInformation()
        }}
      >
        ✅
      </button>
    </main>
  )
}
