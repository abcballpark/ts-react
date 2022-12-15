import React from 'react';

export interface AppProps {
    name: string
}

export const App = (props: AppProps) => {
    return <div>
        <h1>Hello There {props.name}</h1>
    </div>
}
