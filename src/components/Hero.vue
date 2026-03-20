<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-vue-next";
import screenshot1 from "@/assets/mhubscreenshot (1).png";

const { t } = useI18n();
</script>

<template>
  <section class="container">
    <div class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
      <div class="text-center space-y-8">
        <Badge v-animate variant="outline" class="text-sm py-2">
          <span class="mr-2 text-primary">
            <Badge>{{ t('hero.badgeNew') }}</Badge>
          </span>
          <span>{{ t('hero.badge') }}</span>
        </Badge>

        <div v-animate="{ delay: 150 }" class="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold">
          <h1>
            <span class="text-transparent bg-gradient-to-r from-primary to-[#0099BB] bg-clip-text">M-HUB</span>
            <br />
            {{ t('hero.title') }}
          </h1>
        </div>

        <p v-animate="{ delay: 280 }" class="max-w-screen-sm mx-auto text-xl text-muted-foreground" style="white-space: pre-line;">
          {{ t('hero.subtitle') }}
        </p>

        <div v-animate="{ delay: 400 }" class="space-y-4 md:space-y-0 md:space-x-4">
          <Button class="w-5/6 md:w-1/4 font-bold group/arrow" as-child>
            <a href="#mstore">
              {{ t('hero.discoverMstore') }}
              <ArrowRight class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </a>
          </Button>

          <Button variant="secondary" class="w-5/6 md:w-1/4 font-bold" as-child>
            <a href="#contact">{{ t('hero.contactUs') }}</a>
          </Button>

          <Button variant="outline" class="w-5/6 md:w-1/4 font-bold border-primary text-primary hover:bg-primary hover:text-primary-foreground" as-child>
            <a href="#devis">{{ t('hero.requestQuote') }}</a>
          </Button>
        </div>
      </div>

      <div v-animate="{ type: 'zoom-in', delay: 350 }" class="relative group mt-14">
        <div class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation"></div>
        <img
          class="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-t-primary/30 img-border-animation"
          :src="screenshot1"
          alt="M-HUB M-STORE Dashboard"
        />
        <div class="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.img-shadow-animation {
  animation-name: img-shadow-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}
.img-border-animation {
  animation-name: img-border-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}
@keyframes img-shadow-animation {
  from { opacity: 0.5; transform: translateY(30px); }
  to   { opacity: 1;   transform: translateY(0px); }
}
@keyframes img-border-animation {
  from { @apply border-t-primary/10; }
  to   { @apply border-t-primary/60; }
}
</style>
