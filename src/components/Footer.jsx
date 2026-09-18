
import React, { useState } from "react";

const Footer = ({ darkMode }) => {
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    setIsSending(true);
    setResult("Sending...");

    const form = event.target;
    const formData = new FormData(form);

    // ==========================================
    // PASTE YOUR WEB3FORMS ACCESS KEY HERE
    // ==========================================
    formData.append("access_key", "");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully ✦");
        form.reset();
      } else {
        console.log("Error", data);

        setResult(
          data.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.log("Form error:", error);
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <footer className="relative mt-10 overflow-hidden">

      {/* =========================================
          AMBIENT FOOTER BACKGROUND
      ========================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`
            pv-footer-orb pv-footer-orb-one
            absolute -left-40 top-10
            h-80 w-80 rounded-full blur-[110px]
            ${darkMode ? "bg-violet-600/10" : "bg-violet-400/10"}
          `}
        />

        <div
          className={`
            pv-footer-orb pv-footer-orb-two
            absolute -right-40 top-40
            h-96 w-96 rounded-full blur-[120px]
            ${darkMode ? "bg-blue-600/10" : "bg-blue-400/10"}
          `}
        />

        <div
          className={`
            pv-footer-orb pv-footer-orb-three
            absolute bottom-0 left-1/2
            h-64 w-64 -translate-x-1/2
            rounded-full blur-[100px]
            ${darkMode ? "bg-purple-600/5" : "bg-purple-400/5"}
          `}
        />
      </div>

      {/* =========================================
          CONTACT / CTA
      ========================================= */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8">

        <div
          className={`
            pv-footer-cta
            relative overflow-hidden rounded-[2rem]
            border
            ${
              darkMode
                ? "border-white/10 bg-white/[0.035]"
                : "border-slate-200/70 bg-white/75"
            }
            backdrop-blur-2xl
          `}
        >

          {/* Animated border */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
            <div className="pv-footer-border absolute inset-y-0 -left-full w-1/2" />
          </div>

          {/* Inner glows */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-violet-500/10 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />

          <div className="relative z-10 p-6 sm:p-10 lg:p-12">

            {/* =====================================
                CTA HEADER
            ===================================== */}
            <div className="pv-footer-heading text-center">

              <p className="
                text-xs font-semibold uppercase
                tracking-[0.3em] text-violet-400
              ">
                Keep Exploring
              </p>

              <h2
                className={`
                  mx-auto mt-4 max-w-3xl
                  text-3xl font-bold tracking-tight
                  sm:text-4xl lg:text-5xl
                  ${darkMode ? "text-white" : "text-slate-900"}
                `}
              >
                The next frame could be
                <span className="block pv-gradient-text">
                  your favorite one.
                </span>
              </h2>

              <p
                className={`
                  mx-auto mt-5 max-w-xl
                  text-sm leading-7
                  ${darkMode ? "text-gray-400" : "text-slate-600"}
                `}
              >
                Explore the gallery, discover a moment that catches
                your eye, and make it part of your collection.
              </p>

              {/* CTA BUTTON */}
              <button
                onClick={() => scrollToSection("gallery")}
                className="
                  pv-footer-explore-btn
                  group relative mt-7
                  overflow-hidden rounded-full
                  bg-gradient-to-r
                  from-violet-600 to-blue-600
                  px-7 py-3.5
                  text-sm font-semibold text-white
                  shadow-lg shadow-violet-500/20
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:shadow-violet-500/30
                  active:scale-95
                "
              >
                <span className="relative z-10">
                  Explore Gallery
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>

                <span className="pv-button-shine" />
              </button>
            </div>

            {/* =====================================
                COMPACT CONTACT FORM
            ===================================== */}
            <div className="mx-auto mt-10 max-w-4xl">

              <div
                className={`
                  pv-contact-card
                  relative overflow-hidden
                  rounded-2xl border
                  p-4 sm:p-5
                  ${
                    darkMode
                      ? "border-white/10 bg-black/10"
                      : "border-slate-200/80 bg-white/65"
                  }
                  backdrop-blur-xl
                `}
              >

                {/* Form glow */}
                <div className="pv-form-glow pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/10 blur-[70px]" />

                <div className="relative z-10">

                  {/* FORM HEADER */}
                  <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                      <p className="
                        text-[10px] font-semibold uppercase
                        tracking-[0.25em] text-violet-400
                      ">
                        Get in Touch
                      </p>

                      <h3
                        className={`
                          mt-1 text-lg font-bold
                          ${darkMode ? "text-white" : "text-slate-900"}
                        `}
                      >
                        Have a message for us?
                      </h3>
                    </div>

                    <p
                      className={`
                        text-xs
                        ${darkMode ? "text-gray-500" : "text-slate-500"}
                      `}
                    >
                      We'd love to hear from you.
                    </p>
                  </div>

                  {/* FORM */}
                  <form
                    onSubmit={onSubmit}
                    className="space-y-2.5"
                  >

                    {/* NAME + EMAIL */}
                    <div className="grid gap-2.5 sm:grid-cols-2">

                      <div className="pv-input-wrap">
                        <span className="pv-input-number">01</span>

                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your name"
                          className={`
                            pv-contact-input
                            h-11 w-full rounded-xl border
                            px-4 pl-10 text-sm
                            outline-none
                            ${
                              darkMode
                                ? "border-white/10 bg-white/[0.035] text-white placeholder:text-gray-600"
                                : "border-slate-200 bg-white/75 text-slate-900 placeholder:text-slate-400"
                            }
                          `}
                        />
                      </div>

                      <div className="pv-input-wrap">
                        <span className="pv-input-number">02</span>

                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Your email"
                          className={`
                            pv-contact-input
                            h-11 w-full rounded-xl border
                            px-4 pl-10 text-sm
                            outline-none
                            ${
                              darkMode
                                ? "border-white/10 bg-white/[0.035] text-white placeholder:text-gray-600"
                                : "border-slate-200 bg-white/75 text-slate-900 placeholder:text-slate-400"
                            }
                          `}
                        />
                      </div>

                    </div>

                    {/* MESSAGE */}
                    <div className="pv-input-wrap">
                      <span className="pv-input-number pv-message-number">
                        03
                      </span>

                      <textarea
                        name="message"
                        required
                        rows="2"
                        placeholder="Write your message..."
                        className={`
                          pv-contact-input
                          min-h-[72px] w-full
                          resize-none rounded-xl border
                          px-4 pl-10 py-3
                          text-sm outline-none
                          ${
                            darkMode
                              ? "border-white/10 bg-white/[0.035] text-white placeholder:text-gray-600"
                              : "border-slate-200 bg-white/75 text-slate-900 placeholder:text-slate-400"
                          }
                        `}
                      />
                    </div>

                    {/* FORM BOTTOM */}
                    <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center sm:justify-between">

                      {/* RESULT */}
                      <div className="min-h-[18px]">

                        {result && (
                          <p
                            className={`
                              pv-form-result
                              text-xs
                              ${
                                result.includes("successfully")
                                  ? "text-emerald-400"
                                  : result === "Sending..."
                                  ? "text-violet-400"
                                  : darkMode
                                  ? "text-gray-500"
                                  : "text-slate-500"
                              }
                            `}
                          >
                            {result === "Sending..." && (
                              <span className="mr-2 inline-block h-2.5 w-2.5 animate-spin rounded-full border border-violet-400/30 border-t-violet-400" />
                            )}

                            {result}
                          </p>
                        )}

                      </div>

                      {/* SEND BUTTON */}
                      <button
                        type="submit"
                        disabled={isSending}
                        className="
                          pv-send-button
                          group relative
                          inline-flex items-center
                          justify-center
                          overflow-hidden
                          rounded-full
                          bg-gradient-to-r
                          from-violet-600 to-blue-600
                          px-6 py-2.5
                          text-xs font-semibold text-white
                          shadow-md shadow-violet-500/20
                          transition-all duration-300
                          hover:-translate-y-0.5
                          hover:shadow-lg
                          hover:shadow-violet-500/30
                          active:scale-95
                          disabled:cursor-not-allowed
                          disabled:opacity-60
                        "
                      >
                        <span className="relative z-10">
                          {isSending ? "Sending..." : "Send Message"}

                          {!isSending && (
                            <span className="
                              ml-2 inline-block
                              transition-transform duration-300
                              group-hover:translate-x-1
                              group-hover:scale-125
                            ">
                              →
                            </span>
                          )}
                        </span>

                        <span className="pv-button-shine" />
                      </button>

                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          FOOTER
      ========================================= */}
      <div
        className={`
          relative border-t
          ${
            darkMode
              ? "border-white/10 bg-black/20"
              : "border-slate-200 bg-slate-50/70"
          }
        `}
      >

        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

          {/* FOOTER GRID */}
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">

            {/* BRAND */}
            <div className="pv-footer-column">

              <button
                onClick={() => scrollToSection("home")}
                className="
                  group text-left
                  transition-transform duration-300
                  hover:-translate-y-1
                "
              >
                <span className="text-2xl font-black tracking-tight">
                  <span className="pv-gradient-text">
                    Pixel
                  </span>

                  <span
                    className={
                      darkMode
                        ? "text-white"
                        : "text-slate-900"
                    }
                  >
                    Vault
                  </span>
                </span>
              </button>

              <p
                className={`
                  mt-4 max-w-sm text-sm leading-7
                  ${darkMode ? "text-gray-500" : "text-slate-500"}
                `}
              >
                A visual space for discovering, collecting and
                experiencing photography beyond the ordinary.
              </p>

              <div className="mt-6 flex items-center gap-2">
                <span className="h-px w-10 bg-gradient-to-r from-violet-500 to-blue-500" />
                <span
                  className={`
                    text-[10px] uppercase tracking-[0.25em]
                    ${darkMode ? "text-gray-600" : "text-slate-400"}
                  `}
                >
                  Visual Stories
                </span>
              </div>
            </div>

            {/* NAVIGATION */}
            <div className="pv-footer-column">

              <h3
                className={`
                  text-sm font-semibold
                  ${darkMode ? "text-white" : "text-slate-900"}
                `}
              >
                Explore
              </h3>

              <div className="mt-4 space-y-3">

                {[
                  ["Home", "home"],
                  ["Gallery", "gallery"],
                  ["About", "about"],
                ].map(([label, id], index) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`
                      pv-footer-link
                      group block text-sm
                      ${darkMode ? "text-gray-500" : "text-slate-500"}
                    `}
                  >
                    <span className="mr-2 inline-block text-[9px] text-violet-400 opacity-32 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      ✦
                    </span>

                    {label}
                  </button>
                ))}

              </div>
            </div>

            {/* SOCIAL */}
            <div className="pv-footer-column">

              <h3
                className={`
                  text-sm font-semibold
                  ${darkMode ? "text-white" : "text-slate-900"}
                `}
              >
                Connect
              </h3>

              <div className="mt-5 flex items-center gap-3">

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={`
                    pv-social-icon
                    ${darkMode
                      ? "border-white/10 bg-white/[0.04] text-gray-400 hover:border-pink-400/40 hover:bg-pink-500/10 hover:text-pink-400"
                      : "border-slate-200 bg-white text-slate-500 hover:border-pink-300 hover:bg-pink-50 hover:text-pink-500"
                    }
                  `}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                    />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="0.8"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                {/* FACEBOOK */}
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className={`
                    pv-social-icon
                    ${darkMode
                      ? "border-white/10 bg-white/[0.04] text-gray-400 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-400"
                      : "border-slate-200 bg-white text-slate-500 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-500"
                    }
                  `}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v5h4v-5h3l1-4h-4V9c0-.7.3-1 1-1Z" />
                  </svg>
                </a>

                {/* WHATSAPP */}
                <a
                  href="https://web.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className={`
                    pv-social-icon
                    ${darkMode
                      ? "border-white/10 bg-white/[0.04] text-gray-400 hover:border-green-400/40 hover:bg-green-500/10 hover:text-green-400"
                      : "border-slate-200 bg-white text-slate-500 hover:border-green-300 hover:bg-green-50 hover:text-green-500"
                    }
                  `}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.5-1.7c1.7.9 3.5 1.3 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.3ZM12.2 21.5c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.8 1 1-3.7-.2-.3a9.7 9.7 0 1 1 8.1 4.5Zm5.3-7.3c-.3-.2-1.7-.9-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.5-3.8-3.3-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.8s1.2 3.2 1.4 3.4c.2.2 2.3 3.6 5.6 5 .8.4 1.5.6 2 .8.8.3 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4 0-.2-.2-.3-.5-.4Z" />
                  </svg>
                </a>

              </div>

              <p
                className={`
                  mt-5 max-w-xs text-sm leading-6
                  ${darkMode ? "text-gray-500" : "text-slate-500"}
                `}
              >
                Follow the journey and discover more visual stories.
              </p>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div
            className={`
              pv-footer-bottom
              mt-12 flex flex-col gap-3
              border-t pt-6
              sm:flex-row sm:items-center
              sm:justify-between
              ${
                darkMode
                  ? "border-white/10"
                  : "border-slate-200"
              }
            `}
          >
            <p
              className={`
                text-xs
                ${darkMode ? "text-gray-600" : "text-slate-400"}
              `}
            >
              © {new Date().getFullYear()} PixelVault. All rights reserved.
            </p>

            <p
              className={`
                text-xs
                ${darkMode ? "text-gray-600" : "text-slate-400"}
              `}
            >
              Crafted with pixels & imagination ✦
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

