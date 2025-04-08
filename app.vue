<script>
import Hero from "./components/Hero.vue"
import Footer from "./components/Footer.vue"
import Navbar from "./components/Navbar.vue"
import Techniques from "./components/Techniques.vue";
import Projects from "./components/Projects.vue";

export default {
  methods: {
    handleScroll () {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 300) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-100px";
        }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<template>
  <div class="dot-mask">
  </div>
  <header>
    <Navbar />
  </header>
  <div class="content">
    <main>
      <Hero />
      <Techniques />
      <Projects />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
* {
  box-sizing: border-box;
}
footer {
  width:100%;
}
body {
  color: #464646FF;
  margin:0;
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  scroll-behavior: smooth;
}
.content {
  width:100%;
  display: flex;
  flex-direction: column;
  gap:80px;
  align-items:center;
}
h1{
  margin:0;
}
.dot-mask {
  z-index: -10;
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
  background-size: 16px 16px;
  -webkit-mask-image: radial-gradient(
    ellipse 50% 50% at 50% 50%,
    #000 60%,
    transparent 100%
  );
  mask-image: radial-gradient(
    ellipse 70% 70% at 50% 50%,
    #000 50%,
    transparent 100%
  );
}
main {
  max-width: 1000px;
  width:100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding:0 20px;
  flex-grow: 1;
  align-items: center;
  gap:80px;
  transition:all 0.3s ease-in-out;
}
@media only screen and (max-width: 800px) {
  .techniques-container {
    grid-template-columns: repeat(3, 1fr);
  }
  .projects-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (max-width: 600px) {
  .techniques-container {
    grid-template-columns: repeat(2, 1fr);
  }
  .projects-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media only screen and (max-width: 300px) {
  .techniques-container {
    grid-template-columns: repeat(1, 1fr);
  }
  .projects-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
