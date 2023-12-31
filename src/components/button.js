/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { typography, colors } from "../global";
// import { theme } from "../global/theme";

const cssButton = {
  primary: `
      background-color: ${colors.pink[600]};
      color: ${colors.white};
      :hover {
        background-color: ${colors.pink[700]};
      }
      :active {
        background-color: ${colors.pink[800]};
      }
      :focus {
        outline: 3px solid ${colors.pink[800]};
        outline-offset: 1px;
      }
      :disabled {
        opacity: 0.6;
        cursor: default;
        background-color: ${colors.pink[600]};
      }
  `,
  secondary: `
    background-color: ${colors.stone[600]};
    color: ${colors.white};
    :hover {
      background-color: ${colors.stone[700]};
    }
    :active {
      background-color: ${colors.stone[800]};
    }
    :focus {
      outline: 3px solid ${colors.stone[800]};
      outline-offset: 1px;
    }
    :disabled {
      opacity: 0.6;
      cursor: default;
      background-color: ${colors.stone[600]};
    }
  `,
  default: `
    background-color: ${colors.gray[600]};
    color: ${colors.white};
    :hover {
      background-color: ${colors.gray[700]};
    }
    :active {
      background-color: ${colors.gray[800]};
    }
    :focus {
      outline: 3px solid ${colors.gray[800]};
      outline-offset: 1px;
    }
    :disabled {
      opacity: 0.6;
      cursor: default;
      background-color: ${colors.gray[600]};
    }
  `,
};

function Button({ children, type = "default" }) {
  return (
    <button
      css={css`
        border: none;
        border-radius: 0.25em;
        font-family: ${typography.primary};
        font-size: 1rem;
        line-height: 1.25rem;
        font-weight: 500;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        padding: 0.75em 1em;
        cursor: pointer;
        display: flex;
        gap: 0.5em;
        align-items: center;
        justify-content: center;
        background-color: ${colors.pink[600]};
        color: ${colors.white};
        :hover {
          background-color: ${colors.pink[700]};
        }
        :active {
          background-color: ${colors.pink[800]};
        }
        :focus {
          outline: 3px solid ${colors.pink[800]};
          outline-offset: 1px;
        }
        :disabled {
          opacity: 0.6;
          cursor: default;
          background-color: ${colors.pink[600]};
        }
        ${cssButton[type]}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
