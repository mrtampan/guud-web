<template>
<div class="container-fluid col-md-11 mt-3 mx-auto">
  <div class="col-md-1 ml-auto">
      <button class="btn btn-primary" @click="addRow">Add</button>
  </div>
  <vuetable ref="vuetable"
      :api-url="url"
      :fields="fields"
      :transform="transform"
      data-path="mydata"
      pagination-path="pagination"
      @vuetable:pagination-data="onPaginationData"
    >
    <template slot="image" slot-scope="props">
    <div class="table-button-container">
          <img :src="'data:image/png;base64,' + props.rowData.gambar" width="100" height="100" alt="gambar">
    </div>
    </template>
    <template slot="actions" slot-scope="props">
    <div class="table-button-container">
        <button class="btn btn-primary" @click="editRow(props.rowData)"> Edit</button>&nbsp;&nbsp;
        <button class="btn btn-primary" @click="deleteRow(props.rowData)"> Delete</button>&nbsp;&nbsp;
    </div>
    </template>
    </vuetable>
    <vuetable-pagination ref="pagination" :css="css.pagination"
      @vuetable-pagination:change-page="onChangePage"
    ></vuetable-pagination>
</div>
</template>

<script>
import Vuetable from 'vuetable-2'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'

const baseUrl = process.env.NODE_ENV === 'production' ? window.location.origin : window.location.origin + '/api'
const dataSession = JSON.parse(sessionStorage.getItem('GuudLogin'))

export default {
  name: 'PostingList',
  components: {
    Vuetable,
    VuetablePagination
  },
  data () {
    return {
      url: baseUrl + '/guud/post/listmanage?idPerusahaan=' + dataSession.idPerusahaan,
      fields: [
        {
          name: 'judul',
          title: 'Judul'
        },
        {
          name: 'image',
          title: 'Gambar'
        },
        {
          name: 'isi',
          callback: 'limitText',
          title: 'Isi'
        },
        {
          name: 'gaji',
          title: 'Gaji'
        },
        {
          name: 'posisi',
          title: 'Posisi'
        },
        {
          name: 'actions'
        }],
      css: {
        pagination: {
          infoClass: 'pull-left',
          wrapperClass: 'vuetable-pagination pull-right',
          activeClass: 'btn-primary color-light',
          disabledClass: 'disabled',
          pageClass: 'btn btn-border',
          linkClass: 'btn btn-border',
          icons: {
            first: '',
            prev: '',
            next: '',
            last: ''
          }
        }
      }
    }
  },
  computed: {
    postingDelete () {
      return this.$store.state.deleteData
    }
  },
  watch: {
    'postingDelete' () {
      if (this.$store.state.deleteData.status === false) {
        alert(this.$store.state.deleteData.message)
      } else {
        alert('Delete Posting berhasil')
        this.$refs.vuetable.refresh()
      }
    }
  },
  methods: {
    initku () {
      if (dataSession === null || dataSession.role !== 'advertiser') {
        this.$router.push('/guud/beranda')
      }
    },
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
    },
    onChangePage (page) {
      console.log(page)
      this.$refs.vuetable.changePage(page)
    },
    addRow () {
      this.$router.push('addedit')
    },
    editRow (rowData) {
      this.$router.push({ path: `/guud/advertiser/addedit/${rowData.idPosting}` })
    },
    deleteRow (rowData) {
      this.$store.dispatch('postingDelete', rowData.idPosting)
    },
    limitText: function (value) {
      let str = value.toString()
      return str.substr(0, 10)
    },
    transform: function (data) {
      var transformed = {}
      // console.log(data)

      transformed.pagination = {
        total: data.totalElements,
        per_page: data.size,
        current_page: data.number + 1,
        last_page: data.totalPages,
        next_page_url: baseUrl + '/guud/post/listmanage?idPerusahaan=' + dataSession.idPerusahaan + '&page=' + (data.number + 1),
        prev_page_url: data.first === true ? null : baseUrl + '/guud/post/listmanage?idPerusahaan=' + dataSession.idPerusahaan + '&page=' + (data.number - 1),
        from: data.number * data.size + 1,
        to: data.number * data.size + 1 * data.numberOfElements - 1
      }

      // console.log(transformed.pagination)
      transformed.mydata = []

      for (let i = 0; i < data.content.length; i++) {
        transformed.mydata.push({
          judul: data.content[i].judul,
          gambar: data.content[i].gambar,
          isi: data.content[i].isi,
          gaji: data.content[i].gaji,
          posisi: data.content[i].posisi,
          idPosting: data.content[i].idPosting
        })
      }

      return transformed
    }
  },
  mounted () {
    this.initku()
  }
}
</script>
