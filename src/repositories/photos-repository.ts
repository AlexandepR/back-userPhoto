import {ObjectId} from 'mongodb'
import {PhotoDBType} from './types'
import {photosCollection} from './db'
import {usersRepository} from "./users-repository";

export const photosRepository = {
    /** Returns all photos or photos for defined user
     * @param userId If userId not passed then methods returns all photos for all users
     */
    async findPhotos(userId: ObjectId | null): Promise<PhotoDBType[]> {
        return photosCollection.find({}).toArray()
    },
    async getPhoto(id: ObjectId): Promise<PhotoDBType | null> {
        return null
    },
    /**
     *
     * @param userId user with id should exists into database
     * @param imageSrc
     * @returns if photo didn't created return null
     */
    async createPhoto(userId: ObjectId, imageSrc: string): Promise<PhotoDBType | null> {
        const user = await usersRepository.getUser(userId)

        if(!user) return null

        const newPhoto = {
            _id: new ObjectId(),
            userId,
            userName: user?.userName,
            imageSrc,
            addedAt: new Date()
        }
        await photosCollection.insertOne(newPhoto)
        return newPhoto
    },
    async updatePhotoDescription(id: ObjectId, description: string): Promise<boolean> {
        return true
    },
    async deletePhoto(id: ObjectId): Promise<boolean> {
        return true
    }
}
