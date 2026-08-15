<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const { t, tm } = useI18n();

const FAQList = computed(() =>
  (tm('faq.items') as any[]).map((item: any, i: number) => ({
    question: item.question,
    answer: item.answer,
    value: `item-${i + 1}`,
  }))
);
</script>

<template>
  <section id="faq" class="container md:w-[700px] py-24 sm:py-32">
    <div v-animate class="text-center mb-8">
      <div class="section-eyebrow justify-center mb-3">{{ t('faq.label') }}</div>
      <h2 class="text-3xl md:text-4xl text-center font-bold">{{ t('faq.title') }}</h2>
    </div>

    <Accordion v-animate="{ type: 'fade-up', delay: 150 }" type="single" collapsible class="AccordionRoot">
      <AccordionItem v-for="{ question, answer, value } in FAQList" :key="value" :value="value">
        <AccordionTrigger class="text-left">{{ question }}</AccordionTrigger>
        <AccordionContent>{{ answer }}</AccordionContent>
      </AccordionItem>
    </Accordion>

    <h3 class="font-medium mt-4">
      {{ t('faq.moreQuestions') }}
      <a href="#contact" class="text-primary underline ml-1">{{ t('faq.contactLink') }}</a>
    </h3>
  </section>
</template>
