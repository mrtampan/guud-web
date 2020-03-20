<template>
  <div>
      <top></top>
      <middle></middle>
      <bottom></bottom>
  </div>
</template>

<script>
import top from '@/components/advertiser/top'
import middle from '@/components/advertiser/middle'
import bottom from '@/components/advertiser/bottom'

export default {
  name: 'template',
  components: {
    top, middle, bottom
  }
}
</script>
