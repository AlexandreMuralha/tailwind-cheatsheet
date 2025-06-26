const flexbox = {
  title: 'Flexbox',
  subsections: [
    {
      subsectionTitle: 'Container',
      data: [
        {
          class: 'flex',
          description: 'sets the container as a flex container',
        },
        {
          class: 'inline-flex',
          description: 'sets the container as an inline flex container',
        },
        {
          class: 'flex-row',
          description: 'sets the main axis as horizontal',
        },
        {
          class: 'flex-col',
          description: 'sets the main axis as vertical',
        },
        {
          class: 'flex-wrap',
          description:
            'allows the items to wrap if they exceed the container width',
        },
        {
          class: 'flex-nowrap',
          description: 'prevents the items from wrapping',
        },
      ],
    },
  ],
};

const alignment = {
  title: 'Alignment',
  subsections: [
    {
      subsectionTitle: 'Justify Content',
      tooltipInfo:
        'The justify-content utilities control the alignment of items along the main axis (horizontal axis in flexbox by default).',
      data: [
        {
          class: 'justify-start',
          description: 'aligns the items to the start of the container',
        },
        {
          class: 'justify-center',
          description: 'aligns the items to the center of the container',
        },
        {
          class: 'justify-end',
          description: 'aligns the items to the end of the container',
        },
        {
          class: 'justify-between',
          description: 'aligns the items with equal space between them',
        },
        {
          class: 'justify-around',
          description: 'aligns the items with equal space around them',
        },
      ],
    },
    {
      subsectionTitle: 'Align Items',
      data: [
        {
          class: 'items-start',
          description: 'aligns the items to the start of the container',
        },
        {
          class: 'items-center',
          description: 'aligns the items to the center of the container',
        },
        {
          class: 'items-end',
          description: 'aligns the items to the end of the container',
        },
        {
          class: 'items-baseline',
          description: 'aligns the items to the baseline of the container',
        },
        {
          class: 'items-stretch',
          description: 'stretches the items to fill the container',
        },
      ],
    },
    {
      subsectionTitle: 'Align Content',
      data: [
        {
          class: 'content-start',
          description: 'aligns the lines to the start of the container',
        },
        {
          class: 'content-center',
          description: 'aligns the lines to the center of the container',
        },
        {
          class: 'content-end',
          description: 'aligns the lines to the end of the container',
        },
        {
          class: 'content-between',
          description: 'aligns the lines with equal space between them',
        },
        {
          class: 'content-around',
          description: 'aligns the lines with equal space around them',
        },
        {
          class: 'content-stretch',
          description: 'stretches the lines to fill the container',
        },
      ],
    },
    {
      subsectionTitle: 'Flex Items',
      data: [
        {
          class: 'flex-grow',
          description: 'allows the item to grow to fill the container',
        },
        {
          class: 'flex-shrink',
          description: 'allows the item to shrink to fit the container',
        },
        {
          class: 'flex-basis',
          description: 'sets the initial size of the item',
        },
        {
          class: 'order',
          description: 'sets the order of the item in the container',
        },
        {
          class: 'align-self',
          description: 'overrides the align-items value for the item',
        },
      ],
    },
  ],
};

const typography = {
  title: 'Typography',
  subsections: [
    {
      subsectionTitle: 'Font Size',
      data: [
        {
          class: 'text-xs',
          description: 'font size: 0.75rem (12px)',
        },
        {
          class: 'text-sm',
          description: 'font size: 0.875rem (14px)',
        },
        {
          class: 'text-base',
          description: 'font size: 1rem (16px)',
          highlighted: true,
        },
        {
          class: 'text-lg',
          description: 'font size: 1.125rem (18px)',
          highlighted: true,
        },
        {
          class: 'text-xl',
          description: 'font size: 1.25rem (20px)',
          highlighted: true,
        },
        {
          class: 'text-2xl',
          description: 'font size: 1.5rem (24px)',
        },
        {
          class: 'text-3xl',
          description: 'font size: 1.875rem (30px)',
        },
        {
          class: 'text-4xl',
          description: 'font size: 2.25rem (36px)',
        },
        {
          class: 'text-5xl',
          description: 'font size: 3rem (48px)',
        },
        {
          class: 'text-6xl',
          description: 'font size: 3.75rem (60px)',
        },
        {
          class: 'text-7xl',
          description: 'font size: 4.5rem (72px)',
        },
        {
          class: 'text-8xl',
          description: 'font size: 6rem (96px)',
        },
        {
          class: 'text-9xl',
          description: 'font size: 8rem (128px)',
        },
      ],
    },
    {
      subsectionTitle: 'Font Weight',
      data: [
        {
          class: 'font-thin',
          description: 'font weight: 100',
        },
        {
          class: 'font-extralight',
          description: 'font weight: 200',
        },
        {
          class: 'font-light',
          description: 'font weight: 300',
        },
        {
          class: 'font-normal',
          description: 'font weight: 400',
        },
        {
          class: 'font-medium',
          description: 'font weight: 500',
        },
        {
          class: 'font-semibold',
          description: 'font weight: 600',
        },
        {
          class: 'font-bold',
          description: 'font weight: 700',
        },
        {
          class: 'font-extrabold',
          description: 'font weight: 800',
        },
        {
          class: 'font-black',
          description: 'font weight: 900',
        },
      ],
    },
    {
      subsectionTitle: 'Line Height',
      data: [
        {
          class: 'leading-none',
          description: 'line-height: 1',
        },
        {
          class: 'leading-tight',
          description: 'line-height: 1.25',
        },
        {
          class: 'leading-snug',
          description: 'line-height: 1.375',
        },
        {
          class: 'leading-normal',
          description: 'line-height: 1.5',
        },
        {
          class: 'leading-relaxed',
          description: 'line-height: 1.625',
        },
        {
          class: 'leading-loose',
          description: 'line-height: 2',
        },
        {
          class: 'leading-3',
          description: 'line-height: 0.75rem (12px)',
        },
        {
          class: 'leading-4',
          description: 'line-height: 1rem (16px)',
        },
        {
          class: 'leading-5',
          description: 'line-height: 1.25rem (20px)',
        },
        {
          class: 'leading-6',
          description: 'line-height: 1.5rem (24px)',
        },
        {
          class: 'leading-7',
          description: 'line-height: 1.75rem (28px)',
        },
        {
          class: 'leading-8',
          description: 'line-height: 2rem (32px)',
        },
        {
          class: 'leading-9',
          description: 'line-height: 2.25rem (36px)',
        },
        {
          class: 'leading-10',
          description: 'line-height: 2.5rem (40px)',
        },
      ],
    },
  ],
};

const grid = {
  title: 'Grid',
  subsections: [
    {
      subsectionTitle: 'Grid Container',
      data: [
        {
          class: 'grid',
          description: 'sets the container as a grid container',
        },
        {
          class: 'inline-grid',
          description: 'sets the container as an inline grid container',
        },
      ],
    },
  ],
};

const gapAndSpacing = {
  title: 'Gap and Spacing',
  subsections: [
    {
      subsectionTitle: 'Gap',
      tooltipInfo:
        'Control the space between items in a grid layout or a flex container when using, applies both vertically and horizontally.',
      data: [
        {
          class: 'gap-0',
          description: '0rem (0px)',
        },
        {
          class: 'gap-px',
          description: '1px',
        },
        {
          class: 'gap-0.5',
          description: '0.125rem (2px)',
        },
        {
          class: 'gap-1',
          description: '0.25rem (4px)',
        },
        {
          class: 'gap-1.5',
          description: '0.375rem (6px)',
        },
        {
          class: 'gap-2',
          description: '0.5rem (8px)',
        },
        {
          class: 'gap-2.5',
          description: '0.625rem (10px)',
        },
        {
          class: 'gap-3',
          description: '0.75rem (12px)',
        },
        {
          class: 'gap-3.5',
          description: '0.875rem (14px)',
        },
        {
          class: 'gap-4',
          description: '1rem (16px)',
        },
        {
          class: 'gap-5',
          description: '1.25rem (20px)',
        },
        {
          class: 'gap-6',
          description: '1.5rem (24px)',
        },
        {
          class: 'gap-7',
          description: '1.75rem (28px)',
        },
        {
          class: 'gap-8',
          description: '2rem (32px)',
        },
        {
          class: 'gap-9',
          description: '2.25rem (36px)',
        },
        {
          class: 'gap-10',
          description: '2.5rem (40px)',
        },
        {
          class: 'gap-11',
          description: '2.75rem (44px)',
        },
        {
          class: 'gap-12',
          description: '3rem (48px)',
        },
        {
          class: 'gap-14',
          description: '3.5rem (56px)',
        },
        {
          class: 'gap-16',
          description: '4rem (64px)',
        },
        {
          class: 'gap-20',
          description: '5rem (80px)',
        },
        {
          class: 'gap-24',
          description: '6rem (96px)',
        },
        {
          class: 'gap-28',
          description: '7rem (112px)',
        },
        {
          class: 'gap-32',
          description: '8rem (128px)',
        },
        {
          class: 'gap-36',
          description: '9rem (144px)',
        },
        {
          class: 'gap-40',
          description: '10rem (160px)',
        },
        {
          class: 'gap-44',
          description: '11rem (176px)',
        },
        {
          class: 'gap-48',
          description: '12rem (192px)',
        },
        {
          class: 'gap-52',
          description: '13rem (208px)',
        },
        {
          class: 'gap-56',
          description: '14rem (224px)',
        },
        {
          class: 'gap-60',
          description: '15rem (240px)',
        },
        {
          class: 'gap-64',
          description: '16rem (256px)',
        },
        {
          class: 'gap-72',
          description: '18rem (288px)',
        },
        {
          class: 'gap-80',
          description: '20rem (320px)',
        },
        {
          class: 'gap-96',
          description: '24rem (384px)',
        },
      ],
    },
    {
      subsectionTitle: 'Spacing',
      tooltipInfo:
        'Controlling spacing between child elements, both in flexbox and grid layouts. Use space-x-{size} / space-y-{size}',
      data: [
        {
          class: 'space-x-0',
          description: '0rem (0px)',
        },
        {
          class: 'space-x-px',
          description: '1px',
        },
        {
          class: 'space-x-0.5',
          description: '0.125rem (2px)',
        },
        {
          class: 'space-x-1',
          description: '0.25rem (4px)',
        },
        {
          class: 'space-x-1.5',
          description: '0.375rem (6px)',
        },
        {
          class: 'space-x-2',
          description: '0.5rem (8px)',
        },
        {
          class: 'space-x-2.5',
          description: '0.625rem (10px)',
        },
        {
          class: 'space-x-3',
          description: '0.75rem (12px)',
        },
        {
          class: 'space-x-3.5',
          description: '0.875rem (14px)',
        },
        {
          class: 'space-x-4',
          description: '1rem (16px)',
        },
        {
          class: 'space-x-5',
          description: '1.25rem (20px)',
        },
        {
          class: 'space-x-6',
          description: '1.5rem (24px)',
        },
        {
          class: 'space-x-7',
          description: '1.75rem (28px)',
        },
        {
          class: 'space-x-8',
          description: '2rem (32px)',
        },
        {
          class: 'space-x-9',
          description: '2.25rem (36px)',
        },
        {
          class: 'space-x-10',
          description: '2.5rem (40px)',
        },
        {
          class: 'space-x-11',
          description: '2.75rem (44px)',
        },
        {
          class: 'space-x-12',
          description: '3rem (48px)',
        },
        {
          class: 'space-x-14',
          description: '3.5rem (56px)',
        },
        {
          class: 'space-x-16',
          description: '4rem (64px)',
        },
        {
          class: 'space-x-20',
          description: '5rem (80px)',
        },
        {
          class: 'space-x-24',
          description: '6rem (96px)',
        },
        {
          class: 'space-x-28',
          description: '7rem (112px)',
        },
        {
          class: 'space-x-32',
          description: '8rem (128px)',
        },
        {
          class: 'space-x-36',
          description: '9rem (144px)',
        },
        {
          class: 'space-x-40',
          description: '10rem (160px)',
        },
        {
          class: 'space-x-44',
          description: '11rem (176px)',
        },
        {
          class: 'space-x-48',
          description: '12rem (192px)',
        },
        {
          class: 'space-x-52',
          description: '13rem (208px)',
        },
        {
          class: 'space-x-56',
          description: '14rem (224px)',
        },
        {
          class: 'space-x-60',
          description: '15rem (240px)',
        },
        {
          class: 'space-x-64',
          description: '16rem (256px)',
        },
        {
          class: 'space-x-72',
          description: '18rem (288px)',
        },
        {
          class: 'space-x-80',
          description: '20rem (320px)',
        },
        {
          class: 'space-x-96',
          description: '24rem (384px)',
        },
      ],
    },
  ],
};

const sizing = {
  title: 'Sizing',
  subsections: [
    {
      subsectionTitle: 'Width and Height',
      tooltipInfo:
        'Control the width and height of elements. Use w-{size} for width and h-{size} for height.',
      data: [
        {
          class: 'w-0',
          description: 'width: 0px',
        },
        {
          class: 'h-px',
          description: 'height: 1px',
        },
        {
          class: 'w-0.5',
          description: 'width: 0.125rem (2px)',
        },
        {
          class: 'h-1',
          description: 'height: 0.25rem (4px)',
        },
        {
          class: 'w-1.5',
          description: 'width: 0.375rem (6px)',
        },
        {
          class: 'h-2',
          description: 'height: 0.5rem (8px)',
        },
        {
          class: 'w-2.5',
          description: 'width: 0.625rem (10px)',
        },
        {
          class: 'h-3',
          description: 'height: 0.75rem (12px)',
        },
        {
          class: 'w-3.5',
          description: 'width: 0.875rem (14px)',
        },
        {
          class: 'h-4',
          description: 'height: 1rem (16px)',
        },
        {
          class: 'w-5',
          description: 'width: 1.25rem (20px)',
        },
        {
          class: 'h-6',
          description: 'height: 1.5rem (24px)',
        },
        {
          class: 'w-7',
          description: 'width: 1.75rem (28px)',
        },
        {
          class: 'h-8',
          description: 'height: 2rem (32px)',
        },
        {
          class: 'w-9',
          description: 'width: 2.25rem (36px)',
        },
        {
          class: 'h-10',
          description: 'height: 2.5rem (40px)',
        },
        {
          class: 'w-11',
          description: 'width: 2.75rem (44px)',
        },
        {
          class: 'h-12',
          description: 'height: 3rem (48px)',
        },
        {
          class: 'w-14',
          description: 'width: 3.5rem (56px)',
        },
        {
          class: 'h-16',
          description: 'height: 4rem (64px)',
        },
        {
          class: 'w-20',
          description: 'width: 5rem (80px)',
        },
        {
          class: 'h-24',
          description: 'height: 6rem (96px)',
        },
        {
          class: 'w-28',
          description: 'width: 7rem (112px)',
        },
        {
          class: 'h-32',
          description: 'height: 8rem (128px)',
        },
        {
          class: 'w-36',
          description: 'width: 9rem (144px)',
        },
        {
          class: 'h-40',
          description: 'height: 10rem (160px)',
        },
        {
          class: 'w-44',
          description: 'width: 11rem (176px)',
        },
        {
          class: 'h-48',
          description: 'height: 12rem (192px)',
        },
        {
          class: 'w-52',
          description: 'width: 13rem (208px)',
        },
        {
          class: 'h-56',
          description: 'height: 14rem (224px)',
        },
        {
          class: 'w-60',
          description: 'width: 15rem (240px)',
        },
        {
          class: 'h-64',
          description: 'height: 16rem (256px)',
        },
        {
          class: 'w-72',
          description: 'width: 18rem (288px)',
        },
        {
          class: 'h-80',
          description: 'height: 20rem (320px)',
        },
        {
          class: 'w-96',
          description: 'width: 24rem (384px)',
        },
        {
          class: 'h-auto',
          description: 'height: auto',
        },
        {
          class: 'w-full',
          description: 'width: 100%',
        },
        {
          class: 'h-screen',
          description: 'height: 100vh',
        },
        {
          class: 'w-svw',
          description: 'width: 100svw',
        },
        {
          class: 'h-lvh',
          description: 'height: 100lvw',
        },
        {
          class: 'w-dvw',
          description: 'width: 100dvw',
        },
        {
          class: 'h-min',
          description: 'height: min-content',
        },
        {
          class: 'w-max',
          description: 'width: max-content',
        },
        {
          class: 'h-fit',
          description: 'height: fit-content',
        },
      ],
    },
    {
      subsectionTitle: 'Minimum width/height',
      tooltipInfo:
        'Control the minimum width and height of elements. Use min-w-{size} for minimum width and min-h-{size} for minimum height.',
      data: [
        {
          class: 'min-w-0',
          description: 'min-width: 0px',
        },
        {
          class: 'min-h-px',
          description: 'min-height: 1px',
        },
        {
          class: 'min-w-0.5',
          description: 'min-width: 0.125rem (2px)',
        },
        {
          class: 'min-h-1',
          description: 'min-height: 0.25rem (4px)',
        },
        {
          class: 'min-w-1.5',
          description: 'min-width: 0.375rem (6px)',
        },
        {
          class: 'min-h-2',
          description: 'min-height: 0.5rem (8px)',
        },
        {
          class: 'min-w-2.5',
          description: 'min-width: 0.625rem (10px)',
        },
        {
          class: 'min-h-3',
          description: 'min-height: 0.75rem (12px)',
        },
        {
          class: 'min-w-3.5',
          description: 'min-width: 0.875rem (14px)',
        },
        {
          class: 'min-h-4',
          description: 'min-height: 1rem (16px)',
        },
        {
          class: 'min-w-5',
          description: 'min-width: 1.25rem (20px)',
        },
        {
          class: 'min-h-6',
          description: 'min-height: 1.5rem (24px)',
        },
        {
          class: 'min-w-7',
          description: 'min-width: 1.75rem (28px)',
        },
        {
          class: 'min-h-8',
          description: 'min-height: 2rem (32px)',
        },
        {
          class: 'min-w-9',
          description: 'min-width: 2.25rem (36px)',
        },
        {
          class: 'min-h-10',
          description: 'min-height: 2.5rem (40px)',
        },
        {
          class: 'min-w-11',
          description: 'min-width: 2.75rem (44px)',
        },
        {
          class: 'min-h-12',
          description: 'min-height: 3rem (48px)',
        },
        {
          class: 'min-w-14',
          description: 'min-width: 3.5rem (56px)',
        },
        {
          class: 'min-h-16',
          description: 'min-height: 4rem (64px)',
        },
        {
          class: 'min-w-20',
          description: 'min-width: 5rem (80px)',
        },
        {
          class: 'min-h-24',
          description: 'min-height: 6rem (96px)',
        },
        {
          class: 'min-w-28',
          description: 'min-width: 7rem (112px)',
        },
        {
          class: 'min-h-32',
          description: 'min-height: 8rem (128px)',
        },
        {
          class: 'min-w-36',
          description: 'min-width: 9rem (144px)',
        },
        {
          class: 'min-h-40',
          description: 'min-height: 10rem (160px)',
        },
        {
          class: 'min-w-44',
          description: 'min-width: 11rem (176px)',
        },
        {
          class: 'min-h-48',
          description: 'min-height: 12rem (192px)',
        },
        {
          class: 'min-w-52',
          description: 'min-width: 13rem (208px)',
        },
        {
          class: 'min-h-56',
          description: 'min-height: 14rem (224px)',
        },
        {
          class: 'min-w-60',
          description: 'min-width: 15rem (240px)',
        },
        {
          class: 'min-h-64',
          description: 'min-height: 16rem (256px)',
        },
        {
          class: 'min-w-72',
          description: 'min-width: 18rem (288px)',
        },
        {
          class: 'min-h-80',
          description: 'min-height: 20rem (320px)',
        },
        {
          class: 'min-w-96',
          description: 'min-width: 24rem (384px)',
        },
        {
          class: 'min-h-auto',
          description: 'min-height: auto',
        },
        {
          class: 'min-w-full',
          description: 'min-width: 100%',
        },
        {
          class: 'min-h-screen',
          description: 'min-height: 100vh',
        },
        {
          class: 'min-w-svw',
          description: 'min-width: 100svw',
        },
        {
          class: 'min-h-lvh',
          description: 'min-height: 100lvw',
        },
        {
          class: 'min-w-dvw',
          description: 'min-width: 100dvw',
        },
        {
          class: 'min-h-min',
          description: 'min-height: min-content',
        },
        {
          class: 'min-w-max',
          description: 'min-width: max-content',
        },
        {
          class: 'min-h-fit',
          description: 'min-height: fit-content',
        },
      ],
    },
    {
      subsectionTitle: 'Maximum width/height',
      tooltipInfo:
        'Control the maximum width and height of elements. Use max-w-{size} for maximum width and max-h-{size} for maximum height.',
      data: [
        {
          class: 'max-w-0',
          description: 'max-width: 0rem',
        },
        {
          class: 'max-h-px',
          description: 'max-height: 1px',
        },
        {
          class: 'max-w-0.5',
          description: 'max-width: 0.125rem (2px)',
        },
        {
          class: 'max-h-1',
          description: 'max-height: 0.25rem (4px)',
        },
        {
          class: 'max-w-1.5',
          description: 'max-width: 0.375rem (6px)',
        },
        {
          class: 'max-h-2',
          description: 'max-height: 0.5rem (8px)',
        },
        {
          class: 'max-w-2.5',
          description: 'max-width: 0.625rem (10px)',
        },
        {
          class: 'max-h-3',
          description: 'max-height: 0.75rem (12px)',
        },
        {
          class: 'max-w-3.5',
          description: 'max-width: 0.875rem (14px)',
        },
        {
          class: 'max-h-4',
          description: 'max-height: 1rem (16px)',
        },
        {
          class: 'max-w-5',
          description: 'max-width: 1.25rem (20px)',
        },
        {
          class: 'max-h-6',
          description: 'max-height: 1.5rem (24px)',
        },
        {
          class: 'max-w-7',
          description: 'max-width: 1.75rem (28px)',
        },
        {
          class: 'max-h-8',
          description: 'max-height: 2rem (32px)',
        },
        {
          class: 'max-w-9',
          description: 'max-width: 2.25rem (36px)',
        },
        {
          class: 'max-h-10',
          description: 'max-height: 2.5rem (40px)',
        },
        {
          class: 'max-w-11',
          description: 'max-width: 2.75rem (44px)',
        },
        {
          class: 'max-h-12',
          description: 'max-height: 3rem (48px)',
        },
        {
          class: 'max-w-14',
          description: 'max-width: 3.5rem (56px)',
        },
        {
          class: 'max-h-16',
          description: 'max-height: 4rem (64px)',
        },
        {
          class: 'max-w-20',
          description: 'max-width: 5rem (80px)',
        },
        {
          class: 'max-h-24',
          description: 'max-height: 6rem (96px)',
        },
        {
          class: 'max-w-28',
          description: 'max-width: 7rem (112px)',
        },
        {
          class: 'max-h-32',
          description: 'max-height: 8rem (128px)',
        },
        {
          class: 'max-w-36',
          description: 'max-width: 9rem (144px)',
        },
        {
          class: 'max-h-40',
          description: 'max-height: 10rem (160px)',
        },
        {
          class: 'max-w-44',
          description: 'max-width: 11rem (176px)',
        },
        {
          class: 'max-h-48',
          description: 'max-height: 12rem (192px)',
        },
        {
          class: 'max-w-52',
          description: 'max-width: 13rem (208px)',
        },
        {
          class: 'max-h-56',
          description: 'max-height: 14rem (224px)',
        },
        {
          class: 'max-w-60',
          description: 'max-width: 15rem (240px)',
        },
        {
          class: 'max-h-64',
          description: 'max-height: 16rem (256px)',
        },
        {
          class: 'max-w-72',
          description: 'max-width: 18rem (288px)',
        },
        {
          class: 'max-h-80',
          description: 'max-height: 20rem (320px)',
        },
        {
          class: 'max-w-96',
          description: 'max-width: 24rem (384px)',
        },
        {
          class: 'max-h-auto',
          description: 'max-height: auto',
        },
        {
          class: 'max-w-full',
          description: 'max-width: 100%',
        },
        {
          class: 'max-h-screen',
          description: 'max-height: 100vh',
        },
        {
          class: 'max-w-svw',
          description: 'max-width: 100svw',
        },
        {
          class: 'max-h-lvh',
          description: 'max-height: 100lvw',
        },
        {
          class: 'max-w-dvw',
          description: 'max-width: 100dvw',
        },
        {
          class: 'max-h-min',
          description: 'max-height: min-content',
        },
        {
          class: 'max-w-max',
          description: 'max-width: max-content',
        },
        {
          class: 'max-h-fit',
          description: 'max-height: fit-content',
        },
      ],
    },
  ],
};

export const content = [
  typography,
  flexbox,
  grid,
  alignment,
  gapAndSpacing,
  sizing,
];
