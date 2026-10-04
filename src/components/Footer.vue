<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Mail, MapPin, Phone } from "lucide-vue-next";
import LogoMnethub from "./LogoMnethub.vue";
import { products } from "@/data/products";

const { t } = useI18n();
const year = new Date().getFullYear();

const company = [
  { label: () => t("home.nav.services"), href: "/#services" },
  { label: () => t("home.nav.vision"), href: "/#vision" },
  { label: () => t("home.nav.team"), href: "/#ingenieurs" },
  { label: () => t("home.footer.careers"), href: "/carrieres" },
  { label: () => t("home.nav.contact"), href: "/#contact" },
];
const legal = [
  { label: () => t("home.footer.privacy"), href: "/politique-confidentialite" },
  { label: () => t("home.footer.mailPrivacy"), href: "/m-mail/confidentialite" },
  { label: () => t("home.footer.marketPrivacy"), href: "/m-market/confidentialite" },
  { label: () => t("home.footer.mstoreApp"), href: "/m-store" },
  { label: () => t("home.footer.mstoreSupport"), href: "/m-store/support" },
];
</script>

<template>
  <footer class="mt-24 border-t border-border bg-card/60">
    <div class="container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
      <div>
        <a href="/" aria-label="M-NETHUB">
          <LogoMnethub variant="horizontal" class="text-foreground" icon-class="h-9 w-9" text-class="text-xl" />
        </a>
        <p class="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{{ t("home.footer.tagline") }}</p>
        <ul class="mt-5 space-y-2 text-sm text-muted-foreground">
          <li class="flex items-center gap-2"><Mail class="size-4 text-primary" /> <a href="mailto:contact@m-nethub.tech" class="hover:text-foreground">contact@m-nethub.tech</a></li>
          <li class="flex items-center gap-2"><Phone class="size-4 text-primary" /> +243 972 258 637</li>
          <li class="flex items-center gap-2"><MapPin class="size-4 text-primary" /> Kinshasa, RDC</li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-bold">{{ t("home.footer.pTitle") }}</h3>
        <ul class="mt-4 space-y-2.5 text-sm text-muted-foreground">
          <li v-for="p in products" :key="p.key">
            <RouterLink v-if="p.href.startsWith('/')" :to="p.href" class="hover:text-foreground">{{ t(`home.products.items.${p.key}.name`) }}</RouterLink>
            <a v-else :href="p.href.startsWith('#') ? '/' + p.href : p.href" :target="p.external ? '_blank' : undefined" rel="noopener" class="hover:text-foreground">{{ t(`home.products.items.${p.key}.name`) }}</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-bold">{{ t("home.footer.cTitle") }}</h3>
        <ul class="mt-4 space-y-2.5 text-sm text-muted-foreground">
          <li v-for="c in company" :key="c.href"><a :href="c.href" class="hover:text-foreground">{{ c.label() }}</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-bold">{{ t("home.footer.lTitle") }}</h3>
        <ul class="mt-4 space-y-2.5 text-sm text-muted-foreground">
          <li v-for="l in legal" :key="l.href"><RouterLink :to="l.href" class="hover:text-foreground">{{ l.label() }}</RouterLink></li>
        </ul>
      </div>
    </div>

    <div class="border-t border-border">
      <div class="container flex flex-wrap items-center justify-between gap-2 py-5 text-[12.5px] text-muted-foreground/80">
        <span>© {{ year }} M-NETHUB. {{ t("home.footer.rights") }}</span>
        <span>Full Stack IT Company</span>
      </div>
    </div>
  </footer>
</template>
