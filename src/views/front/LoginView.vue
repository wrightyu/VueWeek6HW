<template>
  這是登入畫面
  <form id="form" class="form-signin">
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control"
        id="username"
        placeholder="name@example.com"
        required
        autofocus
        v-model="userData.username"
      />
      <label for="username">Email address</label>
    </div>
    <div class="form-floating">
      <input
        type="password"
        class="form-control"
        id="password"
        placeholder="Password"
        required
        v-model="userData.password"
      />
      <label for="password">Password</label>
    </div>
    <button
      class="btn btn-lg btn-primary w-100 mt-3"
      type="button"
      @click="login"
    >
      登入
    </button>
  </form>
</template>
<script>
const { VITE_APP_URL } = import.meta.env
export default {
  data () {
    return {
      userData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$http
        .post(`${VITE_APP_URL}admin/signin`, this.userData)
        .then((res) => {
          const { token, expired } = res.data
          document.cookie = `wrightyuVueHW3Token=${token};expires=${new Date(
            expired
          )};`
          alert('登入成功')
          this.$router.push('/admin/products')
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  }
}
</script>
