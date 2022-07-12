<template>
<div>
    <div class="" style="margin: 0 -2em 0 -1em;">
        <b-collapse id="example-collapse" style="
              width: 100%;
              margin: 0 0 0 0;
              max-height: 250px;
              overflow: auto;

            ">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </b-collapse>
    </div>
    <div class="container">
        <form class="form" @submit="onSubmit" style="width: 30%;">
            <h3 class="title">Log In</h3>
            <div class="field">

                <b-form-group id="" label="Email :" label-for="input-1" description="" style="text-align: left;">
                    <b-form-input v-model="email" class="input" type="email" placeholder="อีเมล"></b-form-input>
                </b-form-group>
            </div>
            <div class="field">
                <b-form-group id="" label="Password :" label-for="input-1" description="" style="text-align: left;">
                    <b-form-input v-model="password" class="input" type="password" placeholder="รหัสผ่าน"></b-form-input>
                </b-form-group>
            </div>

            <div class="field">
                <b-button type="submit" variant="primary" size="md" style="width: 100%;">Login</b-button>
            </div>
            <div class="field" style="margin-top: 0.5em; text-align: left;">
                <input type="checkbox" checked="checked" name="remember"> Remember me
            </div>
            <div class="field">
                <div style="float:left;">
                    <a href="#" variant="primary" size="md" style="">Subscribe</a>
                </div>
                <div style="float: right;">
                    <span class="" style="text-align: right;">Forgot <a href="#">password ?</a></span>
                </div>
            </div>
            <div class="field">
                <p style="margin-top: 2em; background-color: red; color: #fff; border-radius: 5px;" v-if="error" class="notification is-danger">{{ error.message }}</p>
            </div>
        </form>
    </div>

</div>
</template>

<script>
export default {
    middleware: 'isLoggedIn',
    data() {
        return {
            email: '',
            password: '',
            error: null,
        }
    },
    methods: {
        async onSubmit(e) {
            e.preventDefault()

            const payload = {
                data: {
                    email: this.email,
                    password: this.password,
                },
            }
            console.log('payload', payload)
            try {
                await this.$auth.loginWith('local', payload)
                this.$router.push('/home')
            } catch (error) {
                this.error = error
            }
        },
    },
}
</script>

<style scoped>
div {
    font-family: 'Kanit', sans-serif;
}

.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.form {
    width: 240px;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: transparent;
    border: 1px solid #adadad;
}

li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
}

li {
    text-align: center;
    border-bottom: 1px solid #adadad;
}

li:last-child {
    border-bottom: none;
}

li a.active {
    background-color: #04aa6d;
    color: white;
}

li a:hover:not(.active) {
    background-color: #adadad;
    color: white;
}

#example-collapse {
    padding-right: 0;
}

#example-collapse a {
    text-align: center;
}

#example-collapse a:hover {
    color: #fff;
    background-color: #39b54a !important;
}
</style>
