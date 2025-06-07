const flexbox = {
  title: "Flexbox",
  subItems: [
    {
      subItemTitle: "Container",
      data: [
        {
          class: 'flex',
          description: 'sets the container as a flex container'
        },
        {
          class: 'inline-flex',
          description: 'sets the container as an inline flex container'
        },
        {
          class: 'flex-row',
          description: 'sets the main axis as horizontal'
        },
        {
          class: 'flex-col',
          description: 'sets the main axis as vertical'
        },
        {
          class: 'flex-wrap',
          description: 'allows the items to wrap if they exceed the container width'
        },
        {
          class: 'flex-nowrap',
          description: 'prevents the items from wrapping'
        }
      ]
    },
    {
      subItemTitle: "Justify Content",
      tooltipInfo: "The justify-content utilities control the alignment of items along the main axis (horizontal axis in flexbox by default).",
      data: [
        {
          class: 'justify-start',
          description: 'aligns the items to the start of the container'
        },
        {
          class: 'justify-center',
          description: 'aligns the items to the center of the container'
        },
        {
          class: 'justify-end',
          description: 'aligns the items to the end of the container'
        },
        {
          class: 'justify-between',
          description: 'aligns the items with equal space between them'
        },
        {
          class: 'justify-around',
          description: 'aligns the items with equal space around them'
        }
      ]
    },
    {
      subItemTitle: "Align Items",
      data: [
        {
          class: 'items-start',
          description: 'aligns the items to the start of the container'
        },
        {
          class: 'items-center',
          description: 'aligns the items to the center of the container'
        },
        {
          class: 'items-end',
          description: 'aligns the items to the end of the container'
        },
        {
          class: 'items-baseline',
          description: 'aligns the items to the baseline of the container'
        },
        {
          class: 'items-stretch',
          description: 'stretches the items to fill the container'
        }
      ]
    },
    {
      subItemTitle: "Align Content",
      data: [
        {
          class: 'content-start',
          description: 'aligns the lines to the start of the container'
        },
        {
          class: 'content-center',
          description: 'aligns the lines to the center of the container'
        },
        {
          class: 'content-end',
          description: 'aligns the lines to the end of the container'
        },
        {
          class: 'content-between',
          description: 'aligns the lines with equal space between them'
        },
        {
          class: 'content-around',
          description: 'aligns the lines with equal space around them'
        },
        {
          class: 'content-stretch',
          description: 'stretches the lines to fill the container'
        }
      ]
    },
    {
      subItemTitle: "Flex Items",
      data: [
        {
          class: 'flex-grow',
          description: 'allows the item to grow to fill the container'
        },
        {
          class: 'flex-shrink',
          description: 'allows the item to shrink to fit the container'
        },
        {
          class: 'flex-basis',
          description: 'sets the initial size of the item'
        },
        {
          class: 'order',
          description: 'sets the order of the item in the container'
        },
        {
          class: 'align-self',
          description: 'overrides the align-items value for the item'
        }
      ]
    },
  ]
};

const typography = {
  title: "Typography",
  subItems: [
    {
      subItemTitle: "Font Size",
      data: [
        {
          class: 'text-xs',
          description: 'font size: 0.75rem (12px)'
        },
        {
          class: 'text-sm',
          description: 'font size: 0.875rem (14px)'
        },
        {
          class: 'text-base',
          description: 'font size: 1rem (16px)',
          highlighted: true
        },
        {
          class: 'text-lg',
          description: 'font size: 1.125rem (18px)',
          highlighted: true
        },
        {
          class: 'text-xl',
          description: 'font size: 1.25rem (20px)',
          highlighted: true
        },
        {
          class: 'text-2xl',
          description: 'font size: 1.5rem (24px)'
        },
        {
          class: 'text-3xl',
          description: 'font size: 1.875rem (30px)'
        },
        {
          class: 'text-4xl',
          description: 'font size: 2.25rem (36px)'
        },
        {
          class: 'text-5xl',
          description: 'font size: 3rem (48px)'
        },
        {
          class: 'text-6xl',
          description: 'font size: 3.75rem (60px)'
        },
        {
          class: 'text-7xl',
          description: 'font size: 4.5rem (72px)'
        },
        {
          class: 'text-8xl',
          description: 'font size: 6rem (96px)'
        },
        {
          class: 'text-9xl',
          description: 'font size: 8rem (128px)'
        }
      ]
    },
    {
      subItemTitle: "Font Weight",
      data: [
        {
          class: 'font-thin',
          description: 'font weight: 100'
        },
        {
          class: 'font-extralight',
          description: 'font weight: 200'
        },
        {
          class: 'font-light',
          description: 'font weight: 300'
        },
        {
          class: 'font-normal',
          description: 'font weight: 400'
        },
        {
          class: 'font-medium',
          description: 'font weight: 500'
        },
        {
          class: 'font-semibold',
          description: 'font weight: 600'
        },
        {
          class: 'font-bold',
          description: 'font weight: 700'
        },
        {
          class: 'font-extrabold',
          description: 'font weight: 800'
        },
        {
          class: 'font-black',
          description: 'font weight: 900'
        }
      ]
    },
    {
      subItemTitle: "Line Height",
      data: [
        {
          class: 'leading-none',
          description: 'line-height: 1'
        },
        {
          class: 'leading-tight',
          description: 'line-height: 1.25'
        },
        {
          class: 'leading-snug',
          description: 'line-height: 1.375'
        },
        {
          class: 'leading-normal',
          description: 'line-height: 1.5'
        },
        {
          class: 'leading-relaxed',
          description: 'line-height: 1.625'
        },
        {
          class: 'leading-loose',
          description: 'line-height: 2'
        },
        {
          class: 'leading-3',
          description: 'line-height: 0.75rem (12px)'
        },
        {
          class: 'leading-4',
          description: 'line-height: 1rem (16px)'
        },
        {
          class: 'leading-5',
          description: 'line-height: 1.25rem (20px)'
        },
        {
          class: 'leading-6',
          description: 'line-height: 1.5rem (24px)'
        },
        {
          class: 'leading-7',
          description: 'line-height: 1.75rem (28px)'
        },
        {
          class: 'leading-8',
          description: 'line-height: 2rem (32px)'
        },
        {
          class: 'leading-9',
          description: 'line-height: 2.25rem (36px)'
        },
        {
          class: 'leading-10',
          description: 'line-height: 2.5rem (40px)'
        }
      ]
    }
  ]
};

const grid = {
  title: "Grid",
  subItems: [
    {
      subItemTitle: "Grid Container",
      data: [
        {
          class: 'grid',
          description: 'sets the container as a grid container'
        },
        {
          class: 'inline-grid',
          description: 'sets the container as an inline grid container'
        }
      ]
    }
  ]
};

const gapAndSpacing = {
  title: "Gap and Spacing",
  subItems: [
    {
      subItemTitle: "Gap",
      data: [
        {
          class: 'gap-0',
          description: '0rem (0px)'
        },
        {
          class: 'gap-px',
          description: '1px'
        },
        {
          class: 'gap-0.5',
          description: '0.125rem (2px)'
        },
        {
          class: 'gap-1',
          description: '0.25rem (4px)'
        },
        {
          class: 'gap-1.5',
          description: '0.375rem (6px)'
        },
        {
          class: 'gap-2',
          description: '0.5rem (8px)'
        },
        {
          class: 'gap-2.5',
          description: '0.625rem (10px)'
        },
        {
          class: 'gap-3',
          description: '0.75rem (12px)'
        },
        {
          class: 'gap-3.5',
          description: '0.875rem (14px)'
        },
        {
          class: 'gap-4',
          description: '1rem (16px)'
        },
        {
          class: 'gap-5',
          description: '1.25rem (20px)'
        },
        {
          class: 'gap-6',
          description: '1.5rem (24px)'
        },
        {
          class: 'gap-7',
          description: '1.75rem (28px)'
        },
        {
          class: 'gap-8',
          description: '2rem (32px)'
        },
        {
          class: 'gap-9',
          description: '2.25rem (36px)'
        },
        {
          class: 'gap-10',
          description: '2.5rem (40px)'
        },
        {
          class: 'gap-11',
          description: '2.75rem (44px)'
        },
        {
          class: 'gap-12',
          description: '3rem (48px)'
        },
        {
          class: 'gap-14',
          description: '3.5rem (56px)'
        },
        {
          class: 'gap-16',
          description: '4rem (64px)'
        },
        {
          class: 'gap-20',
          description: '5rem (80px)'
        },
        {
          class: 'gap-24',
          description: '6rem (96px)'
        },
        {
          class: 'gap-28',
          description: '7rem (112px)'
        },
        {
          class: 'gap-32',
          description: '8rem (128px)'
        },
        {
          class: 'gap-36',
          description: '9rem (144px)'
        },
        {
          class: 'gap-40',
          description: '10rem (160px)'
        },
        {
          class: 'gap-44',
          description: '11rem (176px)'
        },
        {
          class: 'gap-48',
          description: '12rem (192px)'
        },
        {
          class: 'gap-52',
          description: '13rem (208px)'
        },
        {
          class: 'gap-56',
          description: '14rem (224px)'
        },
        {
          class: 'gap-60',
          description: '15rem (240px)'
        },
        {
          class: 'gap-64',
          description: '16rem (256px)'
        },
        {
          class: 'gap-72',
          description: '18rem (288px)'
        },
        {
          class: 'gap-80',
          description: '20rem (320px)'
        },
        {
          class: 'gap-96',
          description: '24rem (384px)'
        }
      ]
    },
    {
      subItemTitle: "Spacing",
      data: [
        {
          class: 'space-x-0',
          description: '0rem (0px)'
        },
        {
          class: 'space-x-px',
          description: '1px'
        },
        {
          class: 'space-x-0.5',
          description: '0.125rem (2px)'
        },
        {
          class: 'space-x-1',
          description: '0.25rem (4px)'
        },
        {
          class: 'space-x-1.5',
          description: '0.375rem (6px)'
        },
        {
          class: 'space-x-2',
          description: '0.5rem (8px)'
        },
        {
          class: 'space-x-2.5',
          description: '0.625rem (10px)'
        },
        {
          class: 'space-x-3',
          description: '0.75rem (12px)'
        },
        {
          class: 'space-x-3.5',
          description: '0.875rem (14px)'
        },
        {
          class: 'space-x-4',
          description: '1rem (16px)'
        },
        {
          class: 'space-x-5',
          description: '1.25rem (20px)'
        },
        {
          class: 'space-x-6',
          description: '1.5rem (24px)'
        },
        {
          class: 'space-x-7',
          description: '1.75rem (28px)'
        },
        {
          class: 'space-x-8',
          description: '2rem (32px)'
        },
        {
          class: 'space-x-9',
          description: '2.25rem (36px)'
        },
        {
          class: 'space-x-10',
          description: '2.5rem (40px)'
        },
        {
          class: 'space-x-11',
          description: '2.75rem (44px)'
        },
        {
          class: 'space-x-12',
          description: '3rem (48px)'
        },
        {
          class: 'space-x-14',
          description: '3.5rem (56px)'
        },
        {
          class: 'space-x-16',
          description: '4rem (64px)'
        },
        {
          class: 'space-x-20',
          description: '5rem (80px)'
        },
        {
          class: 'space-x-24',
          description: '6rem (96px)'
        },
        {
          class: 'space-x-28',
          description: '7rem (112px)'
        },
        {
          class: 'space-x-32',
          description: '8rem (128px)'
        },
        {
          class: 'space-x-36',
          description: '9rem (144px)'
        },
        {
          class: 'space-x-40',
          description: '10rem (160px)'
        },
        {
          class: 'space-x-44',
          description: '11rem (176px)'
        },
        {
          class: 'space-x-48',
          description: '12rem (192px)'
        },
        {
          class: 'space-x-52',
          description: '13rem (208px)'
        },
        {
          class: 'space-x-56',
          description: '14rem (224px)'
        },
        {
          class: 'space-x-60',
          description: '15rem (240px)'
        },
        {
          class: 'space-x-64',
          description: '16rem (256px)'
        },
        {
          class: 'space-x-72',
          description: '18rem (288px)'
        },
        {
          class: 'space-x-80',
          description: '20rem (320px)'
        },
        {
          class: 'space-x-96',
          description: '24rem (384px)'
        }
      ]
    }
  ]
};

export const content = [typography, flexbox, grid, gapAndSpacing];