export class Timer {
  private count = 0

  hasFinished() {
    return this.count === 0
  }

  start(startsIn: number) {
    this.count = startsIn
    const id = setInterval(() => {
      this.count--

      if (this.hasFinished()) {
        clearInterval(id)
      }
    }, 1_000)
  }
}
