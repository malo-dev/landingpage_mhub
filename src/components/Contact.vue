<script setup lang="ts">
import { ref, reactive } from "vue";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Building2, Phone, Mail, Clock, CheckCircle2, Loader2 } from "lucide-vue-next";
import api from "@/services/api";

interface ContactFormProps {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const contactForm = reactive<ContactFormProps>({
  firstName: "",
  lastName: "",
  email: "",
  subject: "Développement Web & Mobile",
  message: "",
});

const invalidInputForm = ref(false);
const submitted = ref(false);
const loading = ref(false);
const errorMsg = ref("");

const handleSubmit = async () => {
  const { firstName, lastName, email, subject, message } = contactForm;
  if (!firstName || !lastName || !email || !message) {
    invalidInputForm.value = true;
    return;
  }
  invalidInputForm.value = false;
  loading.value = true;
  errorMsg.value = "";
  try {
    await api.post('/public/contact', {
      name: `${firstName} ${lastName}`,
      email,
      subject,
      message,
      type: 'contact',
    });
    submitted.value = true;
    contactForm.firstName = "";
    contactForm.lastName = "";
    contactForm.email = "";
    contactForm.message = "";
  } catch (e: any) {
    errorMsg.value = e?.response?.data?.message || "Erreur lors de l'envoi. Veuillez réessayer.";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <section id="contact" class="container py-24 sm:py-32">
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div class="mb-4">
          <h2 class="text-lg text-primary mb-2 tracking-wider">Contact</h2>
          <h2 class="text-3xl md:text-4xl font-bold">Travaillons ensemble</h2>
        </div>
        <p class="mb-8 text-muted-foreground lg:w-5/6">
          Vous avez un projet, une question ou souhaitez engager un ingénieur M-HUB ?
          Notre équipe est disponible pour vous accompagner dans tous vos besoins technologiques.
        </p>

        <div class="flex flex-col gap-6">
          <div>
            <div class="flex gap-2 mb-1">
              <Building2 class="text-primary" />
              <div class="font-bold">Notre adresse</div>
            </div>
            <div class="text-muted-foreground">Kinshasa, République Démocratique du Congo</div>
          </div>

          <div>
            <div class="flex gap-2 mb-1">
              <Phone class="text-primary" />
              <div class="font-bold">Téléphone</div>
            </div>
            <div class="text-muted-foreground">+243 XXX XXX XXX</div>
          </div>

          <div>
            <div class="flex gap-2 mb-1">
              <Mail class="text-primary" />
              <div class="font-bold">Email</div>
            </div>
            <div class="text-muted-foreground">contact@m-hub.cd</div>
          </div>

          <div>
            <div class="flex gap-2 mb-1">
              <Clock class="text-primary" />
              <div class="font-bold">Disponibilité</div>
            </div>
            <div class="text-muted-foreground">
              <div>Lundi — Vendredi : 8h — 18h</div>
              <div>Support urgences 24/7</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Form -->
      <Card class="bg-muted/60 dark:bg-card">
        <CardHeader class="text-primary text-2xl font-semibold pb-0">
          Envoyez-nous un message
        </CardHeader>
        <CardContent class="pt-4">
          <form @submit.prevent="handleSubmit" class="grid gap-4">
            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex flex-col w-full gap-1.5">
                <Label for="first-name">Prénom <span class="text-destructive">*</span></Label>
                <Input
                  id="first-name"
                  type="text"
                  placeholder="Votre prénom"
                  v-model="contactForm.firstName"
                  required
                />
              </div>

              <div class="flex flex-col w-full gap-1.5">
                <Label for="last-name">Nom <span class="text-destructive">*</span></Label>
                <Input
                  id="last-name"
                  type="text"
                  placeholder="Votre nom"
                  v-model="contactForm.lastName"
                  required
                />
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="email">Email <span class="text-destructive">*</span></Label>
              <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
                v-model="contactForm.email"
                required
              />
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="subject">Sujet</Label>
              <Select v-model="contactForm.subject">
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un sujet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Développement Web & Mobile">Développement Web & Mobile</SelectItem>
                    <SelectItem value="Intelligence Artificielle">Intelligence Artificielle</SelectItem>
                    <SelectItem value="Cybersécurité & Réseaux">Cybersécurité & Réseaux</SelectItem>
                    <SelectItem value="Cloud & DevOps">Cloud & DevOps</SelectItem>
                    <SelectItem value="M-STORE">M-STORE — Système de gestion</SelectItem>
                    <SelectItem value="Engager un ingénieur">Engager un ingénieur M-HUB</SelectItem>
                    <SelectItem value="Data & Analytics">Data & Analytics</SelectItem>
                    <SelectItem value="Blockchain & Web3">Blockchain & Web3</SelectItem>
                    <SelectItem value="Marketing Digital">Marketing Digital</SelectItem>
                    <SelectItem value="Autre">Autre demande</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="message">Message <span class="text-destructive">*</span></Label>
              <Textarea
                id="message"
                placeholder="Décrivez votre projet ou votre besoin..."
                :rows="5"
                v-model="contactForm.message"
                required
              />
            </div>

            <Alert v-if="invalidInputForm" variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>Champs requis manquants</AlertTitle>
              <AlertDescription>Veuillez remplir tous les champs obligatoires.</AlertDescription>
            </Alert>

            <Alert v-if="errorMsg" variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>Erreur</AlertTitle>
              <AlertDescription>{{ errorMsg }}</AlertDescription>
            </Alert>

            <Alert v-if="submitted" class="border-primary/30 bg-primary/5">
              <CheckCircle2 class="w-4 h-4 text-primary" />
              <AlertTitle class="text-primary">Message envoyé !</AlertTitle>
              <AlertDescription>Nous vous répondrons sous 24-48h.</AlertDescription>
            </Alert>

            <Button class="mt-4 w-full font-bold" type="submit" :disabled="loading">
              <Loader2 v-if="loading" class="size-4 mr-2 animate-spin" />
              {{ loading ? 'Envoi en cours...' : 'Envoyer le message' }}
            </Button>
          </form>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </section>
  </section>
</template>
