import Section from '@/app/components/main-content';
import MainContent from '@/app/components/main-content';

const content = [
  {
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
  },
  {
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
            description: 'font size: 1rem (16px)'
          },
          {
            class: <span className="font-extrabold">text-lg</span>,
            description: 'font size: 1.125rem (18px)'
          },
          {
            class: 'text-xl',
            description: 'font size: 1.25rem (20px)'
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
      }
      ]
  }
  ]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <MainContent sectionContent={content}/>
      </div>
    </main>
  );
}
