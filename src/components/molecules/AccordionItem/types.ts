export interface AccordionItemProps {
    id: string;
    title: string;
    content: string;
    isExpanded: boolean;
    onToggle: (id: string) => void;
}
