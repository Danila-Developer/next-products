import React, {FC, useState} from 'react';
import style from './PageButtons.module.css'
import Button from "@/components/UI/button/Button";
import getAroundPages from "@/helpers/utils/getAroundPage";

interface PageButtonsProps {
    pagesCount: number;
    currentPage: number;
}


const PageButtons: FC<PageButtonsProps> = ({ pagesCount, currentPage}) => {
    const [currentPageState, setCurrentPageState] = useState<number>(currentPage)
    const aroundPages = getAroundPages(pagesCount, currentPageState, 8)

    return (
        <div className={style.pageButtons}>
            <Button
                disabled={currentPageState === 1}
                href={`/?page=${currentPageState - 1}`}
                onClick={() => setCurrentPageState(currentPageState - 1)}
            >
                Назад
            </Button>
            {
                aroundPages.map(page =>
                    <Button
                        key={page}
                        href={`/?page=${page}`}
                        isActive={currentPageState === page}
                        disabled={currentPageState === page}
                        onClick={() => setCurrentPageState(page)}
                    >
                        {page}
                    </Button>
                )
            }
            <Button
                href={`/?page=${currentPageState + 1}`}
                disabled={currentPageState === pagesCount}
                onClick={() => setCurrentPageState(currentPageState + 1)}
            >
                Вперед
            </Button>
        </div>
    );
};

export default PageButtons;