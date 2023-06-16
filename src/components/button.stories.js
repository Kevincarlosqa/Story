import Button from "./button";

export default {
  title: "Button",
  component: Button,
};

export const DefaultButton = () => <Button>CLICK</Button>;
export const PrimaryButton = () => <Button type="primary">CLICK</Button>;
export const SecondaryButton = () => <Button type="secondary">CLICK</Button>;
