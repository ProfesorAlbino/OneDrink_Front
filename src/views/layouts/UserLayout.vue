<script setup>
import Footer from '@/components/templates/Footer.vue'
import NavbarUser from '@/components/templates/NavbarUser.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen container-user">
    <NavbarUser />
    <main class="container-fluid p-0">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>

main {
background-color: #0c0b09;
min-height: calc(100vh - 100px);
}
</style>