import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '@/views/layouts/AdminLayout.vue'
import UserLayout from '@/views/layouts/UserLayout.vue'
import { isUserLoggedAdmin } from '@/utils/Validations'
import HomePageUser from '@/views/User/HomePageUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
  
  //Rutas del administrador
  routes: [
    {
      path: '/admin',
      component: AdminLayout,
      meta: { requiresAdmin: true },
      children: [
        // {
        //   path: '',
        //   name: 'admin-home',
        //   component: HomeViewAdmin
        // }
      ]
    },
    
    //Rutas del usuario
    {
      path: '/',
      component: UserLayout,
      children: [
         {
           path: '',
           name: 'home',
           component: HomePageUser
         }
      ]
    }
  ]
})

 router.beforeEach((to, from, next) => {
   const userRole = isUserLoggedAdmin();
   console.log("Usuario Rol: " + userRole);
   if (to.meta.requiresAdmin) {
     if (userRole) {
       console.log('Acceso concedido a la ruta de administrador');
       next();
     } else {
       console.log('Acceso denegado. Redirigiendo a la página de inicio');
       next({ name: 'home' });
     }
   } else {
     console.log('Acceso concedido a la ruta normal');
     next();
   }
 });

export default router