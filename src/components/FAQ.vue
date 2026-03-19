<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Qu'est-ce que M-HUB ?",
    answer:
      "M-HUB est une entreprise Full Stack IT basée en République Démocratique du Congo. Elle accompagne les particuliers, startups, entreprises et institutions dans tous leurs besoins technologiques — du développement web/mobile à la cybersécurité, du cloud au marketing digital, en passant par l'IA et la blockchain.",
    value: "item-1",
  },
  {
    question: "Qu'est-ce que M-STORE ?",
    answer:
      "M-STORE est le premier projet phare de M-HUB. C'est un système de gestion commerciale complet avec 29 modules et 92 fonctionnalités — gestion du stock, des ventes, des finances, de la trésorerie, du personnel, des clients, et bien plus. Il est adapté aux PME, magasins, et organisations.",
    value: "item-2",
  },
  {
    question: "Comment puis-je engager un ingénieur M-HUB ?",
    answer:
      "Contactez-nous via le formulaire ci-dessus en sélectionnant 'Engager un ingénieur M-HUB'. Précisez votre besoin (développement, IA, sécurité, design, data...) et notre équipe vous mettra en relation avec le profil le plus adapté à votre projet.",
    value: "item-3",
  },
  {
    question: "M-HUB travaille-t-il avec des entreprises hors de la RDC ?",
    answer:
      "Oui. Bien que fondée en RDC, M-HUB opère à l'international et accompagne des clients partout en Afrique et dans le monde. Notre vision est de devenir le leader africain de l'IT d'ici 2036, puis mondial d'ici 2046.",
    value: "item-4",
  },
  {
    question: "Quels types de projets M-HUB peut-il réaliser ?",
    answer:
      "M-HUB couvre 13 domaines : applications mobiles, intelligence artificielle, machine learning, production vidéo, cybersécurité, data analytics, cloud & hébergement, marketing digital, hardware, développement web, cryptographie, blockchain/Web3 et CRM/No-Code. Aucun projet n'est trop grand ou trop complexe.",
    value: "item-5",
  },
  {
    question: "Comment M-STORE gère-t-il plusieurs points de vente ?",
    answer:
      "M-STORE supporte la gestion multi-commerces et multi-branches depuis un seul compte. Vous pouvez créer plusieurs commerces, y ajouter des extensions (points de vente / branches), et filtrer toutes les données par commerce ou extension. Chaque branche dispose de son stock indépendant.",
    value: "item-6",
  },
];
</script>

<template>
  <section id="faq" class="container md:w-[700px] py-24 sm:py-32">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">FAQ</h2>
      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Questions fréquentes
      </h2>
    </div>

    <Accordion type="single" collapsible class="AccordionRoot">
      <AccordionItem
        v-for="{ question, answer, value } in FAQList"
        :key="value"
        :value="value"
      >
        <AccordionTrigger class="text-left">{{ question }}</AccordionTrigger>
        <AccordionContent>{{ answer }}</AccordionContent>
      </AccordionItem>
    </Accordion>

    <h3 class="font-medium mt-4">
      Vous avez d'autres questions ?
      <a href="#contact" class="text-primary underline ml-1">Contactez-nous</a>
    </h3>
  </section>
</template>
