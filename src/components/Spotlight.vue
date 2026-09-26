<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { ExternalLink, Play, X } from "lucide-vue-next";
import demoVideo from "@/assets/demo_mhub.mp4";
import screenshot1 from "@/assets/mhubscreenshot (1).png";
import screenshot2 from "@/assets/mhubscreenshot (2).png";
import screenshot3 from "@/assets/mhubscreenshot (3).png";

const { t, tm } = useI18n();
const mstoreUrl = import.meta.env.VITE_MSTORE_URL as string;

const images = [screenshot1, screenshot2, screenshot3];
const tabs = computed(() =>
  (tm("howItWorks.items") as any[]).map((item: any, i: number) => ({
    badge: item.badge as string,
    title: item.title as string,
    description: item.description as string,
    image: images[i],
  }))
);
const active = ref(0);
const showVideo = ref(false);
</script>

<template>
  <section id="mstore" class="section-pad">
    <div class="container">
      <div v-animate class="mx-auto mb-10 max-w-2xl text-center">
        <span class="kicker">{{ t("home.spotlight.label") }}</span>
        <h2 class="section-title">{{ t("home.spotlight.title") }}</h2>
        <p class="section-lead">{{ t("home.spotlight.subtitle") }}</p>
      </div>

      <div class="mb-7 flex flex-wrap justify-center gap-2" role="tablist">
        <button
          v-for="(tab, i) in tabs"
          :key="i"
          role="tab"
          :aria-selected="active === i"
          class="rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
          :class="active === i ? 'border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25' : 'border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground'"
          @click="active = i"
        >
          {{ tab.badge }}
        </button>
      </div>

      <div v-animate="{ type: 'zoom-in' }" class="grid items-center gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)]">
        <div class="order-2 lg:order-1">
          <h3 class="text-2xl font-extrabold md:text-[1.7rem]">{{ tabs[active]?.title }}</h3>
          <p class="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">{{ tabs[active]?.description }}</p>

          <div class="mt-7 flex flex-wrap gap-3">
            <a
              :href="mstoreUrl"
              target="_blank"
              rel="noopener"
              class="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
            >
              {{ t("home.spotlight.open") }} <ExternalLink class="size-4" />
            </a>
            <button
              class="inline-flex h-11 items-center gap-2 rounded-xl border border-input bg-card px-5 text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:bg-muted"
              @click="showVideo = !showVideo"
            >
              <X v-if="showVideo" class="size-4" />
              <Play v-else class="size-4" />
              {{ showVideo ? t("home.spotlight.hideDemo") : t("home.spotlight.demo") }}
            </button>
          </div>
        </div>

        <div class="relative order-1 lg:order-2">
          <div class="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/15 blur-3xl" />
          <div class="overflow-hidden rounded-[18px] border border-border bg-card shadow-2xl shadow-primary/10">
            <div class="flex h-9 items-center gap-1.5 border-b border-border bg-muted px-3.5">
              <i class="size-[9px] rounded-full bg-border" /><i class="size-[9px] rounded-full bg-border" /><i class="size-[9px] rounded-full bg-border" />
              <span class="ml-3 truncate font-mono text-[11px] text-muted-foreground/80">app.m-nethub.tech</span>
            </div>
            <video v-if="showVideo" class="w-full" controls autoplay preload="metadata" :src="demoVideo" />
            <img v-else :key="active" :src="tabs[active]?.image" :alt="`M-Store — ${tabs[active]?.title}`" class="w-full" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
