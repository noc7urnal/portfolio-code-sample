import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accordionItemAtom } from "../../helpers/atoms";
import AccordionItem from "../../molecules/AccordionItem";
import { AccordionProps } from "./types";

const Accordion = (props: AccordionProps) => {
  const { data } = props;

  const [items, setItems] = useRecoilState(accordionItemAtom);

  const handleToggle = (id: string) => {
    setItems((prevItems) => ({
      ...prevItems,
      items: prevItems.items.map((item) =>
        item.id === id
          ? { ...item, isExpanded: !item.isExpanded }
          : { ...item, isExpanded: false }
      ),
    }));
  };

  useEffect(() => {
    setItems(data);
  }, [data, setItems]);

  return (
    <ul className="accordion">
      {items.items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          isExpanded={item.isExpanded}
          onToggle={handleToggle}
        />
      ))}
    </ul>
  );
};

export default Accordion;
