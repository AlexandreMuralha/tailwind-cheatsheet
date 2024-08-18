"use client"
import SectionContent from '@/app/models/section.model';
import { useState } from 'react';

interface CheatSheetSectionProps {
  sectionContent: SectionContent;
}

const MainContent = ({ sectionContent }:CheatSheetSectionProps) => {

  const [ openSection, setOpenSection ] = useState(true);
  const handleClickOnSection = () => setOpenSection(!openSection);

  return (
    <div className="flex gap-3 mb-8">
      <section className=" rounded-lg bg-gray-200 p-4 mb-8" >
        <h2 className="text-2xl font-bold cursor-pointer" onClick={handleClickOnSection}>{sectionContent.title}</h2>
          {openSection && <div>
            {sectionContent.subItems.map((subItem, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="text-lg font-bold mb-2 mt-4">{subItem.subItemTitle}</h3>
                <div>
                  {subItem.data.map((data, idx) => (
                    <div key={idx}>
                      <p className="font-mono text-sm">
                        <span className="text-neutral-800">{data.class}</span> |
                        <span className="text-gray-500"> {data.description}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))
            }
          </div>}
      </section>
    </div>
  );
}

export default MainContent;