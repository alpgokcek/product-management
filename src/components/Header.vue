<template>
  <div>
    <div class="header">
      <GText variant="headline-02" color="white"> Product Management </GText>
      <GText color="white"> Grace Demo Application </GText>
    </div>
  </div>
</template>

<script>
import GText from '@trendyol-js/grace/core/GText';

export default {
  name: 'Header',
  components: {
    GText,
  },
};
</script>

<style scoped>
.header {
  padding: 40px;
  border-bottom: 1px solid gray;
  background-color: #263142;
}
</style>
