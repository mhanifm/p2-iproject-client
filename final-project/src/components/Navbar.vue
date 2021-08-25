<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand"><b>Travel</b></a>
        <div class="d-flex navbar-brand">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li v-if="!isLogin" class="nav-item">
              <router-link class="nav-link" to="/login">Sign In</router-link>
            </li>
            <li v-if="!isLogin" class="nav-item">
              <router-link class="nav-link" to="/register">Sign Up</router-link>
            </li>
            <li v-if="isLogin" class="nav-item">
              <router-link class="nav-link" to="#">Check Current Weather</router-link>
            </li>
            <li v-if="isLogin" class="nav-item">
              <a @click.prevent="logout" class="nav-link">Sign Out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('SET_ISLOGIN', false)
      this.$router.push('/login')
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>

</style>
