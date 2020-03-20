<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand h1" href="/">Guud</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <!-- <li class="nav-item">
        <a class="nav-link text-dark" href="#">Link</a>
      </li> -->
    </ul>
    <div class="dropdown" v-if="this.dataSession === null">
      <button class="btn btn-outline-primary mx-2 my-2 my-sm-0" id="dropdownMenuButton" data-toggle="dropdown">Register</button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <router-link class="dropdown-item" to="register/publish">Sebagai Pekerja</router-link>
          <router-link class="dropdown-item" to="register/advert">Penerima Kerja</router-link>
        </div>
    </div>
    <div class="my-2 my-lg-0" v-if="this.dataSession === null">
      <router-link to="login" class="btn btn-outline-success mx-2 my-2 my-sm-0">Login</router-link>
    </div>
    <div class="dropdown" v-if="this.dataSession !== null && !(this.dataSession.role === undefined || this.dataSession.role === null)">
      <button class="btn btn-outline-primary mx-2 my-2 my-sm-0" id="dropdownMenuButton" data-toggle="dropdown">{{ dataSession.username.split('@')[0] }}</button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <router-link class="dropdown-item" to="advertiser" v-if="this.dataSession.role === 'advertiser'">Dashboard</router-link>
          <button class="dropdown-item" @click="logout">Log Out</button>
        </div>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      dataSession: JSON.parse(sessionStorage.getItem('GuudLogin'))
    }
  },
  mounted () {
    this.initku()
  },
  methods: {
    initku () {
      console.log(this.dataSession)
    },
    logout () {
      sessionStorage.clear()
      this.$router.push('/guud/login')
    }
  }
}
</script>
