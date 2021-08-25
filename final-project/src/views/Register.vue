<template>
  <div>
      <div class="row">
        <div class="col-6" style="background-image: url('https://8tugaspokokpramugaripramugaranomor5wajibbisa.files.wordpress.com/2018/07/tugas-pokok-pramugari-dan-pramugara.jpg?w=800');">
        </div>
        <div class="col-6">
          <form class="container" @submit.prevent="register">
            <div><br><br>
                <h3><b>Sign Up</b></h3>
            </div><br>
            <div class="">
              <label for="exampleInputEmail" class="form-label d-flex">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" v-model="email" placeholder="Email">
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div><br>
            <div class="">
              <label for="exampleInputPassword" class="form-label d-flex">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword" v-model="password" placeholder="Password">
            </div><br><br>
            <button type="submit" class="btn btn-primary py-2">Sign Up</button><br><br>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('submitRegister', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style>

</style>
