export interface SectionData {
  class: string;
  description: string;
  highlighted?: boolean;
}

export interface SubItem {
  subItemTitle: string;
  data: SectionData[];
  tooltipInfo?: string;
}

export interface SectionContent {
  title: string;
  subItems: SubItem[];
}
