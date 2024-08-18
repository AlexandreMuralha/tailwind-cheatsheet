import SectionContent from '@/app/models/section.model';

interface CheatSheetSectionProps {
  sectionContent: SectionContent[];
}

const CheatSheetSection = ({ sectionContent }:CheatSheetSectionProps) => {
  return (
    <div className="flex gap-3 mb-8">
      {sectionContent.map(( section:SectionContent, idx ) => (
        <section key={idx} className="basis-1/2 rounded-lg bg-gray-200 p-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          <div>
            {section.subItems.map((subItem, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="text-lg font-bold mb-2">{subItem.subItemTitle}</h3>
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
          </div>
        </section>
      ))}
    </div>
  );
}

export default CheatSheetSection;