<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Separator from "./ui/separator/Separator.vue";
import logoMnethub from "@/assets/logo-mnethub.svg";

const { t } = useI18n();
</script>

<template>
  <footer id="footer" class="container py-24 pb-16 sm:py-32 sm:pb-24">
    <div v-animate="{ type: 'fade-up' }" class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
      <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div class="col-span-full xl:col-span-2">
          <a href="/" class="flex font-bold items-center mb-3">
            <img :src="logoMnethub" alt="M-NETHUB" class="h-10 w-auto" />
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
          <div><a href="mailto:contact@m-nethub.tech" class="opacity-60 hover:opacity-100">contact@m-nethub.tech</a></div>
          <div><a href="/politique-confidentialite" class="opacity-60 hover:opacity-100">{{ t('footer.privacy') }}</a></div>
        </div>
      </div>

      <Separator class="my-6" />
      <section class="flex flex-col md:flex-row justify-between items-center gap-4">
        <h3 class="text-muted-foreground text-sm">{{ t('footer.rights') }}</h3>
        <div class="flex items-center gap-4">
          <a href="/politique-confidentialite" class="text-muted-foreground text-sm hover:text-primary transition-colors">{{ t('footer.privacy') }}</a>
          <p class="text-muted-foreground text-sm">{{ t('footer.location') }}</p>
        </div>
      </section>
    </div>
  </footer>
</template>
