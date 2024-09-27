import { ClassNameProps, OptionalChildrenProps } from "../../types/types";

export interface ButtonProps extends ClassNameProps, OptionalChildrenProps {
    onClick?: () => void;
    ariaControls?: string;
    ariaExpanded?: boolean;
    ariaLabel?: string;
    buttonColor?: string;
    id?: string;
    chevron?: boolean;
  }
