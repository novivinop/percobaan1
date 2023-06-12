import React, { useEffect } from 'react';

const Statcounter = () => {
  useEffect(() => {
    const script = document.createElement('script');
    // script.src = 'https://statcounter.com/counter/counter.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="statcounter text-center mt-2">
        <a
          title="Web Analytics Made Easy - Statcounter"
          href="https://statcounter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="statcounter"
            src="https://c.statcounter.com/12889425/0/3d637324/0/"
            alt="Web Analytics Made Easy - Statcounter"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </a>
        <a href="https://statcounter.com/p12889425/?guest=1">
            View Stats
        </a>
      </div>
{/* <!-- Default Statcounter code for nusa berkah
https://nusa-berkah1.vercel.app/ -->
<script type="text/javascript">
var sc_project=12889425; 
var sc_invisible=0; 
var sc_security="3d637324"; 
var scJsHost = "https://";
document.write("<sc"+"ript type='text/javascript' src='" +
scJsHost+
"statcounter.com/counter/counter.js'></"+"script>");
</script>
<noscript>
<div class="statcounter">
<a title="Web Analytics
Made Easy - Statcounter" href="https://statcounter.com/"
target="_blank">
<img class="statcounter"
src="https://c.statcounter.com/12889425/0/3d637324/0/"
alt="Web Analytics Made Easy - Statcounter"
referrerPolicy="no-referrer-when-downgrade">
</a>
</div>
</noscript>
<!-- End of Statcounter Code -->
<a href="https://statcounter.com/p12889425/?guest=1">View
Stats</a> */}
    </>
  );
};

export default Statcounter;
