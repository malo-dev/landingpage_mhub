<script setup lang="ts">
import { useRouter } from "vue-router";
import { useColorMode } from "@vueuse/core";
import LogoMnethub from "@/components/LogoMnethub.vue";
import {
  ArrowLeft, ArrowRight, Camera, Store, Users, Bell, Bike, Globe2, Heart, MapPin,
  Smartphone, Search, ShoppingBag, Star, PackageCheck, Moon, Sun, Check, ChevronRight,
} from "lucide-vue-next";

const router = useRouter();
const mode = useColorMode();

const features = [
  { icon: Camera, title: "Recherche par photo", text: "Une simple photo suffit pour retrouver un produit parmi les entreprises et vendeurs à proximité." },
  { icon: Store, title: "Entreprises & particuliers", text: "Boutiques locales et vendeurs individuels réunis dans un seul catalogue." },
  { icon: MapPin, title: "Autour de vous", text: "Trouvez les entreprises et vendeurs les plus proches, filtrez par catégorie." },
  { icon: Bell, title: "Suivi en temps réel", text: "Notifications à chaque étape : confirmation, préparation, livraison." },
  { icon: Heart, title: "Liste d'envies", text: "Sauvegardez vos produits préférés et retrouvez-les en un instant." },
  { icon: Bike, title: "Devenir livreur", text: "Inscrivez-vous directement depuis l'app et rejoignez le réseau de livraison." },
  { icon: Globe2, title: "Multi-langue", text: "Français, anglais, lingala, swahili — M-Market s'adapte à vous." },
  { icon: Users, title: "Avis & notes", text: "Consultez les avis de la communauté sur produits et vendeurs avant d'acheter." },
];

const steps = [
  { icon: Search, title: "Cherchez", text: "Tapez un mot, choisissez une catégorie ou prenez simplement le produit en photo." },
  { icon: ShoppingBag, title: "Commandez", text: "Comparez les vendeurs autour de vous, lisez les avis et passez commande en quelques touches." },
  { icon: PackageCheck, title: "Suivez", text: "Chaque étape vous est notifiée : confirmation, préparation, livraison à votre porte." },
];

const audiences = [
  { icon: ShoppingBag, title: "Acheteurs", points: ["Des produits près de chez vous", "Recherche par photo et par catégorie", "Suivi de commande en temps réel"] },
  { icon: Store, title: "Vendeurs", points: ["Entreprises comme particuliers", "Un catalogue visible autour de vous", "Avis et notes pour gagner la confiance"] },
  { icon: Bike, title: "Livreurs", points: ["Inscription directement dans l'app", "Rejoignez le réseau de livraison", "Missions proches de votre position"] },
];

const toggleTheme = () => { mode.value = mode.value === "dark" ? "light" : "dark"; };
</script>

<template>
  <div class="mm relative min-h-screen overflow-x-clip">
    <!-- Fond -->
    <div class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[820px]" aria-hidden="true">
      <div class="hero-grid absolute inset-0 opacity-50" />
      <div class="absolute -right-24 -top-24 size-[540px] rounded-full opacity-40 blur-[70px]" style="background: radial-gradient(circle, var(--mm-a), transparent 66%)" />
      <div class="absolute -left-32 top-40 size-[420px] rounded-full opacity-30 blur-[70px]" style="background: radial-gradient(circle, var(--mm-b), transparent 66%)" />
    </div>

    <!-- En-tête -->
    <header class="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div class="container flex h-[68px] items-center gap-4">
        <a href="/" class="flex items-center gap-3" aria-label="M-NETHUB">
          <LogoMnethub variant="horizontal" class="text-foreground" icon-class="h-8 w-8" text-class="text-[17px]" />
        </a>
        <ChevronRight class="hidden size-4 text-muted-foreground sm:block" />
        <span class="hidden items-center gap-2 text-sm font-bold sm:flex">
          <span class="grid size-7 place-items-center rounded-lg text-white" style="background: linear-gradient(135deg, var(--mm-b), var(--mm-a))"><ShoppingBag class="size-4" /></span>
          M-Market
        </span>
        <nav class="ml-6 hidden items-center gap-0.5 md:flex">
          <a href="#fonctionnalites" class="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">Fonctionnalités</a>
          <a href="#fonctionnement" class="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">Comment ça marche</a>
          <a href="#pour-qui" class="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">Pour qui ?</a>
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
    <section class="container grid items-center gap-14 pb-16 pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:pt-20">
      <div>
        <span class="anim-rise inline-flex items-center gap-2 rounded-full border border-border bg-card py-1.5 pl-3 pr-4 text-[12.5px] font-medium text-muted-foreground">
          <span class="size-[7px] rounded-full ring-4" style="background: var(--mm-a); --tw-ring-color: color-mix(in srgb, var(--mm-a) 20%, transparent)" />
          M-Market — par M-NETHUB
        </span>
        <h1 class="anim-rise mt-5 text-[clamp(2.3rem,5.2vw,3.7rem)] font-extrabold leading-[1.05] tracking-[-0.03em]" style="animation-delay: 0.05s">
          Votre shopping,
          <span class="mm-gradient">enfin simplifié.</span>
        </h1>
        <p class="anim-rise mt-6 max-w-[520px] text-[17px] leading-relaxed text-muted-foreground" style="animation-delay: 0.1s">
          Découvrez des produits près de chez vous, proposés par des entreprises locales comme par des vendeurs particuliers. Recherchez, comparez et suivez votre commande — le tout depuis une seule application.
        </p>

        <div class="anim-rise mt-8 flex flex-wrap items-center gap-3" style="animation-delay: 0.15s">
          <div class="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-sm">
            <Smartphone class="size-6" />
            <div class="text-left leading-tight">
              <p class="text-[10px] uppercase tracking-wider text-muted-foreground">Bientôt disponible sur</p>
              <p class="text-[15px] font-bold">App Store</p>
            </div>
          </div>
          <div class="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-sm">
            <Smartphone class="size-6" />
            <div class="text-left leading-tight">
              <p class="text-[10px] uppercase tracking-wider text-muted-foreground">Bientôt disponible sur</p>
              <p class="text-[15px] font-bold">Google Play</p>
            </div>
          </div>
        </div>
        <p class="anim-rise mt-5 flex items-center gap-2 text-[13px] text-muted-foreground" style="animation-delay: 0.2s">
          <Check class="size-4 text-emerald-500" /> Disponible en français, anglais, lingala et swahili
        </p>
      </div>

      <!-- Maquette téléphone -->
      <div class="relative mx-auto w-full max-w-[380px] pb-6 anim-rise" style="animation-delay: 0.15s" aria-hidden="true">
        <div class="phone rounded-[38px] border border-border bg-card p-3 shadow-2xl">
          <div class="mx-auto mb-3 h-1.5 w-16 rounded-full bg-border" />
          <div class="rounded-[26px] bg-background p-4">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-[11px] text-muted-foreground">Livrer à</p>
                <p class="flex items-center gap-1 text-[13px] font-bold"><MapPin class="size-3.5" style="color: var(--mm-a)" /> Gombe, Kinshasa</p>
              </div>
              <span class="grid size-9 place-items-center rounded-full bg-muted"><Bell class="size-4" /></span>
            </div>

            <div class="mt-3 flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5 text-[12px] text-muted-foreground">
              <Search class="size-4" /> <span class="flex-1">Rechercher un produit…</span>
              <span class="grid size-7 place-items-center rounded-lg text-white" style="background: var(--mm-a)"><Camera class="size-3.5" /></span>
            </div>

            <div class="mt-3 flex gap-2 text-[11px] font-semibold">
              <span class="rounded-full px-3 py-1.5 text-white" style="background: var(--mm-b)">Tout</span>
              <span class="rounded-full bg-muted px-3 py-1.5">Mode</span>
              <span class="rounded-full bg-muted px-3 py-1.5">Maison</span>
              <span class="rounded-full bg-muted px-3 py-1.5">Alimentation</span>
            </div>

            <div class="mt-3 grid grid-cols-2 gap-2.5">
              <div v-for="(p, i) in [{ n: 'Sac en cuir', s: 'Boutique Marie', pr: '$24', c: '--mm-a' }, { n: 'Casque audio', s: 'TechShop', pr: '$39', c: '--mm-b' }, { n: 'Pagne wax', s: 'Atelier Nadia', pr: '$18', c: '--mm-b' }, { n: 'Sneakers', s: 'Urban Kin', pr: '$45', c: '--mm-a' }]" :key="i" class="rounded-2xl border border-border bg-card p-2.5">
                <div class="grid h-20 place-items-center rounded-xl" :style="{ background: `color-mix(in srgb, var(${p.c}) 16%, transparent)`, color: `var(${p.c})` }">
                  <ShoppingBag class="size-7" />
                </div>
                <p class="mt-2 text-[12px] font-bold leading-tight">{{ p.n }}</p>
                <p class="text-[10.5px] text-muted-foreground">{{ p.s }}</p>
                <div class="mt-1 flex items-center justify-between">
                  <span class="text-[13px] font-extrabold" style="color: var(--mm-a)">{{ p.pr }}</span>
                  <span class="flex items-center gap-0.5 text-[10.5px] text-muted-foreground"><Star class="size-3 fill-amber-400 text-amber-400" /> 4.8</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="chip absolute -left-6 top-[47%] flex items-center gap-2.5 rounded-2xl border border-border bg-background/85 py-2.5 pl-2.5 pr-3.5 shadow-lg backdrop-blur-md" style="animation: pop 0.6s 0.7s cubic-bezier(0.34,1.56,0.64,1) both, bob 6s 1.4s ease-in-out infinite">
          <span class="grid size-8 place-items-center rounded-[9px]" style="background: color-mix(in srgb, var(--mm-a) 16%, transparent); color: var(--mm-a)"><Bike class="size-4" /></span>
          <span class="leading-tight"><b class="block text-[12.5px]">Livreur en route</b><small class="text-[11px] text-muted-foreground">Arrivée dans 12 min</small></span>
        </div>
        <div class="chip absolute -right-3 bottom-2 flex items-center gap-2.5 rounded-2xl border border-border bg-background/85 py-2.5 pl-2.5 pr-3.5 shadow-lg backdrop-blur-md" style="animation: pop 0.6s 1.1s cubic-bezier(0.34,1.56,0.64,1) both, bob 7s 1.8s ease-in-out infinite reverse">
          <span class="grid size-8 place-items-center rounded-[9px] bg-emerald-500/15 text-emerald-500"><PackageCheck class="size-4" /></span>
          <span class="leading-tight"><b class="block text-[12.5px]">Commande confirmée</b><small class="text-[11px] text-muted-foreground">Boutique Marie</small></span>
        </div>
      </div>
    </section>

    <!-- Fonctionnalités -->
    <section id="fonctionnalites" class="section-pad border-y border-border bg-muted/60">
      <div class="container">
        <div v-animate class="mb-12 max-w-2xl">
          <span class="kicker" style="color: var(--mm-a)">Fonctionnalités</span>
          <h2 class="section-title">Ce que vous pouvez faire</h2>
          <p class="section-lead">Une app pensée pour le shopping local — simple pour les acheteurs, accessible pour les vendeurs.</p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="(f, i) in features" :key="i" v-animate="{ type: 'fade-up', delay: (i % 4) * 70 }" class="surface-card flex flex-col p-6">
            <span class="grid size-[42px] place-items-center rounded-xl" :style="{ background: `color-mix(in srgb, var(${i % 2 ? '--mm-b' : '--mm-a'}) 14%, transparent)`, color: `var(${i % 2 ? '--mm-b' : '--mm-a'})` }">
              <component :is="f.icon" class="size-5" />
            </span>
            <h3 class="mt-4 text-[16px] font-bold">{{ f.title }}</h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{{ f.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Comment ça marche -->
    <section id="fonctionnement" class="section-pad">
      <div class="container">
        <div v-animate class="mx-auto mb-12 max-w-2xl text-center">
          <span class="kicker" style="color: var(--mm-a)">Comment ça marche</span>
          <h2 class="section-title">Trois gestes, et c'est chez vous</h2>
        </div>
        <div class="grid gap-5 md:grid-cols-3">
          <div v-for="(s, i) in steps" :key="i" v-animate="{ type: 'fade-up', delay: i * 100 }" class="relative rounded-[18px] border border-border bg-card p-7 shadow-sm">
            <span class="absolute right-6 top-5 font-display text-5xl font-extrabold leading-none text-foreground/[0.06]">{{ i + 1 }}</span>
            <span class="grid size-[46px] place-items-center rounded-[13px] text-white shadow-lg" style="background: linear-gradient(135deg, var(--mm-b), var(--mm-a))">
              <component :is="s.icon" class="size-[22px]" />
            </span>
            <h3 class="mt-5 text-[18px] font-extrabold">{{ s.title }}</h3>
            <p class="mt-2 text-[14px] leading-relaxed text-muted-foreground">{{ s.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pour qui -->
    <section id="pour-qui" class="section-pad border-y border-border bg-muted/60">
      <div class="container">
        <div v-animate class="mb-12 max-w-2xl">
          <span class="kicker" style="color: var(--mm-a)">Pour qui ?</span>
          <h2 class="section-title">Une place pour chacun</h2>
          <p class="section-lead">Acheter, vendre ou livrer : M-Market réunit tout le commerce de proximité au même endroit.</p>
        </div>
        <div class="grid gap-5 md:grid-cols-3">
          <div v-for="(a, i) in audiences" :key="a.title" v-animate="{ type: 'fade-up', delay: i * 100 }" class="surface-card p-7">
            <span class="grid size-12 place-items-center rounded-2xl" :style="{ background: `color-mix(in srgb, var(${i === 1 ? '--mm-b' : '--mm-a'}) 14%, transparent)`, color: `var(${i === 1 ? '--mm-b' : '--mm-a'})` }">
              <component :is="a.icon" class="size-6" />
            </span>
            <h3 class="mt-5 text-xl font-extrabold">{{ a.title }}</h3>
            <ul class="mt-4 space-y-2.5">
              <li v-for="p in a.points" :key="p" class="flex items-start gap-2 text-[14px]">
                <Check class="mt-0.5 size-4 flex-shrink-0" style="color: var(--mm-a)" /> {{ p }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Appel final -->
    <section class="container section-pad">
      <div
        v-animate="{ type: 'zoom-in' }"
        class="relative overflow-hidden rounded-[32px] px-6 py-16 text-center text-white shadow-2xl sm:px-10 sm:py-20"
        style="background: linear-gradient(135deg, #1f3a3d 0%, #325559 55%, #8e4e14 130%)"
      >
        <div class="pointer-events-none absolute -right-[8%] -top-[40%] size-[520px] rounded-full" style="background: radial-gradient(circle, rgba(255, 171, 105, 0.45), transparent 65%)" />
        <h2 class="relative mx-auto max-w-[640px] font-display text-[clamp(1.65rem,3.4vw,2.4rem)] font-extrabold leading-tight tracking-tight">Prêt à simplifier votre shopping ?</h2>
        <p class="relative mx-auto mt-4 max-w-xl text-[16.5px] text-white/80">
          M-Market arrive bientôt sur App Store et Google Play. Envie de vendre plutôt qu'acheter ? Entreprises et particuliers peuvent déjà rejoindre M-Market.
        </p>
        <div class="relative mt-8 flex flex-wrap justify-center gap-3">
          <a href="/contact" class="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-[15px] font-semibold text-[#16181d] transition-all hover:-translate-y-0.5 hover:shadow-xl">
            Nous contacter <ArrowRight class="size-[18px]" />
          </a>
          <a href="/" class="inline-flex h-12 items-center rounded-xl border border-white/30 bg-white/10 px-6 text-[15px] font-semibold text-white transition-all hover:bg-white/20">
            Découvrir M-NETHUB
          </a>
        </div>
      </div>
    </section>

    <footer class="border-t border-border bg-card/60">
      <div class="container flex flex-col items-center justify-between gap-3 py-6 text-sm text-muted-foreground md:flex-row">
        <p>© 2026 M-Market — par M-NETHUB. Tous droits réservés.</p>
        <div class="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a href="/" class="transition-colors hover:text-foreground">Accueil</a>
          <router-link to="/m-market/confidentialite" class="transition-colors hover:text-foreground">Confidentialité</router-link>
          <router-link to="/m-market/suppression-compte" class="transition-colors hover:text-foreground">Suppression de compte</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.mm { --mm-a: #c2570c; --mm-b: #325559; }
:global(.dark) .mm { --mm-a: #ffab69; --mm-b: #a8cdd1; }
.mm-gradient {
  background: linear-gradient(95deg, var(--mm-b), var(--mm-a));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.phone { transform: perspective(1500px) rotateY(-6deg) rotateX(2deg); transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.3, 1); }
.phone:hover { transform: none; }
@media (max-width: 1023px) { .phone { transform: none; } }
</style>
