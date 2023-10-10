import { Global, css } from '@emotion/react';

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        *:focus-visible {
          box-shadow: none !important;
          border-color: transparent !important;
        }

        #root,
        html,
        body,
        main {
          height: 100%;
        }

        // Prevenir que cualquier imagen pueda ser arrastrada
        img {
          user-drag: none;
        }

        option,
        optgroup {
          background: #1a1d22 !important;
        }

        // Utilizando la clase .scroll-min se puede cambiar el estilo de la scroll una mas simple
        // Por defecto ya viene aplicada para las tablas de chakra-ui
        .small-scroll,
        .chakra-table__container {
          ::-webkit-scrollbar {
            width: 5px;
            height: 5px;
          }

          ::-webkit-scrollbar-track {
            background: transparent;
          }

          ::-webkit-scrollbar-thumb {
            background: rgba(219, 235, 255, 0.5);
            border-radius: 50px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #fff;
          }
        }
      `}
    />
  );
}
