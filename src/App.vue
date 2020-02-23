<template>
  <div id="app">
    <header id="header">
      <AppHeader />
    </header>
    <nav id="sidebar">
      <AppSidebar />
    </nav>
    <main id="content">
      <router-view />
    </main>
    <footer id="footer">
      <AppFooter />
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      object: {}
    }
  }
}
</script>

<style lang="sass">

@import './assets/sass/layout.sass'
body
  margin: 0

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  display: grid
  grid-template-areas:  "sidebar header" "sidebar main"  "footer footer"
  grid-template-rows: 150px 1fr 0
  grid-template-columns: 175px 1fr
#header
  grid-area: header

#sidebar
  grid-area: sidebar
  padding: 30px 10px 10px
  border-right: 1px solid lightgray
  border-bottom: 1px solid lightgray
  min-height: 900px
#content
  grid-area: main

#footer
  grid-area: footer

</style>
