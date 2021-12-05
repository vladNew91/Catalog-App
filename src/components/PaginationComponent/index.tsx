import React from 'react';
import styles from '../../styles/index.module.css';
import { MoviesApi } from '../../types';

interface PaginationComponentProps {
    api?: MoviesApi;
    setPage: (page: number) => void;
}

export const PaginationComponent: React.FC<PaginationComponentProps> = React.memo((
    props: PaginationComponentProps
): JSX.Element => {
    let pages = 1;

    if (props.api?.totalResults) {
        const maxPages = 10;
        const totalPages = props.api?.totalResults / maxPages;

        if (totalPages > maxPages) {
            pages = maxPages;
        } else pages = Math.ceil(totalPages);
    }

    return (
        <div className={styles.pagination}>
            <span>&#60;</span>

            {Array.from({ length: pages }, (_, i) => (
                <span className={styles.pageBtn} onClick={() => props.setPage(i)} key={i}>
                    {++i}
                </span>
            ))}

            <span>&#62;</span>
        </div>
    );
});
