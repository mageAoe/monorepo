<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <WujieVue :props="{name:'主应用传递',age:18}" url="http://localhost:3000/" name="react"></WujieVue>
  </main>
</template>
