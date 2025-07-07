import { useEffect } from 'react';

export default function Hireme(){
    useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-251408497555163']", "https://form.jotform.com/");
      }
    };
    document.body.appendChild(script);
  }, []);
    return (
        <>
            <section>
                <iframe
                    id="JotFormIFrame-251408497555163"
                    title="Blue Sky Contact Form"
                    allowtransparency="true"
                    allow="geolocation; microphone; camera; fullscreen; payment"
                    src="https://form.jotform.com/251408497555163"
                    frameborder="0"
                    style={{ minWidth: '100%', maxWidth: '100%', height: '600px', border: 'none' }}>
                </iframe>
            </section>
        </>
    )
}