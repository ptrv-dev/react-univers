interface IData {
  title: string;
  text?: string;
  buttonText: string;
  url: string;
  image?: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
}

export const discoverData: IData[] = [
  {
    title: 'Send and receive without borders',
    buttonText: 'Explore Payments',
    url: '#',
    image: 'card-01.png',
    size: 'md',
  },
  {
    title: 'Invoices that work smarter',
    buttonText: 'Learn more about Invoices',
    url: '#',
    image: 'card-02.png',
    size: 'md',
  },
  {
    title: 'Smart company debit cards help you and your team go further',
    buttonText: 'Learn more about Cards',
    url: '#',
    image: 'card-03.png',
    size: 'lg',
  },
  {
    title: 'Exchange, send and spend at great rates',
    buttonText: 'Explore Exchanges',
    url: '#',
    size: 'sm',
  },
  {
    title: 'Set and change team permissions with a tap',
    text: 'Stay in total control of your team’s spending by managing their permissions and levels of access. Create custom roles and choose the combination of apps and features you want them to use',
    buttonText: 'Discover Revolut Business',
    image: 'card-04.png',
    size: 'xl',
    url: '#',
  },
];
