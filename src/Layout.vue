<template>
  <section class='container'>
    <Nav></Nav>
    <div id="app-container">
      <router-view />
    </div>
  </section>
</template>

<script>
    import Nav from './modules/nav/components/Nav'
    export default {
    components: {
        Nav
    }
};
</script>
