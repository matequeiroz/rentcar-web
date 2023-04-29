import { css, Global } from "@emotion/react";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        :root {
          
          --black-900: #1b1b1f;

          --gray-100: #e5e5e5;
          --gray-200: #F4F5F6;
          --gray-300: #AEAEB3;
          --gray-400: #7a7a80;
          --gray-600: #47474D;
          
          --red-900: #DC1637;
          
          --white-100: #fff;
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

        main {
          margin: 1.6rem;
        }
      `}
    />
  );
}
