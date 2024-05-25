import { Buildings, Cursor, DeviceMobile } from "phosphor-react";
import { ServiceItem } from "./components/ServiceItem";
import {
  BrandSection,
  ContactButton,
  MainContainer,
  ServiceSection,
} from "./styles";

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

      <ServiceSection>
        <h2>Nossos serviços</h2>
        <article>
          <ServiceItem
            title="Desenvolvimento Web"
            description="Criamos aplicações web personalizadas usando tecnologias modernas, como React, e Node.js."
            icon={<Cursor size={24} />}
          />
          <ServiceItem
            title="Desenvolvimento Mobile"
            description="Aplicações mobile personalizadas usando tecnologias modernas como React Native."
            icon={<DeviceMobile size={24} />}
          />
          <ServiceItem
            title="ERP e CRM"
            description="Sistemas de ERP e CRM  e outras soluções de software empresarial sob medida."
            icon={<Buildings size={24} />}
          />
          <ServiceItem
            title="Dashboards Interativos"
            description="Criação de dashboards interativos para ajudar as empresas a monitorar métricas importantes em tempo real."
            icon={<Buildings size={24} />}
          />
          <ServiceItem
            title="Análise de Dados"
            description="Oferecemos soluções de análise de dados que transformam informações brutas em insights valiosos."
            icon={<Buildings size={24} />}
          />
          <ServiceItem
            title="Data Warehousing e ETL"
            description="Desenvolvimento de pipelines de ETL para extrair dados de várias fontes, transformá-los em um formato utilizável."
            icon={<Buildings size={24} />}
          />
        </article>
      </ServiceSection>
    </MainContainer>
  );
}
