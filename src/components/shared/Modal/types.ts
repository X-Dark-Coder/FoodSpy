export type ModalProps = {
    show: boolean;
    children: any;
    onClose: () => void;
    containerClassName?: string;
};