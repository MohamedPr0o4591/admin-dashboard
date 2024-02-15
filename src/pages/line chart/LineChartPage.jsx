import React from 'react'
import TitlePage from '../../components/TitlePage'
import { Box } from '@mui/material'
import { data } from './data'
import theme from '../bar chart/theme'
import LineChartComponent from '../../components/LineChartComponent'

function LineChartPage() {

    const themeStyle = theme()

    return (
        <div className='line-chart-page'>
            <TitlePage
                title='line chart'
                description='Simple Line Chart'
            />

            <Box
                sx={{
                    height: 75 + 'vh',
                    width: 100 + '%',
                }}
            >
                <LineChartComponent
                    themeStyle={themeStyle}
                    data={data}
                />
            </Box>
        </div>
    )
}

export default LineChartPage
