import React from 'react';

type SectionContextType = {
    color: string
}

const SectionContext = React.createContext<SectionContextType>({
    color: 'black'
})

export default SectionContext;