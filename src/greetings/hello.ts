import cowsay from 'cowsay'

export function sayHello(name: string) {
  return cowsay.say(`hello ${name}!`)
}