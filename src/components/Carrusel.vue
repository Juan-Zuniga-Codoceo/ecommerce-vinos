<template>
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" style="max-width: 1980px;"> <!-- Ajusta el tamaño máximo del carrusel -->
    <div class="carousel-inner">
      <div v-for="(item, index) in items" :key="index" :class="{ 'carousel-item': true, 'active': index === 0 }">
        <img :src="item.image" class="d-block w-100" :alt="'Slide ' + (index + 1)" style="max-height: 800px;"> <!-- Ajusta el tamaño máximo de las imágenes -->
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ item.title }}</h5>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'CarouselExample',
  setup() {
    const items = ref([
      {
        image: 'pexels-jazi-araujo-5004027.jpg',
        title: 'First slide',
        description: 'This is the first slide description.',
      },
      {
        image: 'https://via.placeholder.com/800x400',
        title: 'Second slide',
        description: 'This is the second slide description.',
      },
      {
        image: 'https://via.placeholder.com/800x400',
        title: 'Third slide',
        description: 'This is the third slide description.',
      },
    ]);

    return {
      items,
    };
  },
};
</script>

<style>
/* Estilos opcionales para personalizar la apariencia */
</style>
