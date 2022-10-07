import { Router } from 'express'

import member from './controllers/member.js'

const router = Router()

// Add USERS Routes
router.use(member)

export default router
