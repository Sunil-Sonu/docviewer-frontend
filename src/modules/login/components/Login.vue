<template>
    <div class="container login-container">
        <div class="notification">
            <nav class="panel">
                <p class="panel-heading">
                    Login
                </p>
                <form>
                    <section>
                        <div class="panel-block">
                        <b-field class="email-block">
                            <label style="padding-right: 3px; padding-top: 3px;">Username: </label>
                            <b-input class='email' v-model="username" placeholder="Username"
                                type="text"
                                icon-pack="fa"
                                icon="envelope">
                            </b-input>
                        </b-field>
                        </div>
                        <div class="panel-block">
                        <b-field class="email-block">
                            <label style="padding-right: 3px; padding-top: 3px;">Password: </label>
                            <b-input class="password" v-model="password" type="password"
                                placeholder="Password reveal input"
                                password-reveal>
                            </b-input>
                        </b-field>
                        </div>
                        <b-button style="align:center; padding-top: 3px"type="is-primary" @click="onLogin()">{{isLogginIn ? 'Loggin In' : 'Login'}}</b-button>
                    </section>
                </form>
            </nav>
        </div>
    </div>
</template>

<script src = './login.js'></script>
<style lang="scss" src="./login.scss" scoped></style>
