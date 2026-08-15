<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import LogoMnethub from "./LogoMnethub.vue";
import ToggleTheme from "./ToggleTheme.vue";
import { Menu, Languages, Store } from "lucide-vue-next";

const { t, locale } = useI18n();
const router = useRouter();
const isOpen = ref(false);
const showLang = ref(false);

const langs = [
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
  { code: "nl", flag: "🇳🇱", label: "Nederlands" },
];

const setLang = (code: string) => {
  locale.value = code;
  localStorage.setItem("mhub-lang", code);
  showLang.value = false;
};

// Menu volontairement plat et court — pas de sous-menus imbriqués.
// Le reste du plan du site (carrières, offres, politique…) reste accessible via le footer.
const navLinks = [
  { key: "services", href: "#services" },
  { key: "mstore", href: "#mstore", label: "M-STORE" },
  { key: "engineers", href: "#engineers" },
  { key: "contact", href: "#contact" },
];

const navigate = (href: string) => {
  isOpen.value = false;
  showLang.value = false;
  if (href.startsWith("/")) {
    router.push(href);
  } else {
    window.location.hash = href;
  }
};

// Le logo doit toujours ramener à l'accueil : scroll en haut si on y est déjà,
// sinon navigation SPA vers "/" (pas de simple lien "#top" depuis une autre page).
const goHome = () => {
  isOpen.value = false;
  if (router.currentRoute.value.path === "/") {
    window.location.hash = "#top";
  } else {
    router.push("/");
  }
};
</script>

<template>
  <div v-if="showLang" class="fixed inset-0 z-40" @click="showLang = false" />

  <header
    class="glass-panel sticky top-4 z-40 mx-auto flex w-[92%] max-w-screen-xl items-center justify-between rounded-2xl px-4 py-2.5 lg:w-[90%]"
  >
    <!-- Logo -->
    <a href="/" class="flex flex-shrink-0 items-center" @click.prevent="goHome">
      <LogoMnethub variant="horizontal" class="text-foreground" icon-class="h-8 w-8" text-class="text-base" />
    </a>

    <!-- Menu desktop — plat, un seul niveau -->
    <nav class="hidden items-center gap-1 lg:flex">
      <button
        v-for="link in navLinks"
        :key="link.key"
        class="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
        @click="navigate(link.href)"
      >
        {{ link.label || t(`nav.${link.key}`) }}
      </button>
    </nav>

    <!-- Actions droite (desktop) -->
    <div class="hidden items-center gap-2 lg:flex">
      <div class="relative">
        <button
          class="flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-bold uppercase transition-colors hover:bg-muted"
          @click="showLang = !showLang"
        >
          <Languages class="size-3.5 text-primary" />
          {{ locale }}
        </button>
        <div
          v-if="showLang"
          class="glass-panel absolute right-0 top-full z-50 mt-1 min-w-[150px] rounded-xl py-1 shadow-lg"
        >
          <button
            v-for="l in langs"
            :key="l.code"
            class="flex w-full items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-muted"
            :class="{ 'font-semibold text-primary': locale === l.code }"
            @click="setLang(l.code)"
          >
            <span>{{ l.flag }}</span>
            <span>{{ l.label }}</span>
          </button>
        </div>
      </div>

      <ToggleTheme />

      <Button size="sm" class="gap-1.5" @click="router.push('/creer-commerce')">
        <Store class="size-4" />
        {{ t("nav.start") }}
      </Button>
    </div>

    <!-- Toggle mobile -->
    <div class="flex items-center gap-2 lg:hidden">
      <ToggleTheme />
      <button class="glass-panel rounded-lg p-2" :aria-expanded="isOpen" @click="isOpen = true">
        <Menu class="size-5" />
      </button>
    </div>
  </header>

  <!-- Menu mobile — liste plate, pas d'accordéons -->
  <Sheet v-model:open="isOpen">
    <SheetContent side="left" class="flex w-72 flex-col justify-between overflow-y-auto rounded-tr-2xl rounded-br-2xl bg-card">
      <div>
        <SheetHeader class="mb-6 ml-1">
          <SheetTitle class="flex items-center">
            <a href="/" class="flex items-center" @click.prevent="goHome">
              <LogoMnethub variant="horizontal" class="text-foreground" icon-class="h-7 w-7" text-class="text-sm" />
            </a>
          </SheetTitle>
        </SheetHeader>

        <div class="flex flex-col gap-1 px-1">
          <button
            v-for="link in navLinks"
            :key="link.key"
            class="rounded-lg px-3 py-3 text-left text-sm font-medium hover:bg-muted"
            @click="navigate(link.href)"
          >
            {{ link.label || t(`nav.${link.key}`) }}
          </button>

          <Separator class="my-2" />

          <button
            class="rounded-lg px-3 py-2 text-left text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            @click="navigate('/carrieres')"
          >
            {{ t("nav.careers") }}
          </button>
          <button
            class="rounded-lg px-3 py-2 text-left text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            @click="navigate('/politique-confidentialite')"
          >
            {{ t("nav.privacy") }}
          </button>

          <Button class="mt-4 w-full gap-2" @click="navigate('/creer-commerce')">
            <Store class="size-4" /> {{ t("nav.start") }}
          </Button>
        </div>
      </div>

      <div class="flex flex-col gap-3 px-1 pb-2">
        <Separator />
        <div class="flex flex-wrap gap-1.5">
          <button
            v-for="l in langs"
            :key="l.code"
            class="flex items-center gap-1 rounded-md border px-2 py-1 text-xs transition-colors hover:bg-muted"
            :class="{ 'border-primary text-primary': locale === l.code }"
            @click="setLang(l.code)"
          >
            <span>{{ l.flag }}</span>
            <span class="uppercase">{{ l.code }}</span>
          </button>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>
