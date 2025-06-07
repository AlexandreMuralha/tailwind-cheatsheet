import { ReactNode } from 'react';

export interface SectionContent {
  title: string;
  subItems: {
    subItemTitle: string;
    data: {
      class: string | JSX.Element;
      description: string;
    }[];
  }[];
}

interface SubItem {
  subItemTitle: string;
  data: Data[];
}

interface Data {
  class: ReactNode;
  description: ReactNode;
}