import { send , parseCookies} from 'h3'


export default defineEventHandler((event) => {
  setCookie(event, 'token', "tommy")

  return `get api`
})