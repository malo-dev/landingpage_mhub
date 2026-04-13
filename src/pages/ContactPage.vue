<script setup lang="ts">
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { Button } from "@/components/ui/button";
import { Zap, ArrowLeft } from "lucide-vue-next";
import Contact from "@/components/Contact.vue";

const router = useRouter();
const { t } = useI18n();
</script>

<template>
  <div class="min-h-screen bg-background flex flex-col">
    <header class="border-b bg-card">
      <div class="container flex items-center justify-between h-16">
        <a href="/" class="flex items-center gap-2">
          <div class="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-8 h-8 flex items-center justify-center">
            <Zap class="w-4 h-4 text-primary-foreground" />
          </div>
          <span class="text-transparent bg-gradient-to-r from-primary to-[#0099BB] bg-clip-text font-extrabold text-xl">M-NETHUB</span>
        </a>
        <Button variant="ghost" @click="router.push('/')" class="gap-2">
          <ArrowLeft class="size-4" />
          {{ t('nav.backHome') }}
        </Button>
      </div>
    </header>

    <main class="flex-1">
      <Contact />
    </main>

    <footer class="border-t py-8 text-center text-sm text-muted-foreground">
      <div class="container">
        © 2025 M-NETHUB — Full Stack IT Company · Kinshasa, RDC
        <span class="mx-3">·</span>
        <a href="/" class="hover:text-primary">{{ t('nav.backHome') }}</a>
      </div>
    </footer>
  </div>
</template>
