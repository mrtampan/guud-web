<template>
<div>
    <div class="container mt-5 card">
        <h1 class="mb-4 text-center">Informasi Perusahaan</h1>
      <div >
       <div class="form-group">
            <label for="name" class="col-sm-2 control-label">Nama Perusahaan</label>
            <div class="col-sm-12">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="data1.namaPerusahaan" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="name" class="col-sm-2 control-label">Alamat Perusahaan</label>
            <div class="col-sm-12">
                <div class="input-group">
                    <textarea class="form-control" v-model="data1.alamatPerusahaan"></textarea>
                </div>
            </div>
        </div>

       <div class="form-group">
            <label for="name" class="col-sm-2 control-label">Bidang Perusahaan</label>
            <div class="col-sm-12">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="data1.bidangPerusahaan"/>
                </div>
            </div>
        </div>

        <div class="form-group">
            <div class="col-sm-8 mx-auto mt-5">
            <button @click="submitBtn" type="button" class="btn btn-primary btn-lg btn-block">Submit</button>
            </div>
        </div>

       </div>

    </div>
</div>
</template>

<script>

const dataSession = JSON.parse(sessionStorage.getItem('GuudLogin'))
export default {
  name: 'PerusahaanEdit',
  data () {
    return {
      data1: {
        namaPerusahaan: '',
        alamatPerusahaan: '',
        bidangPerusahaan: ''
      }
    }
  },
  computed: {
    getViewPerusahaan () {
      return this.$store.state.viewPerusahaan
    },
    perusahaanEdit () {
      return this.$store.state.editPerusahaan
    }
  },
  watch: {
    'getViewPerusahaan' () {
      this.data1 = this.$store.state.viewPerusahaan.data
      console.log(this.data1)
    },
    'perusahaanEdit' () {
      if (this.$store.state.editPerusahaan.status === false) {
        alert(this.$store.state.editData.message)
      } else {
        alert('Sukses Ubah Informasi Perusahaan')
        this.$router.go(-1)
      }
    }
  },
  methods: {
    initku () {
      this.$store.dispatch('getViewPerusahaan', dataSession.idPerusahaan)
    },
    submitBtn () {
      let readyData = new FormData()
      readyData.append('model', JSON.stringify(this.data1))
      this.$store.dispatch('perusahaanEdit', [dataSession.idPerusahaan, readyData])
    }
  },
  mounted () {
    this.initku()
  }
}
</script>
