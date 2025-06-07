'use client';

import { CircleAlert } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/app/components/ui/tooltip';

interface SubSectionTitleProps {
  subsectionTitle: string;
  tooltipInfo?: string;
}

function SubSectionTitle({
  subsectionTitle,
  tooltipInfo,
}: SubSectionTitleProps) {
  return (
    <h3 className="flex flex-row text-lg font-bold gap-2 items-center mb-2">
      <span>{subsectionTitle}</span>
      {tooltipInfo && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <CircleAlert
                size={14}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>{tooltipInfo}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </h3>
  );
}

interface SubSectionItemProps {
  class: string;
  description: string;
  highlighted?: boolean;
}

function SubSectionItem({
  class: className,
  description,
  highlighted,
}: SubSectionItemProps) {
  return (
    <div>
      <p className="font-mono text-sm leading-6">
        <span
          className={`text-neutral-800 ${highlighted ? 'font-extrabold' : ''}`}
        >
          {className}
        </span>{' '}
        |<span className="text-gray-400 text-xs"> {description}</span>
      </p>
    </div>
  );
}

interface SubSectionProps {
  subsectionTitle: string;
  tooltipInfo?: string;
  data: Array<{
    class: string;
    description: string;
    highlighted?: boolean;
  }>;
}

export default function SubSection({
  subsectionTitle,
  tooltipInfo,
  data,
}: SubSectionProps) {
  return (
    <div>
      <SubSectionTitle
        subsectionTitle={subsectionTitle}
        tooltipInfo={tooltipInfo}
      />
      <div>
        {data.map((item, idx) => (
          <SubSectionItem
            key={idx}
            class={item.class}
            description={item.description}
            highlighted={item.highlighted}
          />
        ))}
      </div>
    </div>
  );
}
