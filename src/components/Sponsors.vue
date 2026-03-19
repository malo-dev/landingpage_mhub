<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";

import {
  Smartphone,
  Brain,
  Shield,
  Cloud,
  BarChart3,
  Globe,
  Megaphone,
  Cpu,
  Code2,
  Lock,
  Link,
  Settings,
  Video,
} from "lucide-vue-next";

interface DomainProps {
  icon: string;
  name: string;
}

const domains: DomainProps[] = [
  { icon: "smartphone", name: "Applications Mobiles" },
  { icon: "brain", name: "Intelligence Artificielle" },
  { icon: "cpu", name: "Machine Learning" },
  { icon: "video", name: "Production Vidéo 2D/3D" },
  { icon: "shield", name: "Cybersécurité" },
  { icon: "barChart3", name: "Data Analytics" },
  { icon: "cloud", name: "Cloud & Hébergement" },
  { icon: "megaphone", name: "Marketing Digital" },
  { icon: "globe", name: "Hardware & Internet" },
  { icon: "code2", name: "Développement Web" },
  { icon: "lock", name: "Cryptographie" },
  { icon: "link", name: "Blockchain & Web3" },
  { icon: "settings", name: "CRM & No-Code" },
];

const iconMap: Record<string, any> = {
  smartphone: Smartphone,
  brain: Brain,
  shield: Shield,
  cloud: Cloud,
  barChart3: BarChart3,
  globe: Globe,
  megaphone: Megaphone,
  cpu: Cpu,
  code2: Code2,
  lock: Lock,
  link: Link,
  settings: Settings,
  video: Video,
};
</script>

<template>
  <section
    id="expertise"
    class="max-w-[75%] mx-auto pb-24 sm:pb-32"
  >
    <h2 class="text-lg md:text-xl text-center mb-6 text-muted-foreground">
      13 domaines d'expertise — Full Stack IT
    </h2>

    <div class="mx-auto">
      <Marquee
        class="gap-[3rem]"
        :pauseOnHover="true"
        :fade="true"
        innerClassName="gap-[3rem]"
      >
        <div v-for="{ icon, name } in domains" :key="name">
          <div class="flex items-center text-xl md:text-2xl font-medium">
            <component :is="iconMap[icon]" class="mr-2 text-primary" stroke-width="2" />
            {{ name }}
          </div>
        </div>
      </Marquee>
    </div>
  </section>
</template>
