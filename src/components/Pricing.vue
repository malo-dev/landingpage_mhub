<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import {
  Check, Store, Building2, Package, Receipt, ShoppingCart,
  CreditCard, Truck, Wallet, Users, Shield, Bell, BarChart3,
  Megaphone, MessageSquare, DollarSign, UserCog, ChevronDown, ChevronUp,
} from "lucide-vue-next";

const { t, tm } = useI18n();
const activeTab = ref<"commercial" | "ong">("commercial");

const commercialCategories = computed(() => tm('pricing.commercial.cats') as any[]);
const ongCategories = computed(() => tm('pricing.ong.cats') as any[]);

const commercialIcons = [
  Package, Receipt, ShoppingCart, CreditCard, Truck,
  Wallet, Store, Users, Shield, UserCog, Bell, BarChart3,
];
const ongIcons = [Package, DollarSign, Users, Megaphone, MessageSquare];

const expandedCategories = ref<Set<string>>(new Set());
const toggleCategory = (key: string) => {
  if (expandedCategories.value.has(key)) {
    expandedCategories.value.delete(key);
  } else {
    expandedCategories.value.add(key);
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
          :class="['flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm',
            activeTab === 'commercial' ? 'bg-primary text-primary-foreground shadow-md scale-105' : 'text-muted-foreground hover:text-foreground']"
        >
          <Store class="size-4" /> {{ t('pricing.tabCommercial') }}
        </button>
        <button
          @click="activeTab = 'ong'"
          :class="['flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm',
            activeTab === 'ong' ? 'bg-primary text-primary-foreground shadow-md scale-105' : 'text-muted-foreground hover:text-foreground']"
        >
          <Building2 class="size-4" /> {{ t('pricing.tabOng') }}
        </button>
      </div>
    </div>

    <!-- Commercial Plan -->
    <Transition name="tab-fade" mode="out-in">
      <div v-if="activeTab === 'commercial'" key="commercial">
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
                <div v-for="k in ['feat1','feat2','feat3','feat4','feat5','feat6']" :key="k"
                  class="flex items-center gap-2">
                  <Check class="text-primary size-4 flex-shrink-0" />
                  <span>{{ t('pricing.' + k) }}</span>
                </div>
              </CardContent>
              <CardFooter class="flex flex-col gap-3">
                <Button class="w-full font-bold" as-child><a href="/contact">{{ t('pricing.startNow') }}</a></Button>
                <Button variant="outline" class="w-full" as-child><a href="#devis">{{ t('pricing.requestQuote') }}</a></Button>
              </CardFooter>
            </Card>
          </div>

          <div class="lg:col-span-2 space-y-3">
            <h3 class="text-xl font-bold mb-4">
              <span class="text-primary">{{ t('pricing.featuresTitle') }}</span> — {{ t('pricing.categoriesLabel') }}
            </h3>
            <div
              v-for="(cat, i) in commercialCategories"
              :key="cat.title"
              class="border rounded-xl overflow-hidden transition-all duration-200 hover:border-primary/40 hover:shadow-sm"
            >
              <button
                @click="toggleCategory(cat.title)"
                class="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors duration-200 text-left"
              >
                <div class="flex items-center gap-3">
                  <div class="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                    <component :is="commercialIcons[i]" class="size-4 text-primary" />
                  </div>
                  <span class="font-semibold">{{ cat.title }}</span>
                  <Badge variant="secondary" class="text-xs">{{ cat.count }}</Badge>
                </div>
                <component :is="expandedCategories.has(cat.title) ? ChevronUp : ChevronDown"
                  class="size-4 text-muted-foreground flex-shrink-0 transition-transform duration-200" />
              </button>
              <Transition name="expand">
                <div v-if="expandedCategories.has(cat.title)" class="px-4 pb-4 pt-0">
                  <ul class="space-y-2 pt-2 border-t border-border/40">
                    <li
                      v-for="item in (cat.items as string[])"
                      :key="item"
                      class="flex items-start gap-2 text-muted-foreground text-sm"
                    >
                      <Check class="text-primary size-4 flex-shrink-0 mt-0.5" />
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ONG / Organisation Plan -->
    <Transition name="tab-fade" mode="out-in">
      <div v-if="activeTab === 'ong'" key="ong">
        <div class="grid lg:grid-cols-3 gap-8 items-start">
          <div class="lg:col-span-1">
            <Card class="border-2 border-primary/50 sticky top-24">
              <CardHeader>
                <Badge variant="outline" class="w-fit mb-2 border-primary text-primary">{{ t('pricing.ongBadge') }}</Badge>
                <div class="flex items-center gap-2 mb-1">
                  <Badge class="bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30">
                    ✅ {{ t('pricing.comingSoon') }}
                  </Badge>
                </div>
                <CardTitle class="text-3xl font-extrabold">{{ t('pricing.onQuote') }}</CardTitle>
                <CardDescription class="text-base">{{ t('pricing.ongDesc') }}</CardDescription>
              </CardHeader>
              <CardContent class="space-y-3">
                <div v-for="k in ['ongFeat1','ongFeat2','ongFeat3','ongFeat4','ongFeat5','ongFeat6']" :key="k"
                  class="flex items-center gap-2">
                  <Check class="text-primary size-4 flex-shrink-0" />
                  <span>{{ t('pricing.' + k) }}</span>
                </div>
              </CardContent>
              <CardFooter class="flex flex-col gap-3">
                <Button class="w-full font-bold" as-child><a href="/contact">{{ t('pricing.contactUs') }}</a></Button>
                <Button variant="outline" class="w-full" as-child><a href="#devis">{{ t('pricing.requestQuote') }}</a></Button>
              </CardFooter>
            </Card>
          </div>

          <div class="lg:col-span-2 space-y-3">
            <div class="flex items-center gap-3 mb-4">
              <h3 class="text-xl font-bold">{{ t('pricing.ongFeaturesTitle') }}</h3>
              <Badge class="bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30">
                ✅ {{ t('pricing.inDevelopment') }}
              </Badge>
            </div>
            <p class="text-muted-foreground mb-6">{{ t('pricing.ongExtend') }}</p>
            <div
              v-for="(cat, i) in ongCategories"
              :key="cat.title"
              class="border rounded-xl overflow-hidden transition-all duration-200 hover:border-primary/40 hover:shadow-sm border-primary/20"
            >
              <button
                @click="toggleCategory('ong_' + cat.title)"
                class="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors duration-200 text-left"
              >
                <div class="flex items-center gap-3">
                  <div class="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                    <component :is="ongIcons[i]" class="size-4 text-primary" />
                  </div>
                  <span class="font-semibold">{{ cat.title }}</span>
                  <Badge variant="secondary" class="text-xs">{{ cat.count }}</Badge>
                </div>
                <component :is="expandedCategories.has('ong_' + cat.title) ? ChevronUp : ChevronDown"
                  class="size-4 text-muted-foreground flex-shrink-0 transition-transform duration-200" />
              </button>
              <Transition name="expand">
                <div v-if="expandedCategories.has('ong_' + cat.title)" class="px-4 pb-4 pt-0">
                  <ul class="space-y-2 pt-2 border-t border-border/40">
                    <li
                      v-for="item in (cat.items as string[])"
                      :key="item"
                      class="flex items-start gap-2 text-muted-foreground text-sm"
                    >
                      <Check class="text-primary size-4 flex-shrink-0 mt-0.5" />
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.tab-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.tab-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.expand-enter-active,
.expand-leave-active {
  transition: opacity 0.2s ease, max-height 0.3s ease;
  max-height: 600px;
  overflow: hidden;
}
.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
