import React, {FC, PropsWithChildren} from 'react';
import Header from "@/components/layout/header/Header";

const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {
    return (
        <div>
            <Header />
            <main className='main'>
                <div className='container'>
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;