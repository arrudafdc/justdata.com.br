import { BrandSection, ContactButton, MainContainer } from "./styles";

export function Home() {
  return (
    <MainContainer>
      <BrandSection>
        <h1>
          <span>Dados e Desenvolvimento,</span> é isso!
        </h1>
        <p>Novidades em breve...</p>
        <a href="https://www.instagram.com/justd.ata/" target="_blank">
          <ContactButton>Nosso Instagram 🚀</ContactButton>
        </a>
      </BrandSection>
    </MainContainer>
  );
}
