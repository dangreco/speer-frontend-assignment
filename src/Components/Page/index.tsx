import React from 'react';
import Footer from '../Footer';

import './styles.css';

const Page: React.FC = ({ children }) => {

    return (
        <div className="Page">
            { children }
            <Footer />
        </div>
    )

}


export default Page;