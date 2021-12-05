import React from 'react';
import styles from '../../styles/index.module.css';

interface CatalogCardComponentProps {
    icon: string;
    name: string;
    year: string;
    id: string;
    type: string;
}

export const CatalogCardComponent: React.FC<CatalogCardComponentProps> = React.memo((
    props: CatalogCardComponentProps
): JSX.Element => {
    return (
        <div className={styles.card}>
            <div className={styles.poster}>
                <img
                    src={props.icon}
                    className={styles.image}
                    alt={`${props.name}`}
                />
            </div>

            <div className={styles.description}>
                <span>Name: {props.name}</span>
                <span>Year: {props.year}</span>
                <span>imdbID: {props.id}</span>
                <span>Type: {props.type}</span>
            </div>
        </div>
    );
});
