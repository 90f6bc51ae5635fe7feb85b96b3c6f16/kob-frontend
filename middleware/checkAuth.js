import cookie from 'cookie'
export default function ({ store, redirect, req }) {
  if (process.server) {
    const cookies = cookie.parse(req.headers.cookie || '')
    const token = cookies['auth._token.local']
    console.log('TOKEN FROM COOKIE (SERVER):', token)

    if (!token || token == 'false') {
      console.log("NO TOKEN → REDIRECT TO /login")
      return redirect('/login')
    }
  }
  if (process.client) {
    // ถ้ายังไม่ได้ login
    if (!store.state.auth.loggedIn) {
      return redirect('/login')
    }

  }

}
