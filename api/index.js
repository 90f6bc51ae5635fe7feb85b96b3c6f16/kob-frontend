import { Router } from 'express'

import member from './controllers/member.js'

const router = Router()

router.use((req, res, next) => {
    const origin = req.get('origin')
    res.header('Access-Control-Allow-Origin', origin)
    res.header('Access-Control-Allow-Headers', '*')
  
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma')
    res.header('Access-Control-Allow-Headers', 'x-access-token,Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma')
  
    if (req.method === 'OPTIONS') {
      res.sendStatus(204)
    } else {
      next()
    }
  })

// Add USERS Routes
router.use(member)

export default router
