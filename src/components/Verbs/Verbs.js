// Verbs.js
import React from 'react';
import { Card, Title, Row, Pronoun, Conjugation } from './Verbs.styles';

const Verbs = ({ verb, translation, conjugations, vd, ovt }) => (
    <Card>
        <Title>{verb} ({translation})</Title>

        {["Ik", "Jij", "Hij/zij", "Wij", "Jullie", "Zij"].map((pronoun, index) => (
            <Row key={index}>
                <Pronoun>{pronoun}</Pronoun>
                <Conjugation>{conjugations[index]}</Conjugation>
            </Row>
        ))}
        {vd && <Title>VD: {vd}</Title>}
        {ovt && <Title>OVT: {ovt}</Title>}
    </Card>
);

export default Verbs;




