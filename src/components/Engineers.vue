<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Monitor, Bot, Shield, Palette, BarChart3, Video } from "lucide-vue-next";
import { motion, useScroll, useTransform } from "motion-v";
import Reveal3D from "./Reveal3D.vue";

const { t, tm } = useI18n();

const icons = [Monitor, Bot, Shield, Palette, BarChart3, Video];
const popularIndex = 1;

const profiles = computed(() =>
  (tm('engineers.profiles') as any[]).map((p: any, i: number) => ({
    icon: icons[i],
    title: p.title,
    skills: p.skills as string[],
    popular: i === popularIndex,
  }))
);

const sectionRef = ref<HTMLElement | null>(null);
const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
const headingY = useTransform(scrollYProgress, [0, 1], [60, -60]);
</script>

<template>
  <section id="engineers" ref="sectionRef" class="scene container py-24 sm:py-32">
    <Reveal3D :amount="0.4">
      <motion.div :style="{ y: headingY }" class="mx-auto max-w-2xl text-center">
        <div class="section-eyebrow justify-center mb-3">
          {{ t('engineers.label') }}
        </div>
        <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
          {{ t('engineers.title') }}
        </h2>
        <h3 class="mx-auto text-xl text-center text-muted-foreground pb-14">
          {{ t('engineers.subtitle') }}
        </h3>
      </motion.div>
    </Reveal3D>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Reveal3D
        v-for="({ icon, title, skills, popular }, index) in profiles"
        :key="index"
        :delay="(index % 3) * 0.12"
      >
      <Card
        :class="[
          'relative transition-all duration-300 hover:shadow-lg',
          popular
            ? 'drop-shadow-xl shadow-black/10 dark:shadow-primary/20 border-[1.5px] border-primary lg:scale-[1.05]'
            : 'hover:border-primary/30',
        ]"
      >
        <Badge v-if="popular" class="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
          {{ t('engineers.popular') }}
        </Badge>
        <CardHeader>
          <div class="mb-3">
            <div
              :class="[
                'inline-flex p-3 rounded-xl ring-4',
                popular
                  ? 'bg-primary/20 ring-primary/10'
                  : 'bg-muted ring-muted',
              ]"
            >
              <component :is="icon" :class="['size-7', popular ? 'text-primary' : 'text-muted-foreground']" />
            </div>
          </div>
          <CardTitle class="text-xl">{{ title }}</CardTitle>
          <CardDescription>{{ t('engineers.specialized') }}</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-3">
            <span v-for="skill in skills" :key="skill" class="flex items-center">
              <Check class="text-primary mr-2 size-4 flex-shrink-0" />
              <span>{{ skill }}</span>
            </span>
          </div>
        </CardContent>
        <CardFooter>
          <Button :variant="popular ? 'default' : 'secondary'" class="w-full" as-child>
            <a href="/contact">{{ t('engineers.contactBtn') }}</a>
          </Button>
        </CardFooter>
      </Card>
      </Reveal3D>
    </div>
  </section>
</template>
