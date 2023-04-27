import { css, Global } from "@emotion/react";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        :root {
          --black-900: #1b1b1f;

          --gray-100: #e5e5e5;
          --gray-300: #7a7a80;
        }

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        html {
          font-size: 62.5%;
        }

        html,
        body {
          height: 100vh;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
        }

        body {
          background-color: var(--gray-100);
          font-size: 1.6rem;
          font-family: "Archivo", sans-serif;
          font-weight: 500;
        }
      `}
    />
  );
}
