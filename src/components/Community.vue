<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPin, Globe, Globe2 } from "lucide-vue-next";

const { t } = useI18n();

const cards = [
  {
    icon: MapPin,
    color: "primary",
    accentClass: "bg-primary/20 text-primary border-primary/30 hover:border-primary",
    yearClass: "text-primary",
    key: "card1",
  },
  {
    icon: Globe,
    color: "fuchsia",
    accentClass: "bg-[#D247BF]/20 text-[#D247BF] border-[#D247BF]/30 hover:border-[#D247BF]",
    yearClass: "text-[#D247BF]",
    key: "card2",
    featured: true,
  },
  {
    icon: Globe2,
    color: "primary",
    accentClass: "bg-primary/20 text-primary border-primary/30 hover:border-primary",
    yearClass: "text-primary",
    key: "card3",
  },
];
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
        <Card
          v-for="(card, i) in cards"
          :key="card.key"
          v-animate="{ type: 'zoom-in', delay: i * 150 }"
          :class="[
            'text-center border transition-all duration-300',
            card.accentClass,
            card.featured ? 'scale-105 shadow-xl' : '',
          ]"
        >
          <CardHeader>
            <div class="flex justify-center mb-5">
              <div
                :class="[
                  'p-5 rounded-2xl ring-4 ring-offset-2 ring-offset-background',
                  card.featured
                    ? 'bg-[#D247BF]/20 ring-[#D247BF]/20'
                    : 'bg-primary/15 ring-primary/10',
                ]"
              >
                <component
                  :is="card.icon"
                  :class="['w-10 h-10', card.featured ? 'text-[#D247BF]' : 'text-primary']"
                />
              </div>
            </div>
            <CardTitle class="text-2xl">{{ t(`vision.${card.key}.title`) }}</CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground">
            <div :class="['font-bold text-lg mb-2', card.yearClass]">{{ t(`vision.${card.key}.year`) }}</div>
            {{ t(`vision.${card.key}.text`) }}
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
