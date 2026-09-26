import { Mail, ShoppingBag, Smartphone, Store, HeartPulse, Cloud } from "lucide-vue-next";
import type { Component } from "vue";

export interface Product {
  /** Clé i18n : home.products.items.<key> */
  key: "mmail" | "mmarket" | "mstoremobile" | "mstore" | "mhms" | "mcloud";
  icon: Component;
  /** Couleur propre au produit (hex) — teintes dérivées via color-mix dans les templates. */
  color: string;
  href: string;
  external?: boolean;
}

// Ordre d'affichage : messagerie, marketplace, apps mobiles / gestion, santé, cloud.
export const products: Product[] = [
  { key: "mmail", icon: Mail, color: "#4f5bd5", href: "https://m-mail-admin.vercel.app/", external: true },
  { key: "mmarket", icon: ShoppingBag, color: "#c2570c", href: "/m-market" },
  { key: "mstoremobile", icon: Smartphone, color: "#0e9f6e", href: "#contact" },
  { key: "mstore", icon: Store, color: "#0891b2", href: "/offres" },
  { key: "mhms", icon: HeartPulse, color: "#e11d48", href: "#contact" },
  { key: "mcloud", icon: Cloud, color: "#2b8be0", href: "https://ishara.test.bimreseau.com/", external: true },
];
