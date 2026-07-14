import type { LucideIcon } from "lucide-react";
export type NavigationItem = { label: string; href: string };
export type Programme = {
  id: string;
  number: string;
  title: string;
  description: string;
  focus: string[];
  image: string;
  video: string;
  alt: string;
  accent: string;
  icon: LucideIcon;
};
export type ContactDetail = { value: string; requiresConfirmation: boolean };
