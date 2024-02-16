import React from 'react'
import TitlePage from './../../components/TitlePage';
import './BarChartPage.css';
import { Box } from '@mui/material';
import theme from './theme';
import BarChartComponent from '../../components/BarChartComponent';
import { data } from './data';

function BarChartPage() {

    const themeStyle = theme();

    return (
        <div className='bar-chart-page'>
            <TitlePage
                title='bar chart'
                description='The minimum wage in Germany, France and Spain (EUR/month)'
            />

            <Box
                className='box-chart'
            >
                <BarChartComponent
                    themeStyle={themeStyle}

                />
            </Box>

        </div>
    )
}

export default BarChartPage
