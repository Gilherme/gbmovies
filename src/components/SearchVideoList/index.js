import styles from './searchVideoList.module.css'
import VideoList from '../VideoList'
import { useEffect, useState } from 'react';
import Loader from '../Loader';

function filterVideos(videos,searchText){
    return videos.filter(v => v.category.includes(searchText) || v.title.includes(searchText))
}

function SearchVideoList ({ movies }) {

    const [ searchText, setSearchText ] = useState('');
    const foundVideos = filterVideos(movies, searchText)

    const [ loading, setLoading ] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
    }, [])

    return (
        <section className={styles.searchVideoList}>
            <input
                type='search'
                placeholder='Pesquise por titulos ou categoria'
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
            />
           { loading ? <Loader /> :
            <VideoList movies={foundVideos} emptyHeading={`Sem resultados para "${searchText}"`} />
            }
        </section>
    );
}

export default SearchVideoList;
