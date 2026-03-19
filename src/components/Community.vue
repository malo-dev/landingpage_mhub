<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Flag, Globe, Star } from "lucide-vue-next";
</script>

<template>
  <section id="vision" class="py-12">
    <hr />
    <div class="container py-20 sm:py-20">
      <div class="text-center mb-12">
        <h2 class="text-lg text-primary mb-2 tracking-wider">Vision</h2>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          La vision
          <span class="text-transparent bg-gradient-to-r from-primary to-[#0099BB] bg-clip-text">
            M-HUB
          </span>
        </h2>
        <p class="md:w-1/2 mx-auto text-xl text-muted-foreground">
          Une ambition claire, des étapes définies — M-HUB trace sa route vers le leadership mondial de l'IT.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 lg:w-[85%] mx-auto">
        <Card class="text-center border-primary/30 hover:border-primary transition-colors">
          <CardHeader>
            <div class="flex justify-center mb-4">
              <div class="bg-primary/20 p-4 rounded-full">
                <Flag class="w-8 h-8 text-primary" />
              </div>
            </div>
            <div class="text-4xl mb-2">🇨🇩</div>
            <CardTitle class="text-2xl">N°1 en RDC</CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground">
            <div class="text-primary font-bold text-lg mb-2">2031 — 5 ans</div>
            Devenir la meilleure entreprise IT de la République Démocratique du Congo.
          </CardContent>
        </Card>

        <Card class="text-center border-[#D247BF]/30 hover:border-[#D247BF] transition-colors scale-105 shadow-lg">
          <CardHeader>
            <div class="flex justify-center mb-4">
              <div class="bg-[#D247BF]/20 p-4 rounded-full">
                <Globe class="w-8 h-8 text-[#D247BF]" />
              </div>
            </div>
            <div class="text-4xl mb-2">🌍</div>
            <CardTitle class="text-2xl">N°1 en Afrique</CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground">
            <div class="text-[#D247BF] font-bold text-lg mb-2">2036 — 10 ans</div>
            Étendre notre impact pour devenir le leader technologique de tout le continent africain.
          </CardContent>
        </Card>

        <Card class="text-center border-primary/30 hover:border-primary transition-colors">
          <CardHeader>
            <div class="flex justify-center mb-4">
              <div class="bg-primary/20 p-4 rounded-full">
                <Star class="w-8 h-8 text-primary" />
              </div>
            </div>
            <div class="text-4xl mb-2">🌐</div>
            <CardTitle class="text-2xl">N°1 Mondial</CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground">
            <div class="text-primary font-bold text-lg mb-2">2046 — 20 ans</div>
            Rayonner à l'échelle mondiale en tant qu'entreprise Full Stack IT de référence internationale.
          </CardContent>
        </Card>
      </div>

      <div class="text-center mt-12">
        <blockquote class="text-xl md:text-2xl italic text-muted-foreground max-w-3xl mx-auto">
          "Concevoir. Développer. Sécuriser. Héberger. Promouvoir.
          <br />
          <span class="text-foreground font-medium">Toutes vos solutions digitales — par M-HUB."</span>
        </blockquote>
      </div>
    </div>
    <hr />
  </section>
</template>
