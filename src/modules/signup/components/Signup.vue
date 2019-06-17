<template>
    <div class="container login-container">
        <div class="notification">
            <nav class="panel">
                <p class="panel-heading">
                    Signup
                </p>
                <form>
                    <section>
                        <div class="panel-block">
                            <b-field class="email-block">
                                <label>Username: </label>
                                <b-input class='email' v-model="username" placeholder="Username"
                                    type="text">
                                </b-input>
                            </b-field>
                            </div>
<div class="panel-block">
                            <b-field class="email-block">
                                <label>Email: </label>
                                <b-input class='email' v-model="email" placeholder="Username"
                                    type="email"
                                    icon-pack="fa"
                                    icon="envelope">
                                </b-input>
                            </b-field>
                            </div>
                            <div class="panel-block">
                            <b-field class="email-block">
                                <label>Password: </label>
                                <b-input class='password' v-model="password" type="password"
                                    placeholder="Password reveal input"
                                    password-reveal>
                                </b-input>
                            </b-field>
                            </div>
                            <b-button style="padding-top: 3px;" type="is-primary" @click="onSignup()">{{isLogginIn ? 'Signing In' : 'Sign up'}}</b-button>
                    </section>
                </form>
            </nav>
        </div>
    </div>
</template>

<script src='./signup.js'></script>
<style scoped lang="scss" src='./signup.scss'></style>