"use client"
import SectionContent from '@/app/models/section.model';
import { useState } from 'react';
import Section from '@/app/components/section';

interface CheatSheetSectionProps {
  sectionContent: SectionContent[];
}

const MainContent = ({ sectionContent }:CheatSheetSectionProps) => {

  return (
    <div className="flex gap-3 mb-8">
      {sectionContent.map(( section:SectionContent, idx ) => (
        <div key={idx}>
          <Section sectionContent={section} />
        </div>
      ))}
    </div>
  );
}

export default MainContent;