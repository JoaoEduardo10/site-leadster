import {
  Button,
  ConteinerImage,
  ConteinerText,
  Description,
  LeadsGenerationBanner as LeadsGenerationBanneConteiner,
  SeparatorText,
  ConteinerImageText,
} from './styles';
import imageGraphic from '../../images/comparativo_img_CTA.png';
import imageSelo from '../../images/selo_RD.png';
import card from '../../images/no-card-dark.webp';
import rating from '../../images/rating.webp';
import Image from 'next/image';

export const LeadsGenerationBanner = () => {
  return (
    <LeadsGenerationBanneConteiner>
      <ConteinerImage>
        <Image alt="grafico" src={imageGraphic} width={0} height={0} />
      </ConteinerImage>
      <ConteinerText>
        <SeparatorText aria-label="texto 1">
          <h2>
            Pronto para tripicar sua <span>Geração de Leads?</span>
          </h2>
          <p>
            Criação e ativação em <span>4 minutos</span>
          </p>
        </SeparatorText>
        <SeparatorText aria-label="texto 2">
          <Button>VER DEMONSTRAÇÃO</Button>
          <ConteinerImageText>
            <Image alt="selo" src={imageSelo} width={0} height={0} />
          </ConteinerImageText>
        </SeparatorText>
        <Description>
          <ConteinerImageText>
            <Image alt="cartão" src={card} width={0} height={0} />
          </ConteinerImageText>
          <span>Não é necessário Cartão de Crédito |</span>
          <ConteinerImageText>
            <Image alt="estrelas" src={rating} width={0} height={0} />
          </ConteinerImageText>
          <span>4.9/5 média de satisfação</span>
        </Description>
      </ConteinerText>
    </LeadsGenerationBanneConteiner>
  );
};
