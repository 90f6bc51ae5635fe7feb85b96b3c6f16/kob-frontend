<template>
<div>
    <div class="" style="margin: 0 -2em 0 -1em">
        <b-collapse id="example-collapse" style="width: 100%; margin: 0 0 0 0; max-height: 250px; overflow: auto">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </b-collapse>
    </div>
    <div class="container">
        <form class="form" @submit="onSubmit" style="width: 70%">
            <div style="text-align: left; margin-left: -3em; margin-top: -5em">
                <div class="back-login" style="width: 30px; height: 30px;">
                    <a href="/login">
                        <svg viewBox="0 0 22 17" class="_0ZvPo8">
                            <g stroke="none" stroke-width="1" fill-rule="evenodd" transform="translate(-3, -6)">
                                <path d="M5.78416545,15.2727801 L12.9866648,21.7122915 C13.286114,22.0067577 13.286114,22.4841029 12.9866648,22.7785691 C12.6864297,23.0738103 12.200709,23.0738103 11.9004739,22.7785691 L3.29347136,15.0837018 C3.27067864,15.0651039 3.23845445,15.072853 3.21723364,15.0519304 C3.06240034,14.899273 2.99480814,14.7001208 3.00030983,14.5001937 C2.99480814,14.3002667 3.06240034,14.1003396 3.21723364,13.9476821 C3.23845445,13.9275344 3.2714646,13.9345086 3.29425732,13.9166857 L11.9004739,6.22026848 C12.200709,5.92657717 12.6864297,5.92657717 12.9866648,6.22026848 C13.286114,6.51628453 13.286114,6.99362977 12.9866648,7.288096 L5.78416545,13.7276073 L24.2140442,13.7276073 C24.6478918,13.7276073 25,14.0739926 25,14.5001937 C25,14.9263948 24.6478918,15.2727801 24.2140442,15.2727801 L5.78416545,15.2727801 Z"></path>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
            <div style="text-align: center; padding-top: 2em">
                <h3 class="title">ตั้งค่ารหัสผ่านใหม่</h3>
            </div>
            <div class="field">
                <b-form-group id="" label="Email :" label-for="input-1" description="" style="text-align: left">
                    <b-form-input v-model="email" class="input" type="email" placeholder="อีเมล"></b-form-input>
                </b-form-group>
            </div>
            <div class="field">
                <b-button type="submit" variant="primary" size="md" style="width: 100%">ต่อไป</b-button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
export default {
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
};
</script>

<style scoped>
div {
    font-family: "Kanit", sans-serif;
}

.container {
    margin: 0 auto;
    min-height: 40vh;
    max-height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 5em;
    background-color: #fff;
    box-sizing: border-box;
    box-shadow: 0 3px 10px 0 rgb(0 0 0 / 14%);
    border-radius: 0.25rem;
    overflow: hidden;
    width: 31.25rem;
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

.back-login:hover {
    color: #fff;
    background-color: #39b54a !important;
}
</style>
