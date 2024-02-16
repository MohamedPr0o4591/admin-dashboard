import React from 'react'
import TitlePage from '../../components/TitlePage'
import { Box } from '@mui/material'
import { data, geo } from './data'
import theme from '../bar chart/theme'
import GeographyComponent from '../../components/GeographyComponent'

function GeographyPage() {

    const themeStyle = theme()

    return (
        <div className='geography-page'>
            <TitlePage
                title='Geography'
            />

            <Box
                sx={{
                    width: 100 + '%',
                    height: 75 + 'vh',
                }}
            >
                <GeographyComponent
                    data={data}
                    themeStyle={themeStyle}
                    geo={geo}
                />
            </Box>
        </div>
    )
}

export default GeographyPage
