<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-vue-next";

const { t, tm } = useI18n();

const icons = ["💻", "🤖", "🔐", "🎨", "📊", "🎬"];
const popularIndex = 1;

const profiles = computed(() =>
  (tm('engineers.profiles') as any[]).map((p: any, i: number) => ({
    icon: icons[i],
    title: p.title,
    skills: p.skills as string[],
    popular: i === popularIndex,
  }))
);
</script>

<template>
  <section id="engineers" class="container py-24 sm:py-32">
    <h2 v-animate class="text-lg text-primary text-center mb-2 tracking-wider">
      {{ t('engineers.label') }}
    </h2>
    <h2 v-animate="{ delay: 100 }" class="text-3xl md:text-4xl text-center font-bold mb-4">
      {{ t('engineers.title') }}
    </h2>
    <h3 v-animate="{ delay: 200 }" class="md:w-2/3 mx-auto text-xl text-center text-muted-foreground pb-14">
      {{ t('engineers.subtitle') }}
    </h3>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        v-for="({ icon, title, skills, popular }, index) in profiles"
        v-animate="{ type: 'fade-up', delay: (index % 3) * 120 }"
        :key="index"
        :class="{ 'drop-shadow-xl shadow-black/10 dark:shadow-primary/20 border-[1.5px] border-primary lg:scale-[1.05]': popular }"
        class="relative"
      >
        <Badge v-if="popular" class="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
          {{ t('engineers.popular') }}
        </Badge>
        <CardHeader>
          <div class="text-4xl mb-2">{{ icon }}</div>
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
            <a href="#contact">{{ t('engineers.contactBtn') }}</a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
