import {apiAxios} from '../../../helpers/axiosHelper';
import { getCookie } from '../../../helpers/Utils';

export default class DocService {
    static getFiles(path = null) {
        return apiAxios.get('/getFiles', {params: {path,}, headers: {'X-CSRFToken': getCookie('csrftoken')}}).then(response => {
            if (response.data && response.data.entries)
                return response.data.entries;
            else
                return [];
        }).catch(response => {
            console.log(response);
        })
    }

    static getDownloadLink(path) {
        return apiAxios.get('/getDownloadLink', {params: {path}}).then(response => {
            if (response.data) {
                return response.data;
            }
        }).catch(response => {
            console.log(response);
        })
    }

    static uploadFile(formData, path) {
        // let file = formData.getAll('files')[0];
        return apiAxios.post('/uploadFile', {fileData: formData.getAll('files')[0], path}, {headers: {
            'Content-Type': 'multipart/form-data'
        }})
    }
}