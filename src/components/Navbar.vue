<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #2c4959; height: 100px;">
    <div class="container-fluid justify-content-between">
      <!-- Logo en una esquina -->
      <router-link to="/" class="navbar-brand" style="padding: 50px;">
        <img src="@/assets/img/logo2.png" alt="Logo" style="max-height: 120px; filter: brightness(0) invert(1);">
      </router-link>


      <!-- Navbar centralizado -->
      <div class="navbar-collapse justify-content-center">
        <!-- Links del navbar -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/ofertas" class="nav-link">Ofertas</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/vinos" class="nav-link">Vinos</router-link>
          </li>
          <!-- Agrega más elementos del navbar aquí -->
          <li class="nav-item">
            <router-link to="/cervezas" class="nav-link">Cervezas</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/accesorios" class="nav-link">Accesorios</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/packs" class="nav-link">Packs</router-link>
          </li>
        </ul>
      </div>

      <!-- Carrito en la otra esquina -->
      <router-link to="/carrito" class="navbar-brand" style="font-size: 35px; margin-right: 20px;"> <!-- Cambia el tamaño del icono aquí -->
        <i class="fas fa-shopping-cart"></i>
      </router-link>

      <!-- Campo de búsqueda -->
      <form class="d-flex" style="margin-right: 20px;">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
        <button class="btn btn-outline-light" type="submit">Buscar</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    // Métodos del componente
  }
}
</script>

<style scoped>
.navbar-brand img {
  padding: 10px; /* Ajusta el padding del logo según sea necesario */
}
.navbar-nav .nav-link {
  font-family: 'Montserrat', sans-serif;
  font-size: 20px; /* Ajusta el tamaño de la letra según sea necesario */
}

</style>
