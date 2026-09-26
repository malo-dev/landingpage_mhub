<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, Loader2, Store, Building2,
  Clock, CreditCard, MailCheck, LayoutDashboard, Boxes, ShieldCheck, Pencil,
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

// Tarifs M-STORE (mensuels, en USD) — affichés seulement, la facturation se règle après validation.
const price = computed(() => (form.type === "store" ? 5 : 15));

const perks = [
  { icon: Boxes, text: "100+ modules : stock, ventes, finances, RH, clients" },
  { icon: LayoutDashboard, text: "Tableau de bord en temps réel et boutique en ligne publique" },
  { icon: ShieldCheck, text: "Vos données protégées, avec rôles et permissions par équipe" },
];

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
  <div class="grid min-h-screen lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
    <!-- Panneau de marque (desktop) -->
    <aside
      class="relative hidden flex-col justify-between overflow-hidden p-12 text-white lg:flex"
      style="background: linear-gradient(150deg, #262b63 0%, #4f5bd5 60%, #6f78e6 100%)"
    >
      <div class="pointer-events-none absolute -right-24 -top-24 size-[460px] rounded-full" style="background: radial-gradient(circle, rgba(217, 181, 102, 0.42), transparent 65%)" />
      <div class="pointer-events-none absolute inset-0 opacity-[0.12]" style="background-image: linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px); background-size: 56px 56px; mask-image: radial-gradient(ellipse 80% 70% at 30% 30%, #000, transparent 80%); -webkit-mask-image: radial-gradient(ellipse 80% 70% at 30% 30%, #000, transparent 80%)" />

      <a href="/" class="relative inline-flex w-fit" aria-label="M-NETHUB">
        <LogoMnethub variant="horizontal" class="text-white" icon-class="h-9 w-9" text-class="text-xl" />
      </a>

      <div class="relative max-w-md">
        <span class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[12.5px] font-medium backdrop-blur">
          <span class="size-[7px] rounded-full bg-[#d9b566]" /> M-STORE · Inscription gratuite
        </span>
        <h2 class="mt-5 font-display text-[2.4rem] font-extrabold leading-[1.08] tracking-tight">
          Pilotez tout votre commerce depuis un seul endroit.
        </h2>
        <ul class="mt-8 space-y-4">
          <li v-for="p in perks" :key="p.text" class="flex items-start gap-3.5 text-[15px] text-white/85">
            <span class="grid size-9 flex-shrink-0 place-items-center rounded-xl bg-white/15"><component :is="p.icon" class="size-[18px]" /></span>
            <span class="pt-1.5 leading-snug">{{ p.text }}</span>
          </li>
        </ul>
      </div>

      <!-- Tarif selon le type choisi -->
      <div class="relative rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
        <div class="text-[12px] font-semibold uppercase tracking-wider text-white/70">
          Abonnement après validation · {{ form.type === 'store' ? 'Commerce / PME' : 'ONG / Organisation' }}
        </div>
        <div class="mt-1 flex items-baseline gap-1.5">
          <span class="font-display text-4xl font-extrabold tracking-tight">${{ price }}</span>
          <span class="text-white/70">/ mois</span>
        </div>
        <p class="mt-1 text-[13px] text-white/70">Aucun paiement à l'inscription : vous recevez un lien d'abonnement par email.</p>
      </div>
    </aside>

    <!-- Formulaire -->
    <div class="relative flex flex-col overflow-x-clip">
      <div class="pointer-events-none absolute inset-0 -z-10">
        <div class="hero-grid absolute inset-0 opacity-50" />
        <div class="absolute -right-24 top-0 size-[420px] rounded-full bg-primary/15 blur-[70px]" />
      </div>

      <header class="flex h-[68px] items-center justify-between px-6 sm:px-10">
        <a href="/" class="lg:invisible" aria-label="M-NETHUB">
          <LogoMnethub variant="horizontal" class="text-foreground" icon-class="h-8 w-8" text-class="text-[17px]" />
        </a>
        <button
          class="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-card px-4 text-sm font-semibold transition-colors hover:bg-muted"
          @click="goBack"
        >
          <ArrowLeft class="size-4" /> {{ success ? 'Accueil' : 'Retour' }}
        </button>
      </header>

      <main class="flex flex-1 items-center justify-center px-6 pb-12 pt-4 sm:px-10">
        <div class="w-full max-w-[520px]">
          <!-- Succès -->
          <div v-if="success" class="text-center">
            <div class="mx-auto grid size-20 place-items-center rounded-full bg-emerald-500/10 text-emerald-500 ring-8 ring-emerald-500/10">
              <CheckCircle2 class="size-10" />
            </div>
            <h1 class="mt-6 text-3xl font-extrabold">Entreprise enregistrée !</h1>
            <p class="mt-3 text-muted-foreground">
              <strong class="text-foreground">{{ form.commercename }}</strong> a bien été enregistrée sur M-STORE.
            </p>

            <ol class="mt-8 space-y-3 text-left">
              <li class="surface-card !transform-none flex items-start gap-3.5 p-4">
                <span class="grid size-10 flex-shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><MailCheck class="size-5" /></span>
                <div>
                  <p class="font-semibold">Email de confirmation envoyé</p>
                  <p class="text-sm text-muted-foreground">Vérifiez votre boîte à {{ form.commerceemail }}</p>
                </div>
              </li>
              <li class="surface-card !transform-none flex items-start gap-3.5 p-4">
                <span class="grid size-10 flex-shrink-0 place-items-center rounded-xl bg-amber-500/10 text-amber-500"><Clock class="size-5" /></span>
                <div>
                  <p class="font-semibold">Validation en cours</p>
                  <p class="text-sm text-muted-foreground">Notre équipe examine votre demande sous <strong>48 heures</strong>.</p>
                </div>
              </li>
              <li class="surface-card !transform-none flex items-start gap-3.5 p-4">
                <span class="grid size-10 flex-shrink-0 place-items-center rounded-xl bg-gold/15 text-gold"><CreditCard class="size-5" /></span>
                <div>
                  <p class="font-semibold">Lien d'abonnement par email</p>
                  <p class="text-sm text-muted-foreground">
                    Après validation, activez M-STORE à <strong class="text-primary">${{ price }}/mois</strong>
                    ({{ form.type === 'store' ? 'commerce / PME' : 'ONG' }}).
                  </p>
                </div>
              </li>
            </ol>

            <button
              class="mt-8 inline-flex h-12 w-full items-center justify-center rounded-xl bg-primary text-[15px] font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
              @click="router.push('/')"
            >
              Retour à l'accueil
            </button>
          </div>

          <!-- Formulaire -->
          <div v-else>
            <span class="kicker">Inscription gratuite</span>
            <h1 class="font-display text-[clamp(1.8rem,3.4vw,2.3rem)] font-extrabold leading-tight tracking-tight">Créer votre entreprise</h1>
            <p class="mt-2 text-muted-foreground">Enregistrez votre entreprise sur M-STORE et accédez à 100+ modules de gestion.</p>

            <!-- Étapes -->
            <ol class="mt-7 flex items-center gap-3 text-sm font-semibold">
              <li class="flex items-center gap-2.5">
                <span class="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground">
                  <CheckCircle2 v-if="step > 1" class="size-[18px]" /><template v-else>1</template>
                </span>
                <span>Informations</span>
              </li>
              <span class="h-0.5 w-10 flex-1 rounded-full" :class="step >= 2 ? 'bg-primary' : 'bg-border'" />
              <li class="flex items-center gap-2.5" :class="step >= 2 ? '' : 'text-muted-foreground'">
                <span class="grid size-8 place-items-center rounded-full" :class="step >= 2 ? 'bg-primary text-primary-foreground' : 'border-2 border-border bg-card'">2</span>
                <span>Compléments</span>
              </li>
            </ol>

            <div class="mt-6 rounded-[22px] border border-border bg-card p-6 shadow-xl shadow-foreground/5 sm:p-7">
              <!-- Étape 1 -->
              <form v-if="step === 1" class="space-y-5" @submit.prevent="nextStep">
                <div class="space-y-1.5">
                  <Label>Nom de l'entreprise <span class="text-destructive">*</span></Label>
                  <Input v-model="form.commercename" placeholder="Ex : Boutique Chez Marie" autocomplete="organization" />
                </div>
                <div class="space-y-1.5">
                  <Label>Email de l'entreprise <span class="text-destructive">*</span></Label>
                  <Input v-model="form.commerceemail" type="email" placeholder="contact@monentreprise.com" autocomplete="email" />
                </div>

                <div class="space-y-2">
                  <Label>Type d'entreprise</Label>
                  <div class="grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      class="relative rounded-2xl border-2 p-4 text-left transition-all"
                      :class="form.type === 'store' ? 'border-primary bg-primary/[0.06] shadow-sm' : 'border-border hover:border-foreground/30'"
                      :aria-pressed="form.type === 'store'"
                      @click="form.type = 'store'"
                    >
                      <CheckCircle2 v-if="form.type === 'store'" class="absolute right-3 top-3 size-5 text-primary" />
                      <span class="grid size-10 place-items-center rounded-xl" :class="form.type === 'store' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'"><Store class="size-5" /></span>
                      <p class="mt-3 text-sm font-bold">Entreprise / PME</p>
                      <p class="mt-0.5 text-xs text-muted-foreground">Commerce, boutique, société</p>
                      <p class="mt-2 text-sm font-bold text-primary">$5 <span class="font-medium text-muted-foreground">/ mois</span></p>
                    </button>
                    <button
                      type="button"
                      class="relative rounded-2xl border-2 p-4 text-left transition-all"
                      :class="form.type === 'organisation' ? 'border-primary bg-primary/[0.06] shadow-sm' : 'border-border hover:border-foreground/30'"
                      :aria-pressed="form.type === 'organisation'"
                      @click="form.type = 'organisation'"
                    >
                      <CheckCircle2 v-if="form.type === 'organisation'" class="absolute right-3 top-3 size-5 text-primary" />
                      <span class="grid size-10 place-items-center rounded-xl" :class="form.type === 'organisation' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'"><Building2 class="size-5" /></span>
                      <p class="mt-3 text-sm font-bold">Organisation</p>
                      <p class="mt-0.5 text-xs text-muted-foreground">ONG, institution, association</p>
                      <p class="mt-2 text-sm font-bold text-primary">$15 <span class="font-medium text-muted-foreground">/ mois</span></p>
                    </button>
                  </div>
                </div>

                <div v-if="error" class="flex items-start gap-2.5 rounded-xl bg-destructive/10 px-3.5 py-3 text-sm text-destructive" role="alert">
                  <AlertCircle class="mt-0.5 size-4 flex-shrink-0" /> {{ error }}
                </div>

                <button type="submit" class="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-[15px] font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90">
                  Continuer <ArrowRight class="size-4" />
                </button>
              </form>

              <!-- Étape 2 -->
              <form v-else class="space-y-5" @submit.prevent="handleSubmit">
                <div class="flex items-center gap-3 rounded-xl bg-muted px-4 py-3">
                  <span class="grid size-10 flex-shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <component :is="form.type === 'store' ? Store : Building2" class="size-5" />
                  </span>
                  <div class="min-w-0 flex-1">
                    <p class="truncate text-sm font-bold">{{ form.commercename }}</p>
                    <p class="truncate text-xs text-muted-foreground">{{ form.commerceemail }}</p>
                  </div>
                  <button type="button" class="grid size-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-card hover:text-foreground" aria-label="Modifier" @click="step = 1">
                    <Pencil class="size-4" />
                  </button>
                </div>

                <p class="text-sm text-muted-foreground">Optionnel — vous pourrez compléter ces informations plus tard.</p>

                <div class="space-y-1.5">
                  <Label>Téléphone</Label>
                  <Input v-model="form.phone" placeholder="+243 XXX XXX XXX" autocomplete="tel" />
                </div>
                <div class="space-y-1.5">
                  <Label>Adresse</Label>
                  <Input v-model="form.address" placeholder="Ex : Avenue X, Kinshasa" autocomplete="street-address" />
                </div>
                <div class="space-y-1.5">
                  <Label>À propos de votre entreprise</Label>
                  <Textarea v-model="form.about" placeholder="Décrivez brièvement votre activité..." :rows="4" />
                </div>

                <div v-if="error" class="flex items-start gap-2.5 rounded-xl bg-destructive/10 px-3.5 py-3 text-sm text-destructive" role="alert">
                  <AlertCircle class="mt-0.5 size-4 flex-shrink-0" /> {{ error }}
                </div>

                <div class="flex gap-3">
                  <button type="button" class="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-input bg-card text-[15px] font-semibold transition-colors hover:bg-muted" @click="step = 1">
                    <ArrowLeft class="size-4" /> Retour
                  </button>
                  <button type="submit" :disabled="loading" class="inline-flex h-12 flex-[1.4] items-center justify-center gap-2 rounded-xl bg-primary text-[15px] font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90 disabled:opacity-60 disabled:hover:translate-y-0">
                    <Loader2 v-if="loading" class="size-4 animate-spin" />
                    {{ loading ? 'Création...' : 'Créer mon entreprise' }}
                  </button>
                </div>
              </form>
            </div>

            <p class="mt-5 text-center text-xs text-muted-foreground">
              En créant votre entreprise, vous acceptez notre
              <a href="/politique-confidentialite" class="font-medium text-primary underline underline-offset-4">politique de confidentialité</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
