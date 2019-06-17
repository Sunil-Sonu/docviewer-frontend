import { apiAxios } from "../../../helpers/axiosHelper";
import router from "../../../router";

export default class SignupService {
    
    /**
     * Saves the form data to the database.
     * @param {*} username 
     * @param {*} email 
     * @param {*} password 
     */
    static signup(username, email, password) {
        var formData = new FormData();
        formData.set('username', username);
        formData.set('password', password);
        formData.set('email', email);
        return apiAxios.post('/signup', formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => {
            console.log('Signup Success');
            router.push('/login');
        }).catch(response => {
            console.log(response);
        });
    }
}