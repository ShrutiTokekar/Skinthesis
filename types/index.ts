export interface TeamMember {
  name: string;
  role: string;
  exp: string;
  img: string;
}

export interface ThumbImage {
  src: string;
  alt: string;
}

export interface AccordionItem {
  title: string;
  body: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface ComparisonRow {
  feature: string;
  retinoicAcid: string;
  retinol: string;
  vitaminC: string;
  dynasyn: string;
  dynasyClass?: string;
  retinoicClass?: string;
  retinolClass?: string;
  vitaminCClass?: string;
}
