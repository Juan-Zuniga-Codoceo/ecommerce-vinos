import { createRouter, createWebHistory } from 'vue-router';
import Ofertas from '../views/Ofertas.vue';
import Vinos from '../views/Vinos.vue';
import Cervezas from '../views/Cervezas.vue';
import Accesorios from '../views/Accesorios.vue';
import Packs from '../views/Packs.vue';
import Carrito from '../views/Carrito.vue';

const routes = [
  { path: '/ofertas', component: Ofertas },
  { path: '/vinos', component: Vinos },
  { path: '/cervezas', component: Cervezas },
  { path: '/accesorios', component: Accesorios },
  { path: '/packs', component: Packs },
  { path: '/carrito', component: Carrito },
  // Otras rutas según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
