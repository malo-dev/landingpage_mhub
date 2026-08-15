<script setup lang="ts">
import { reactive, ref } from "vue";
import { useI18n } from "vue-i18n";
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

const { t } = useI18n();

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
  projectType: "ptWeb",
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
      subject: `[Devis] ${t('devis.' + form.projectType)} — Budget: ${form.budget ? t('devis.' + form.budget) : '-'} — ${t('devis.timelinePh')}: ${form.timeline ? t('devis.' + form.timeline) : '-'}`,
      message: form.description,
      type: 'devis',
    });
    sent.value = true;
    form.name = ""; form.email = ""; form.phone = "";
    form.company = ""; form.description = "";
  } catch (e: any) {
    errorMsg.value = e?.response?.data?.message || t('devis.requiredErrDesc');
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <section id="devis" class="container py-24 sm:py-32">
    <div v-animate class="text-center mb-12">
      <div class="section-eyebrow mb-3">{{ t('devis.label') }}</div>
      <h2 class="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
        <FileText class="size-10 text-primary" />
        {{ t('devis.title') }}
      </h2>
      <p class="md:w-1/2 mx-auto text-xl text-muted-foreground">{{ t('devis.subtitle') }}</p>
    </div>

    <div class="max-w-3xl mx-auto">
      <Card v-animate="{ type: 'fade-up', delay: 200 }" class="bg-muted/60 dark:bg-card border border-primary/20">
        <CardHeader class="text-xl font-bold text-primary pb-0">
          {{ t('devis.formTitle') }}
        </CardHeader>
        <CardContent class="pt-6">
          <form @submit.prevent="handleSubmit" class="grid gap-5">
            <div class="grid md:grid-cols-2 gap-4">
              <div class="flex flex-col gap-1.5">
                <Label for="devis-name">{{ t('devis.fullName') }} <span class="text-destructive">*</span></Label>
                <Input id="devis-name" :placeholder="t('devis.namePh')" v-model="form.name" required />
              </div>
              <div class="flex flex-col gap-1.5">
                <Label for="devis-email">{{ t('devis.emailLabel') }} <span class="text-destructive">*</span></Label>
                <Input id="devis-email" type="email" placeholder="votre@email.com" v-model="form.email" required />
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              <div class="flex flex-col gap-1.5">
                <Label for="devis-phone">{{ t('devis.phone') }}</Label>
                <Input id="devis-phone" placeholder="+243 XXX XXX XXX" v-model="form.phone" />
              </div>
              <div class="flex flex-col gap-1.5">
                <Label for="devis-company">{{ t('devis.company') }}</Label>
                <Input id="devis-company" :placeholder="t('devis.companyPh')" v-model="form.company" />
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="devis-type">{{ t('devis.projectType') }}</Label>
              <Select v-model="form.projectType">
                <SelectTrigger>
                  <SelectValue :placeholder="t('devis.projectTypePh')" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="ptWeb">{{ t('devis.ptWeb') }}</SelectItem>
                    <SelectItem value="ptMstoreComm">{{ t('devis.ptMstoreComm') }}</SelectItem>
                    <SelectItem value="ptMstoreOng">{{ t('devis.ptMstoreOng') }}</SelectItem>
                    <SelectItem value="ptAI">{{ t('devis.ptAI') }}</SelectItem>
                    <SelectItem value="ptCyber">{{ t('devis.ptCyber') }}</SelectItem>
                    <SelectItem value="ptCloud">{{ t('devis.ptCloud') }}</SelectItem>
                    <SelectItem value="ptData">{{ t('devis.ptData') }}</SelectItem>
                    <SelectItem value="ptBlockchain">{{ t('devis.ptBlockchain') }}</SelectItem>
                    <SelectItem value="ptVideo">{{ t('devis.ptVideo') }}</SelectItem>
                    <SelectItem value="ptMarketing">{{ t('devis.ptMarketing') }}</SelectItem>
                    <SelectItem value="ptEngineer">{{ t('devis.ptEngineer') }}</SelectItem>
                    <SelectItem value="ptOther">{{ t('devis.ptOther') }}</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              <div class="flex flex-col gap-1.5">
                <Label for="devis-budget">{{ t('devis.budget') }}</Label>
                <Select v-model="form.budget">
                  <SelectTrigger>
                    <SelectValue :placeholder="t('devis.budgetPh')" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="bLt500">{{ t('devis.bLt500') }}</SelectItem>
                      <SelectItem value="b500_2k">{{ t('devis.b500_2k') }}</SelectItem>
                      <SelectItem value="b2k_5k">{{ t('devis.b2k_5k') }}</SelectItem>
                      <SelectItem value="b5k_10k">{{ t('devis.b5k_10k') }}</SelectItem>
                      <SelectItem value="bGt10k">{{ t('devis.bGt10k') }}</SelectItem>
                      <SelectItem value="bTbd">{{ t('devis.bTbd') }}</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div class="flex flex-col gap-1.5">
                <Label for="devis-timeline">{{ t('devis.timeline') }}</Label>
                <Select v-model="form.timeline">
                  <SelectTrigger>
                    <SelectValue :placeholder="t('devis.timelinePh')" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="tUrgent">{{ t('devis.tUrgent') }}</SelectItem>
                      <SelectItem value="t1m">{{ t('devis.t1m') }}</SelectItem>
                      <SelectItem value="t2_3m">{{ t('devis.t2_3m') }}</SelectItem>
                      <SelectItem value="t3_6m">{{ t('devis.t3_6m') }}</SelectItem>
                      <SelectItem value="tGt6">{{ t('devis.tGt6') }}</SelectItem>
                      <SelectItem value="tFlexible">{{ t('devis.tFlexible') }}</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="devis-desc">{{ t('devis.description') }} <span class="text-destructive">*</span></Label>
              <Textarea
                id="devis-desc"
                :placeholder="t('devis.descriptionPh')"
                :rows="6"
                v-model="form.description"
                required
              />
            </div>

            <Alert v-if="error" variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>{{ t('devis.requiredErr') }}</AlertTitle>
              <AlertDescription>{{ t('devis.requiredErrDesc') }}</AlertDescription>
            </Alert>

            <Alert v-if="sent" class="border-primary/30 bg-primary/5">
              <CheckCircle2 class="w-4 h-4 text-primary" />
              <AlertTitle class="text-primary">{{ t('devis.successTitle') }}</AlertTitle>
              <AlertDescription>{{ t('devis.successDesc') }}</AlertDescription>
            </Alert>

            <Alert v-if="errorMsg" variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>{{ t('devis.errorTitle') }}</AlertTitle>
              <AlertDescription>{{ errorMsg }}</AlertDescription>
            </Alert>

            <Button type="submit" class="w-full font-bold text-base py-6" :disabled="loading">
              <Loader2 v-if="loading" class="size-5 mr-2 animate-spin" />
              <FileText v-else class="size-5 mr-2" />
              {{ loading ? t('devis.sending') : t('devis.sendBtn') }}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  </section>
</template>
