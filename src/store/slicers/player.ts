import { createSlice } from "@reduxjs/toolkit";

const playerSlie = createSlice({
    name: 'player',
    initialState: {
        course: {
            modules: [
                {
                    id: '1',
                    title: 'Iniciando com React',
                    lessons: [
                        {
                            id: 'Jai8w6K_GnY', title: 'Fundamentos do Redux', duration: '09:13'
                        },
                        {
                            id: 'zOvsyamoEDg', title: 'Estilização do Post', duration: '08:13'
                        },
                        {
                            id: 'Jai8w6K_GnY', title: 'Componente: Header', duration: '07:13'
                        },
                        {
                            id: 'zOvsyamoEDg', title: 'Componente: Sidebar', duration: '06:13'
                        },
                        {
                            id: 'Jai8w6K_GnY', title: 'CSS Global', duration: '05:13'
                        },
                    ]
                },
                {
                    id: '2',
                    title: 'Estrutura da aplicação',
                    lessons: [
                        {
                            id: 'zOvsyamoEDg', title: 'Component: Comment', duration: '09:13'
                        },
                        {
                            id: 'Jai8w6K_GnY', title: 'Responsividade', duration: '08:13'
                        },
                        {
                            id: 'zOvsyamoEDg', title: 'Interações no JSX', duration: '07:13'
                        },
                        {
                            id: 'Jai8w6K_GnY', title: 'Utilizando estado', duration: '06:13'
                        },
                    ]
                }
            ],
        },
        currentModuleIndex: 0,
        currentLessonIndex: 0
    },
    reducers: {

    }
})

export const player = playerSlie.reducer