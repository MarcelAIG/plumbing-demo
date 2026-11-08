import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

export function ReviewPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://api.izadsystems.dev/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Leave Us a Review | SOLO Plumbing & Heating</title>
      </Helmet>
      <div className="bg-transparent min-h-screen flex justify-center pt-[104px] lg:pt-[120px] pb-[100px] px-4">
        <div className="w-full max-w-[458px] bg-transparent overflow-hidden mx-auto">
          <iframe 
            src="https://api.izadsystems.dev/widget/survey/JL5XHXn2bTelM4Ma9PdI" 
            style={{ 
              display: 'block',
              border: '0', 
              outline: 'none',
              boxShadow: 'none',
              borderRadius: '0',
              width: 'calc(100% + 42px)', 
              height: '800px', 
              backgroundColor: '#b5b5b7',
              marginLeft: '-21px',
              marginBottom: '-56px'
            }} 
            scrolling="no" 
            id="JL5XHXn2bTelM4Ma9PdI" 
            title="survey"
          />
        </div>
      </div>
    </>
  );
}
