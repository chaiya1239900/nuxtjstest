import { parseCookies} from 'h3'
import {IsLogin} from '../utils/auth'


export default defineEventHandler((event) => {
    const cookies = parseCookies(event)
    // console.log(IsLogin(event))
    
    return 'All good' + Date.now()

   
})