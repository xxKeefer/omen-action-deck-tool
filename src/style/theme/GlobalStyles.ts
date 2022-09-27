import { createGlobalStyle, css } from "styled-components";

const focusStyles = css`
  transition: none;
  outline: 2px solid ${({ theme }) => theme.colors.focusIndicator} !important;
  outline-offset: 4px !important;
  border-radius: 4px;
`;

const focusStylesReset = css`
  outline: initial !important;
`;

export const GlobalStyles = createGlobalStyle`
    html {
        background-color: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.text};
        font-family: ${({ theme }) => theme.fonts.family.main};
    }

    a:focus {
        ${focusStyles}
        border-radius: 4px;
    }

    button:not([role=switch]):focus {
        ${focusStyles}
        border-radius: 4px;
    }

    button[role=switch]:focus {
        ${focusStyles}
    }

    div:focus {
        ${focusStyles}
        border-radius: 4px;
    }

    input[type=password]:focus {
        ${focusStyles}
    }

    input[type=email]:focus {
        ${focusStyles}
    }

    input[type=text]:focus {
        ${focusStyles}
    }

    input[type=password]:focus {
        ${focusStyles}
    }


    input[role=spinbutton]:focus {
        ${focusStyles}
    }

    textarea:focus {
        ${focusStyles}
    }


    @supports selector(:focus-visible) {
        a:focus {
            ${focusStylesReset}
        }
        a:focus-visible {
            ${focusStyles}
        }

        button:not([role=switch]):focus {
            ${focusStylesReset}
        }
        button:not([role=switch]):focus-visible {
            ${focusStyles}
        }

        button[role=switch]:focus {
            ${focusStylesReset}
        }
        button[role=switch]:focus-visible {
            ${focusStyles}
        }

        div:focus {
            ${focusStylesReset}
        }
        div:focus-visible {
            ${focusStyles}
        }

        input[role=spinbutton]:focus {
            ${focusStylesReset}
        }
        input[role=spinbutton]:focus-visible {
            ${focusStyles}
        }

    }
`;
