export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface SectionBase {
  id: string;
  type: string;
  layout: string;
  headline: string;
  subheadline?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  content?: Record<string, unknown>;
}

export interface PageDefinition {
  path: string;
  name: string;
  sections: SectionBase[];
}

export interface SiteConfig {
  projectName: string;
  displayName: string;
  tagline: string;
  pages: PageDefinition[];
  navigation: {
    items: NavItem[];
  };
}
