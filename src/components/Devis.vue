<script setup lang="ts">
import { reactive, ref } from "vue";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, FileText, CheckCircle2, Loader2 } from "lucide-vue-next";
import api from "@/services/api";

interface DevisFormProps {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
}

const form = reactive<DevisFormProps>({
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "Développement Web & Mobile",
  budget: "",
  timeline: "",
  description: "",
});

const error = ref(false);
const sent = ref(false);
const loading = ref(false);
const errorMsg = ref("");

const handleSubmit = async () => {
  if (!form.name || !form.email || !form.description) {
    error.value = true;
    return;
  }
  error.value = false;
  loading.value = true;
  errorMsg.value = "";
  try {
    await api.post('/public/contact', {
      name: form.name,
      email: form.email,
      phone: form.phone,
      company: form.company,
      subject: `[Devis] ${form.projectType} — Budget: ${form.budget || 'À définir'} — Délai: ${form.timeline || 'Flexible'}`,
      message: form.description,
      type: 'devis',
    });
    sent.value = true;
    form.name = ""; form.email = ""; form.phone = "";
    form.company = ""; form.description = "";
  } catch (e: any) {
    errorMsg.value = e?.response?.data?.message || "Erreur lors de l'envoi. Veuillez réessayer.";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <section id="devis" class="container py-24 sm:py-32">
    <div class="text-center mb-12">
      <h2 class="text-lg text-primary mb-2 tracking-wider">Devis</h2>
      <h2 class="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
        <FileText class="size-10 text-primary" />
        Demander un devis
      </h2>
      <p class="md:w-1/2 mx-auto text-xl text-muted-foreground">
        Décrivez votre projet et nous vous enverrons une proposition personnalisée
        sous 24 à 48 heures.
      </p>
    </div>

    <div class="max-w-3xl mx-auto">
      <Card class="bg-muted/60 dark:bg-card border border-primary/20">
        <CardHeader class="text-xl font-bold text-primary pb-0">
          Formulaire de demande de devis
        </CardHeader>
        <CardContent class="pt-6">
          <form @submit.prevent="handleSubmit" class="grid gap-5">
            <div class="grid md:grid-cols-2 gap-4">
              <div class="flex flex-col gap-1.5">
                <Label for="devis-name">Nom complet <span class="text-destructive">*</span></Label>
                <Input id="devis-name" placeholder="Votre nom" v-model="form.name" required />
              </div>
              <div class="flex flex-col gap-1.5">
                <Label for="devis-email">Email <span class="text-destructive">*</span></Label>
                <Input id="devis-email" type="email" placeholder="votre@email.com" v-model="form.email" required />
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              <div class="flex flex-col gap-1.5">
                <Label for="devis-phone">Téléphone</Label>
                <Input id="devis-phone" placeholder="+243 XXX XXX XXX" v-model="form.phone" />
              </div>
              <div class="flex flex-col gap-1.5">
                <Label for="devis-company">Entreprise / Organisation</Label>
                <Input id="devis-company" placeholder="Nom de votre entreprise" v-model="form.company" />
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="devis-type">Type de projet</Label>
              <Select v-model="form.projectType">
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un type de projet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Développement Web & Mobile">Développement Web & Mobile</SelectItem>
                    <SelectItem value="M-STORE Commercial">M-STORE — Commerce / PME</SelectItem>
                    <SelectItem value="M-STORE ONG">M-STORE — ONG / Organisation</SelectItem>
                    <SelectItem value="Intelligence Artificielle">Intelligence Artificielle & ML</SelectItem>
                    <SelectItem value="Cybersécurité & Réseaux">Cybersécurité & Réseaux</SelectItem>
                    <SelectItem value="Cloud & DevOps">Cloud & DevOps</SelectItem>
                    <SelectItem value="Data & Analytics">Data & Analytics</SelectItem>
                    <SelectItem value="Blockchain & Web3">Blockchain & Web3</SelectItem>
                    <SelectItem value="Production Vidéo">Production Vidéo 2D/3D</SelectItem>
                    <SelectItem value="Marketing Digital">Marketing Digital</SelectItem>
                    <SelectItem value="Ingénieur dédié">Engager un ingénieur M-HUB</SelectItem>
                    <SelectItem value="Autre">Autre</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              <div class="flex flex-col gap-1.5">
                <Label for="devis-budget">Budget estimé (USD)</Label>
                <Select v-model="form.budget">
                  <SelectTrigger>
                    <SelectValue placeholder="Fourchette de budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="< $500">Moins de $500</SelectItem>
                      <SelectItem value="$500 - $2000">$500 — $2 000</SelectItem>
                      <SelectItem value="$2000 - $5000">$2 000 — $5 000</SelectItem>
                      <SelectItem value="$5000 - $10000">$5 000 — $10 000</SelectItem>
                      <SelectItem value="> $10000">Plus de $10 000</SelectItem>
                      <SelectItem value="À définir">À définir ensemble</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div class="flex flex-col gap-1.5">
                <Label for="devis-timeline">Délai souhaité</Label>
                <Select v-model="form.timeline">
                  <SelectTrigger>
                    <SelectValue placeholder="Délai de livraison" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Urgent (< 2 semaines)">Urgent — moins de 2 semaines</SelectItem>
                      <SelectItem value="1 mois">1 mois</SelectItem>
                      <SelectItem value="2-3 mois">2 à 3 mois</SelectItem>
                      <SelectItem value="3-6 mois">3 à 6 mois</SelectItem>
                      <SelectItem value="> 6 mois">Plus de 6 mois</SelectItem>
                      <SelectItem value="Flexible">Flexible</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="devis-desc">Description du projet <span class="text-destructive">*</span></Label>
              <Textarea
                id="devis-desc"
                placeholder="Décrivez votre projet, vos besoins, les fonctionnalités souhaitées..."
                :rows="6"
                v-model="form.description"
                required
              />
            </div>

            <Alert v-if="error" variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>Champs requis manquants</AlertTitle>
              <AlertDescription>
                Veuillez renseigner votre nom, email et la description du projet.
              </AlertDescription>
            </Alert>

            <Alert v-if="sent" class="border-primary/30 bg-primary/5">
              <CheckCircle2 class="w-4 h-4 text-primary" />
              <AlertTitle class="text-primary">Demande envoyée !</AlertTitle>
              <AlertDescription>
                Nous avons bien reçu votre demande de devis. Notre équipe vous répondra sous 24-48h.
              </AlertDescription>
            </Alert>

            <Alert v-if="errorMsg" variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>Erreur</AlertTitle>
              <AlertDescription>{{ errorMsg }}</AlertDescription>
            </Alert>

            <Button type="submit" class="w-full font-bold text-base py-6" :disabled="loading">
              <Loader2 v-if="loading" class="size-5 mr-2 animate-spin" />
              <FileText v-else class="size-5 mr-2" />
              {{ loading ? 'Envoi en cours...' : 'Envoyer ma demande de devis' }}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  </section>
</template>
