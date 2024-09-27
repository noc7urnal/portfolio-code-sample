import { getClassNames } from "../../helpers/styles";
import styles from "./LetterDrop.module.scss";
import { LetterDropProps } from "./types";

const LetterDrop = (props: LetterDropProps) => {
  const { text, animate, className } = props;

  const words = text.split(" ");
  const letters: JSX.Element[] = [];
  const cn = getClassNames(
    styles,
    styles.lettersWrapper,
    className,
    animate && styles.animate
  );

  // Split each word into individual letters and add them to the letters array
  words.forEach((word, wordIndex) => {
    const wordLetters = word.split("");
    wordLetters.forEach((letter, letterIndex) => {
      letters.push(
        <span key={`word-${wordIndex}-letter-${letterIndex}`}>{letter}</span>
      );
    });

    // Add a space after each word except for the last one
    if (wordIndex < words.length - 1) {
      letters.push(<span key={`word-${wordIndex}-space`}>&nbsp;</span>);
    }
  });

  return (
    <div className={cn}>
      <div>{letters}</div>
    </div>
  );
};
export default LetterDrop;
