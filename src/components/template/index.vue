<template>
  <div>
      <top></top>
      <middle></middle>
      <bottom></bottom>
  </div>
</template>

<script>
import top from '@/components/template/top'
import middle from '@/components/template/middle'
import bottom from '@/components/template/bottom'

export default {
  name: 'template',
  components: {
    top, middle, bottom
  }
}
</script>
