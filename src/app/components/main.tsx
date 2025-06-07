"use client"

import Section from '@/app/components/section';
import { SectionContent } from '@/app/models/section.model';

interface CheatSheetSectionProps {
  sectionContent: SectionContent[];
}

const Main= ({ sectionContent }:CheatSheetSectionProps) => {
  return (
    <div className="flex flex-col gap-6">
      {sectionContent.map(( section:SectionContent, idx ) => (
        <div key={idx}>
          <Section sectionContent={section} />
        </div>
      ))}
    </div>
  );
}

export default Main;