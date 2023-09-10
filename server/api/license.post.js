import { send , parseCookies} from 'h3'

export default defineEventHandler((event) => {
  const cookies = parseCookies(event)
  console.log(cookies)
  return `Hello, me!`
})