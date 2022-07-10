import {ObjectId} from 'mongodb'
import {PhotoDBType} from './types'
import {photosCollection, usersCollection} from './db'
import {usersRepository} from "./users-repository";

export const photosRepository = {
    /** Returns all photos or photos for defined user
     * @param userId If userId not passed then methods returns all photos for all users
     */
    async findPhotos(userId: ObjectId | null): Promise<PhotoDBType[]> {
        if (!userId) {
            return photosCollection.find({}).toArray()
        }
        return photosCollection.find({userId}).toArray()
    },
    async getPhoto(id: ObjectId): Promise<PhotoDBType | null> {
        return null
    },
    async createPhoto(newPhoto: PhotoDBType): Promise<PhotoDBType | null> {
        await photosCollection.insertOne(newPhoto)
        return newPhoto
    },
    async updatePhotoDescription(id: ObjectId, description: string): Promise<boolean> {
        // const photo = photosCollection.findOne({_id: id})
        const updatePhoto = photosCollection.updateOne(
            {_id: id},
            {$set: {description: description}}
        )

        return true
    },
    async deletePhoto(id: ObjectId): Promise<boolean> {
        return true
    }
}
