import {Component, Vue} from 'vue-property-decorator';
import SignupService from '../services/SignupService';

@Component
export default class Signup extends Vue {
    username = '';
    password = '';
    email = '';
    isLogginIn = false;

    /**
     * On login click.
     */
    onSignup() {
        this.isSignup = true;
        SignupService.signup(this.username, this.email, this.password).then(() => {
            this.isSignup = false;
        })
        .catch((response) => {
            this.isSignup = false;
            console.log(response);
        });
    }
}