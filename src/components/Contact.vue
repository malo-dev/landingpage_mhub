<script setup lang="ts">
import { ref, reactive } from "vue";
import { useI18n } from "vue-i18n";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Building2, Phone, Mail, Clock, CheckCircle2, Loader2 } from "lucide-vue-next";
import api from "@/services/api";

const { t } = useI18n();

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
  subject: "Web & Mobile",
  message: "",
});

const invalidInputForm = ref(false);
const submitted = ref(false);
const loading = ref(false);
const errorMsg = ref("");

const handleSubmit = async () => {
  const { firstName, lastName, email, message } = contactForm;
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
      subject: contactForm.subject,
      message,
      type: 'contact',
    });
    submitted.value = true;
    contactForm.firstName = "";
    contactForm.lastName = "";
    contactForm.email = "";
    contactForm.message = "";
  } catch (e: any) {
    errorMsg.value = e?.response?.data?.message || t('contact.requiredErrDesc');
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <section id="contact" class="section-pad border-t border-border">
    <div class="container grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div v-animate="'fade-left'">
        <span class="kicker">{{ t('contact.label') }}</span>
        <h2 class="section-title">{{ t('contact.title') }}</h2>
        <p class="section-lead mb-8 lg:w-5/6">{{ t('contact.subtitle') }}</p>

        <div class="flex flex-col gap-3">
          <div class="surface-card !transform-none p-4">
            <div class="flex gap-2 mb-1"><Building2 class="size-5 text-primary" /><div class="font-bold">{{ t('contact.address') }}</div></div>
            <div class="text-muted-foreground">{{ t('contact.addressValue') }}</div>
          </div>
          <div class="surface-card !transform-none p-4">
            <div class="flex gap-2 mb-1"><Phone class="size-5 text-primary" /><div class="font-bold">{{ t('contact.phone') }}</div></div>
            <div class="text-muted-foreground">{{ t('contact.phoneValue') }}</div>
          </div>
          <div class="surface-card !transform-none p-4">
            <div class="flex gap-2 mb-1"><Mail class="size-5 text-primary" /><div class="font-bold">{{ t('contact.email') }}</div></div>
            <div class="text-muted-foreground">{{ t('contact.emailValue') }}</div>
          </div>
          <div class="surface-card !transform-none p-4">
            <div class="flex gap-2 mb-1"><Clock class="size-5 text-primary" /><div class="font-bold">{{ t('contact.availability') }}</div></div>
            <div class="text-muted-foreground">
              <div>{{ t('contact.availHours') }}</div>
              <div>{{ t('contact.availUrgency') }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Form -->
      <Card v-animate="'fade-right'" class="rounded-[22px] border-border bg-card p-1 shadow-lg">
        <CardHeader class="font-display text-2xl font-extrabold pb-0">{{ t('contact.formTitle') }}</CardHeader>
        <CardContent class="pt-4">
          <form @submit.prevent="handleSubmit" class="grid gap-4">
            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex flex-col w-full gap-1.5">
                <Label for="first-name">{{ t('contact.firstName') }} <span class="text-destructive">*</span></Label>
                <Input id="first-name" type="text" :placeholder="t('contact.firstNamePh')" v-model="contactForm.firstName" required />
              </div>
              <div class="flex flex-col w-full gap-1.5">
                <Label for="last-name">{{ t('contact.lastName') }} <span class="text-destructive">*</span></Label>
                <Input id="last-name" type="text" :placeholder="t('contact.lastNamePh')" v-model="contactForm.lastName" required />
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="email">{{ t('contact.emailLabel') }} <span class="text-destructive">*</span></Label>
              <Input id="email" type="email" placeholder="votre@email.com" v-model="contactForm.email" required />
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="subject">{{ t('contact.subjectLabel') }}</Label>
              <Select v-model="contactForm.subject">
                <SelectTrigger><SelectValue :placeholder="t('contact.subjectPh')" /></SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Web & Mobile">{{ t('contact.sWeb') }}</SelectItem>
                    <SelectItem value="Intelligence Artificielle">{{ t('contact.sAI') }}</SelectItem>
                    <SelectItem value="Cybersécurité & Réseaux">{{ t('contact.sCyber') }}</SelectItem>
                    <SelectItem value="Cloud & DevOps">{{ t('contact.sCloud') }}</SelectItem>
                    <SelectItem value="M-STORE">{{ t('contact.sMstore') }}</SelectItem>
                    <SelectItem value="Engager un ingénieur">{{ t('contact.sHire') }}</SelectItem>
                    <SelectItem value="Data & Analytics">{{ t('contact.sData') }}</SelectItem>
                    <SelectItem value="Blockchain & Web3">{{ t('contact.sBlockchain') }}</SelectItem>
                    <SelectItem value="Marketing Digital">{{ t('contact.sMarketing') }}</SelectItem>
                    <SelectItem value="Autre">{{ t('contact.sOther') }}</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="message">{{ t('contact.messageLabel') }} <span class="text-destructive">*</span></Label>
              <Textarea id="message" :placeholder="t('contact.messagePh')" :rows="5" v-model="contactForm.message" required />
            </div>

            <Alert v-if="invalidInputForm" variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>{{ t('contact.requiredErr') }}</AlertTitle>
              <AlertDescription>{{ t('contact.requiredErrDesc') }}</AlertDescription>
            </Alert>

            <Alert v-if="errorMsg" variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>{{ t('contact.errorTitle') }}</AlertTitle>
              <AlertDescription>{{ errorMsg }}</AlertDescription>
            </Alert>

            <Alert v-if="submitted" class="border-primary/30 bg-primary/5">
              <CheckCircle2 class="w-4 h-4 text-primary" />
              <AlertTitle class="text-primary">{{ t('contact.successTitle') }}</AlertTitle>
              <AlertDescription>{{ t('contact.successDesc') }}</AlertDescription>
            </Alert>

            <Button class="mt-4 w-full font-bold" type="submit" :disabled="loading">
              <Loader2 v-if="loading" class="size-4 mr-2 animate-spin" />
              {{ loading ? t('contact.sending') : t('contact.sendBtn') }}
            </Button>
          </form>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  </section>
</template>
