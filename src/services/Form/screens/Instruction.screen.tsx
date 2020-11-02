/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import { Button } from 'antd';
import styled from '@emotion/styled';

import { Anchor, Headings, OrderedList, Paragraph, Article } from 'components';

const Title = styled(Headings.h1)`
  text-align: center;
  margin: auto;
  margin-bottom: 50px;
  margin-top: 70px;
`;

const Steps = styled(OrderedList)`
  margin-top: 60px;
`;

const LegalNotice = styled(Paragraph)`
  font-size: 14px;
  font-style: italic;
`;

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 40px;
  height: auto;
  span {
    font-size: 17px;
    color: #111216;
  }
`;

const Container = styled(Article)`
  padding-bottom: 80px;
`;

interface Props {
  onSubmit: () => void;
}

const InstructionScreen: React.FC<Props> = ({ onSubmit }) => (
  <>
    <Container>
      <Title>Créez votre attestation de déplacement COVID-19</Title>
      <Headings.h2>
        Votre attestation de officielle en quelques secondes. Entrez vos
        informations <b>une seule et unique fois</b>.
      </Headings.h2>
      <Steps>
        <li>
          <Paragraph>
            Remplissez vos informations lors de votre première visite
          </Paragraph>
        </li>
        <li>
          <Paragraph>Choisissez le ou les motifs de déplacement</Paragraph>
        </li>
        <li>
          <Paragraph>
            Et voilà votre attestation de déplacement officielle COVID-19 est
            prête !
          </Paragraph>
        </li>
      </Steps>
      <LegalNotice>
        Toutes vos informations sont stockés localement à votre appareil et ne
        sont jamais envoyé à un serveur. La web app est basée sur le projet
        officiel du ministère de l'intérieur{' '}
        <Anchor
          href="https://media.interieur.gouv.fr/deplacement-covid-19/"
          target="_blank"
        >
          COVID-19 ATTESTATION DE DÉPLACEMENT DÉROGATOIRE
        </Anchor>
        . Cette web app génère donc un document officiel de déplacement
        COVID-19.
      </LegalNotice>
    </Container>
    <StyledButton onClick={onSubmit}>J'ai compris !</StyledButton>
  </>
);

// @ts-ignore
InstructionScreen.whyDidYouRender = true;

export default React.memo(InstructionScreen);