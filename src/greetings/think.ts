import cowsay from 'cowsay'

export function think(answer: boolean) {
  return cowsay.think(`Is esbuild ready for production??? ${answer ? '...yes!' : '...nah'}`)
}