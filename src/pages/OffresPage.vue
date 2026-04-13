<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap, ArrowLeft, ArrowRight, ExternalLink, Check,
  Store, Building2, BarChart3, Package, Users,
  DollarSign, ShoppingCart, Truck, Bell, LayoutDashboard,
} from "lucide-vue-next";

const router = useRouter();
const mstoreUrl = import.meta.env.VITE_MSTORE_URL as string;
const activeTab = ref<"commercial" | "ong">("commercial");

const highlights = [
  { icon: LayoutDashboard, label: "Tableau de bord temps réel", desc: "KPIs, CA, alertes stock en un coup d'œil" },
  { icon: Package, label: "29 modules intégrés", desc: "Stock, ventes, finances, RH, clients et plus" },
  { icon: BarChart3, label: "92 fonctionnalités", desc: "Couverture complète de votre activité" },
  { icon: ShoppingCart, label: "Boutique publique", desc: "Vos clients commandent en ligne sans compte" },
  { icon: DollarSign, label: "Multi-devises", desc: "USD, CDF, EUR et toutes vos devises locales" },
  { icon: Users, label: "Gestion RH & Personnel", desc: "Salaires, présences, départements" },
  { icon: Truck, label: "Expéditions & Logistique", desc: "Suivi complet de vos livraisons" },
  { icon: Bell, label: "Notifications intelligentes", desc: "Alertes automatiques stock faible, livraison, etc." },
];
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
        <div class="flex items-center gap-3">
          <Button variant="ghost" @click="router.push('/')" class="gap-2">
            <ArrowLeft class="size-4" />
            Accueil
          </Button>
          <Button as-child>
            <a :href="mstoreUrl" target="_blank" class="gap-2 flex items-center">
              Accéder à M-STORE
              <ExternalLink class="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>

    <main class="flex-1">
      <!-- Hero -->
      <section class="container py-16 text-center max-w-3xl mx-auto">
        <Badge variant="outline" class="mb-4">Nos offres M-STORE</Badge>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Gérez tout votre commerce avec
          <span class="text-transparent bg-gradient-to-r from-primary to-[#0099BB] bg-clip-text">M-STORE</span>
        </h1>
        <p class="text-xl text-muted-foreground mb-8">
          Le premier projet M-NETHUB — un système de gestion commerciale complet avec 29 modules
          et 92 fonctionnalités pour PME, magasins et organisations.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <Button class="font-bold gap-2" as-child>
            <a :href="mstoreUrl" target="_blank">
              Démarrer sur M-STORE
              <ArrowRight class="size-4" />
            </a>
          </Button>
          <Button variant="outline" @click="router.push('/creer-commerce')" class="gap-2">
            <Store class="size-4" />
            Créer mon commerce
          </Button>
        </div>
      </section>

      <!-- Highlights -->
      <section class="container py-12 max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold text-center mb-8">Pourquoi M-STORE ?</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card v-for="{ icon, label, desc } in highlights" :key="label" class="bg-muted/40 border-primary/10">
            <CardContent class="p-5">
              <component :is="icon" class="size-7 text-primary mb-3" />
              <h3 class="font-bold mb-1">{{ label }}</h3>
              <p class="text-sm text-muted-foreground">{{ desc }}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <!-- Pricing tabs -->
      <section class="container py-12 max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold text-center mb-8">Formules disponibles</h2>

        <div class="flex justify-center mb-10">
          <div class="flex bg-muted rounded-xl p-1 gap-1">
            <button
              @click="activeTab = 'commercial'"
              :class="['flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all text-sm',
                activeTab === 'commercial' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground']"
            >
              <Store class="size-4" />
              Commerce / PME
            </button>
            <button
              @click="activeTab = 'ong'"
              :class="['flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all text-sm',
                activeTab === 'ong' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground']"
            >
              <Building2 class="size-4" />
              ONG / Organisation
            </button>
          </div>
        </div>

        <!-- Commercial plan -->
        <div v-if="activeTab === 'commercial'" class="max-w-lg mx-auto">
          <Card class="border-2 border-primary shadow-lg shadow-primary/20 text-center">
            <CardHeader>
              <Badge class="w-fit mx-auto mb-2">Plus populaire</Badge>
              <CardTitle class="text-5xl font-extrabold">
                $2
                <span class="text-xl font-normal text-muted-foreground">/mois</span>
              </CardTitle>
              <p class="text-muted-foreground">Accès complet à toutes les fonctionnalités M-STORE</p>
            </CardHeader>
            <CardContent class="space-y-3 text-left">
              <div v-for="f in ['29 modules intégrés', '92 fonctionnalités', 'Multi-commerces & branches', 'Boutique publique en ligne', 'Gestion stock, ventes, finances, RH', 'Tableau de bord temps réel', 'Notifications & alertes automatiques', 'Support technique inclus', 'Mises à jour régulières']"
                :key="f" class="flex items-center gap-2">
                <Check class="size-4 text-primary flex-shrink-0" />
                <span>{{ f }}</span>
              </div>
            </CardContent>
            <div class="p-6 pt-0 flex flex-col gap-3">
              <Button class="w-full font-bold" as-child>
                <a :href="mstoreUrl" target="_blank">Accéder à M-STORE</a>
              </Button>
              <Button variant="outline" class="w-full" @click="router.push('/creer-commerce')">
                Créer mon commerce
              </Button>
            </div>
          </Card>
        </div>

        <!-- ONG plan -->
        <div v-if="activeTab === 'ong'" class="max-w-lg mx-auto">
          <Card class="border-2 border-primary/40 text-center">
            <CardHeader>
              <Badge variant="outline" class="w-fit mx-auto mb-2 border-amber-500/40 text-amber-600 dark:text-amber-400">
                Bientôt disponible
              </Badge>
              <CardTitle class="text-4xl font-extrabold">Sur devis</CardTitle>
              <p class="text-muted-foreground">Tarification adaptée à votre organisation</p>
            </CardHeader>
            <CardContent class="space-y-3 text-left">
              <div v-for="f in ['Gestion du stock interne (dons, distributions)', 'Finance dédiée ONG (missions, per diem)', 'RH & missions terrain', 'Appels d\'offres & AMI', 'Matching automatique avec commerces', 'Chat temps réel inter-organisations', 'Tableau de bord Organisation']"
                :key="f" class="flex items-center gap-2">
                <Check class="size-4 text-primary flex-shrink-0" />
                <span>{{ f }}</span>
              </div>
            </CardContent>
            <div class="p-6 pt-0 flex flex-col gap-3">
              <Button class="w-full font-bold" @click="router.push('/#contact')">
                Nous contacter
              </Button>
              <Button variant="outline" class="w-full" @click="router.push('/#devis')">
                Demander un devis
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-primary/5 border-y border-primary/10 py-16 text-center">
        <div class="container max-w-2xl mx-auto">
          <h2 class="text-3xl font-bold mb-4">Prêt à commencer ?</h2>
          <p class="text-muted-foreground mb-8">
            Enregistrez votre commerce dès maintenant et accédez à M-STORE pour seulement $2/mois.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <Button class="font-bold gap-2" @click="router.push('/creer-commerce')">
              <Store class="size-4" />
              Créer mon commerce
            </Button>
            <Button variant="secondary" as-child>
              <a :href="mstoreUrl" target="_blank" class="flex items-center gap-2">
                Déjà inscrit — Se connecter
                <ExternalLink class="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer simple -->
    <footer class="border-t py-8 text-center text-sm text-muted-foreground">
      <div class="container">
        © 2025 M-NETHUB — Full Stack IT Company · Kinshasa, RDC
        <span class="mx-3">·</span>
        <a href="/" class="hover:text-primary">Retour à l'accueil</a>
      </div>
    </footer>
  </div>
</template>
