<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Zap } from "lucide-vue-next";
import Separator from "./ui/separator/Separator.vue";

const { t } = useI18n();
</script>

<template>
  <footer id="footer" class="container py-24 pb-16 sm:py-32 sm:pb-24">
    <div v-animate="{ type: 'fade-up' }" class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
      <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div class="col-span-full xl:col-span-2">
          <a href="#" class="flex font-bold items-center mb-3">
            <div class="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border flex items-center justify-center">
              <Zap class="w-5 h-5 text-white" />
            </div>
            <h3 class="text-2xl text-transparent bg-gradient-to-r from-primary to-primary/70 bg-clip-text font-extrabold">M-HUB</h3>
          </a>
          <p class="text-muted-foreground text-sm">
            {{ t('footer.tagline') }}<br />
            {{ t('footer.taglineSub') }}
          </p>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">{{ t('footer.company') }}</h3>
          <div><a href="#about" class="opacity-60 hover:opacity-100">{{ t('footer.about') }}</a></div>
          <div><a href="#vision" class="opacity-60 hover:opacity-100">{{ t('footer.vision') }}</a></div>
          <div><a href="#engineers" class="opacity-60 hover:opacity-100">{{ t('footer.engineers') }}</a></div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">{{ t('footer.products') }}</h3>
          <div><a href="#mstore" class="opacity-60 hover:opacity-100">M-STORE</a></div>
          <div><a href="#modules" class="opacity-60 hover:opacity-100">{{ t('footer.modules') }}</a></div>
          <div><a href="#screenshots" class="opacity-60 hover:opacity-100">{{ t('footer.preview') }}</a></div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">{{ t('footer.services') }}</h3>
          <div><a href="#services" class="opacity-60 hover:opacity-100">{{ t('footer.development') }}</a></div>
          <div><a href="#services" class="opacity-60 hover:opacity-100">{{ t('footer.iaml') }}</a></div>
          <div><a href="#services" class="opacity-60 hover:opacity-100">{{ t('footer.cyber') }}</a></div>
          <div><a href="#services" class="opacity-60 hover:opacity-100">{{ t('footer.cloud') }}</a></div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">{{ t('footer.contact') }}</h3>
          <div><a href="#contact" class="opacity-60 hover:opacity-100">{{ t('footer.contactUs') }}</a></div>
          <div><a href="#faq" class="opacity-60 hover:opacity-100">{{ t('footer.faq') }}</a></div>
          <div><a href="mailto:contact@m-hub.cd" class="opacity-60 hover:opacity-100">contact@m-hub.cd</a></div>
        </div>
      </div>

      <Separator class="my-6" />
      <section class="flex flex-col md:flex-row justify-between items-center gap-4">
        <h3 class="text-muted-foreground text-sm">{{ t('footer.rights') }}</h3>
        <p class="text-muted-foreground text-sm">{{ t('footer.location') }}</p>
      </section>
    </div>
  </footer>
</template>
