import { ClassNameProps, OptionalChildrenProps } from "../../types/types";

export interface CaptionProps extends ClassNameProps, OptionalChildrenProps {
    children: React.ReactNode;
    className?: string;
}
