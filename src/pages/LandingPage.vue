<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Products from "@/components/Products.vue";
import Spotlight from "@/components/Spotlight.vue";
import Services from "@/components/Services.vue";
import Why from "@/components/Why.vue";
import Engineers from "@/components/Engineers.vue";
import Devis from "@/components/Devis.vue";
import Contact from "@/components/Contact.vue";
import FAQ from "@/components/FAQ.vue";
import FinalCta from "@/components/FinalCta.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="min-h-screen overflow-x-clip">
    <Navbar />
    <main>
      <Hero />
      <Products />
      <Spotlight />
      <Services />
      <Why />
      <Engineers />
      <Devis />
      <Contact />
      <FAQ />
      <FinalCta />
    </main>
    <Footer />
  </div>
</template>
