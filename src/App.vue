<template>
  <div id="app" class="flex flex-col h-screen">
    <header class="">
      <Nav class="container mx-auto" />
    </header>

    <div id="content" class="flex-1 overflow-y-auto">
      <main>
        <div class="container mx-auto"><router-view /></div>
      </main>
      <Footer class="container mx-auto" />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
// @ is an alias to /src
import Footer from "./components/Footer.vue";
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: { Footer, Nav },
};
</script>

