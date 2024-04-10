import { VocabularyItem, VocabularyList, Title, Separator } from "./Vocabulary.styles";

const Vocabulary = ({ words }) => (
    <div>
        <Separator />
        <Title>Woordenschat / Vocabulary</Title>
        <VocabularyList>
            {words.map((word, index) => (
                <VocabularyItem key={index}>
                    <strong>{word.dutch}</strong>: {word.english}
                </VocabularyItem>
            ))}
        </VocabularyList>
        <Separator />
    </div>
);

export default Vocabulary;