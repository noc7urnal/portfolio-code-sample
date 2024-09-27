import { useEffect, useRef, useState } from "react";
import Button from "../../atoms/Button";
import { AccordionItemProps } from "./types";

const AccordionItem = (props: AccordionItemProps) => {
  const { id, title, content, isExpanded, onToggle } = props;

  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [content]);

  return (
    <li>
      <Button
        onClick={() => onToggle(id)}
        ariaControls={`content-${id}`}
        ariaExpanded={isExpanded}
        id={`button-${id}`}
        className={`accordion-button ${isExpanded ? "expanded" : ""}`}
        chevron={true}
      >
        {title}
      </Button>
      <div
        ref={contentRef}
        className={`accordion-content ${isExpanded ? "expanded" : ""}`}
        id={`content-${id}`}
        role="region"
        aria-labelledby={`button-${id}`}
        style={{ maxHeight: isExpanded ? `${contentHeight}px` : "0" }}
      >
        <p>{content}</p>
      </div>
    </li>
  );
};

export default AccordionItem;
