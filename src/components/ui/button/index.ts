import { type VariantProps, cva } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none",
  {
    variants: {
      variant: {
        // CTA principal : ombre flottante colorée qui s'intensifie et "soulève" le bouton au survol,
        // léger relief sur le texte (text-shadow) pour l'effet glass/premium.
        default:
          "bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 active:translate-y-0",
        destructive:
          "bg-destructive text-destructive-foreground shadow-md shadow-destructive/20 hover:-translate-y-0.5 hover:bg-destructive/90 hover:shadow-lg hover:shadow-destructive/30 active:translate-y-0",
        // Vrai glassmorphism : reprend .glass-panel (fond flouté + liseré dégradé), qui se soulève au survol.
        outline:
          "border border-input bg-card text-foreground shadow-sm hover:-translate-y-0.5 hover:bg-muted hover:shadow-md active:translate-y-0",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:-translate-y-0.5 hover:bg-secondary/80 hover:shadow-md active:translate-y-0",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-lg px-3.5",
        lg: "h-12 rounded-xl px-7 text-[15px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
