import Button from "./buttonStyled";

export default {
  title: "Button",
  component: Button,
};

export const button = {
  args: {
    type: "primary",
    children: "click me!",
  },
};

// export const StyledDefaultButton = () => <Button>CLICK</Button>;
// export const StyledPrimaryButton = () => <Button type="primary">CLICK</Button>;
// export const StyledSecondaryButton = () => (
//   <Button type="secondary">CLICK</Button>
// );
