import {IPhoto} from "@/models/IPhoto";



export interface ImageGroup {
    date:number
    current?:boolean
    photos:IPhoto[]
}