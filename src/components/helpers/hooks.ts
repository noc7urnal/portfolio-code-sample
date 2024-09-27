import { SetterOrUpdater } from "recoil";
import { AssetItem, SectionItem, TilePositionType } from "../types/types";
// import { tilePosState } from "./atoms";

export const goToUrl = (data: AssetItem | SectionItem) => {
    if (data && data.button) {
        window.open(data?.button.link, '_blank');
    }
}

export const renderIcons = (tag:string) => {
    switch(tag) {
        case 'UX/UI Design':
            return 'icon-ux';
            break;
        case 'Graphic Design':
            return 'icon-graphic-design';
            break;
        case 'Front End':
            return 'icon-code';
            break;
        case 'Responsive':
            return 'icon-responsive';
            break;
        case 'Video Editing':
            return 'icon-video';
            break;
        case 'Photo Editing':
        case 'Photography':
            return 'icon-photography';
            break;
        case 'Print Design':
            return 'icon-brochure';
            break;
        case 'Package Design':
            return 'icon-package';
            break;
        case 'Flash':
            return 'icon-flash';
            break;
    }
}

export const setTilePos = (tile: HTMLElement | null, setTilePosition: SetterOrUpdater<TilePositionType>) => {
    if (tile) {
        const { top, left, width, height } = tile.getBoundingClientRect();
        const paddingSource = window.getComputedStyle(tile);
        const paddingTop = parseFloat(paddingSource.paddingTop);
        const paddingLeft = parseFloat(paddingSource.paddingLeft);

        setTilePosition({ left, top, width, height, paddingTop, paddingLeft });
    }
}
