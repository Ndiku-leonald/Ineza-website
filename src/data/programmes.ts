import {
  BriefcaseBusiness,
  GraduationCap,
  HeartPulse,
  Sprout,
} from "lucide-react";
import type { Programme } from "../types/content";
export const programmes: Programme[] = [
  {
    id: "agribusiness",
    number: "01",
    title: "Agribusiness and Food Nutrition",
    icon: Sprout,
    description:
      "Supporting refugee households with knowledge, practical skills and pathways to use agricultural resources and market opportunities more effectively.",
    focus: [
      "Agribusiness entrepreneurship",
      "Agricultural value chains",
      "Smallholder farming",
      "Food and nutrition security",
      "Women and girls",
      "Food nutrition champions",
    ],
    video: "/media/agribusiness.mp4",
    image: "/images/agribusiness.webp",
    alt: "Adults tending rows of vegetables in late-afternoon light",
    accent: "#D6A84B",
  },
  {
    id: "health-care",
    number: "02",
    title: "Primary Health Care",
    icon: HeartPulse,
    description:
      "Strengthening access to health education, community outreach, maternal and child health information, first aid and referral pathways.",
    focus: [
      "Health education",
      "Community outreach",
      "Maternal and child health",
      "Village health teams",
      "Counselling",
      "Health referrals",
    ],
    video: "/media/health-care.mp4",
    image: "/images/health-care.webp",
    alt: "A health worker listening to a child’s heartbeat while a parent sits nearby",
    accent: "#B76E46",
  },
  {
    id: "education",
    number: "03",
    title: "Education",
    icon: GraduationCap,
    description:
      "Supporting access to primary education for vulnerable children through proposed tuition assistance, uniforms, scholastic materials and collaboration with schools.",
    focus: [
      "Primary education access",
      "School attendance",
      "Tuition support",
      "Uniforms",
      "Scholastic materials",
      "School partnerships",
    ],
    video: "/media/education.mp4",
    image: "/images/education.webp",
    alt: "Two schoolchildren walking together with an arm around each other’s shoulders",
    accent: "#D8E3D8",
  },
  {
    id: "youth-empowerment",
    number: "04",
    title: "Youth Empowerment",
    icon: BriefcaseBusiness,
    description:
      "Creating pathways for young people to build entrepreneurship, employability, leadership and sustainable livelihood skills.",
    focus: [
      "Entrepreneurship",
      "Employability",
      "Capacity building",
      "Peer leadership",
      "Youth associations",
      "Savings culture",
    ],
    video: "/media/youth-empowerment.mp4",
    image: "/images/youth-empowerment.webp",
    alt: "Young entrepreneurs standing behind products they have prepared",
    accent: "#D9C6AA",
  },
];
