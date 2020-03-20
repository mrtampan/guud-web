<template>
<div>
<div class="container-fluid row mx-auto col-md-11">
<div class="card col-md-2 mx-3 my-3" style="width: 15rem;" v-for="datanya in dataku" v-bind:key="datanya.idPosting">
  <img :src="'data:image/png;base64,' + datanya.gambar" class="card-img-top" width="200" height="200" alt="gambar">
  <div class="card-body">
    <h5 class="card-title mb-4">{{ datanya.judul }}</h5>
    <button @click="viewku(datanya.idPosting)" class="btn btn-primary">Lihat Selengkapnya</button>
  </div>
</div>
<div class="mt-5 col-md-12">
  <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item" v-for="(datanya, index) in dataPagin.totalPages" v-bind:key="datanya.idPosting"><button class="page-link" @click="paginationKu(index + 1)">{{ index + 1 }}</button></li>
  </ul>
</nav>
</div>
</div>
</div>
</template>

<script>

export default {
  name: 'beranda',
  data () {
    return {
      dataku: '',
      dataPagin: '',
      dataSession: JSON.parse(sessionStorage.getItem('GuudLogin'))
    }
  },
  computed: {
    getPostData () {
      return this.$store.state.postData
    }
  },
  watch: {
    'getPostData': function () {
      this.dataku = this.$store.state.postData.content
      this.dataPagin = this.$store.state.postData
    }
  },
  methods: {
    initku (params) {
      if (params === undefined || params === null) {
        this.$store.dispatch('getPostData', 1)
      } else {
        this.$store.dispatch('getPostData', params)
      }
    },
    viewku (idPosting) {
      if (this.dataSession === null || this.dataSession.role === '' || this.dataSession.role === undefined || this.dataSession.role === null) {
        alert('Anda Harus Login Terlebih Dahulu')
      } else {
        this.$router.push('view-beranda/' + idPosting)
      }
    },
    paginationKu (params) {
      this.initku(params)
    }
  },
  mounted () {
    this.initku()
  }
}
</script>
