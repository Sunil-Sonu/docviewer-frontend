import {Component, Vue} from 'vue-property-decorator';
import LoginService from '../services/LoginService';

@Component
export default class Login extends Vue {
    username = '';
    password = '';
    isLogginIn = false;

    /**
     * On login click.
     */
    onLogin() {
        console.log('Username: ', this.username);
        console.log('Password: ', this.password);
        this.isLogginIn = true;
        LoginService.login(this.username,this.password).then(() => {
            this.isLogginIn = false;
        })
        .catch((response) => {
            this.isLogginIn = false;
            console.log(response);
        });
    }
}