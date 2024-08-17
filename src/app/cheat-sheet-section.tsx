
interface CheatSheetSectionProps {
  sectionContent: any;
}

const CheatSheetSection = ({ sectionContent }:CheatSheetSectionProps) => {
  return (
    <section className="mb-8">
      {sectionContent.map((section:any, index:number) => (
        <div key={index} className="bg-gray-200 p-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          <div>
            {section.subItems.map((subItem:any, index:number) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-bold mb-2">{subItem.subItemTitle}</h3>
                <div>
                  {subItem.data.map((data:any, index:number) => (
                    <div key={index}>
                      <p className="font-mono text-sm">
                        <span className="text-green-800">{data.class}</span> - <span className="text-gray-500">{data.description}</span>
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            ))
            }
          </div>
        </div>
      ))}
    </section>
  );
}

export default CheatSheetSection;