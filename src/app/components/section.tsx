"use client"

import { SectionContent } from '@/app/models/section.model';
import { useState } from 'react';
import { CircleAlert } from 'lucide-react';

interface CheatSheetSectionProps {
  sectionContent: SectionContent;
}

const MainContent = ({ sectionContent }:CheatSheetSectionProps) => {
  const [ openSection, setOpenSection ] = useState(true);
  const handleClickOnSection = () => setOpenSection(!openSection);

  return (
    <div className="flex flex-col">
      <section className="rounded-2xl bg-gray-200 p-5">
        <h2 className="text-2xl font-bold cursor-pointer" onClick={handleClickOnSection}>{sectionContent.title}</h2>
        {openSection && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {sectionContent.subItems.map((subItem, idx) => (
              <div key={idx} className="">
                <h3 className="flex flex-row text-lg font-bold gap-2 items-center mb-2">
                  <span>{subItem.subItemTitle}</span>
                  {subItem.tooltipInfo && (
                    <span title={subItem.tooltipInfo}>
                      <CircleAlert size={14} />
                    </span>
                  )}
                </h3>
                <div>
                  {subItem.data.map((data, idx) => (
                    <div key={idx}>
                      <p className="font-mono text-sm leading-6">
                        <span className={`text-neutral-800 ${data.highlighted ? 'font-extrabold' : ''}`}>{data.class}</span> |
                        <span className="text-gray-400 text-xs"> {data.description}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default MainContent;