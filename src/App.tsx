import React from 'react';
import { MoviesApi } from './types';
import styles from './styles/index.module.css';
import { ContentComponent, HeaderComponent, PaginationComponent, SearchComponent } from './components';

const URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8';

export const App: React.FC = (): JSX.Element => {
    const [api, setApi] = React.useState<MoviesApi>();
    const [search, setSearch] = React.useState<string>('batman');
    const [page, setPage] = React.useState<number>(1);

    React.useEffect(() => {
        fetch(`${URL}&s=${search}&page=${page}`)
            .then((res) => res.json())
            .then((api: MoviesApi) => setApi(api));
    }, [search, page]);

    return (
        <>
            <HeaderComponent
                search={search}
                setSearch={setSearch}
                setPage={setPage}
            />

            <section className={styles.content}>
                <SearchComponent search={search} api={api} />
                <ContentComponent api={api} />
                <PaginationComponent api={api} setPage={setPage} />
            </section>
        </>
    );
};
