import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext()
FavoritesContext.displayName = 'myFavorites'

export default function FavoritesProvider( { children } ){
    const [favorite, setFavorite] = useState([])

    return(
        <FavoritesContext.Provider
            value={{favorite, setFavorite}}
        >
            { children }
        </FavoritesContext.Provider>
    );
};

// hook personalizado 
export function useFavoriteContext(){
    const {favorite, setFavorite} = useContext(FavoritesContext);

    function addFavorite(newFavorite){
        // verificar se tem item repetido
        const repeatedFavorite = favorite.some(item => item.id === newFavorite.id)

        // Nova lista recebe lista anterior 
        let newList = [...favorite]

        // verificar se não tem repetido e adicionar na lista de favoritos
        if(!repeatedFavorite){
            newList.push(newFavorite)
            return setFavorite(newList)
        }

        // Se for repetido vai ser tirado da lista 
        newList = favorite.filter(fav => fav.id !== newFavorite.id)
        return setFavorite(newList)
    }

    return {
        favorite, addFavorite
    }
}
