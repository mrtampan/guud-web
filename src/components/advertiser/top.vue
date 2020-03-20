<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand h1" href="/">Guud</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <router-link class="nav-link text-white" to="/guud/advertiser/listdata">Posting</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-white" to="/guud/advertiser/perusahaanedit">Perusahaan</router-link>
      </li>
    </ul>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
    }
  }
}
</script>
