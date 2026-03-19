<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Zap, ArrowLeft, Search, RefreshCw, Store, Building2, Loader2, AlertCircle, CheckCircle2 } from "lucide-vue-next";
import api from "@/services/api";

const router = useRouter();
const imgBaseUrl = (import.meta.env.VITE_API_URL as string).replace('/api/v1', '');

const step = ref<1 | 2 | 3>(1);
const query = ref("");
const loading = ref(false);
const error = ref("");

interface CommerceResult {
  commerceId: number;
  commercename: string;
  commerceemail: string;
  type: "store" | "organisation";
  imageUrl: string | null;
  isActive: boolean;
  subscription: { status: string; renewToken: string; expiresAt: string | null } | null;
}

const results = ref<CommerceResult[]>([]);
const selected = ref<CommerceResult | null>(null);

const confirmEmail = ref("");
const confirmName = ref("");
const confirmError = ref("");

const search = async () => {
  if (!query.value.trim()) {
    error.value = "Veuillez entrer le nom de votre commerce.";
    return;
  }
  error.value = "";
  loading.value = true;
  try {
    const { data } = await api.get(`/public/commerces/search?q=${encodeURIComponent(query.value)}`);
    results.value = data.data || [];
    if (results.value.length === 0) {
      error.value = `Aucun commerce trouvé pour "${query.value}". Vérifiez l'orthographe ou essayez avec l'email.`;
    } else {
      step.value = 2;
    }
  } catch (e: any) {
    error.value = e?.response?.data?.message || "Erreur de recherche. Vérifiez votre connexion.";
  } finally {
    loading.value = false;
  }
};

const selectCommerce = (c: CommerceResult) => {
  selected.value = c;
  confirmEmail.value = "";
  confirmName.value = "";
  confirmError.value = "";
  step.value = 3;
};

const confirm = () => {
  confirmError.value = "";
  if (!confirmEmail.value.trim() || !confirmName.value.trim()) {
    confirmError.value = "Veuillez remplir les deux champs.";
    return;
  }
  const emailMatch = confirmEmail.value.trim().toLowerCase() === selected.value!.commerceemail.toLowerCase();
  const nameMatch = confirmName.value.trim().toLowerCase() === selected.value!.commercename.toLowerCase();
  if (!emailMatch || !nameMatch) {
    confirmError.value = "Les informations ne correspondent pas à ce commerce. Vérifiez l'email et le nom exacts.";
    return;
  }
  if (!selected.value?.subscription?.renewToken) {
    confirmError.value = "Aucun lien de renouvellement disponible pour ce commerce. Contactez M-HUB.";
    return;
  }
  router.push(`/abonnement/${selected.value.subscription.renewToken}`);
};

const statusLabel = (status: string) => {
  const map: Record<string, string> = { active: "Actif", inactive: "Inactif", pending: "En attente", expired: "Expiré" };
  return map[status] || status;
};

const statusVariant = (status: string) => {
  if (status === "active") return "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
  if (status === "pending") return "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30";
  if (status === "expired") return "bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/30";
  return "bg-muted text-muted-foreground";
};
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
          <span class="text-transparent bg-gradient-to-r from-primary to-[#0099BB] bg-clip-text font-extrabold text-xl">
            M-HUB
          </span>
        </a>
        <Button variant="ghost" @click="router.push('/')" class="gap-2">
          <ArrowLeft class="size-4" />
          Retour
        </Button>
      </div>
    </header>

    <main class="flex-1 container py-12 max-w-2xl mx-auto">
      <!-- Title -->
      <div class="text-center mb-10">
        <div class="flex justify-center mb-4">
          <div class="bg-primary/10 p-4 rounded-full">
            <RefreshCw class="size-10 text-primary" />
          </div>
        </div>
        <h1 class="text-3xl font-bold mb-2">Renouveler mon abonnement M-STORE</h1>
        <p class="text-muted-foreground">
          Recherchez votre commerce pour accéder à votre lien de renouvellement.
        </p>
      </div>

      <!-- Steps indicator -->
      <div class="flex items-center justify-center gap-3 mb-10">
        <div v-for="n in 3" :key="n" class="flex items-center gap-3">
          <div :class="['flex items-center justify-center size-9 rounded-full font-bold text-sm border-2 transition-colors',
            step > n ? 'bg-primary text-primary-foreground border-primary' :
            step === n ? 'bg-primary text-primary-foreground border-primary' :
            'border-muted-foreground text-muted-foreground']">
            <CheckCircle2 v-if="step > n" class="size-4" />
            <span v-else>{{ n }}</span>
          </div>
          <div v-if="n < 3" :class="['h-0.5 w-12 transition-colors', step > n ? 'bg-primary' : 'bg-muted']" />
        </div>
      </div>

      <!-- STEP 1: Search -->
      <div v-if="step === 1" class="space-y-6">
        <div class="text-center mb-6">
          <h2 class="text-xl font-semibold mb-1">Rechercher votre commerce</h2>
          <p class="text-sm text-muted-foreground">Entrez le nom ou l'email de votre commerce</p>
        </div>
        <div class="flex gap-3">
          <div class="relative flex-1">
            <Search class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              v-model="query"
              placeholder="Nom ou email de votre commerce..."
              class="pl-9"
              @keyup.enter="search"
            />
          </div>
          <Button @click="search" :disabled="loading" class="px-6 gap-2">
            <Loader2 v-if="loading" class="size-4 animate-spin" />
            <Search v-else class="size-4" />
            Rechercher
          </Button>
        </div>
        <div v-if="error" class="flex items-center gap-2 text-destructive p-3 bg-destructive/10 rounded-lg">
          <AlertCircle class="size-4 flex-shrink-0" />
          <span class="text-sm">{{ error }}</span>
        </div>
        <div class="text-center pt-4 border-t">
          <p class="text-sm text-muted-foreground mb-3">Pas encore client M-STORE ?</p>
          <Button @click="router.push('/creer-commerce')" variant="outline" class="gap-2">
            <Store class="size-4" />
            Créer mon commerce gratuitement
          </Button>
        </div>
      </div>

      <!-- STEP 2: Select commerce -->
      <div v-else-if="step === 2" class="space-y-4">
        <div class="flex items-center justify-between mb-2">
          <div>
            <h2 class="text-xl font-semibold">Sélectionnez votre commerce</h2>
            <p class="text-sm text-muted-foreground">{{ results.length }} résultat{{ results.length > 1 ? 's' : '' }} pour "{{ query }}"</p>
          </div>
          <Button variant="ghost" size="sm" @click="step = 1; error = ''" class="gap-1">
            <ArrowLeft class="size-4" />
            Modifier
          </Button>
        </div>
        <Card
          v-for="c in results"
          :key="c.commerceId"
          class="hover:border-primary/50 cursor-pointer transition-colors"
          @click="selectCommerce(c)"
        >
          <CardContent class="p-5">
            <div class="flex items-center justify-between gap-4">
              <div class="flex items-center gap-4">
                <div class="size-12 rounded-xl bg-muted flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img
                    v-if="c.imageUrl"
                    :src="`${imgBaseUrl}${c.imageUrl}`"
                    :alt="c.commercename"
                    class="w-full h-full object-cover"
                    @error="($event.target as HTMLImageElement).style.display = 'none'"
                  />
                  <component :is="c.type === 'store' ? Store : Building2" class="size-6 text-muted-foreground" v-else />
                </div>
                <div>
                  <h3 class="font-bold">{{ c.commercename }}</h3>
                  <p class="text-sm text-muted-foreground">{{ c.commerceemail }}</p>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="text-xs text-muted-foreground">{{ c.type === 'store' ? 'Magasin' : 'Organisation' }}</span>
                    <span class="text-muted-foreground">·</span>
                    <span
                      v-if="c.subscription"
                      :class="['text-xs px-2 py-0.5 rounded-full border font-medium', statusVariant(c.subscription.status)]"
                    >
                      {{ statusLabel(c.subscription.status) }}
                    </span>
                    <span v-else class="text-xs text-muted-foreground">Pas d'abonnement</span>
                  </div>
                </div>
              </div>
              <Button size="sm" variant="outline" class="gap-1 flex-shrink-0">
                Sélectionner
                <ArrowLeft class="size-3.5 rotate-180" />
              </Button>
            </div>
          </CardContent>
        </Card>
        <p class="text-center text-sm text-muted-foreground pt-2">
          Votre commerce n'apparaît pas ?
          <button @click="step = 1; error = ''" class="text-primary underline underline-offset-2">Relancer la recherche</button>
        </p>
      </div>

      <!-- STEP 3: Confirm identity -->
      <div v-else-if="step === 3 && selected" class="space-y-6">
        <div class="flex items-center justify-between mb-2">
          <div>
            <h2 class="text-xl font-semibold">Confirmer votre identité</h2>
            <p class="text-sm text-muted-foreground">Vérifiez que vous êtes bien propriétaire de ce commerce</p>
          </div>
          <Button variant="ghost" size="sm" @click="step = 2" class="gap-1">
            <ArrowLeft class="size-4" />
            Retour
          </Button>
        </div>

        <!-- Selected commerce recap -->
        <Card class="border-primary/20 bg-primary/5">
          <CardContent class="p-4">
            <div class="flex items-center gap-3">
              <div class="size-10 rounded-xl bg-muted flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  v-if="selected.imageUrl"
                  :src="`${imgBaseUrl}${selected.imageUrl}`"
                  :alt="selected.commercename"
                  class="w-full h-full object-cover"
                  @error="($event.target as HTMLImageElement).style.display = 'none'"
                />
                <component :is="selected.type === 'store' ? Store : Building2" class="size-5 text-primary" v-else />
              </div>
              <div>
                <p class="font-bold text-sm">{{ selected.commercename }}</p>
                <p class="text-xs text-muted-foreground">{{ selected.commerceemail }}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Confirmation form -->
        <div class="space-y-4">
          <p class="text-sm text-muted-foreground">
            Pour confirmer que vous êtes bien le propriétaire, entrez exactement le nom et l'email associés à ce commerce.
          </p>
          <div class="space-y-1.5">
            <label class="text-sm font-medium">Nom exact du commerce <span class="text-destructive">*</span></label>
            <Input v-model="confirmName" placeholder="Entrez le nom exact de votre commerce" />
          </div>
          <div class="space-y-1.5">
            <label class="text-sm font-medium">Email du commerce <span class="text-destructive">*</span></label>
            <Input v-model="confirmEmail" type="email" placeholder="Email associé à votre commerce" />
          </div>
          <Alert v-if="confirmError" variant="destructive">
            <AlertCircle class="size-4" />
            <AlertDescription>{{ confirmError }}</AlertDescription>
          </Alert>
          <Button @click="confirm" class="w-full font-bold gap-2">
            <RefreshCw class="size-4" />
            Accéder à mon renouvellement
          </Button>
        </div>
      </div>
    </main>
  </div>
</template>
