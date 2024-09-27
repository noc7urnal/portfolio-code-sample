import { ClassNameProps, OptionalChildrenProps } from "../../types/types";

export interface HeroProps extends ClassNameProps, OptionalChildrenProps {
  active: boolean;
}
