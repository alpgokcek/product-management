<template>
  <div>
    <Header/>
    <div id="app">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  components: {
    Header,
  },
  name: 'App',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap');
@import "@trendyol-js/grace/css/root";
@import "@trendyol-js/grace/css/system";
@import 'vue2-datepicker/index.css';

#app {
  padding: 40px;
  height: 100%;
}
body {
  background-color: #f1f2f7;
}
</style>
