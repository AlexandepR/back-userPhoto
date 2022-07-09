import {InsertOneResult, ObjectId} from 'mongodb'
import {UserDBType} from './types'
import {usersCollection} from './db'

export const usersRepository = {
    async getUsers(): Promise<UserDBType[]> {
        return usersCollection.find({}).toArray()
    },
    async getUser(id: ObjectId): Promise<UserDBType | null> {
        return null
    },
    async createUser(userName: string, description: string): Promise<UserDBType> {
        const newUser = {
            _id: new ObjectId(),
            userName,
            description,
            addedAt: new Date()
        }
        await usersCollection.insertOne(newUser)
        return newUser
    },
    async updateUser(id: ObjectId, userName: string, description: string): Promise<boolean> {
        return true
    },
    /*
    Delete user and all his photos
     */
    async deleteUser(id: ObjectId): Promise<boolean> {
        return true
    }
}
