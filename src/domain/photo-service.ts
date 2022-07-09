import {ObjectId} from 'mongodb'
import {photosRepository} from "../repositories/photos-repository";
import {PhotoDBType} from "../repositories/types";
import {usersRepository} from "../repositories/users-repository";
import {photosCollection} from "../repositories/db";

export const photosService = {
    /**
     *
     * @param userId user with id should exists into database
     * @param imageSrc
     * @param description
     * @returns if photo didn't created return null
     */
    async createPhoto(userId: ObjectId, imageSrc: string, description: string): Promise<PhotoDBType | null> {
        const user = await usersRepository.getUser(userId)

        if(!user) return null

        const newPhoto = {
            _id: new ObjectId(),
            userId,
            userName: user?.userName,
            imageSrc,
            description,
            addedAt: new Date()
        }
        await photosRepository.createPhoto(newPhoto);
        return newPhoto
    },
    /** Returns all photos or photos for defined user
     * @param userId If userId not passed then methods returns all photos for all users
     */
    async findPhotos(userId: ObjectId | null): Promise<PhotoDBType[]> {
        return await photosRepository.findPhotos(userId)
    },
}
