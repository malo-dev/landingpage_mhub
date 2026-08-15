<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  ArrowLeft, ArrowRight, CheckCircle2,
  AlertCircle, Loader2, Store, Building2,
} from "lucide-vue-next";
import LogoMnethub from "@/components/LogoMnethub.vue";
import api from "@/services/api";

const router = useRouter();
const step = ref(1);
const loading = ref(false);
const error = ref("");
const success = ref(false);

const form = reactive({
  commercename: "",
  commerceemail: "",
  type: "store" as "store" | "organisation",
  phone: "",
  address: "",
  about: "",
});

const goBack = () => {
  if (step.value === 1) router.push("/");
  else step.value = 1;
};

const nextStep = () => {
  error.value = "";
  if (!form.commercename.trim()) { error.value = "Le nom de l'entreprise est requis."; return; }
  if (!form.commerceemail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.commerceemail)) {
    error.value = "Un email valide est requis.";
    return;
  }
  step.value = 2;
};

const handleSubmit = async () => {
  error.value = "";
  loading.value = true;
  try {
    await api.post("/public/register-commerce", {
      commercename: form.commercename,
      commerceemail: form.commerceemail,
      type: form.type,
      phone: form.phone || undefined,
      address: form.address || undefined,
      about: form.about || undefined,
    });
    success.value = true;
  } catch (e: any) {
    const msg = e?.response?.data?.message || "";
    if (msg === "COMMERCE_EMAIL_ALREADY_EXISTS") {
      error.value = "Cet email est déjà associé à une entreprise existante.";
    } else {
      error.value = msg || "Une erreur est survenue. Veuillez réessayer.";
    }
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="relative min-h-screen flex flex-col overflow-hidden">
    <!-- Fond tech, cohérent avec le reste du site -->
    <div class="grid-bg absolute inset-0 -z-10 opacity-60" />
    <div class="absolute -top-32 left-1/4 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
    <div class="absolute -bottom-32 right-1/4 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

    <!-- Header -->
    <header class="glass-panel sticky top-4 z-40 mx-auto flex w-[92%] max-w-screen-xl items-center justify-between rounded-2xl px-4 py-2.5 lg:w-[90%]">
      <a href="/" class="flex items-center">
        <LogoMnethub variant="horizontal" class="text-foreground" icon-class="h-8 w-8" text-class="text-base" />
      </a>
      <Button variant="ghost" @click="goBack" class="gap-2">
        <ArrowLeft class="size-4" />
        Retour
      </Button>
    </header>

    <!-- Main -->
    <main class="flex-1 container py-12 max-w-xl mx-auto">
      <!-- Success State -->
      <div v-if="success" class="text-center space-y-6">
        <div class="flex justify-center">
          <div class="bg-primary/10 rounded-full p-6">
            <CheckCircle2 class="size-16 text-primary" />
          </div>
        </div>
        <h1 class="text-3xl font-bold">Entreprise enregistrée !</h1>
        <p class="text-muted-foreground text-lg">
          Votre entreprise <strong class="text-foreground">{{ form.commercename }}</strong> a été enregistrée avec succès.
        </p>
        <div class="grid gap-4 text-left">
          <div class="glass-panel tech-glow flex items-start gap-3 p-4 rounded-xl">
            <CheckCircle2 class="size-5 text-emerald-500 flex-shrink-0 mt-0.5" />
            <div>
              <p class="font-semibold">Email de confirmation envoyé</p>
              <p class="text-sm text-muted-foreground">Vérifiez votre boîte à {{ form.commerceemail }}</p>
            </div>
          </div>
          <div class="glass-panel tech-glow flex items-start gap-3 p-4 rounded-xl">
            <div class="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-amber-500 text-xs">⏳</span>
            </div>
            <div>
              <p class="font-semibold">Validation en cours</p>
              <p class="text-sm text-muted-foreground">Notre équipe examine votre demande sous <strong>48 heures</strong></p>
            </div>
          </div>
          <div class="glass-panel tech-glow flex items-start gap-3 p-4 rounded-xl">
            <div class="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-primary text-xs">💳</span>
            </div>
            <div>
              <p class="font-semibold">Lien d'abonnement par email</p>
              <p class="text-sm text-muted-foreground">Après validation, activez M-STORE à seulement <strong class="text-primary">$2/mois</strong></p>
            </div>
          </div>
        </div>
        <Button @click="router.push('/')" class="w-full">Retour à l'accueil</Button>
      </div>

      <!-- Form State -->
      <div v-else>
        <div class="text-center mb-8">
          <div class="section-eyebrow justify-center mb-3">Inscription gratuite</div>
          <h1 class="text-3xl font-bold mb-2">Créer votre entreprise</h1>
          <p class="text-muted-foreground">
            Enregistrez votre entreprise sur M-STORE et accédez à 100+ modules de gestion.
          </p>
        </div>

        <!-- Steps indicator -->
        <div class="flex items-center justify-center gap-3 mb-8">
          <div :class="['flex items-center justify-center size-9 rounded-full font-bold text-sm border-2 transition-colors',
            step >= 1 ? 'bg-primary text-primary-foreground border-primary' : 'border-muted-foreground text-muted-foreground']">
            1
          </div>
          <div :class="['h-0.5 w-16 transition-colors', step >= 2 ? 'bg-primary' : 'bg-muted']" />
          <div :class="['flex items-center justify-center size-9 rounded-full font-bold text-sm border-2 transition-colors',
            step >= 2 ? 'bg-primary text-primary-foreground border-primary' : 'border-muted-foreground text-muted-foreground']">
            2
          </div>
        </div>

        <!-- Step 1 -->
        <Card v-if="step === 1" class="tech-glow">
          <CardHeader>
            <CardTitle>Informations principales</CardTitle>
            <CardDescription>Nom, email et type de votre commerce</CardDescription>
          </CardHeader>
          <CardContent class="space-y-5">
            <div class="space-y-1.5">
              <Label>Nom de l'entreprise <span class="text-destructive">*</span></Label>
              <Input v-model="form.commercename" placeholder="Ex : Boutique Chez Marie" />
            </div>
            <div class="space-y-1.5">
              <Label>Email de l'entreprise <span class="text-destructive">*</span></Label>
              <Input v-model="form.commerceemail" type="email" placeholder="contact@monentreprise.com" />
            </div>
            <div class="space-y-2">
              <Label>Type d'entreprise</Label>
              <div class="grid grid-cols-2 gap-3">
                <button
                  @click="form.type = 'store'"
                  :class="['p-4 rounded-xl border-2 text-left transition-all',
                    form.type === 'store' ? 'border-primary bg-primary/5' : 'border-muted hover:border-muted-foreground']"
                >
                  <Store class="size-6 mb-2" :class="form.type === 'store' ? 'text-primary' : 'text-muted-foreground'" />
                  <p class="font-semibold text-sm">Entreprise / PME</p>
                  <p class="text-xs text-muted-foreground mt-0.5">Commerce, boutique, société</p>
                </button>
                <button
                  @click="form.type = 'organisation'"
                  :class="['p-4 rounded-xl border-2 text-left transition-all',
                    form.type === 'organisation' ? 'border-primary bg-primary/5' : 'border-muted hover:border-muted-foreground']"
                >
                  <Building2 class="size-6 mb-2" :class="form.type === 'organisation' ? 'text-primary' : 'text-muted-foreground'" />
                  <p class="font-semibold text-sm">Organisation</p>
                  <p class="text-xs text-muted-foreground mt-0.5">ONG, institution, association</p>
                </button>
              </div>
            </div>
            <Alert v-if="error" variant="destructive">
              <AlertCircle class="size-4" />
              <AlertTitle>Erreur</AlertTitle>
              <AlertDescription>{{ error }}</AlertDescription>
            </Alert>
            <Button @click="nextStep" class="w-full font-bold">
              Continuer
              <ArrowRight class="size-4 ml-2" />
            </Button>
          </CardContent>
        </Card>

        <!-- Step 2 -->
        <Card v-if="step === 2" class="tech-glow">
          <CardHeader>
            <CardTitle>Informations complémentaires</CardTitle>
            <CardDescription>Optionnel — vous pourrez compléter plus tard</CardDescription>
          </CardHeader>
          <CardContent class="space-y-5">
            <div class="space-y-1.5">
              <Label>Téléphone</Label>
              <Input v-model="form.phone" placeholder="+243 XXX XXX XXX" />
            </div>
            <div class="space-y-1.5">
              <Label>Adresse</Label>
              <Input v-model="form.address" placeholder="Ex : Avenue X, Kinshasa" />
            </div>
            <div class="space-y-1.5">
              <Label>À propos de votre entreprise</Label>
              <Textarea v-model="form.about" placeholder="Décrivez brièvement votre activité..." :rows="4" />
            </div>
            <Alert v-if="error" variant="destructive">
              <AlertCircle class="size-4" />
              <AlertTitle>Erreur</AlertTitle>
              <AlertDescription>{{ error }}</AlertDescription>
            </Alert>
            <div class="flex gap-3">
              <Button variant="outline" @click="step = 1" class="flex-1">
                <ArrowLeft class="size-4 mr-2" />
                Retour
              </Button>
              <Button @click="handleSubmit" class="flex-1 font-bold" :disabled="loading">
                <Loader2 v-if="loading" class="size-4 mr-2 animate-spin" />
                {{ loading ? 'Création...' : 'Créer mon entreprise' }}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  </div>
</template>
