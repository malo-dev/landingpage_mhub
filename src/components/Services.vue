<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-vue-next";
import demoVideo from "@/assets/demo_mhub.mp4";
</script>

<template>
  <section id="mstore" class="container py-24 sm:py-32">
    <div v-animate class="text-center mb-12">
      <Badge variant="outline" class="text-sm py-2 mb-4">
        <span class="mr-2 text-primary"><Badge>Premier projet</Badge></span>
        <span>M-HUB lance M-STORE</span>
      </Badge>

      <h2 class="text-lg text-primary mb-2 tracking-wider">M-STORE</h2>

      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        Système de gestion commerciale
        <span class="text-transparent bg-gradient-to-r from-primary to-[#0099BB] bg-clip-text">
          tout-en-un
        </span>
      </h2>

      <p class="md:w-2/3 mx-auto text-xl text-muted-foreground mb-8">
        M-STORE est le premier projet phare de M-HUB — une plateforme complète de gestion
        commerciale avec 29 modules et 92 fonctionnalités pour les PME, magasins et organisations.
      </p>

      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <Button as-child class="font-bold group/arrow">
          <a href="#contact">
            Demander une démo
            <ArrowRight class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
          </a>
        </Button>
        <Button variant="secondary" as-child>
          <a href="#modules">Voir les modules</a>
        </Button>
      </div>
    </div>

    <!-- Demo Video -->
    <div v-animate="{ type: 'zoom-in', delay: 150 }" class="relative group lg:w-[85%] mx-auto">
      <div
        class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[60%] bg-primary/40 blur-3xl rounded-full"
      ></div>

      <div class="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
        <video
          class="w-full rounded-2xl"
          controls
          preload="metadata"
          :src="demoVideo"
        >
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
        <div
          class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-[#D247BF] to-primary"
        ></div>
      </div>
    </div>

    <!-- M-STORE Stats -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
      <div v-animate="{ type: 'fade-up', delay: 0 }" class="p-6 bg-muted/50 dark:bg-card rounded-xl">
        <div class="text-4xl font-bold text-primary mb-2">29</div>
        <div class="text-muted-foreground">Modules</div>
      </div>
      <div v-animate="{ type: 'fade-up', delay: 100 }" class="p-6 bg-muted/50 dark:bg-card rounded-xl">
        <div class="text-4xl font-bold text-primary mb-2">92</div>
        <div class="text-muted-foreground">Fonctionnalités</div>
      </div>
      <div v-animate="{ type: 'fade-up', delay: 200 }" class="p-6 bg-muted/50 dark:bg-card rounded-xl">
        <div class="text-4xl font-bold text-primary mb-2">Multi</div>
        <div class="text-muted-foreground">Devises & Branches</div>
      </div>
      <div v-animate="{ type: 'fade-up', delay: 300 }" class="p-6 bg-muted/50 dark:bg-card rounded-xl">
        <div class="text-4xl font-bold text-primary mb-2">24/7</div>
        <div class="text-muted-foreground">Support</div>
      </div>
    </div>
  </section>
</template>
