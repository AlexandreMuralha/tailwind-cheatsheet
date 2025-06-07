"use client"
import SectionContent from '@/app/models/section.model';
import { useState } from 'react';
import Section from '@/app/components/section';

interface CheatSheetSectionProps {
  sectionContent: SectionContent[];
}

const MainContent = ({ sectionContent }:CheatSheetSectionProps) => {

 //masonry-like layout with columns items flow naturally into columns
 //break-inside-avoid to avoid breaking inside the element

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
      {sectionContent.map(( section:SectionContent, idx ) => (
        <div key={idx} className="break-inside-avoid mb-3">
          <Section sectionContent={section} />
        </div>
      ))}
    </div>
  );
}

export default MainContent;