<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check, Store, Building2 } from "lucide-vue-next";

const { t, tm } = useI18n();
const activeTab = ref<"commercial" | "ong">("commercial");

const commercialCategories = computed(() => tm('pricing.commercial.cats') as any[]);
const ongCategories = computed(() => tm('pricing.ong.cats') as any[]);

const expandedCategories = ref<Set<string>>(new Set());
const toggleCategory = (title: string) => {
  if (expandedCategories.value.has(title)) {
    expandedCategories.value.delete(title);
  } else {
    expandedCategories.value.add(title);
  }
};
</script>

<template>
  <section id="pricing" class="container py-24 sm:py-32">
    <div class="text-center mb-12">
      <h2 v-animate class="text-lg text-primary text-center mb-2 tracking-wider">{{ t('pricing.label') }}</h2>
      <h2 v-animate="{ delay: 100 }" class="text-3xl md:text-4xl text-center font-bold mb-4">{{ t('pricing.title') }}</h2>
      <p v-animate="{ delay: 200 }" class="md:w-2/3 mx-auto text-xl text-muted-foreground">{{ t('pricing.subtitle') }}</p>
    </div>

    <!-- Tab Switcher -->
    <div v-animate="{ type: 'fade-up', delay: 250 }" class="flex justify-center mb-12">
      <div class="flex bg-muted rounded-xl p-1 gap-1">
        <button
          @click="activeTab = 'commercial'"
          :class="['flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all text-sm',
            activeTab === 'commercial' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground']"
        >
          <Store class="size-4" /> {{ t('pricing.tabCommercial') }}
        </button>
        <button
          @click="activeTab = 'ong'"
          :class="['flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all text-sm',
            activeTab === 'ong' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground']"
        >
          <Building2 class="size-4" /> {{ t('pricing.tabOng') }}
        </button>
      </div>
    </div>

    <!-- Commercial Plan -->
    <div v-if="activeTab === 'commercial'" v-animate="{ type: 'fade-up', delay: 100 }">
      <div class="grid lg:grid-cols-3 gap-8 mb-12 items-start">
        <div class="lg:col-span-1">
          <Card class="border-2 border-primary shadow-lg shadow-primary/20 sticky top-24">
            <CardHeader>
              <Badge class="w-fit mb-2">{{ t('pricing.commercialBadge') }}</Badge>
              <CardTitle class="text-3xl font-extrabold">$2
                <span class="text-lg font-normal text-muted-foreground">{{ t('pricing.perMonth') }}</span>
              </CardTitle>
              <CardDescription class="text-base">{{ t('pricing.commercialDesc') }}</CardDescription>
            </CardHeader>
            <CardContent class="space-y-3">
              <div class="flex items-center gap-2"><Check class="text-primary size-4 flex-shrink-0" /><span>{{ t('pricing.feat1') }}</span></div>
              <div class="flex items-center gap-2"><Check class="text-primary size-4 flex-shrink-0" /><span>{{ t('pricing.feat2') }}</span></div>
              <div class="flex items-center gap-2"><Check class="text-primary size-4 flex-shrink-0" /><span>{{ t('pricing.feat3') }}</span></div>
              <div class="flex items-center gap-2"><Check class="text-primary size-4 flex-shrink-0" /><span>{{ t('pricing.feat4') }}</span></div>
              <div class="flex items-center gap-2"><Check class="text-primary size-4 flex-shrink-0" /><span>{{ t('pricing.feat5') }}</span></div>
              <div class="flex items-center gap-2"><Check class="text-primary size-4 flex-shrink-0" /><span>{{ t('pricing.feat6') }}</span></div>
            </CardContent>
            <CardFooter class="flex flex-col gap-3">
              <Button class="w-full font-bold" as-child><a href="#contact">{{ t('pricing.startNow') }}</a></Button>
              <Button variant="outline" class="w-full" as-child><a href="#devis">{{ t('pricing.requestQuote') }}</a></Button>
            </CardFooter>
          </Card>
        </div>

        <div class="lg:col-span-2 space-y-4">
          <h3 class="text-xl font-bold mb-4">
            <span class="text-primary">{{ t('pricing.featuresTitle') }}</span> — {{ t('pricing.categoriesLabel') }}
          </h3>
          <div v-for="cat in commercialCategories" :key="cat.title" class="border rounded-xl overflow-hidden">
            <button
              @click="toggleCategory(cat.title)"
              class="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors text-left"
            >
              <div class="flex items-center gap-3">
                <span class="text-2xl">{{ cat.icon }}</span>
                <span class="font-semibold">{{ cat.title }}</span>
                <Badge variant="secondary">{{ cat.count }}</Badge>
              </div>
              <span class="text-muted-foreground text-lg">{{ expandedCategories.has(cat.title) ? '−' : '+' }}</span>
            </button>
            <div v-if="expandedCategories.has(cat.title)" class="px-4 pb-4 pt-0">
              <ul class="space-y-2">
                <li v-for="item in (cat.items as string[])" :key="item" class="flex items-start gap-2 text-muted-foreground text-sm">
                  <Check class="text-primary size-4 flex-shrink-0 mt-0.5" />
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ONG / Organisation Plan -->
    <div v-if="activeTab === 'ong'" v-animate="{ type: 'fade-up', delay: 100 }">
      <div class="grid lg:grid-cols-3 gap-8 items-start">
        <div class="lg:col-span-1">
          <Card class="border-2 border-primary/50 sticky top-24">
            <CardHeader>
              <Badge variant="outline" class="w-fit mb-2 border-primary text-primary">{{ t('pricing.ongBadge') }}</Badge>
              <div class="flex items-center gap-2 mb-1">
                <Badge class="bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30">
                  {{ t('pricing.comingSoon') }}
                </Badge>
              </div>
              <CardTitle class="text-3xl font-extrabold">{{ t('pricing.onQuote') }}</CardTitle>
              <CardDescription class="text-base">{{ t('pricing.ongDesc') }}</CardDescription>
            </CardHeader>
            <CardContent class="space-y-3">
              <div class="flex items-center gap-2"><Check class="text-primary size-4 flex-shrink-0" /><span>{{ t('pricing.ongFeat1') }}</span></div>
              <div class="flex items-center gap-2"><Check class="text-primary size-4 flex-shrink-0" /><span>{{ t('pricing.ongFeat2') }}</span></div>
              <div class="flex items-center gap-2"><Check class="text-primary size-4 flex-shrink-0" /><span>{{ t('pricing.ongFeat3') }}</span></div>
              <div class="flex items-center gap-2"><Check class="text-primary size-4 flex-shrink-0" /><span>{{ t('pricing.ongFeat4') }}</span></div>
              <div class="flex items-center gap-2"><Check class="text-primary size-4 flex-shrink-0" /><span>{{ t('pricing.ongFeat5') }}</span></div>
              <div class="flex items-center gap-2"><Check class="text-primary size-4 flex-shrink-0" /><span>{{ t('pricing.ongFeat6') }}</span></div>
            </CardContent>
            <CardFooter class="flex flex-col gap-3">
              <Button class="w-full font-bold" as-child><a href="#contact">{{ t('pricing.contactUs') }}</a></Button>
              <Button variant="outline" class="w-full" as-child><a href="#devis">{{ t('pricing.requestQuote') }}</a></Button>
            </CardFooter>
          </Card>
        </div>

        <div class="lg:col-span-2 space-y-4">
          <div class="flex items-center gap-3 mb-4">
            <h3 class="text-xl font-bold">{{ t('pricing.ongFeaturesTitle') }}</h3>
            <Badge class="bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30">{{ t('pricing.inDevelopment') }}</Badge>
          </div>
          <p class="text-muted-foreground mb-6">{{ t('pricing.ongExtend') }}</p>
          <div v-for="cat in ongCategories" :key="cat.title" class="border rounded-xl overflow-hidden border-primary/20">
            <button
              @click="toggleCategory('ong_' + cat.title)"
              class="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors text-left"
            >
              <div class="flex items-center gap-3">
                <span class="text-2xl">{{ cat.icon }}</span>
                <span class="font-semibold">{{ cat.title }}</span>
                <Badge variant="secondary">{{ cat.count }}</Badge>
              </div>
              <span class="text-muted-foreground text-lg">{{ expandedCategories.has('ong_' + cat.title) ? '−' : '+' }}</span>
            </button>
            <div v-if="expandedCategories.has('ong_' + cat.title)" class="px-4 pb-4 pt-0">
              <ul class="space-y-2">
                <li v-for="item in (cat.items as string[])" :key="item" class="flex items-start gap-2 text-muted-foreground text-sm">
                  <Check class="text-primary size-4 flex-shrink-0 mt-0.5" />
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
