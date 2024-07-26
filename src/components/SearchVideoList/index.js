import styles from './searchVideoList.module.css'
import VideoList from '../VideoList'
import { useState } from 'react';

function filterVideos(videos,searchText){
    return videos.filter(v => v.category.includes(searchText) || v.title.includes(searchText))
}

function SearchVideoList ({ movies }) {

    const [ searchText, setSearchText ] = useState();
    const foundVideos = filterVideos(movies, searchText)

    return (
        <section className={styles.searchVideoList}>
            <input
                type='search'
                placeholder='Pesquise por titulos ou categoria'
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
            />
            <VideoList movies={foundVideos} emptyHeading={`Sem resultados para "${searchText}"`} />
        </section>
    );
}

export default SearchVideoList;
