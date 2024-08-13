import styles from './formNewVideo.module.css'
import { categories } from '../Category';
import { useState } from 'react';

function FormNewVideo() {
   
    const [link, setLink] = useState('')
    const [category, setCategory] = useState()
    const [videos, setVideos] = useState([])
    const [errors, setErrors] = useState('')
    const [success, setSuccess] = useState('')

    const onSave = (e) => {

        e.preventDefault()
   
        const linkValid = link.includes('https://www.youtube.com/watch?v=') ? true : false;
        const categoryValid = category && category !== '' ? true : false;

        if( !categoryValid ) { setErrors('Escolha uma categoria'); return; } else { setErrors('') }
        if( !linkValid     ) { setErrors('link inválido');         return; } else { setErrors('') }

        if (linkValid && categoryValid) {

            const v = link.indexOf('v=')
            const id = link.substring((v + 2), (v + 13))

            const newVideo = { id, category }
            setVideos([...videos, newVideo])
            
            console.log(id)
            localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))

            // Para limpar o form depois de enviar os dados 
            setCategory('')
            setLink('')
            setSuccess('Video adicionado com sucesso!')
        }

    }

    return (
        <section className={styles.formNewVideo}>
            <h2>Adicionar novo video</h2>
            <form onSubmit={onSave} className={styles.form}>
                <div>

                    <label>Link</label>
                    <input
                        name='link'
                        type='text'
                        required='required'
                        value={link}
                        onChange={e => setLink(e.target.value)}
                        placeholder='Cole o link do video'
                        minLength='22'
                        maxLength='120'
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option value=''>Selecione uma categoria</option>
                        {
                            categories.map((cat, index) => (
                                <option key={index} value={cat}>{cat}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <button>Adicionar</button>
                </div>
                <div className={styles.error}> {errors} </div>
                <div className={styles.success}> {success} </div>
            </form>
        </section>
    );
}

export default FormNewVideo;
