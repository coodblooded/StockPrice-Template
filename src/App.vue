<template>
  <div id="app">
     <v-toolbar app>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link to="/">
            <img class="logo" src="./assets/stock-logo.png"/>
            </router-link>
          </li>

        </ul>
      </nav>
      <v-spacer></v-spacer>
            <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
            <v-spacer></v-spacer>

    </v-toolbar>
    <div class="container">
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
body{
  background: linear-gradient(to bottom, #393e46, rgb(62, 66, 66));
  background-attachment: fixed;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

}
main{
  padding: 30px;
  background-color: white;
  width: 90%;
  min-height: 300px;

}
header{
  background-color: #ffffff;

  width: 1184px;
  margin: 0 auto;
}
 ul{
   margin: 3px;
   display: flex;
 }
 .nav-item{
   display: inline-block;
   padding: 5px 10px;
   font-size: 22px;
   border-right: 1px solid #bbb;

 }
 .logo{
   vertical-align: middle;
   height: 40px;
 }
 .container{
   display: flex;
   margin: 60px auto 0 auto;
   justify-content: center;
 }
</style>
