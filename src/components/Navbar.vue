<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { useColorMode } from "@vueuse/core";
import { ArrowRight, Check, Languages, Menu, Moon, Sun, X } from "lucide-vue-next";
import LogoMnethub from "./LogoMnethub.vue";

const { t, locale } = useI18n();
const router = useRouter();
const mode = useColorMode();

const open = ref(false);
const showLang = ref(false);
const scrolled = ref(false);

const langs = [
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
  { code: "nl", flag: "🇳🇱", label: "Nederlands" },
];

const navLinks = [
  { key: "products", hash: "#produits" },
  { key: "services", hash: "#services" },
  { key: "vision", hash: "#vision" },
  { key: "team", hash: "#ingenieurs" },
  { key: "contact", hash: "#contact" },
];

const setLang = (code: string) => {
  locale.value = code;
  localStorage.setItem("mhub-lang", code);
  showLang.value = false;
};

const goTo = (hash: string) => {
  open.value = false;
  showLang.value = false;
  if (router.currentRoute.value.path === "/") {
    if (hash === "#top") window.scrollTo({ top: 0, behavior: "smooth" });
    else document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    router.push({ path: "/", hash: hash === "#top" ? "" : hash });
  }
};

const toggleTheme = () => {
  mode.value = mode.value === "dark" ? "light" : "dark";
};

const onScroll = () => {
  scrolled.value = window.scrollY > 8;
};
onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <div v-if="showLang" class="fixed inset-0 z-40" @click="showLang = false" />

  <header
    class="sticky top-0 z-50 border-b border-transparent transition-all duration-200"
    :class="scrolled || open ? 'border-border bg-background/80 backdrop-blur-xl' : ''"
  >
    <div class="container flex h-[68px] items-center gap-6">
      <a href="/" class="flex flex-shrink-0 items-center" aria-label="M-NETHUB" @click.prevent="goTo('#top')">
        <LogoMnethub variant="horizontal" class="text-foreground" icon-class="h-8 w-8" text-class="text-[17px]" />
      </a>

      <nav class="ml-4 hidden items-center gap-0.5 lg:flex" aria-label="Navigation principale">
        <a
          v-for="l in navLinks"
          :key="l.key"
          :href="l.hash"
          class="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          @click.prevent="goTo(l.hash)"
        >
          {{ t(`home.nav.${l.key}`) }}
        </a>
      </nav>

      <div class="ml-auto flex items-center gap-2">
        <div class="relative">
          <button
            class="flex h-10 items-center gap-1.5 rounded-xl border border-border bg-card px-3 text-xs font-bold uppercase transition-colors hover:bg-muted"
            :aria-expanded="showLang"
            aria-label="Language"
            @click="showLang = !showLang"
          >
            <Languages class="size-4 text-primary" />
            {{ locale }}
          </button>
          <div
            v-if="showLang"
            class="absolute right-0 top-full z-50 mt-2 min-w-[170px] rounded-2xl border border-border bg-card p-1.5 shadow-xl"
          >
            <button
              v-for="l in langs"
              :key="l.code"
              class="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted"
              :class="{ 'font-semibold text-primary': locale === l.code }"
              @click="setLang(l.code)"
            >
              <span>{{ l.flag }}</span>
              <span class="flex-1 text-left">{{ l.label }}</span>
              <Check v-if="locale === l.code" class="size-4" />
            </button>
          </div>
        </div>

        <button
          class="hidden h-10 w-10 place-items-center rounded-xl border border-border bg-card transition-colors hover:bg-muted sm:grid"
          aria-label="Theme"
          @click="toggleTheme"
        >
          <Moon v-if="mode !== 'dark'" class="size-[18px]" />
          <Sun v-else class="size-[18px]" />
        </button>

        <a
          href="#devis"
          class="hidden h-10 items-center gap-1.5 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90 md:inline-flex"
          @click.prevent="goTo('#devis')"
        >
          {{ t("home.nav.quote") }}
          <ArrowRight class="size-4" />
        </a>

        <button
          class="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card lg:hidden"
          :aria-expanded="open"
          :aria-label="t('home.nav.menu')"
          @click="open = !open"
        >
          <X v-if="open" class="size-5" />
          <Menu v-else class="size-5" />
        </button>
      </div>
    </div>

    <!-- Tiroir mobile -->
    <div v-if="open" class="border-t border-border bg-background/95 pb-5 backdrop-blur-xl lg:hidden">
      <div class="container flex flex-col">
        <a
          v-for="l in navLinks"
          :key="l.key"
          :href="l.hash"
          class="border-b border-border py-3.5 text-[15px] font-medium"
          @click.prevent="goTo(l.hash)"
        >
          {{ t(`home.nav.${l.key}`) }}
        </a>
        <RouterLink to="/carrieres" class="border-b border-border py-3.5 text-[15px] font-medium" @click="open = false">
          {{ t("home.nav.careers") }}
        </RouterLink>
        <div class="flex items-center justify-between pt-3.5 text-sm font-medium text-muted-foreground">
          <span>{{ t("home.nav.appearance") }}</span>
          <button class="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card" @click="toggleTheme">
            <Moon v-if="mode !== 'dark'" class="size-[18px]" />
            <Sun v-else class="size-[18px]" />
          </button>
        </div>
        <a
          href="#devis"
          class="mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary font-semibold text-primary-foreground shadow-lg shadow-primary/30"
          @click.prevent="goTo('#devis')"
        >
          {{ t("home.nav.quote") }} <ArrowRight class="size-4" />
        </a>
      </div>
    </div>
  </header>
</template>
