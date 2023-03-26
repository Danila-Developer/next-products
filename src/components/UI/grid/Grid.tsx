import React, {FC, PropsWithChildren} from 'react';
import style from './Grid.module.css'

const Grid: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <div className={style.grid}>
            {children}
        </div>
    );
};

export default Grid;