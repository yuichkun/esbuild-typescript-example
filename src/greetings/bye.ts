import cowsay from 'cowsay'

export function sayBye(name: string) {
  return cowsay.say(`Bye bye! ${name}!`)
}