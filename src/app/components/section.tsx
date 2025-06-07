'use client';

import { SectionContent } from '@/app/models/section.model';
import { useState } from 'react';
import ExpandAnimation from './ui/expand-animation';
import SubSection from './ui/subsection';

export default function Section({
  sectionContent,
}: {
  sectionContent: SectionContent;
}) {
  const [openSection, setOpenSection] = useState(true);
  const handleClickOnSection = () => setOpenSection(!openSection);

  return (
    <div className="flex flex-col">
      <section className="rounded-2xl bg-gray-200 p-5">
        <h2
          className="text-2xl font-bold cursor-pointer"
          onClick={handleClickOnSection}
        >
          {sectionContent.title}
        </h2>
        <ExpandAnimation openSection={openSection}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {sectionContent.subItems.map((subItem, idx) => (
              <SubSection
                key={idx}
                subItemTitle={subItem.subItemTitle}
                tooltipInfo={subItem.tooltipInfo}
                data={subItem.data}
              />
            ))}
          </div>
        </ExpandAnimation>
      </section>
    </div>
  );
}
