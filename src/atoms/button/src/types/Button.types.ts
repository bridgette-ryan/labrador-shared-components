import { AriaProps } from "@labrador-sgd/aria-props";
import { DefaultProps } from "@labrador-sgd/default-props";
import { InteractiveProps } from "@labrador-sgd/interactive-props";
import { PropsWithChildren } from "react";

export type ButtonProps = DefaultProps & AriaProps & InteractiveProps & PropsWithChildren & {
    label?: string,
    variant?: string,
    icon?: string,
    svgSource?: string,
};

export default ButtonProps;