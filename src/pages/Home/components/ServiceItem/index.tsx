import { ServiceItemContainer } from "./style";
import { ReactNode } from "react";

interface ServiceItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export function ServiceItem(props: ServiceItemProps) {
  return (
    <ServiceItemContainer>
      <div>{props.icon}</div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </ServiceItemContainer>
  );
}
