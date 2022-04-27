export type TModalProps = {
    show: boolean;
    children: any;
    onClose: () => void;
    containerClassName?: string;
};