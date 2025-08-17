import React from "react";

export const CardSection = () => {
  const address = encodeURIComponent(
    "1/15 Котельническая наб., Москва, 109240"
  );

  return (
    <section className="w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <iframe
        src={`https://yandex.ru/map-widget/v1/?text=${address}&ll=37.640537%2C55.748366&z=17`}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen={true}
        style={{ border: 0 }}
      ></iframe>
    </section>
  );
};
