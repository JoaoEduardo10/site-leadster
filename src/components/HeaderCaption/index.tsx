import Image from 'next/image';
import * as Styled from './styles';
import icon from '../../images/asset-header.png';

export const HeaderCaption = () => {
  return (
    <Styled.Conteiner>
      <Styled.HeaderCaptionContainer>
        <Styled.HeaderCaptionSubtitle aria-label="subtitle">
          webinars exclusivos
        </Styled.HeaderCaptionSubtitle>
        <Styled.HeaderCaptionText aria-label="title">
          Menos Conversinha
        </Styled.HeaderCaptionText>
        <Styled.HeaderCaptionMainText aria-label="main title">
          <Image src={icon} alt={`${icon}`} />
          <p>Mais Conversão</p>
        </Styled.HeaderCaptionMainText>
        <Styled.Paragraph aria-label="paragraph">
          Conheça as estratégias que mudaram o jogo e como aplicá-las no seu
          negócio
        </Styled.Paragraph>
      </Styled.HeaderCaptionContainer>
    </Styled.Conteiner>
  );
};
