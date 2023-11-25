module.exports = {
  // Purge unused styles in production for optimization
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // Enable Just-In-Time (JIT) mode for faster build times
  mode: "jit",
  darkMode: false, // or 'media' or 'class'

  // Define custom fonts for display and body
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },

    // Extend default configuration with additional settings
    extend: {
      screens: {
        // Define a custom screen breakpoint named 'mf' at 990px
        mf: "990px",
      },
      keyframes: {
        // Define a custom keyframe animation named 'slide-in'
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      // Apply the 'slide-in' animation to an element
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
    },
  },

  // Customize or extend variants for Tailwind utilities
  variants: {
    extend: {},
  },
  // Include additional plugins, such as Tailwind CSS forms
  plugins: [require("@tailwindcss/forms")],
};
