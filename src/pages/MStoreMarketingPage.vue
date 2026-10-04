<script setup lang="ts">
// Page marketing de l'application mobile M-STORE (URL marketing App Store / site web Play Store).
import { useRouter } from "vue-router";
import { useColorMode } from "@vueuse/core";
import LogoMnethub from "@/components/LogoMnethub.vue";
import {
  ArrowLeft, ArrowRight, Store, Building2, GraduationCap, WifiOff, ScanLine, Truck, Users, Wallet,
  Bell, Smartphone, Check, ChevronRight, Moon, Sun, QrCode, BarChart3, ShieldCheck,
} from "lucide-vue-next";

const router = useRouter();
const mode = useColorMode();
const toggleTheme = () => { mode.value = mode.value === "dark" ? "light" : "dark"; };

const features = [
  { icon: WifiOff, title: "Fonctionne hors connexion", text: "Vendez, encaissez, pointez : tout est enregistré sur le téléphone puis synchronisé dès le retour du réseau." },
  { icon: ScanLine, title: "Point de vente & scan", text: "Scannez les codes-barres, encaissez en espèces ou à crédit, suivez le stock en temps réel." },
  { icon: Users, title: "RH complètes", text: "Employés, pointage QR + GPS, congés, paie, recrutement, formations et documents signés." },
  { icon: Truck, title: "Logistique & chauffeurs", text: "Tournées, livraisons, suivi GPS du véhicule et espace dédié pour chaque chauffeur." },
  { icon: Wallet, title: "Finances", text: "Caisse, trésorerie, factures, comptabilité en partie double, budgets et rapports." },
  { icon: QrCode, title: "Événements & billets", text: "Billetterie, contrôle d'accès à la porte par QR code et présence en direct." },
  { icon: BarChart3, title: "Tableaux de bord", text: "Les chiffres clés de votre activité, à jour, où que vous soyez." },
  { icon: Bell, title: "Notifications", text: "Nouvelles commandes, messages et alertes de stock directement sur votre téléphone." },
];

const spaces = [
  { icon: Store, title: "Commerce / PME", points: ["Ventes, stock, clients et dettes", "Succursales et équipes", "Boutique en ligne M-Market"] },
  { icon: Building2, title: "ONG / Organisation", points: ["Projets, MEAL et bailleurs", "RH, missions et logistique", "Comptabilité et trésorerie"] },
  { icon: GraduationCap, title: "École / Académie", points: ["Admissions et fiches élèves", "Classes, enseignants, pédagogie", "Frais scolaires et encaissements"] },
];

const access = [
  "Propriétaires et équipes : connexion avec leur compte M-STORE",
  "Employés : pointage, congés, bulletins de paie",
  "Chauffeurs : tournées et livraisons",
  "Vendeurs particuliers : annonces et commandes",
  "Agents d'événement : scan des billets à la porte",
];
</script>

<template>
  <div class="ms relative min-h-screen overflow-x-clip">
    <div class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[820px]" aria-hidden="true">
      <div class="hero-grid absolute inset-0 opacity-50" />
      <div class="absolute -right-24 -top-24 size-[540px] rounded-full opacity-40 blur-[70px]" style="background: radial-gradient(circle, var(--ms-a), transparent 66%)" />
      <div class="absolute -left-32 top-40 size-[420px] rounded-full opacity-30 blur-[70px]" style="background: radial-gradient(circle, var(--ms-b), transparent 66%)" />
    </div>

    <header class="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div class="container flex h-[68px] items-center gap-4">
        <a href="/" class="flex items-center gap-3" aria-label="M-NETHUB">
          <LogoMnethub variant="horizontal" class="text-foreground" icon-class="h-8 w-8" text-class="text-[17px]" />
        </a>
        <ChevronRight class="hidden size-4 text-muted-foreground sm:block" />
        <span class="hidden items-center gap-2 text-sm font-bold sm:flex">
          <img src="/m-store-icon.png" alt="" class="size-7 rounded-lg" /> M-STORE
        </span>
        <nav class="ml-6 hidden items-center gap-0.5 md:flex">
          <a href="#fonctionnalites" class="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">Fonctionnalités</a>
          <a href="#espaces" class="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">Pour qui ?</a>
          <router-link to="/m-store/support" class="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">Support</router-link>
        </nav>
        <div class="ml-auto flex items-center gap-2">
          <button class="grid size-10 place-items-center rounded-xl border border-border bg-card transition-colors hover:bg-muted" aria-label="Thème" @click="toggleTheme">
            <Moon v-if="mode !== 'dark'" class="size-[18px]" /><Sun v-else class="size-[18px]" />
          </button>
          <button class="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-card px-4 text-sm font-semibold transition-colors hover:bg-muted" @click="router.back()">
            <ArrowLeft class="size-4" /> <span class="hidden sm:inline">Retour</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <section class="container grid items-center gap-14 pb-16 pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:pt-20">
      <div>
        <span class="anim-rise inline-flex items-center gap-2 rounded-full border border-border bg-card py-1.5 pl-3 pr-4 text-[12.5px] font-medium text-muted-foreground">
          <span class="size-[7px] rounded-full" style="background: var(--ms-a)" /> Application M-STORE — par M-NETHUB
        </span>
        <h1 class="anim-rise mt-5 text-[clamp(2.3rem,5.2vw,3.7rem)] font-extrabold leading-[1.05] tracking-[-0.03em]" style="animation-delay: 0.05s">
          Toute votre gestion,
          <span class="ms-gradient">dans votre poche.</span>
        </h1>
        <p class="anim-rise mt-6 max-w-[540px] text-[17px] leading-relaxed text-muted-foreground" style="animation-delay: 0.1s">
          Commerce, ONG ou école : pilotez ventes, stock, équipes, finances, logistique et scolarité depuis votre téléphone —
          même sans connexion internet.
        </p>
        <div class="anim-rise mt-8 flex flex-wrap items-center gap-3" style="animation-delay: 0.15s">
          <div v-for="s in ['App Store', 'Google Play']" :key="s" class="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-sm">
            <Smartphone class="size-6" />
            <div class="text-left leading-tight">
              <p class="text-[10px] uppercase tracking-wider text-muted-foreground">Bientôt disponible sur</p>
              <p class="text-[15px] font-bold">{{ s }}</p>
            </div>
          </div>
        </div>
        <p class="anim-rise mt-5 flex items-center gap-2 text-[13px] text-muted-foreground" style="animation-delay: 0.2s">
          <ShieldCheck class="size-4 text-emerald-500" /> Vos données sont cloisonnées par organisation et protégées par rôles et permissions.
        </p>
      </div>
      <div class="anim-rise mx-auto w-full max-w-[340px]" style="animation-delay: 0.15s" aria-hidden="true">
        <div class="rounded-[38px] border border-border bg-card p-3 shadow-2xl">
          <div class="mx-auto mb-3 h-1.5 w-16 rounded-full bg-border" />
          <div class="space-y-3 rounded-[26px] bg-background p-4">
            <div class="flex items-center gap-3">
              <img src="/m-store-icon.png" alt="" class="size-10 rounded-xl" />
              <div><p class="text-[11px] text-muted-foreground">Bonjour 👋</p><p class="text-[14px] font-bold">Boutique Horizon</p></div>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div v-for="k in [{ l: 'Ventes du jour', v: '1 240 $' }, { l: 'Commandes', v: '18' }, { l: 'Stock faible', v: '3' }, { l: 'Présents', v: '12/14' }]" :key="k.l" class="rounded-2xl border border-border bg-card p-3">
                <p class="text-[10.5px] text-muted-foreground">{{ k.l }}</p>
                <p class="text-[16px] font-extrabold" style="color: var(--ms-a)">{{ k.v }}</p>
              </div>
            </div>
            <div class="flex items-center gap-2 rounded-xl bg-amber-500/10 px-3 py-2 text-[11.5px] font-semibold text-amber-600">
              <WifiOff class="size-3.5" /> Hors connexion — 2 ventes seront synchronisées
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="fonctionnalites" class="section-pad border-y border-border bg-muted/60">
      <div class="container">
        <div class="mb-12 max-w-2xl">
          <span class="kicker" style="color: var(--ms-a)">Fonctionnalités</span>
          <h2 class="section-title">Plus de 100 modules, une seule app</h2>
          <p class="section-lead">Les mêmes données que la version web, avec un design pensé pour le mobile.</p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="f in features" :key="f.title" class="surface-card flex flex-col p-6">
            <span class="grid size-[42px] place-items-center rounded-xl" style="background: color-mix(in srgb, var(--ms-a) 14%, transparent); color: var(--ms-a)">
              <component :is="f.icon" class="size-5" />
            </span>
            <h3 class="mt-4 text-[16px] font-bold">{{ f.title }}</h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{{ f.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="espaces" class="section-pad">
      <div class="container">
        <div class="mb-12 max-w-2xl">
          <span class="kicker" style="color: var(--ms-a)">Pour qui ?</span>
          <h2 class="section-title">Un espace adapté à chaque structure</h2>
        </div>
        <div class="grid gap-5 md:grid-cols-3">
          <div v-for="a in spaces" :key="a.title" class="surface-card p-7">
            <span class="grid size-12 place-items-center rounded-2xl" style="background: color-mix(in srgb, var(--ms-a) 14%, transparent); color: var(--ms-a)">
              <component :is="a.icon" class="size-6" />
            </span>
            <h3 class="mt-5 text-xl font-extrabold">{{ a.title }}</h3>
            <ul class="mt-4 space-y-2.5">
              <li v-for="p in a.points" :key="p" class="flex items-start gap-2 text-[14px]"><Check class="mt-0.5 size-4 flex-shrink-0" style="color: var(--ms-a)" /> {{ p }}</li>
            </ul>
          </div>
        </div>
        <div class="surface-card mt-8 p-7">
          <h3 class="text-lg font-extrabold">Une seule connexion, chacun son espace</h3>
          <p class="mt-1 text-sm text-muted-foreground">Entrez votre e-mail : l'application vous dirige automatiquement vers votre espace.</p>
          <ul class="mt-4 grid gap-2.5 md:grid-cols-2">
            <li v-for="p in access" :key="p" class="flex items-start gap-2 text-[14px]"><Check class="mt-0.5 size-4 flex-shrink-0" style="color: var(--ms-a)" /> {{ p }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="container section-pad pt-0">
      <div class="relative overflow-hidden rounded-[32px] px-6 py-16 text-center text-white shadow-2xl sm:px-10" style="background: linear-gradient(135deg, #0b1628 0%, #0d4f5e 60%, #00687c 120%)">
        <h2 class="mx-auto max-w-[640px] text-[clamp(1.65rem,3.4vw,2.4rem)] font-extrabold leading-tight">Prêt à gérer depuis votre téléphone ?</h2>
        <p class="mx-auto mt-4 max-w-xl text-[16.5px] text-white/80">Créez votre espace gratuitement, puis connectez-vous dans l'application avec le même compte.</p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <router-link to="/creer-commerce" class="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-[15px] font-semibold text-[#0b1628] transition-all hover:-translate-y-0.5">
            Créer mon espace <ArrowRight class="size-[18px]" />
          </router-link>
          <router-link to="/m-store/support" class="inline-flex h-12 items-center rounded-xl border border-white/30 bg-white/10 px-6 text-[15px] font-semibold text-white hover:bg-white/20">
            Aide & support
          </router-link>
        </div>
      </div>
    </section>

    <footer class="border-t border-border bg-card/60">
      <div class="container flex flex-col items-center justify-between gap-3 py-6 text-sm text-muted-foreground md:flex-row">
        <p>© 2026 M-STORE — par M-NETHUB. Tous droits réservés.</p>
        <div class="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a href="/" class="hover:text-foreground">Accueil</a>
          <router-link to="/m-store/support" class="hover:text-foreground">Support</router-link>
          <router-link to="/m-store/confidentialite" class="hover:text-foreground">Confidentialité</router-link>
          <router-link to="/m-store/suppression-compte" class="hover:text-foreground">Suppression de compte</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.ms { --ms-a: #00687c; --ms-b: #29b6e8; }
:global(.dark) .ms { --ms-a: #6ad4f2; --ms-b: #29b6e8; }
.ms-gradient { background: linear-gradient(95deg, var(--ms-a), var(--ms-b)); -webkit-background-clip: text; background-clip: text; color: transparent; }
</style>
