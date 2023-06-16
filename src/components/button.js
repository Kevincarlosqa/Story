import { colors } from "../global/colors";
// import { theme } from "../global/theme";

function Button({ children }) {
  return (
    <button style={{ backgroundColor: colors.pink[500] }}>{children}</button>
  );
}

export default Button;
