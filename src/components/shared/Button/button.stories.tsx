import {Button} from "components/shared";
import {ReactComponent as QRCode} from "assets/icons/QR-code.svg"; 

export default {
  title: "Shared/Button",
  component: Button,
};

export const WidePrimary = () => <Button variant="wide-primary">Button</Button>;
export const WidePrimaryWidthIcon = () => <Button variant="wide-primary" icon={QRCode}>Button</Button>;
export const WideSecondary = () => <Button variant="wide-secondary">Button</Button>;
export const ButtonDisabled = () => <Button variant="wide-primary" icon={QRCode} disabled>Button</Button>;
