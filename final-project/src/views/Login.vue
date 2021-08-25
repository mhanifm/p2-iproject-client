<template>
  <div>
    <div class="row">
      <div class="col-6" style="background-image: url('https://8tugaspokokpramugaripramugaranomor5wajibbisa.files.wordpress.com/2018/07/tugas-pokok-pramugari-dan-pramugara.jpg?w=800');">
      </div>
      <div class="col-6">
        <form class="container" @submit.prevent="login">
        <div><br><br>
          <h3><b>Sign In</b></h3>
        </div><br>
        <div class="">
          <label for="exampleInputEmail1" class="form-label d-flex">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" v-model="email" placeholder="Email">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div><br>
        <div class="">
          <label for="exampleInputPassword1" class="form-label d-flex">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" placeholder="Password">
        </div><br><br>
        <button type="submit" class="btn btn-primary w-full py-2">Sign In</button><br><br>
        </form>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('submitLogin', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style>

</style>
