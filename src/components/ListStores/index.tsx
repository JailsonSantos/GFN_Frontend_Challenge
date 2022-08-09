import { MagnifyingGlass } from "phosphor-react";
import { Store } from "../Store";
import { AreaTitle, AreaResults, Container, SeachArea, InputArea, AreaList } from "./styles";
import { data } from '../../services/data';
import { Pagination } from "../Pagination";
import { SetStateAction, useEffect, useState } from "react";
import { useStores } from "../../services/hooks/useStores";
import { api } from "../../services/api";


// Skeleton
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface StoresProps {
  stores: {
    name: string;
    city: string
    state: string
    latitude: number;
    longitude: number;
    revenue: number;
  }[],
  totalCountOfRegisters: number;
}

type Store = {
  id: string;
  name: string;
  city: string
  state: string
  latitude: string;
  longitude: string;
  revenue: string;
}



export function ListStores() {

  const [page, setPage] = useState(1);
  const [searchWord, setSearchWord] = useState("");

  const [newWord, setNewWord] = useState("");

  const { data, isLoading, isFetching, error } = useStores(page);


  /* 
    function handleBusca() {
      if (searchWord.length > 0) {
        storeFilteres = data?.stores?.filter(store => store.name.toLocaleLowerCase()
          .includes(searchWord.toLocaleLowerCase())
        )
        setNewWord(searchWord)
      } else {
        setSearchWord("")
        setNewWord("")
      }
    }
   */


  /* LOGICA DE PAGINAÇÃO
   {(rowsPerPage > 0
          ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : rows
        ).map
  */

  // Filtro em constantes ao inves de states
  const storeFilteres = searchWord.length > 0 ?
    data?.stores?.filter(store => store.name.toLocaleLowerCase()
      .includes(searchWord.toLocaleLowerCase())
    ) : [];

  return (

    <Container>

      <SeachArea>
        <InputArea
          type="text"
          placeholder="Digite a Loja a ser pesquisada..."
          value={searchWord}
          onChange={e => setSearchWord(e.target.value)}
        />
        <MagnifyingGlass size={32} />

      </SeachArea>

      <AreaList>
        <AreaTitle>
          <span>LOJA</span><span>FATURAMENTO</span>
        </AreaTitle>


        <SkeletonTheme
          baseColor="#5294e0"
          highlightColor="#96c7ff"
          borderRadius="0.5rem"
          duration={4}
        >
          {searchWord.length > 0 ?
            (
              <AreaResults>
                <div>
                  {storeFilteres?.map((store) => (
                    <Store key={store.id} store={store} />
                  ))}
                </div>

                <Pagination
                  currentPage={page}
                  onPageChange={setPage}
                  totalCountOfRegisters={data?.totalCount || 0}
                  isLoading={isLoading}
                />
              </AreaResults>
            ) :
            (
              <>
                {data?.stores.map((store) => (
                  <Store key={store.id} store={store} />
                ))}

                <Pagination
                  currentPage={page}
                  onPageChange={setPage}
                  totalCountOfRegisters={data?.totalCount || 0}
                  isLoading={isLoading}
                />
              </>
            )
          }
        </SkeletonTheme>

      </AreaList>

    </Container>
  )
}