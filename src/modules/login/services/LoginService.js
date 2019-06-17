import { apiAxios } from "../../../helpers/axiosHelper";
import router from "../../../router";

export default class LoginService {
    static login(username, password) {
        var formData = new FormData();
        formData.set('username', username);
        formData.set('password', password);
        return apiAxios.post('/login', formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => {
            router.push('/files');
        }).catch(response => {
            console.log(response);
        })
    }
}