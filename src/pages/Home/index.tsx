import { BrandSection, ContactButton, MainContainer } from "./styles";

export function Home() {
  return (
    <MainContainer>
      <BrandSection>
        <h1>
          <span>Dados e Desenvolvimento,</span> é isso.
        </h1>
        <p>
          Juntamos dados + desenvolvimento de software trazendo o melhor dos
          dois mundo para criar soluções inovadoras.
        </p>
        <ContactButton>Entre em contato 🚀</ContactButton>
      </BrandSection>
    </MainContainer>
  );
}
