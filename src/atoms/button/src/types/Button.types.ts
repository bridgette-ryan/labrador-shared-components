// import { AriaProps } from "@labrador-sgd/aria-props";
// import { DefaultProps } from "@labrador-sgd/default-props";
// import { InteractiveProps } from "@labrador-sgd/interactive-props";
import { PropsWithChildren } from "react";
// DefaultProps & AriaProps & InteractiveProps &
export type ButtonProps = PropsWithChildren & {
    label?: string,
    variant?: string,
    icon?: string,
    svgSource?: string,
};

export default ButtonProps;