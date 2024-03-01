<template>
  <div id="app">
    <Navbar />
    <Carrusel />
    <!-- Resto de tu aplicación -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Carrusel from './components/Carrusel.vue';

export default {
  components: {
    Navbar,
    Carrusel
  }
}
</script>
