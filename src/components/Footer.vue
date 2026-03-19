<script setup lang="ts">
import { Zap } from "lucide-vue-next";
import Separator from "./ui/separator/Separator.vue";
</script>

<template>
  <footer id="footer" class="container py-24 pb-16 sm:py-32 sm:pb-24">
    <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
      <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div class="col-span-full xl:col-span-2">
          <a href="#" class="flex font-bold items-center mb-3">
            <div class="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border flex items-center justify-center">
              <Zap class="w-5 h-5 text-white" />
            </div>
            <h3 class="text-2xl text-transparent bg-gradient-to-r from-primary to-primary/70 bg-clip-text font-extrabold">
              M-HUB
            </h3>
          </a>
          <p class="text-muted-foreground text-sm">
            Full Stack IT Company<br />
            De la RDC au monde entier.
          </p>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Entreprise</h3>
          <div><a href="#about" class="opacity-60 hover:opacity-100">À propos</a></div>
          <div><a href="#vision" class="opacity-60 hover:opacity-100">Vision</a></div>
          <div><a href="#engineers" class="opacity-60 hover:opacity-100">Ingénieurs</a></div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Produits</h3>
          <div><a href="#mstore" class="opacity-60 hover:opacity-100">M-STORE</a></div>
          <div><a href="#modules" class="opacity-60 hover:opacity-100">Modules</a></div>
          <div><a href="#screenshots" class="opacity-60 hover:opacity-100">Aperçu</a></div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Services</h3>
          <div><a href="#services" class="opacity-60 hover:opacity-100">Développement</a></div>
          <div><a href="#services" class="opacity-60 hover:opacity-100">IA & ML</a></div>
          <div><a href="#services" class="opacity-60 hover:opacity-100">Cybersécurité</a></div>
          <div><a href="#services" class="opacity-60 hover:opacity-100">Cloud</a></div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Contact</h3>
          <div><a href="#contact" class="opacity-60 hover:opacity-100">Nous contacter</a></div>
          <div><a href="#faq" class="opacity-60 hover:opacity-100">FAQ</a></div>
          <div><a href="mailto:contact@m-hub.cd" class="opacity-60 hover:opacity-100">contact@m-hub.cd</a></div>
        </div>
      </div>

      <Separator class="my-6" />
      <section class="flex flex-col md:flex-row justify-between items-center gap-4">
        <h3 class="text-muted-foreground text-sm">
          &copy; 2025 M-HUB — Full Stack IT Company. Tous droits réservés.
        </h3>
        <p class="text-muted-foreground text-sm">
          Kinshasa, République Démocratique du Congo
        </p>
      </section>
    </div>
  </footer>
</template>
