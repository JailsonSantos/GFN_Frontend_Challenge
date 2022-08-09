import { Fragment } from "react";
import { Container } from "./styles";

interface StoresProps {
  store: {
    id: number;
    name: string;
    city: string
    state: string
    latitude: number;
    longitude: number;
    revenue: number;
  }
  minimumBilling: string;
}

export function Store({ store, minimumBilling }: StoresProps) {

  return (
    <Container>
      {store.revenue <= Number(minimumBilling) || store.revenue <= 15000 ? (
        <Fragment>
          <span className="red">{store.name}</span><span className="red">R$ {store.revenue}</span>
        </Fragment>
      ) : (
        <Fragment>
          <span>{store.name}</span><span> R$ {store.revenue}</span>
        </Fragment>
      )}
    </Container>
  )
}