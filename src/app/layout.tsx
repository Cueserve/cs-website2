import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WebflowInit from '@/components/WebflowInit';

export const metadata: Metadata = {
  title: 'Cueserve | Software & Website Development',
  description: 'Making life easy via technology is our motto. A one-stop destination for all your IT needs: Software, Website & Mobile App Development.',
  icons: {
    icon: '/favicon.png',
    apple: '/cueserve-icon.png',
  },
  openGraph: {
    title: 'Cueserve | Software & Website Development',
    description: 'Making life easy via technology is our motto. A one-stop destination for all your IT needs: Software, Website & Mobile App Development.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-wf-domain="arooth.webflow.io"
      data-wf-page="68dbb9a72b91c794d0cdd10e"
      data-wf-site="68dbb9a72b91c794d0cdd10c"
      data-wf-status="1"
    >
      <head>
        <link
          href="https://cdn.prod.website-files.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <WebflowInit />
        <div className="page-wrapper">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>

        {/* jQuery */}
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=68dbb9a72b91c794d0cdd10c"
          strategy="beforeInteractive"
        />
        {/* WebFont loader */}
        <Script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          strategy="beforeInteractive"
        />
        {/* WebFont config + w-mod-js */}
        <Script id="webfont-config" strategy="beforeInteractive">{`
          if(typeof WebFont!=='undefined'){WebFont.load({google:{families:["Instrument Sans:regular,500,600,700","Poppins:300,regular,500,600,700"]}})}
          !function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);
        `}</Script>
        {/* Webflow runtime chunks */}
        <Script
          src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/js/webflow.schunk.36b8fb49256177c8.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/js/webflow.schunk.2bea9f2bc6f9a8f8.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/js/webflow.schunk.61b534daaaeddbc7.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/js/webflow.9afb6367.094aedc2bbd9f610.js"
          strategy="afterInteractive"
        />
        {/* GSAP + plugins */}
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
        {/* Re-init IX2 after hydration */}
        <Script id="ix2-init" strategy="lazyOnload">{`
          setTimeout(function(){
            if(window.Webflow&&window.Webflow.require){
              try{window.Webflow.require('ix2').init()}catch(e){}
            }
          },500);
        `}</Script>
      </body>
    </html>
  );
}
