import React from 'react';
import icon from '../../assets/user.png';
import styles from '../../styles/index.module.css';

interface HeaderComponentProps {
    search: string;
    setSearch: (value: string) => void; 
    setPage: (page: number) => void;
}

const defaultPage = 1;

export const HeaderComponent: React.FC<HeaderComponentProps> = React.memo((props: HeaderComponentProps)
: JSX.Element => {
    return (
        <header className={styles.header}>
            <h2 className={styles.headerArticle}>Movie Catalog</h2>

            <input
                value={props.search}
                className={styles.headerInput}
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    props.setSearch(e.target.value)
                    props.setPage(defaultPage)
                }}
            />

            <div className={styles.headerUser}>
                <img src={icon} alt="icon" />
                <span style={{textAlign: 'center'}}>Alexander Borisenko</span>
                <span>&#9660;</span>
            </div>
        </header>
    );
});
