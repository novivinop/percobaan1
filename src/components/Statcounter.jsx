import React, { useEffect } from 'react';

const Statcounter = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://statcounter.com/counter/counter.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="statcounter">
        <a
          title="Web Analytics"
          href="https://statcounter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="statcounter"
            src="https://c.statcounter.com/12889425/0/3d637324/0/"
            alt="Web Analytics"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </a>
        <a href="https://statcounter.com/p12889425/?guest=1">
            View Stats
        </a>
      </div>

    </>
  );
};

export default Statcounter;
