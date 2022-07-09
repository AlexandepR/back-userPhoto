import {ObjectId, WithId} from 'mongodb'

export type PhotoDBType = WithId<{
    userId: ObjectId
    userName: string
    imageSrc: string
    addedAt: Date
}>
export type UserDBType = WithId<{
    userName: string
    description: string
    addedAt: Date
}>
