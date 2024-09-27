export interface AssetItem {
  slug: string;
  name: string;
  assets?: mediaItem;
  description: string;
  logo?: string;
  concept?: boolean;
  tags: string[];
  button?: { link?: string; text: string; color?: string };
  sections?: SectionItem[];
}

export interface SectionItem {
  type?: string;
  heading?: string;
  description?: string;
  assets?: mediaItem;
  button?: { link: string; text: string; color: string };
}

export interface mediaItem {
  videoSrc?: string;
  imgSrc?: string;
  caption?: string;
}

export type AssetData = {
  [key: string]: AssetItem[];
};

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
  isExpanded: boolean;
}

export interface AccordionItemType {
  component: "accordion";
  items: AccordionItem[];
  section: SectionItem;
}

export type ClassNameProps = {
  className?: string;
};

export type OptionalChildrenProps = {
  children?: React.ReactNode;
};

export type TilePositionType = {
  left: number;
  top: number;
  width: number;
  height: number;
  paddingTop: number;
  paddingLeft: number;
};
