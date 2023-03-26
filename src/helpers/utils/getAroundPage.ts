const getAroundPages = (pagesCount: number, currentPage: number, maxPages: number): number[] => {
    const pages = []
    if (maxPages > pagesCount) {
        for (let i = 1; i <= pagesCount; i++) pages.push(i)
        return pages
    }
    const around = Math.ceil(maxPages / 2)
    if (currentPage <= around) {
        for (let i = 1; i <= maxPages; i++) pages.push(i)
        return pages
    }
    if (currentPage + around >= pagesCount) {
        for (let i = currentPage - around + 1; i <= pagesCount; i++) pages.push(i)
        return pages
    }
    for (let i = currentPage - around + 1; i <= currentPage + around; i++) pages.push(i)
    return pages
}

export default getAroundPages