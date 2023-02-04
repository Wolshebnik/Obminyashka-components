export enum ButtonType {
    Button = "button",
    Submit = "submit",
    Reset = "reset",
}
export interface ButtonProps {
    mb?: string,
    bold?: boolean,
    icon?: string,
    text?: string,
    width: string,
    style?: any, // I don't find this property in StyledButton component
    lHeight?: string,
    isLoading?: boolean,
    disabling?: boolean, // don't find this property
    onClick(): void,
    type: ButtonType,
    whatClass: string | null,
}