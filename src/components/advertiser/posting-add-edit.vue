<template>
<div>
    <div class="container mt-5 card">
        <h1 class="mb-4 text-center">{{ title }}</h1>
      <div >
       <div class="form-group">
            <label for="name" class="col-sm-2 control-label">Judul</label>
            <div class="col-sm-12">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="data1.judul" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="name" class="col-sm-2 control-label">Gambar</label>
            <div class="col-sm-12">
                <div class="input-group">
                <input type="file" class="custom-file-input" id="inputGroupFile04" @change="uploadGambar">
                <label class="custom-file-label" for="inputGroupFile04">{{ gambar.name }}</label>
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="name" class="col-sm-2 control-label">Isi</label>
            <div class="col-sm-12">
                <div class="">
                    <ckeditor v-model="data1.isi"></ckeditor>
                    <!-- <textarea class="form-control" v-model="data1.isi"></textarea>  -->
                </div>
            </div>
        </div>

       <div class="form-group">
            <label for="name" class="col-sm-2 control-label">Gaji</label>
            <div class="col-sm-12">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="data1.gaji"/>
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="email" class="col-sm-2 control-label">Posisi</label>
            <div class="col-sm-12">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="data1.posisi" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <div class="col-sm-8 mx-auto mt-5">
            <button @click="addBtn" v-if="this.$route.params.id === null || this.$route.params.id === undefined" type="button" class="btn btn-primary btn-lg btn-block">Submit</button>
            <button @click="editBtn" v-else type="button" class="btn btn-primary btn-lg btn-block">Submit</button>
            </div>
        </div>

       </div>

    </div>
</div>
</template>

<script>
const dataSession = JSON.parse(sessionStorage.getItem('GuudLogin'))
export default {
  name: 'PostingAddEdit',
  data () {
    return {
      title: '',
      data1: {
        judul: '',
        isi: '',
        gaji: '',
        posisi: ''
      },
      gambar: ''
    }
  },
  computed: {
    getViewData () {
      return this.$store.state.viewData
    },
    postingSave () {
      return this.$store.state.saveData
    },
    postingEdit () {
      return this.$store.state.editData
    }
  },
  watch: {
    'getViewData' () {
      this.data1 = this.$store.state.viewData.data
    },
    'postingSave' () {
      if (this.$store.state.saveData.status === false) {
        alert(this.$store.state.saveData.message)
      } else {
        alert('sukses tambah posting')
        this.$router.go(-1)
      }
    },
    'postingEdit' () {
      if (this.$store.state.editData.status === false) {
        alert(this.$store.state.editData.message)
      } else {
        alert('sukses ubah posting')
        this.$router.go(-1)
      }
    }
  },
  methods: {
    initku () {
      if (this.$route.params.id === undefined || this.$route.params.id === null) {
        this.title = 'Tambah Posting'
      } else {
        this.title = 'Edit Posting'
        this.$store.dispatch('getViewData', this.$route.params.id)
      }
    },
    uploadGambar (val) {
      let extfile = val.target.files[0].name.substring(val.target.files[0].name.lastIndexOf('.')).toLowerCase()
      console.log(extfile)
      if (val.target.files[0].size > 1000000) {
        alert('Ukuran file terlalu besar')
      }
      if (extfile === '.jpg' || extfile === '.png' || extfile === '.jpeg') {
        var reader = new FileReader()
        this.gambar = val.target.files[0]
        reader.readAsDataURL(val.target.files[0])
      } else {
        alert('Tipe data harus gambar')
      }
    },
    addBtn () {
      let readyData = new FormData()
      this.data1['idPerusahaan'] = dataSession.idPerusahaan
      this.data1['createBy'] = dataSession.username.split('@')[0]
      readyData.append('model', JSON.stringify(this.data1))
      readyData.append('file', this.gambar)
      this.$store.dispatch('postingSave', readyData)
    },
    editBtn () {
      let readyData = new FormData()
      this.data1['createBy'] = dataSession.username.split('@')[0]
      readyData.append('model', JSON.stringify(this.data1))
      readyData.append('file', this.gambar)
      this.$store.dispatch('postingEdit', [this.$route.params.id, readyData])
    }
  },
  mounted () {
    this.initku()
  }
}
</script>
