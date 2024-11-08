import Layout from '@/components/layout/layout';
import './globals.css';
import { Roboto_Mono } from 'next/font/google';

const roboto = Roboto_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['vietnamese'],
  display: 'swap',
});

const Root = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default Root;
