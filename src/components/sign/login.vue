<template>
<div>
    <div class="container mt-5 login-container">
            <div class="row">
                <div class="col-md-6 login-form-1">
                    <h3>Pencari Kerja</h3>
                    <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Email *" v-model="data1.username" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Your Password *" v-model="data1.password" />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" @click="loginSubmit('publish')" />
                        </div>
                </div>
                <div class="col-md-6 login-form-2">
                    <h3>Penerima Kerja</h3>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Email *" v-model="data2.username" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Your Password *" v-model="data2.password" />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" @click="loginSubmit('advert')" />
                        </div>
                </div>
            </div>
        </div>
</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      data1: {
        username: '',
        password: ''
      },
      data2: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    publisherLoginData () {
      return this.$store.state.publisherLoginData
    },
    advertiserLoginData () {
      return this.$store.state.advertiserLoginData
    }
  },
  watch: {
    'publisherLoginData' () {
      if (this.$store.state.publisherLoginData.status === false) {
        alert(this.$store.state.publisherLoginData.message)
      } else {
        sessionStorage.setItem('GuudLogin', JSON.stringify(this.$store.state.publisherLoginData.data))
        this.$router.push('/guud/beranda')
      }
    },
    'advertiserLoginData' () {
      if (this.$store.state.advertiserLoginData.status === false) {
        alert(this.$store.state.advertiserLoginData.message)
      } else {
        sessionStorage.setItem('GuudLogin', JSON.stringify(this.$store.state.advertiserLoginData.data))
        this.$router.push('/guud/advertiser')
      }
    }
  },
  methods: {
    loginSubmit (params) {
      switch (params) {
        case 'publish':
          sessionStorage.clear()
          this.$store.dispatch('publisherLogin', [this.data1.username, this.data1.password])
          break
        case 'advert':
          sessionStorage.clear()
          this.$store.dispatch('advertiserLogin', [this.data2.username, this.data2.password])
          break
      }
    }
  }
}
</script>

<style scoped>
.login-container{
    margin-top: 5%;
    margin-bottom: 5%;
}
.login-form-1{
    padding: 5%;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-1 h3{
    text-align: center;
    color: #333;
}
.login-form-2{
    padding: 5%;
    background: #0062cc;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-2 h3{
    text-align: center;
    color: #fff;
}
.login-container form{
    padding: 10%;
}
.btnSubmit
{
    width: 50%;
    border-radius: 1rem;
    padding: 1.5%;
    border: none;
    cursor: pointer;
}
.login-form-1 .btnSubmit{
    font-weight: 600;
    color: #fff;
    background-color: #0062cc;
}
.login-form-2 .btnSubmit{
    font-weight: 600;
    color: #0062cc;
    background-color: #fff;
}
</style>
