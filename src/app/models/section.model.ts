import { ReactNode } from 'react';

export default interface SectionContent {
  title: string;
  subItems: SubItem[];
}

interface SubItem {
  subItemTitle: string;
  data: Data[];
}

interface Data {
  class: ReactNode;
  description: ReactNode;
}