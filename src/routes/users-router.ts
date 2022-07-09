import {Request, Response, Router} from 'express'
import { ObjectId } from 'mongodb'
import {usersRepository} from '../repositories/users-repository'

export const usersRouter = Router({})

usersRouter.post('/',
    (req: Request<{},{},{userName: string, description: string}>, res: Response) => {
        const photo = usersRepository.createUser(req.body.userName, req.body.description)
        res.status(201).send(photo)
    })

usersRouter.put('/:id',
    async (req: Request<{id: string},{userName: string, description: string}>, res: Response) => {
        const isUpdated = await usersRepository.updateUser(new ObjectId(req.params.id), req.body.description, req.body.userName)
        if (isUpdated) {
            res.send(204)
        } else {
            res.send(404)
        }
    })

usersRouter.get('/', (req: Request, res: Response) => {
    const users = usersRepository.getUsers()
    res.send(users)
})

usersRouter.get('/:id', (req: Request<{id: string}>, res: Response) => {
    let user = usersRepository.getUser(new ObjectId(req.params.id))
    if (user) {
        res.send(user)
    } else {
        res.send(404)
    }
})

usersRouter.delete('/:id', async (req: Request<{id: string}>, res: Response) => {
    const isDeleted = await usersRepository.deleteUser(new ObjectId(req.params.id))
    if (isDeleted) {
        res.send(204)
    } else {
        res.send(404)
    }
})
