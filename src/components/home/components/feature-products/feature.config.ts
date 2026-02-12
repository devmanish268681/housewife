// feature.config.ts
import { faClock, faLeaf, faShield } from "@fortawesome/free-solid-svg-icons";

export const FEATURE_CONFIG = [
  {
    icon: faClock,
    titleKey: "fast_delivery",
    descKey: "fast_description",
  },
  {
    icon: faLeaf,
    titleKey: "fresh_products",
    descKey: "fresh_desc",
  },
  {
    icon: faShield,
    titleKey: "trust__quality",
    descKey: "trust_desc",
  },
] as const;
