import { data } from "../../services/data";
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Circle, Tooltip } from "react-leaflet";
import { Container, AreaTitle, SeachArea, AreaMap, InputArea } from "./styles";

type Store = {
  id: number;
  name: string;
  city: string
  state: string
  latitude: number;
  longitude: number;
  revenue: number;
}

interface MapStoresProps {
  searchWord: string;
  minimumBilling: string;
  storeFilteres: Store[];
  handleSetMinimumBilling: (value: string) => void;
}

export function MapStores({
  storeFilteres,
  searchWord,
  minimumBilling,
  handleSetMinimumBilling
}: MapStoresProps) {

  const minimumBillingFormatted = Number(minimumBilling);
  const centerSaoPaulo: LatLngExpression = [-23.595269, -46.669645];

  return (
    <Container>
      <AreaTitle>
        <span>Faturamento mínimo esperado</span>
      </AreaTitle>
      <SeachArea>
        <InputArea
          type="text"
          placeholder="15.000"
          value={minimumBilling}
          onChange={e => handleSetMinimumBilling(e.target.value)}
        />
      </SeachArea>

      <AreaMap>
        <MapContainer id="map" center={centerSaoPaulo} zoom={12} scrollWheelZoom={false}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {searchWord.length > 0 ?
            (
              storeFilteres.map((store) => (
                <Circle
                  key={store.id}
                  center={[store.latitude, store.longitude]}
                  radius={400}
                  pathOptions={
                    store.revenue <= minimumBillingFormatted || store.revenue <= 15000
                      ? { color: 'red' }
                      : { color: 'blue' }
                  }
                >
                  <Tooltip>
                    {store.name} <br /> {`R$ ${store.revenue}`}
                  </Tooltip>
                </Circle>
              ))
            ) : (
              data?.stores.map((store) => (
                <Circle
                  key={store.id}
                  center={[store.latitude, store.longitude]}
                  radius={400}
                  pathOptions={
                    store.revenue <= minimumBillingFormatted || store.revenue <= 15000
                      ? { color: 'red' }
                      : { color: 'blue' }
                  }
                >
                  <Tooltip>
                    {store.name} <br /> {`R$ ${store.revenue}`}
                  </Tooltip>
                </Circle>
              ))
            )
          }
        </MapContainer>
      </AreaMap>
    </Container>
  )
}