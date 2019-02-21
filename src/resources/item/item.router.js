import {
    Router
} from 'express'

const router = Router()

const response = (req, res) =>
    res.send({
        data: 1
    })

router
    .route('/')
    .get(response)
    .post(response)

router
    .route('/:id')
    .get(response)
    .put(response)
    .delete(response)

export default router