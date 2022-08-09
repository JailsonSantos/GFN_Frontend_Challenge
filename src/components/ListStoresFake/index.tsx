import { Store } from "../Store";
import { MagnifyingGlass } from "phosphor-react";
import { PaginationFake } from "../PaginationFake";

import {
  AreaTitle,
  AreaResults,
  Container,
  SeachArea,
  InputArea,
  AreaList,
  PaginationFooter
} from "./styles";

type Store = {
  id: number;
  name: string;
  city: string
  state: string
  latitude: number;
  longitude: number;
  revenue: number;
}

interface DateProps {
  stores: Store[];
  totalCountOfRegisters: number;
}

interface ListStoresFakeProps {
  page: number;
  data: DateProps;
  searchWord: string;
  rowsPerPage: number;
  minimumBilling: string;
  storeFilteres: Store[];
  handleSetSearchWord: (word: string) => void;
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void;
}

export function ListStoresFake({
  page,
  data,
  searchWord,
  rowsPerPage,
  storeFilteres,
  minimumBilling,
  handleChangePage,
  handleSetSearchWord,
}: ListStoresFakeProps) {

  return (

    <Container>
      <SeachArea>
        <InputArea
          type="text"
          value={searchWord}
          placeholder="Digite a Loja a ser pesquisada..."
          onChange={e => handleSetSearchWord(e.target.value)}
        />
        <MagnifyingGlass size={32} />
      </SeachArea>

      <AreaList>
        <AreaTitle>
          <span>LOJA</span><span>FATURAMENTO</span>
        </AreaTitle>

        {searchWord.length > 0 ?
          (
            <AreaResults>
              <div>
                {(rowsPerPage > 0
                  ? storeFilteres.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : storeFilteres
                ).map((store) => (
                  <Store key={store.id} store={store} minimumBilling={minimumBilling} />
                ))}
              </div>

              <PaginationFooter>
                {`pagina ${page + 1} de ${Math.ceil(storeFilteres.length / rowsPerPage)}`}
                <PaginationFake
                  page={page}
                  rowsPerPage={rowsPerPage}
                  count={storeFilteres.length}
                  onPageChange={handleChangePage}
                />
              </PaginationFooter>
            </AreaResults>
          ) :
          (
            <AreaResults>
              <div>
                {(rowsPerPage > 0
                  ? data?.stores.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : data?.stores
                ).map((store) => (
                  <Store key={store.id} store={store} minimumBilling={minimumBilling} />
                ))}
              </div>

              <PaginationFooter>

                {`Página ${page + 1} de ${Math.ceil(data.totalCountOfRegisters / rowsPerPage)}`}

                <PaginationFake
                  page={page}
                  rowsPerPage={rowsPerPage}
                  onPageChange={handleChangePage}
                  count={data.totalCountOfRegisters}
                />

              </PaginationFooter>
            </AreaResults>
          )
        }
      </AreaList>
    </Container>
  )
}
