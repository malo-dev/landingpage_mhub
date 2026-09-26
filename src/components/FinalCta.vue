<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ArrowRight } from "lucide-vue-next";

const { t } = useI18n();
</script>

<template>
  <section class="section-pad !pb-0">
    <div class="container">
      <div
        v-animate="{ type: 'zoom-in' }"
        class="relative overflow-hidden rounded-[32px] px-6 py-16 text-center text-white shadow-2xl sm:px-10 sm:py-20"
        style="background: linear-gradient(135deg, #2b3170 0%, #4f5bd5 55%, #6f78e6 100%)"
      >
        <div class="pointer-events-none absolute -right-[10%] -top-[40%] size-[520px] rounded-full" style="background: radial-gradient(circle, rgba(217, 181, 102, 0.45), transparent 65%)" />
        <h2 class="relative mx-auto max-w-[640px] font-display text-[clamp(1.65rem,3.4vw,2.4rem)] font-extrabold leading-tight tracking-tight">
          {{ t("home.cta.title") }}
        </h2>
        <p class="relative mx-auto mt-4 max-w-xl text-[16.5px] text-white/80">{{ t("home.cta.text") }}</p>
        <div class="relative mt-8 flex flex-wrap justify-center gap-3">
          <a href="#devis" class="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-[15px] font-semibold text-[#16181d] transition-all hover:-translate-y-0.5 hover:shadow-xl">
            {{ t("home.cta.primary") }} <ArrowRight class="size-[18px]" />
          </a>
          <a href="#contact" class="inline-flex h-12 items-center rounded-xl border border-white/30 bg-white/10 px-6 text-[15px] font-semibold text-white transition-all hover:bg-white/20">
            {{ t("home.cta.secondary") }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
