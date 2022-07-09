import {ObjectId} from 'mongodb'
import {PhotoDBType} from './types'
import {photosCollection} from './db'

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
    async createPhoto(userId: ObjectId, imageSrc: string): Promise<PhotoDBType> {
        return {_id: new ObjectId(), imageSrc: '', userId: userId, userName: '', addedAt: new Date()}
    },
    async updatePhotoDescription(id: ObjectId, description: string): Promise<boolean> {
        // try() {
        //
        // }
        // catch () {
        //
        // }
        return true
    },
    async deletePhoto(id: ObjectId): Promise<boolean> {
        return true
    }
}
