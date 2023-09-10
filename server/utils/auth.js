import { parseCookies} from 'h3'

export function IsLogin(event) {
  const cookies = parseCookies(event)
  console.log(cookies)
}