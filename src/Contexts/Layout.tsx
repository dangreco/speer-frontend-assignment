import React from 'react';

export type Layout = {
    width: number;
    height: number;
    y: number;
    x: number;
}


const LayoutContext = React.createContext<Layout>({
    width: 0,
    height: 0,
    x: 0,
    y: 0
});

export default LayoutContext;