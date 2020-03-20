<template>
<div>
<div class="row container-fluid mx-auto mt-3">
    <div class="col-md-9">
    <div class="px-3 py-3 card rounded shadow">
    <div class="text-center" style="font-size:36px">{{ datapost.judul }}</div>
    <img :src="'data:image/jpeg;base64,' + datapost.gambar" class="img-fluid mt-3 mx-auto col-md-5" alt="gambar">
    <div class="mt-3 mx-3 my-3" v-html="datapost.isi">{{ datapost.isi }}</div>
    </div>
    </div>
    <div class="col-md-3">
        <div class="card rounded shadow">
          <div class="py-3 px-3 text-white" style="font-size:20px;background-color:#f22c53;">{{ 'Perusahaan : ' + datapt.namaPerusahaan }}</div>
          <div class="py-3 px-3 text-white" style="font-size:20px;background-color:#14e364;">{{'Bergerak dibidang : ' + datapt.bidangPerusahaan}}</div>
          <div class="py-3 px-3 text-white" style="font-size:20px;background-color:#1d99db;">{{ 'Gaji : Rp. ' + datapost.gaji }}</div>
          <div class="py-3 px-3 text-white" style="font-size:20px;background-color:#ffc43b;">{{ 'Posisi : ' + datapost.posisi }}</div>
        </div>
    </div>
</div>
</div>
</template>

<script>

export default {
  name: 'ViewBeranda',
  data () {
    return {
      datapost: '',
      indexpt: 0,
      datapt: ''
    }
  },
  computed: {
    getViewData () {
      return this.$store.state.viewData
    },
    getViewPerusahaan () {
      return this.$store.state.viewPerusahaan
    }
  },
  watch: {
    'getViewData' () {
      this.datapost = this.$store.state.viewData.data
      this.$store.dispatch('getViewPerusahaan', this.datapost.idPerusahaan)
    },
    'getViewPerusahaan' () {
      this.datapt = this.$store.state.viewPerusahaan.data
    }
  },
  methods: {
    initku () {
      if (this.$route.params.id === undefined) {
        this.$router.push('/beranda')
      } else {
        this.$store.dispatch('getViewData', this.$route.params.id)
      }
    }
  },
  mounted () {
    this.initku()
  }
}
</script>
