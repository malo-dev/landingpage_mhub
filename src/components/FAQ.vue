<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { ChevronDown } from "lucide-vue-next";

const { t, tm } = useI18n();
const items = computed(() => (tm("faq.items") as any[]).map((i: any) => ({ q: i.question as string, a: i.answer as string })));
const openIndex = ref<number | null>(0);
</script>

<template>
  <section id="faq" class="section-pad border-t border-border bg-muted/60">
    <div class="container max-w-[860px]">
      <div v-animate class="mb-10 text-center">
        <span class="kicker">{{ t("faq.label") }}</span>
        <h2 class="section-title">{{ t("faq.title") }}</h2>
      </div>

      <div class="flex flex-col gap-2.5">
        <div
          v-for="(it, i) in items"
          :key="i"
          v-animate="{ type: 'fade-up', delay: Math.min(i, 5) * 50 }"
          class="overflow-hidden rounded-[18px] border bg-card transition-shadow"
          :class="openIndex === i ? 'border-foreground/15 shadow-sm' : 'border-border'"
        >
          <button
            class="flex w-full items-center justify-between gap-4 px-5 py-[18px] text-left text-[15.5px] font-semibold"
            :aria-expanded="openIndex === i"
            @click="openIndex = openIndex === i ? null : i"
          >
            {{ it.q }}
            <ChevronDown class="size-5 flex-shrink-0 transition-transform" :class="openIndex === i ? 'rotate-180 text-primary' : 'text-muted-foreground'" />
          </button>
          <div v-show="openIndex === i" class="px-5 pb-5 text-[14.5px] leading-[1.7] text-muted-foreground">{{ it.a }}</div>
        </div>
      </div>

      <p class="mt-6 text-center text-sm text-muted-foreground">
        {{ t("faq.moreQuestions") }}
        <a href="#contact" class="font-semibold text-primary underline underline-offset-4">{{ t("faq.contactLink") }}</a>
      </p>
    </div>
  </section>
</template>
