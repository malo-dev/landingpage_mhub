<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Zap, ArrowLeft, Briefcase, MapPin, DollarSign,
  Clock, ExternalLink, FileText, Calendar, Search,
} from "lucide-vue-next";
import api from "@/services/api";

const router = useRouter();
const { t } = useI18n();

interface JobOffer {
  id: number;
  title: string;
  description: string | null;
  requirements: string | null;
  contractType: string;
  location: string | null;
  salary: string | null;
  type: "form" | "link";
  externalLink: string | null;
  deadline: string | null;
  createdAt: string;
}

const offers = ref<JobOffer[]>([]);
const loading = ref(true);
const error = ref("");
const search = ref("");
const selected = ref<JobOffer | null>(null);

const filteredOffers = computed(() =>
  offers.value.filter((o) =>
    o.title.toLowerCase().includes(search.value.toLowerCase()) ||
    (o.location ?? "").toLowerCase().includes(search.value.toLowerCase()) ||
    o.contractType.toLowerCase().includes(search.value.toLowerCase())
  )
);

onMounted(async () => {
  try {
    const { data } = await api.get("/job-offers/public");
    offers.value = data.data ?? [];
  } catch {
    error.value = t("careers.loadError");
  } finally {
    loading.value = false;
  }
});

const contractColor: Record<string, string> = {
  CDI: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  CDD: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  Stage: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  Freelance: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
};

const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
</script>

<template>
  <div class="min-h-screen bg-background flex flex-col">
    <!-- Header -->
    <header class="border-b bg-card">
      <div class="container flex items-center justify-between h-16">
        <a href="/" class="flex items-center gap-2">
          <div class="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-8 h-8 flex items-center justify-center">
            <Zap class="w-4 h-4 text-primary-foreground" />
          </div>
          <span class="text-transparent bg-gradient-to-r from-primary to-[#0099BB] bg-clip-text font-extrabold text-xl">M-HUB</span>
        </a>
        <Button variant="ghost" @click="router.push('/')" class="gap-2">
          <ArrowLeft class="size-4" />
          {{ t('nav.backHome') }}
        </Button>
      </div>
    </header>

    <main class="flex-1">
      <!-- Hero -->
      <section class="container py-16 text-center max-w-3xl mx-auto">
        <Badge variant="outline" class="mb-4">{{ t('careers.badge') }}</Badge>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          {{ t('careers.title') }}
          <span class="text-transparent bg-gradient-to-r from-primary to-[#0099BB] bg-clip-text"> M-HUB</span>
        </h1>
        <p class="text-xl text-muted-foreground mb-8">{{ t('careers.subtitle') }}</p>

        <!-- Search -->
        <div class="relative max-w-md mx-auto">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input
            v-model="search"
            :placeholder="t('careers.searchPh')"
            class="w-full pl-9 pr-4 py-2.5 rounded-xl border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
      </section>

      <!-- Offers list -->
      <section class="container pb-24 max-w-5xl mx-auto">

        <!-- Loading -->
        <div v-if="loading" class="flex justify-center py-20">
          <div class="animate-spin rounded-full h-10 w-10 border-2 border-primary border-t-transparent" />
        </div>

        <!-- Error -->
        <div v-else-if="error" class="text-center py-20 text-muted-foreground">
          <Briefcase class="size-12 mx-auto mb-4 opacity-30" />
          <p>{{ error }}</p>
        </div>

        <!-- Empty -->
        <div v-else-if="filteredOffers.length === 0" class="text-center py-20 text-muted-foreground">
          <Briefcase class="size-12 mx-auto mb-4 opacity-30" />
          <p class="text-lg font-medium mb-2">{{ t('careers.noOffers') }}</p>
          <p class="text-sm">{{ t('careers.noOffersDesc') }}</p>
        </div>

        <!-- Grid -->
        <div v-else class="grid md:grid-cols-2 gap-5">
          <Card
            v-for="offer in filteredOffers"
            :key="offer.id"
            class="hover:shadow-md hover:border-primary/30 transition-all cursor-pointer"
            @click="selected = offer"
          >
            <CardHeader class="pb-3">
              <div class="flex items-start justify-between gap-2">
                <CardTitle class="text-lg leading-snug">{{ offer.title }}</CardTitle>
                <span
                  class="text-xs font-semibold px-2 py-0.5 rounded-full border flex-shrink-0"
                  :class="contractColor[offer.contractType] ?? 'bg-muted text-muted-foreground border-border'"
                >
                  {{ offer.contractType }}
                </span>
              </div>
            </CardHeader>
            <CardContent class="space-y-2.5">
              <div v-if="offer.location" class="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin class="size-3.5 text-primary flex-shrink-0" />
                {{ offer.location }}
              </div>
              <div v-if="offer.salary" class="flex items-center gap-2 text-sm text-muted-foreground">
                <DollarSign class="size-3.5 text-primary flex-shrink-0" />
                {{ offer.salary }}
              </div>
              <div v-if="offer.deadline" class="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar class="size-3.5 text-primary flex-shrink-0" />
                {{ t('careers.deadline') }} {{ fmtDate(offer.deadline) }}
              </div>
              <p v-if="offer.description" class="text-sm text-muted-foreground line-clamp-2 pt-1">
                {{ offer.description }}
              </p>

              <div class="flex items-center justify-between pt-2">
                <span class="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock class="size-3" /> {{ fmtDate(offer.createdAt) }}
                </span>
                <Button size="sm" variant="outline" class="gap-1.5 text-xs h-7">
                  <span v-if="offer.type === 'link'">
                    <ExternalLink class="size-3" /> {{ t('careers.seeOffer') }}
                  </span>
                  <span v-else>
                    <FileText class="size-3" /> {{ t('careers.apply') }}
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>

    <!-- Detail modal -->
    <Teleport to="body">
      <div
        v-if="selected"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        @click.self="selected = null"
      >
        <div class="bg-card border rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 shadow-2xl">
          <div class="flex items-start justify-between mb-4 gap-3">
            <div>
              <h2 class="text-2xl font-bold">{{ selected.title }}</h2>
              <div class="flex items-center gap-3 mt-2 flex-wrap">
                <span
                  class="text-xs font-semibold px-2.5 py-1 rounded-full border"
                  :class="contractColor[selected.contractType] ?? 'bg-muted text-muted-foreground border-border'"
                >
                  {{ selected.contractType }}
                </span>
                <span v-if="selected.location" class="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin class="size-3.5" /> {{ selected.location }}
                </span>
                <span v-if="selected.salary" class="text-sm text-muted-foreground flex items-center gap-1">
                  <DollarSign class="size-3.5" /> {{ selected.salary }}
                </span>
              </div>
            </div>
            <button @click="selected = null" class="text-muted-foreground hover:text-foreground text-xl leading-none flex-shrink-0">✕</button>
          </div>

          <div v-if="selected.deadline" class="mb-4 flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-2">
            <Calendar class="size-4" />
            {{ t('careers.deadline') }} {{ fmtDate(selected.deadline) }}
          </div>

          <div v-if="selected.description" class="mb-4">
            <h3 class="font-semibold mb-2">{{ t('careers.descLabel') }}</h3>
            <p class="text-muted-foreground text-sm whitespace-pre-line">{{ selected.description }}</p>
          </div>

          <div v-if="selected.requirements" class="mb-6">
            <h3 class="font-semibold mb-2">{{ t('careers.reqLabel') }}</h3>
            <p class="text-muted-foreground text-sm whitespace-pre-line">{{ selected.requirements }}</p>
          </div>

          <div class="flex gap-3">
            <Button
              v-if="selected.type === 'link' && selected.externalLink"
              class="flex-1 gap-2"
              as-child
            >
              <a :href="selected.externalLink" target="_blank" rel="noopener noreferrer">
                {{ t('careers.applyExternal') }}
                <ExternalLink class="size-4" />
              </a>
            </Button>
            <Button
              v-else
              class="flex-1"
              @click="router.push('/contact')"
            >
              {{ t('careers.applyContact') }}
            </Button>
            <Button variant="outline" @click="selected = null">{{ t('careers.close') }}</Button>
          </div>
        </div>
      </div>
    </Teleport>

    <footer class="border-t py-8 text-center text-sm text-muted-foreground">
      <div class="container">
        © 2025 M-HUB — Full Stack IT Company · Kinshasa, RDC
        <span class="mx-3">·</span>
        <a href="/" class="hover:text-primary">{{ t('nav.backHome') }}</a>
      </div>
    </footer>
  </div>
</template>
