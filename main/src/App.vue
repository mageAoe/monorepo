<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <h1> 这是主应用</h1>
    <nav>
        <RouterLink to="/">REACT</RouterLink>
        <RouterLink to="/about">VUE3</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  font-size: 24px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
