<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { ChevronDown, Menu, X } from "lucide-vue-next";
import LogoMnethub from "./LogoMnethub.vue";
import bgVideo from "@/assets/demo_mhub.mp4";

const BG_VIDEO = bgVideo;

const { t } = useI18n();
const router = useRouter();

const menuOpen = ref(false);

type NavLink = { label: string; href: string; active?: boolean; dropdown?: boolean };

const navLinks = computed<NavLink[]>(() => [
  { label: t("heroGlass.home"), href: "#top", active: true },
  { label: t("nav.services"), href: "#services", dropdown: true },
  { label: "M-STORE", href: "#mstore" },
  { label: t("nav.engineers"), href: "#engineers" },
]);

const navigate = (href: string) => {
  menuOpen.value = false;
  if (href === "#top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (href.startsWith("/")) {
    router.push(href);
  } else {
    window.location.hash = href;
  }
};
</script>

<template>
  <div id="top" class="liquid-hero relative w-full h-screen overflow-hidden">
    <!-- Vidéo de fond -->
    <video
      class="absolute inset-0 w-full h-full object-cover"
      :src="BG_VIDEO"
      autoplay
      muted
      loop
      playsinline
    />

    <!-- Navbar -->
    <header
      class="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 sm:px-8 py-5"
    >
      <!-- Logo -->
      <a
        href="/"
        class="flex items-center"
        @click.prevent="navigate('#top')"
      >
        <LogoMnethub variant="horizontal" class="text-white" icon-class="h-8 w-8" text-class="text-base" />
      </a>

      <!-- Pill de navigation (desktop) -->
      <nav class="liquid-glass hidden md:flex items-center gap-1 rounded-xl px-2 py-2">
        <button
          v-for="link in navLinks"
          :key="link.label"
          class="flex items-center gap-0.5 px-3 py-1.5 rounded-md text-sm transition-colors"
          :class="link.active ? 'bg-white/15 text-white' : 'text-white/70 hover:text-white'"
          @click="navigate(link.href)"
        >
          {{ link.label }}
          <ChevronDown v-if="link.dropdown" :size="13" class="mt-px" />
        </button>
      </nav>

      <!-- CTA (desktop) -->
      <div class="hidden md:flex items-center gap-3">
        <button
          class="liquid-glass text-white text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/5 transition-colors"
          @click="navigate('#contact')"
        >
          {{ t("nav.contact") }}
        </button>
        <button
          class="bg-white text-black text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/90 transition-colors"
          @click="navigate('/creer-commerce')"
        >
          {{ t("nav.createCommerce") }}
        </button>
      </div>

      <!-- Toggle mobile -->
      <button
        class="md:hidden liquid-glass text-white p-2 rounded-lg"
        :aria-label="menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <X v-if="menuOpen" :size="18" />
        <Menu v-else :size="18" />
      </button>
    </header>

    <!-- Menu mobile -->
    <div
      v-if="menuOpen"
      class="absolute top-[72px] left-4 right-4 z-30 md:hidden liquid-glass rounded-2xl p-4 flex flex-col gap-1"
    >
      <button
        v-for="link in navLinks"
        :key="link.label"
        class="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm"
        :class="link.active ? 'bg-white/15 text-white' : 'text-white/70 hover:text-white'"
        @click="navigate(link.href)"
      >
        {{ link.label }}
        <ChevronDown v-if="link.dropdown" :size="13" class="mt-px" />
      </button>

      <div class="flex gap-2 mt-2 pt-3 border-t border-white/10">
        <button
          class="flex-1 liquid-glass text-white text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/5 transition-colors"
          @click="navigate('#contact')"
        >
          {{ t("nav.contact") }}
        </button>
        <button
          class="flex-1 bg-white text-black text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/90 transition-colors"
          @click="navigate('/creer-commerce')"
        >
          {{ t("nav.createCommerce") }}
        </button>
      </div>
    </div>

    <!-- Contenu du hero (bas-gauche) -->
    <div class="absolute bottom-0 left-0 z-20 px-6 sm:px-12 pb-10 sm:pb-16 max-w-2xl">
      <h1
        class="text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight tracking-tight mb-4"
      >
        {{ t("heroGlass.title") }}
      </h1>

      <p class="text-white/60 text-sm leading-relaxed mb-7 max-w-md">
        {{ t("heroGlass.subtitle") }}
      </p>

      <div class="flex flex-wrap items-center gap-3">
        <button
          class="bg-white text-black text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-full hover:bg-white/90 transition-colors"
          @click="navigate('/creer-commerce')"
        >
          {{ t("nav.createCommerce") }}
        </button>
        <button
          class="liquid-glass text-white text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-full hover:bg-white/5 transition-colors"
          @click="navigate('#mstore')"
        >
          {{ t("hero.discoverMstore") }}
        </button>
      </div>
    </div>
  </div>
</template>
