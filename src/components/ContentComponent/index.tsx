import React from "react";
import { Movie, MoviesApi } from "../../types";
import { CatalogCardComponent } from "../CatalogCardComponent";
import styles from '../../styles/index.module.css'

interface ContentComponentProps {
    api?: MoviesApi;
}

export const ContentComponent: React.FC<ContentComponentProps> = React.memo((props: ContentComponentProps): JSX.Element => {
    return (
        <div className={styles.contentItems}>
            {!props.api ? (
                <span>Loading...</span>
            ) : (
                props.api.Search?.slice(0, 8).map((movie: Movie, i: number) => (
                    <CatalogCardComponent
                        icon={movie.Poster}
                        name={movie.Title}
                        year={movie.Year}
                        id={movie.imdbID}
                        type={movie.Type}
                        key={i}
                    />
                ))
            )}
        </div>
    );
});
