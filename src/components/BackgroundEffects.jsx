import React from "react";

const BackgroundEffects = ({ darkMode }) => {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        overflow-hidden
      "
      aria-hidden="true"
    >
      {/* TOP LEFT */}
      <div
        className={`
          pv-orb
          absolute
          -left-32
          -top-32
          h-[360px]
          w-[360px]
          rounded-full
          blur-[100px]
          sm:h-[420px]
          sm:w-[420px]
          sm:blur-[120px]
          ${
            darkMode
              ? "bg-violet-700/20"
              : "bg-violet-300/40"
          }
        `}
      />

      {/* TOP RIGHT */}
      <div
        className={`
          pv-orb
          absolute
          -right-32
          top-10
          h-[400px]
          w-[400px]
          rounded-full
          blur-[110px]
          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[130px]
          ${
            darkMode
              ? "bg-blue-700/20"
              : "bg-blue-300/35"
          }
        `}
        style={{ animationDelay: "1.5s" }}
      />

      {/* CENTER */}
      <div
        className={`
          pv-orb
          absolute
          left-[38%]
          top-[25%]
          hidden
          h-[300px]
          w-[300px]
          rounded-full
          blur-[110px]
          md:block
          ${
            darkMode
              ? "bg-purple-700/10"
              : "bg-purple-300/20"
          }
        `}
        style={{ animationDelay: "3s" }}
      />

      {/* BOTTOM RIGHT */}
      <div
        className={`
          pv-orb
          absolute
          -bottom-40
          -right-20
          h-[400px]
          w-[400px]
          rounded-full
          blur-[110px]
          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[130px]
          ${
            darkMode
              ? "bg-blue-700/20"
              : "bg-blue-300/30"
          }
        `}
        style={{ animationDelay: "2s" }}
      />

      {/* BOTTOM LEFT */}
      <div
        className={`
          pv-orb
          absolute
          bottom-[10%]
          left-[-10%]
          h-[300px]
          w-[300px]
          rounded-full
          blur-[100px]
          sm:h-[350px]
          sm:w-[350px]
          sm:blur-[120px]
          ${
            darkMode
              ? "bg-violet-700/15"
              : "bg-violet-300/25"
          }
        `}
      />

      {/* SOFT ATMOSPHERE */}
      <div
        className={`
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[850px]
          -translate-x-1/2
          rounded-full
          blur-[120px]
          ${
            darkMode
              ? "bg-gradient-to-r from-blue-900/10 via-violet-800/15 to-blue-900/10"
              : "bg-gradient-to-r from-blue-200/15 via-violet-200/25 to-blue-200/15"
          }
        `}
      />

      {/* GRID */}
      <div
        className={`
          absolute
          inset-0
          ${
            darkMode
              ? "opacity-[0.022]"
              : "opacity-[0.014]"
          }
        `}
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(99,102,241,0.7) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(99,102,241,0.7) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* VIGNETTE */}
      <div
        className={`
          absolute
          inset-0
          ${
            darkMode
              ? "bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.42)_100%)]"
              : "bg-[radial-gradient(circle_at_center,transparent_45%,rgba(238,240,255,0.28)_100%)]"
          }
        `}
      />
    </div>
  );
};

export default BackgroundEffects;
