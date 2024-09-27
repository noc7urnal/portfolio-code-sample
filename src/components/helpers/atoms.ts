import { atom } from "recoil";
import { AccordionItemType, AssetItem } from "../types/types";

export const detailDataAtom = atom<AssetItem | null>({
    key: 'detailDataAtom',
    default: null,
});

export const tilePosState = atom ({
	key: 'tilePosition',
	default: {
		left: 0,
		top: 0,
		width: 0,
		height: 0,
		paddingTop: 0,
		paddingLeft: 0
	}
});

export const detailActive = atom({
	key: 'detailActive',
	default: false,
});

export const viewportDimensionsAtom = atom ({
	key: 'viewportDimensions',
	default: {
		width: 0,
      	height: 0,
	}
})

export const accordionItemAtom = atom<AccordionItemType>({
  key: 'accordionItemAtom',
  default: {
      component: 'accordion',
      items: [],
      section: {},
  },
});


