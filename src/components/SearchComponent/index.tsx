import React from 'react';

interface SearchComponentProps {
    search: string;
    totalResults?: number;
}

export const SearchComponent: React.FC<SearchComponentProps> = React.memo((props: SearchComponentProps)
: JSX.Element => (
    <h3>
        You searched for: {props.search}, {props.totalResults ? props.totalResults : 'NO'} results found
    </h3>
));
