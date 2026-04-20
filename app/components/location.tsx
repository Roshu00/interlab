import Image from "next/image";
import React from "react";

export const Location = () => {
  return (
    <section
      id="location"
      className="max-w-7xl mx-auto flex flex-col lg:mt-32 mt-16 px-4"
    >
      <h2 className="font-crimson-text lg:text-7xl text-3xl">Lokacija</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col-reverse lg:flex-col flex-col gap-4">
          <div className="rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.479120076019!2d20.355231276895076!3d44.872897771070456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a66893daaaaab%3A0xcb3f79a77425d73!2sInterLab%20QCM!5e0!3m2!1ssr!2srs!4v1776680004496!5m2!1ssr!2srs"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="font-bold font-dm-sans text-2xl">Laboratorija</p>
        </div>
        <div className="flex flex-col-reverse lg:flex-col flex-col gap-4">
          <div className="rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11322.937250005913!2d20.4114873!3d44.806603!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6ff4a5e5596f%3A0x97b9945b95d6358f!2z0JzQuNC70YPRgtC40L3QsCDQnNC40LvQsNC90LrQvtCy0LjRm9CwIDEsINCR0LXQvtCz0YDQsNC0!5e0!3m2!1ssr!2srs!4v1776289368295!5m2!1ssr!2srs"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="font-bold font-dm-sans text-2xl">Kancelarija</p>
        </div>
      </div>
    </section>
  );
};
