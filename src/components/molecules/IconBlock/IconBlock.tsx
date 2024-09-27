import { renderIcons } from "../../helpers/hooks";
import { IconProps } from "./types";
const Icon = (props: IconProps) => {
  const { data } = props;

  return (
    <ul className="tile__meta__tag">
      {data?.tags.map((item, index) => {
        return (
          <li className="tile__meta__tag__item" key={index}>
            <i
              className={`tile__meta__tag__item__icon iconcss ${renderIcons(
                item
              )}`}
            ></i>
            <div className="tile__meta__tag__item__text">{item}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default Icon;
