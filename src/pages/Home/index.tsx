import { useState } from "react";
import { data } from "../../services/data";
import { Header } from "../../components/Header";
import { MapStores } from "../../components/MapStores";
import { ListStoresFake } from "../../components/ListStoresFake";
import { Container, MainContent, SectionLeft, SectionRight } from "./styles";

export function Home() {

  const rowsPerPage = 8;
  const [page, setPage] = useState(0);
  const [searchWord, setSearchWord] = useState("");
  const [minimumBilling, setMinimumBilling] = useState("");

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number,
  ) => {
    setPage(page);
  };

  function handleSetSearchWord(word: string) {
    setSearchWord(word);
  }

  function handleSetMinimumBilling(value: string) {
    setMinimumBilling(value);
  }

  const storeFilteres = searchWord.length > 0 ?
    data?.stores?.filter(store => store.name.toLocaleLowerCase()
      .includes(searchWord.toLocaleLowerCase())
    ) : [];

  return (
    <Container>
      <Header />
      <MainContent>
        <SectionLeft>

          <ListStoresFake
            data={data}
            page={page}
            searchWord={searchWord}
            rowsPerPage={rowsPerPage}
            storeFilteres={storeFilteres}
            minimumBilling={minimumBilling}
            handleChangePage={handleChangePage}
            handleSetSearchWord={handleSetSearchWord}
          />
        </SectionLeft>

        <SectionRight>
          <MapStores
            searchWord={searchWord}
            storeFilteres={storeFilteres}
            minimumBilling={minimumBilling}
            handleSetMinimumBilling={handleSetMinimumBilling}
          />
        </SectionRight>

      </MainContent>
    </Container>
  )
}