import { AxiosResponse } from "axios";
import $api from "../http";
import {ImageGroup}  from "@/models/response/ImageGroup";
import {IPhoto} from "@/models/IPhoto";

export default class PhotoService {
    static async fetchPhotos(username:string): Promise<AxiosResponse<ImageGroup[]>> {
        return $api.get<ImageGroup[]>(`/authors/${username}/images`)
    }
    static async deletePhoto(id:string): Promise<AxiosResponse<ImageGroup[]>> {
        return $api.delete<ImageGroup[]>(`/images/${id}`)
    }
    static async postPhoto( formdata: any): Promise<AxiosResponse<IPhoto[]>> {
        return $api.post<IPhoto[]>(`/images/`,formdata)
    }
    static async changeLabel(id:string,label:string): Promise<AxiosResponse<ImageGroup[]>> {
        return $api.put<ImageGroup[]>(`/images/${id}`,{label:label})
    }
}
