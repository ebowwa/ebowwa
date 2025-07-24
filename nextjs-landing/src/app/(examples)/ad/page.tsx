// https://github.com/vercel/examples/tree/main/solutions/script-component-ad
// https://vercel.com/templates/next.js/script-component-ad
import { NextPage } from 'next';
import Script from 'next/script';

const AdPage: NextPage = () => {
    return (
        <>
            <Script
                strategy="lazyOnload"
                id="script-component-ad"
                src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
            />
            <Script id="define-slot" strategy="lazyOnload">{`
        window.googletag = window.googletag || {cmd: []};
        googletag.cmd.push(function() {
          googletag
              .defineSlot(
                  '/6355419/Travel/Europe/France/Paris', [300, 250], 'my-banner')
              .addService(googletag.pubads());
          googletag.enableServices();
        });
      `}</Script>
            <div id="my-banner" style={{ width: '300px', height: '250px' }}>
                {/* Your ad content goes here */}
            </div>
        </>
    );
};


export default AdPage;