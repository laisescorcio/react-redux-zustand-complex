import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { player } from './slicers/player'


export const store = configureStore({
    // reducer = terá as informações que serão compartilhadas entre todos os componentes da aplicação
    reducer: {
        player // player: player
    }
})

export type RootState = ReturnType<typeof store.getState> // getState retorna o estado atual do reducer (todo)
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector // essa função foi feita para usar no lugar do useSelector no componente TodoList, porém ele agora estará tipado
