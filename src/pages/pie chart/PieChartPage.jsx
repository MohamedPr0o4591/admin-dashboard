import React from 'react'
import TitlePage from '../../components/TitlePage'
import { Box } from '@mui/material'
import { data } from './data'
import theme from '../bar chart/theme'
import PieChartComponent from '../../components/PieChartComponent'

function PieChartPage() {

    const themeStyle = theme()

    return (
        <div className='pie-chart-page'>
            <TitlePage
                title='Pie chart'
                description='Simple Pie Chart'
            />

            <Box
                sx={{
                    height: 75 + 'vh',
                    width: 100 + '%',
                }}
            >
                <PieChartComponent
                    data={data}
                    themeStyle={themeStyle}
                />
            </Box>
        </div>
    )
}

export default PieChartPage
