import { colors } from "../global/colors";

function Button({ children }) {
  return (
    <button style={{ backgroundColor: colors.pink[500] }}>{children}</button>
  );
}

export default Button;
