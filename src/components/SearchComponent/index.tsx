import React from "react";
import { MoviesApi } from "../../types";

interface SearchComponentProps {
    search: string;
    api?: MoviesApi
}

export const SearchComponent: React.FC<SearchComponentProps> = React.memo((props: SearchComponentProps)
: JSX.Element => (
    <h3>
        You searched for: {props.search}, {props.api?.totalResults ? props.api.totalResults : 'NO'} results found
    </h3>
));
