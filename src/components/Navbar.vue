<script lang="ts" setup>
import { ref } from "vue";
import { useColorMode } from "@vueuse/core";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Menu, Zap, Store, RefreshCw, ChevronDown,
  Info, Globe, Users, Code2, Bot, Shield, Cloud,
  BarChart3, Video, Lock, Link, Settings, Megaphone,
  Wifi, Layers, ExternalLink, Languages,
} from "lucide-vue-next";
import ToggleTheme from "./ToggleTheme.vue";

const { t, locale } = useI18n();
const mode = useColorMode();
mode.value = "dark";
const router = useRouter();
const isOpen = ref(false);
const showLang = ref(false);

const langs = [
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
  { code: 'nl', flag: '🇳🇱', label: 'Nederlands' },
];

const setLang = (code: string) => {
  locale.value = code;
  localStorage.setItem('mhub-lang', code);
  showLang.value = false;
};

// Mobile accordion states
const openSections = ref<Set<string>>(new Set());
const toggleSection = (s: string) => {
  openSections.value.has(s) ? openSections.value.delete(s) : openSections.value.add(s);
};

interface NavService { icon: any; label: string; href: string }

const serviceIcons = [Code2, Bot, Shield, Cloud, BarChart3, Video, Megaphone, Wifi, Lock, Link, Settings, Layers, Users];
const serviceHrefs = ["#services","#services","#services","#services","#services","#services","#services","#services","#services","#services","#services","#services","#services"];

const navigate = (href: string) => {
  isOpen.value = false;
  showLang.value = false;
  if (href.startsWith("/")) { router.push(href); }
  else { window.location.hash = href; }
};
</script>

<template>
  <!-- Click-outside overlay for lang dropdown -->
  <div v-if="showLang" class="fixed inset-0 z-40" @click="showLang = false" />

  <header
    :class="{
      'shadow-light': mode === 'light',
      'shadow-dark': mode === 'dark',
      'w-[92%] lg:w-[90%] lg:max-w-screen-xl top-5 mx-auto sticky border z-40 rounded-2xl flex justify-between items-center p-2 bg-card shadow-md': true,
    }"
  >
    <!-- Logo -->
    <a href="/" class="font-bold text-lg flex items-center flex-shrink-0">
      <div class="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border flex items-center justify-center">
        <Zap class="w-5 h-5 text-primary-foreground" />
      </div>
      <span class="text-transparent bg-gradient-to-r from-primary to-[#0099BB] bg-clip-text font-extrabold text-xl">
        M-HUB
      </span>
    </a>

    <!-- ───── Mobile ───── -->
    <div class="flex items-center lg:hidden gap-2">
      <!-- Mobile lang switcher -->
      <div class="relative">
        <button @click="showLang = !showLang" class="flex items-center gap-1 px-2 py-1.5 rounded-md hover:bg-muted text-xs font-bold border uppercase">
          <Languages class="size-3.5 text-primary" />
          {{ locale }}
        </button>
        <div v-if="showLang" class="absolute right-0 top-full mt-1 bg-card border rounded-xl shadow-lg z-50 py-1 min-w-[150px]">
          <button v-for="l in langs" :key="l.code" @click="setLang(l.code)"
            class="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-muted transition-colors"
            :class="{ 'text-primary font-semibold': locale === l.code }">
            <span>{{ l.flag }}</span>
            <span>{{ l.label }}</span>
          </button>
        </div>
      </div>
      <ToggleTheme />
      <Sheet v-model:open="isOpen">
        <SheetTrigger as-child>
          <Menu @click="isOpen = true" class="cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="left" class="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card w-72 overflow-y-auto">
          <div>
            <SheetHeader class="mb-4 ml-4">
              <SheetTitle class="flex items-center">
                <a href="/" class="flex items-center" @click="isOpen = false">
                  <div class="bg-gradient-to-tr from-primary/70 via-primary to-primary/70 rounded-lg size-9 mr-2 border flex items-center justify-center">
                    <Zap class="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span class="text-transparent bg-gradient-to-r from-primary to-[#0099BB] bg-clip-text font-extrabold text-xl">M-HUB</span>
                </a>
              </SheetTitle>
            </SheetHeader>

            <div class="flex flex-col gap-1 px-2">

              <!-- Qui sommes nous -->
              <Collapsible>
                <CollapsibleTrigger class="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted">
                  <span class="flex items-center gap-2"><Info class="size-4 text-primary" /> {{ t('nav.whoWeAre') }}</span>
                  <ChevronDown class="size-4 text-muted-foreground" />
                </CollapsibleTrigger>
                <CollapsibleContent class="pl-4 flex flex-col gap-1 mt-1">
                  <button @click="navigate('#about')" class="text-left px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted">{{ t('nav.about') }}</button>
                  <button @click="navigate('#vision')" class="text-left px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted">{{ t('nav.vision') }}</button>
                  <button @click="navigate('#engineers')" class="text-left px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted">{{ t('nav.engineers') }}</button>
                </CollapsibleContent>
              </Collapsible>

              <!-- Services -->
              <Collapsible>
                <CollapsibleTrigger class="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted">
                  <span class="flex items-center gap-2"><Code2 class="size-4 text-primary" /> {{ t('nav.services') }}</span>
                  <ChevronDown class="size-4 text-muted-foreground" />
                </CollapsibleTrigger>
                <CollapsibleContent class="pl-4 flex flex-col gap-1 mt-1">
                  <button v-for="(icon, i) in serviceIcons" :key="i" @click="navigate(serviceHrefs[i])"
                    class="text-left px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted flex items-center gap-2">
                    <component :is="icon" class="size-3.5 text-primary flex-shrink-0" />
                    {{ (t('services.items') as any[])[i]?.title }}
                  </button>
                </CollapsibleContent>
              </Collapsible>

              <!-- Nos projets -->
              <Collapsible>
                <CollapsibleTrigger class="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted">
                  <span class="flex items-center gap-2"><Layers class="size-4 text-primary" /> {{ t('nav.projects') }}</span>
                  <ChevronDown class="size-4 text-muted-foreground" />
                </CollapsibleTrigger>
                <CollapsibleContent class="pl-4 flex flex-col gap-1 mt-1">
                  <button @click="navigate('#mstore')" class="text-left px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted flex items-center gap-2">
                    <Store class="size-3.5 text-primary" /> {{ t('nav.mstoreOverview') }}
                  </button>
                  <button @click="navigate('#modules')" class="text-left px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted">
                    {{ t('nav.modules29') }}
                  </button>
                  <button @click="navigate('/offres')" class="text-left px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted">
                    {{ t('nav.offersPage') }}
                  </button>
                  <button @click="navigate('/creer-commerce')" class="text-left px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/10 rounded-md flex items-center gap-2">
                    <Store class="size-3.5" /> {{ t('nav.createCommerce') }}
                  </button>
                  <button @click="navigate('/reabonnement')" class="text-left px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted flex items-center gap-2">
                    <RefreshCw class="size-3.5" /> {{ t('nav.renew') }}
                  </button>
                </CollapsibleContent>
              </Collapsible>

              <Separator class="my-1" />

              <button @click="navigate('#pricing')" class="text-left px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted">{{ t('nav.pricing') }}</button>
              <button @click="navigate('#vision')" class="text-left px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted">{{ t('nav.visionLink') }}</button>
              <button @click="navigate('#devis')" class="text-left px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted">{{ t('nav.quote') }}</button>
              <button @click="navigate('#contact')" class="text-left px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted">{{ t('nav.contact') }}</button>

              <Separator class="my-1" />
              <Button @click="navigate('/creer-commerce')" class="w-full gap-2 mt-2">
                <Store class="size-4" /> {{ t('nav.createCommerce') }}
              </Button>
            </div>
          </div>

          <SheetFooter class="flex-col sm:flex-col justify-start items-start px-4">
            <Separator class="mb-2" />
            <ToggleTheme />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>

    <!-- ───── Desktop ───── -->
    <NavigationMenu class="hidden lg:flex">
      <NavigationMenuList class="gap-0">

        <!-- Qui sommes nous -->
        <NavigationMenuItem>
          <NavigationMenuTrigger class="bg-card text-sm px-3">{{ t('nav.whoWeAre') }}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div class="w-64 p-3 flex flex-col gap-1">
              <NavigationMenuLink as-child>
                <a href="#about" class="flex items-center gap-3 p-3 rounded-lg hover:bg-muted group">
                  <div class="bg-primary/10 p-1.5 rounded-md"><Info class="size-4 text-primary" /></div>
                  <div>
                    <p class="text-sm font-semibold">{{ t('nav.about') }}</p>
                    <p class="text-xs text-muted-foreground">{{ t('nav.aboutMission') }}</p>
                  </div>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink as-child>
                <a href="#vision" class="flex items-center gap-3 p-3 rounded-lg hover:bg-muted">
                  <div class="bg-primary/10 p-1.5 rounded-md"><Globe class="size-4 text-primary" /></div>
                  <div>
                    <p class="text-sm font-semibold">{{ t('nav.visionLink') }}</p>
                    <p class="text-xs text-muted-foreground">{{ t('nav.visionRdc') }}</p>
                  </div>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink as-child>
                <a href="#engineers" class="flex items-center gap-3 p-3 rounded-lg hover:bg-muted">
                  <div class="bg-primary/10 p-1.5 rounded-md"><Users class="size-4 text-primary" /></div>
                  <div>
                    <p class="text-sm font-semibold">{{ t('nav.engineers') }}</p>
                    <p class="text-xs text-muted-foreground">{{ t('nav.engineers6') }}</p>
                  </div>
                </a>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <!-- Services -->
        <NavigationMenuItem>
          <NavigationMenuTrigger class="bg-card text-sm px-3">{{ t('nav.services') }}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div class="w-[680px] p-4">
              <div class="grid grid-cols-2 gap-2">
                <div class="col-span-2 mb-2 px-2">
                  <p class="text-xs font-semibold text-primary tracking-wider uppercase">{{ t('nav.servicesExpertise') }}</p>
                </div>
                <NavigationMenuLink
                  v-for="(icon, i) in serviceIcons"
                  :key="i"
                  as-child
                >
                  <a :href="serviceHrefs[i]" class="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted">
                    <component :is="icon" class="size-4 text-primary flex-shrink-0" />
                    <span class="text-sm font-medium">{{ (t('services.items') as any[])[i]?.title }}</span>
                  </a>
                </NavigationMenuLink>
              </div>
              <div class="mt-3 pt-3 border-t">
                <a href="#services" class="text-xs text-primary hover:underline flex items-center gap-1">
                  {{ t('nav.seeAllServices') }}
                </a>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <!-- Nos projets -->
        <NavigationMenuItem>
          <NavigationMenuTrigger class="bg-card text-sm px-3">{{ t('nav.projects') }}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div class="w-[460px] p-4">
              <div class="mb-3">
                <p class="text-xs font-semibold text-primary tracking-wider uppercase mb-2 px-1">{{ t('nav.firstProject') }}</p>
                <div class="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-4 mb-2">
                  <div class="flex items-center gap-2 mb-2">
                    <Store class="size-5 text-primary" />
                    <span class="font-bold text-lg">M-STORE</span>
                    <span class="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">{{ t('nav.mstoreOnline') }}</span>
                  </div>
                  <p class="text-xs text-muted-foreground mb-3">{{ t('nav.mstoreDesc') }}</p>
                  <div class="grid grid-cols-2 gap-2">
                    <NavigationMenuLink as-child>
                      <a href="#mstore" class="text-xs flex items-center gap-1.5 p-2 rounded-lg hover:bg-background border border-transparent hover:border-border">
                        <Layers class="size-3.5 text-primary" /> {{ t('nav.preview') }}
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink as-child>
                      <a href="#modules" class="text-xs flex items-center gap-1.5 p-2 rounded-lg hover:bg-background border border-transparent hover:border-border">
                        <BarChart3 class="size-3.5 text-primary" /> {{ t('nav.modules29short') }}
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink as-child>
                      <a href="#pricing" class="text-xs flex items-center gap-1.5 p-2 rounded-lg hover:bg-background border border-transparent hover:border-border">
                        <Settings class="size-3.5 text-primary" /> {{ t('nav.pricing') }}
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink as-child>
                      <a href="/offres" class="text-xs flex items-center gap-1.5 p-2 rounded-lg hover:bg-background border border-transparent hover:border-border">
                        <ExternalLink class="size-3.5 text-primary" /> {{ t('nav.fullPage') }}
                      </a>
                    </NavigationMenuLink>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <NavigationMenuLink as-child>
                    <a href="/creer-commerce"
                      class="flex items-center gap-2 p-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                      <Store class="size-4" />
                      <div>
                        <p class="text-xs font-bold">{{ t('nav.createCommerce') }}</p>
                        <p class="text-xs opacity-70">{{ t('nav.freeRegistration') }}</p>
                      </div>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink as-child>
                    <a href="/reabonnement"
                      class="flex items-center gap-2 p-3 rounded-lg border hover:bg-muted transition-colors">
                      <RefreshCw class="size-4 text-primary" />
                      <div>
                        <p class="text-xs font-bold">{{ t('nav.renewLabel') }}</p>
                        <p class="text-xs text-muted-foreground">{{ t('nav.mySubscription') }}</p>
                      </div>
                    </a>
                  </NavigationMenuLink>
                </div>
              </div>
              <div class="border-t pt-3">
                <p class="text-xs text-muted-foreground px-1">{{ t('nav.comingSoon') }}</p>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <!-- Liens directs -->
        <NavigationMenuItem>
          <NavigationMenuLink as-child>
            <a href="#pricing" class="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors">{{ t('nav.pricing') }}</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink as-child>
            <a href="#vision" class="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors">{{ t('nav.visionLink') }}</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink as-child>
            <a href="#devis" class="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors">{{ t('nav.quote') }}</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink as-child>
            <a href="#contact" class="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors">{{ t('nav.contact') }}</a>
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>

    <!-- CTA right -->
    <div class="hidden lg:flex items-center gap-2">
      <ToggleTheme />
      <!-- Desktop lang switcher -->
      <div class="relative">
        <button @click="showLang = !showLang"
          class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-muted text-sm font-bold border uppercase transition-colors">
          <Languages class="size-4 text-primary" />
          {{ locale }}
        </button>
        <div v-if="showLang" class="absolute right-0 top-full mt-1 bg-card border rounded-xl shadow-lg z-50 py-1 min-w-[150px]">
          <button v-for="l in langs" :key="l.code" @click="setLang(l.code)"
            class="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-muted transition-colors"
            :class="{ 'text-primary font-semibold': locale === l.code }">
            <span>{{ l.flag }}</span>
            <span>{{ l.label }}</span>
          </button>
        </div>
      </div>
      <Button size="sm" @click="router.push('/creer-commerce')" class="gap-1.5">
        <Store class="size-4" />
        {{ t('nav.createCommerce') }}
      </Button>
    </div>
  </header>
</template>

<style scoped>
.shadow-light { box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.085); }
.shadow-dark  { box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.141); }
</style>
