export interface SectionData {
  class: string;
  description: string;
  highlighted?: boolean;
}

export interface SubSection {
  subsectionTitle: string;
  data: SectionData[];
  tooltipInfo?: string;
}

export interface SectionContent {
  title: string;
  subsections: SubSection[];
}
