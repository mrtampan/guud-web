<template>
<div>
    <div class="container mt-5 card">
        <h1 class="mb-4 text-center">{{ title }}</h1>
      <div v-if="this.$route.params.var === 'publish'">
       <div class="form-group">
            <label for="name" class="col-sm-2 control-label">Email</label>
            <div class="col-sm-12">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="data1.username" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="name" class="col-sm-2 control-label">Password</label>
            <div class="col-sm-12">
                <div class="input-group">
                    <input type="password" class="form-control" v-model="data1.password" />
                </div>
            </div>
        </div>

       <div class="form-group">
            <label for="name" class="col-sm-2 control-label">Nama</label>
            <div class="col-sm-12">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="data1.nama"/>
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="email" class="col-sm-2 control-label">Alamat</label>
            <div class="col-sm-12">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="data1.alamat" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="username" class="col-sm-2 control-label">Jenis Kelamin</label>
            <div class="col-sm-12">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="data1.jenisKelamin" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="password" class="col-sm-2 control-label">Tempat Tanggal Lahir</label>
            <div class="input-group">
            <div class="col-sm-6">
                <input type="text" class="form-control" v-model="data1.tempatLahir"/>
            </div>
            <div class="col-sm-6">
                <datepicker placeholder="Tanggal Lahir" width="100%" :format="'dd-MM-yyyy'" v-model="data1.tanggalLahir" :bootstrap-styling="true"></datepicker>
            </div>
            </div>
        </div>

        <div class="form-group">
            <label for="confirm" class="col-sm-2 control-label">Pendidikan Terakhir</label>
            <div class="col-sm-12">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="data1.pendidikanAkhir"/>
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="confirm" class="col-sm-2 control-label">Agama</label>
            <div class="col-sm-12">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="data1.agama"/>
                </div>
            </div>
        </div>

        <div class="form-group">
            <div class="col-sm-8 mx-auto mt-5">
            <button @click="registerSubmit('publish')" type="button" class="btn btn-primary btn-lg btn-block">Register</button>
            </div>
        </div>

       </div>

      <div v-if="this.$route.params.var === 'advert'">
       <div class="form-group">
            <label for="name" class="col-sm-2 control-label">Email</label>
            <div class="col-sm-12">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="data2.username" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="name" class="col-sm-2 control-label">Password</label>
            <div class="col-sm-12">
                <div class="input-group">
                    <input type="password" class="form-control" v-model="data2.password" />
                </div>
            </div>
        </div>

       <div class="form-group">
            <label for="name" class="col-sm-2 control-label">Nama Perusahaan</label>
            <div class="col-sm-12">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="data2.namaPerusahaan"/>
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="email" class="col-sm-2 control-label">Alamat Perusahaan</label>
            <div class="col-sm-12">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="data2.alamatPerusahaan" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="username" class="col-sm-2 control-label">Bidang Perusahaan</label>
            <div class="col-sm-12">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="data2.bidangPerusahaan" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="username" class="col-sm-2 control-label">Nama Pendaftar</label>
            <div class="col-sm-12">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="data2.nama" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="username" class="col-sm-3 control-label">Jabatan Diperusahaan</label>
            <div class="col-sm-12">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="data2.jabatan" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="username" class="col-sm-2 control-label">Alamat</label>
            <div class="col-sm-12">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="data2.alamat" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="username" class="col-sm-2 control-label">Jenis Kelamin</label>
            <div class="col-sm-12">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="data2.jenisKelamin" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="password" class="col-sm-2 control-label">Tempat Tanggal Lahir</label>
            <div class="input-group">
            <div class="col-sm-6">
                <input type="text" class="form-control" v-model="data2.tempatLahir"/>
            </div>
            <div class="col-sm-6">
                <datepicker placeholder="Tanggal Lahir" width="100%" :format="'dd-MM-yyyy'" v-model="data2.tanggalLahir" :bootstrap-styling="true"></datepicker>
            </div>
            </div>
        </div>

        <div class="form-group">
            <div class="col-sm-8 mx-auto mt-5">
            <button @click="registerSubmit('advert')" type="button" class="btn btn-primary btn-lg btn-block">Register</button>
            </div>
        </div>

       </div>

        <div class="text-center mb-5 mt-2">
            <router-link to="login">Login</router-link>
        </div>
    </div>
</div>
</template>

<script>
import datepicker from 'vuejs-datepicker'
export default {
  name: 'register',
  components: {
    datepicker
  },
  data () {
    return {
      title: '',
      data1: {
        username: '',
        password: '',
        nama: '',
        alamat: '',
        jenisKelamin: '',
        tanggalLahir: '',
        tempatLahir: '',
        pendidikanAkhir: '',
        agama: ''
      },
      data2: {
        username: '',
        password: '',
        nama: '',
        alamat: '',
        jenisKelamin: '',
        tanggalLahir: '',
        tempatLahir: '',
        jabatan: '',
        namaPerusahaan: '',
        alamatPerusahaan: '',
        bidangPerusahaan: ''
      }
    }
  },
  computed: {
    publisherRegister () {
      return this.$store.state.publisherRegisterData
    },
    advertiserRegister () {
      return this.$store.state.advertiserRegisterData
    }
  },
  watch: {
    'publisherRegister' () {
      if (this.$store.state.publisherRegisterData.status === false) {
        alert(this.$store.state.publisherRegisterData.message)
      } else {
        alert('Berhasil Daftar')
        this.$router.push('/guud/login')
      }
    },
    'advertiserRegister' () {
      if (this.$store.state.advertiserRegisterData.status === false) {
        alert(this.$store.state.advertiserRegisterData.message)
      } else {
        alert('Berhasil Daftar')
        this.$router.push('/guud/login')
      }
    }
  },
  methods: {
    initku () {
      if (!(this.$route.params.var === 'publish' || this.$route.params.var === 'advert')) {
        this.$router.push('/beranda')
      }
      this.title = this.$route.params.var === 'publish' ? 'Daftar Sebagai Pekerja' : 'Daftar Penyedia Kerja'
    },
    registerSubmit (params) {
      if (params === 'publish') {
        let readyData = new FormData()
        readyData.append('model', JSON.stringify(this.data1))
        this.$store.dispatch('publisherRegister', readyData)
      }
      if (params === 'advert') {
        let readyData2 = new FormData()
        readyData2.append('model', JSON.stringify(this.data2))
        this.$store.dispatch('advertiserRegister', readyData2)
      }
    }
  },
  mounted () {
    this.initku()
  }
}
</script>
