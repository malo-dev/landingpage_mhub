<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Flag, Globe, Star } from "lucide-vue-next";

const { t } = useI18n();
</script>

<template>
  <section id="vision" class="py-12">
    <hr />
    <div class="container py-20 sm:py-20">
      <div v-animate class="text-center mb-12">
        <h2 class="text-lg text-primary mb-2 tracking-wider">{{ t('vision.label') }}</h2>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ t('vision.title') }}
          <span class="text-transparent bg-gradient-to-r from-primary to-[#0099BB] bg-clip-text"> M-HUB</span>
        </h2>
        <p class="md:w-1/2 mx-auto text-xl text-muted-foreground">{{ t('vision.subtitle') }}</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 lg:w-[85%] mx-auto">
        <Card v-animate="{ type: 'zoom-in', delay: 0 }" class="text-center border-primary/30 hover:border-primary transition-colors">
          <CardHeader>
            <div class="flex justify-center mb-4">
              <div class="bg-primary/20 p-4 rounded-full"><Flag class="w-8 h-8 text-primary" /></div>
            </div>
            <div class="text-4xl mb-2">🇨🇩</div>
            <CardTitle class="text-2xl">{{ t('vision.card1.title') }}</CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground">
            <div class="text-primary font-bold text-lg mb-2">{{ t('vision.card1.year') }}</div>
            {{ t('vision.card1.text') }}
          </CardContent>
        </Card>

        <Card v-animate="{ type: 'zoom-in', delay: 150 }" class="text-center border-[#D247BF]/30 hover:border-[#D247BF] transition-colors scale-105 shadow-lg">
          <CardHeader>
            <div class="flex justify-center mb-4">
              <div class="bg-[#D247BF]/20 p-4 rounded-full"><Globe class="w-8 h-8 text-[#D247BF]" /></div>
            </div>
            <div class="text-4xl mb-2">🌍</div>
            <CardTitle class="text-2xl">{{ t('vision.card2.title') }}</CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground">
            <div class="text-[#D247BF] font-bold text-lg mb-2">{{ t('vision.card2.year') }}</div>
            {{ t('vision.card2.text') }}
          </CardContent>
        </Card>

        <Card v-animate="{ type: 'zoom-in', delay: 300 }" class="text-center border-primary/30 hover:border-primary transition-colors">
          <CardHeader>
            <div class="flex justify-center mb-4">
              <div class="bg-primary/20 p-4 rounded-full"><Star class="w-8 h-8 text-primary" /></div>
            </div>
            <div class="text-4xl mb-2">🌐</div>
            <CardTitle class="text-2xl">{{ t('vision.card3.title') }}</CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground">
            <div class="text-primary font-bold text-lg mb-2">{{ t('vision.card3.year') }}</div>
            {{ t('vision.card3.text') }}
          </CardContent>
        </Card>
      </div>

      <div class="text-center mt-12">
        <blockquote v-animate="{ type: 'fade-in', delay: 400 }" class="text-xl md:text-2xl italic text-muted-foreground max-w-3xl mx-auto">
          "{{ t('vision.quote') }}
          <br />
          <span class="text-foreground font-medium">{{ t('vision.quoteEnd') }}"</span>
        </blockquote>
      </div>
    </div>
    <hr />
  </section>
</template>
