<template>
  <NavbarComponent />
  <!-- <ContactPage/> -->
  <!-- <AuthPage /> -->
  <router-view />
  <!-- <HomePage /> -->
  <FooterComponent />
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: { NavbarComponent, FooterComponent },
};
</script>

<style>
@import url("https://fonts.cdnfonts.com/css/mallory");
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&family=Gilda+Display&family=Italianno&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

:root {
  --main-Color: rgb(220, 53, 69);
  --gray-Color: rgb(153, 153, 153);
  --blue-Color: rgb(62, 108, 234);
  --custom-Color: rgb(255, 255, 255);
  --font-Graycolor: rgb(112, 112, 112);
  --font-Mallory: "Mallory", sans-serif;
  --font-Anton: "Anton", sans-serif;
  --border-Input: 1px solid rgb(215, 215, 215);
  --font-Display: "Playfair Display", serif;
  --font-Dancing: "Dancing Script", cursive;
  --bgFooter: #2e2e2e;
}

a {
  color: inherit !important; /* blue colors for links too */
  text-decoration: inherit !important; /* no underline */
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-Anton);
}

* {
  margin: none;
  padding: none;
}

.Button-Main {
  background: var(--main-Color);
  border-radius: 10px;
}

.vue-alert.top {
  bottom: 25px;
  top: unset;
}

.Search-Nav {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
}

.Focus-Layout-Nav {
  background-color: #000;
  bottom: 0;
  left: 0;
  opacity: 0.2;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 900;
}

.Search-Not-Found {
  background: transparent !important;
  color: #000;
  cursor: default !important;
}

.Search-Not-Found:hover {
  background: transparent !important;
  color: #000 !important;
}
</style>
