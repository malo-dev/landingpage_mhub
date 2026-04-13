<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Zap, ArrowLeft, CheckCircle2, AlertCircle, Loader2,
  Clock, XCircle, RefreshCw,
} from "lucide-vue-next";

const route = useRoute();
const router = useRouter();
const token = route.params.token as string;
const BASE = import.meta.env.VITE_API_URL as string;
const imgBaseUrl = (import.meta.env.VITE_API_URL as string).replace('/api/v1', '');
const mstoreUrl = import.meta.env.VITE_MSTORE_URL as string;

interface CommerceInfo {
  commerceId: number;
  commercename: string;
  commerceemail: string;
  imageUrl: string | null;
}

const commerceInfo = ref<CommerceInfo | null>(null);
const subStatus = ref("");
const expiresAt = ref<string | null>(null);
const pageLoading = ref(true);
const pageError = ref("");

const amount = ref("");
const clientEmail = ref("");
const formLoading = ref(false);
const formError = ref("");
const formSuccess = ref(false);

onMounted(async () => {
  try {
    const { data } = await axios.get(`${BASE}/subscriptions/public/${token}`);
    commerceInfo.value = data.data.commerce;
    subStatus.value = data.data.status;
    expiresAt.value = data.data.expiresAt;
    clientEmail.value = data.data.commerce?.commerceemail || "";
  } catch (e: any) {
    pageError.value = e?.response?.data?.message || "Lien invalide ou expiré.";
  } finally {
    pageLoading.value = false;
  }
});

const handleRenew = async () => {
  formError.value = "";
  if (!amount.value || !clientEmail.value) {
    formError.value = "Veuillez renseigner le montant et votre email.";
    return;
  }
  formLoading.value = true;
  try {
    await axios.post(`${BASE}/subscriptions/public/${token}/renew`, {
      amount: Number(amount.value),
      clientEmail: clientEmail.value,
    });
    formSuccess.value = true;
    subStatus.value = "pending";
  } catch (e: any) {
    formError.value = e?.response?.data?.message || "Erreur lors de la demande.";
  } finally {
    formLoading.value = false;
  }
};

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
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
            M-NETHUB
          </span>
        </a>
        <Button variant="ghost" @click="router.push('/reabonnement')" class="gap-2">
          <ArrowLeft class="size-4" />
          Retour
        </Button>
      </div>
    </header>

    <main class="flex-1 container py-12 max-w-lg mx-auto">
      <!-- Loading -->
      <div v-if="pageLoading" class="text-center py-20">
        <Loader2 class="size-10 animate-spin text-primary mx-auto mb-4" />
        <p class="text-muted-foreground">Chargement de votre abonnement...</p>
      </div>

      <!-- Page Error -->
      <div v-else-if="pageError" class="text-center py-20 space-y-4">
        <XCircle class="size-16 text-destructive mx-auto" />
        <h2 class="text-2xl font-bold">Lien invalide</h2>
        <p class="text-muted-foreground">{{ pageError }}</p>
        <Button @click="router.push('/reabonnement')">Rechercher mon commerce</Button>
      </div>

      <!-- Content -->
      <div v-else class="space-y-6">
        <!-- Commerce info card -->
        <Card class="border-primary/20">
          <CardContent class="p-6">
            <div class="flex items-center gap-4">
              <div class="size-14 rounded-xl bg-muted flex items-center justify-center overflow-hidden">
                <img
                  v-if="commerceInfo?.imageUrl"
                  :src="`${imgBaseUrl}${commerceInfo.imageUrl}`"
                  class="w-full h-full object-cover"
                />
                <Zap v-else class="size-7 text-primary" />
              </div>
              <div>
                <h2 class="text-2xl font-bold">{{ commerceInfo?.commercename }}</h2>
                <p class="text-sm text-muted-foreground">{{ commerceInfo?.commerceemail }}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Status: ACTIVE -->
        <div v-if="subStatus === 'active'" class="text-center space-y-4">
          <div class="flex justify-center">
            <div class="bg-emerald-500/10 p-5 rounded-full">
              <CheckCircle2 class="size-14 text-emerald-500" />
            </div>
          </div>
          <h3 class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Abonnement actif</h3>
          <p class="text-muted-foreground">
            Votre abonnement M-STORE est actif
            <span v-if="expiresAt"> jusqu'au <strong>{{ formatDate(expiresAt) }}</strong></span>.
          </p>
          <p class="text-sm text-muted-foreground">Vous pouvez dès maintenant accéder à votre espace M-STORE.</p>
          <Button as-child class="w-full">
            <a :href="mstoreUrl" target="_blank">Accéder à M-STORE</a>
          </Button>
        </div>

        <!-- Status: PENDING -->
        <div v-else-if="subStatus === 'pending'" class="text-center space-y-4">
          <div class="flex justify-center">
            <div class="bg-amber-500/10 p-5 rounded-full">
              <Clock class="size-14 text-amber-500" />
            </div>
          </div>
          <h3 class="text-2xl font-bold text-amber-600 dark:text-amber-400">Paiement en attente</h3>
          <p class="text-muted-foreground">
            Votre demande de renouvellement a bien été reçue. Notre équipe va confirmer votre paiement
            et activer votre abonnement sous <strong>24 à 48 heures</strong>.
          </p>
        </div>

        <!-- Status: INACTIVE or EXPIRED -->
        <div v-else>
          <h3 class="text-2xl font-bold mb-2">
            {{ subStatus === 'expired' ? 'Abonnement expiré' : 'Activer votre abonnement' }}
          </h3>
          <p class="text-muted-foreground mb-6">
            Remplissez le formulaire ci-dessous pour demander votre activation à
            <strong class="text-primary">$2 / mois</strong>.
            Notre équipe vous contactera pour confirmer le paiement.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Demande de renouvellement</CardTitle>
              <CardDescription>Nous vous contacterons pour confirmer le paiement</CardDescription>
            </CardHeader>
            <CardContent class="space-y-4">
              <div v-if="formSuccess">
                <Alert class="border-primary/30 bg-primary/5">
                  <CheckCircle2 class="size-4 text-primary" />
                  <AlertTitle class="text-primary">Demande envoyée !</AlertTitle>
                  <AlertDescription>
                    Notre équipe a été notifiée et activera votre abonnement sous 24-48h.
                  </AlertDescription>
                </Alert>
              </div>

              <template v-else>
                <div class="space-y-1.5">
                  <Label>Montant payé (USD) <span class="text-destructive">*</span></Label>
                  <Input
                    v-model="amount"
                    type="number"
                    min="2"
                    placeholder="Ex : 2"
                  />
                  <p class="text-xs text-muted-foreground">Abonnement M-STORE : $2 / mois</p>
                </div>

                <div class="space-y-1.5">
                  <Label>Votre email <span class="text-destructive">*</span></Label>
                  <Input v-model="clientEmail" type="email" placeholder="votre@email.com" />
                </div>

                <Alert v-if="formError" variant="destructive">
                  <AlertCircle class="size-4" />
                  <AlertTitle>Erreur</AlertTitle>
                  <AlertDescription>{{ formError }}</AlertDescription>
                </Alert>

                <Button @click="handleRenew" class="w-full font-bold" :disabled="formLoading">
                  <Loader2 v-if="formLoading" class="size-4 mr-2 animate-spin" />
                  <RefreshCw v-else class="size-4 mr-2" />
                  {{ formLoading ? 'Envoi en cours...' : 'Demander le renouvellement' }}
                </Button>
              </template>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  </div>
</template>
