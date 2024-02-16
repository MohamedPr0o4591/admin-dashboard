import { Box, Paper, Stack, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import theme from '../bar chart/theme'
import BarChartComponent from './../../components/BarChartComponent';
import PieChartComponent from './../../components/PieChartComponent';
import GeographyComponent from './../../components/GeographyComponent';

function Row3() {

    const themeSystem = useTheme()
    const themeStyle = theme()


    return (
        <Stack gap={1} width={100 + '%'} className='row3'>

            <Paper sx={{ flexGrow: 1, }}>
                <Stack p={1} gap={1} height={100 + '%'}>

                    <h4 style={{ color: themeSystem.palette.secondary.main }}>
                        Campaign
                    </h4>

                    <Box height={100 + '%'}>
                        <PieChartComponent
                            themeSystem={themeSystem}
                            isDashboard={true}
                        />
                    </Box>

                </Stack>
            </Paper>

            <Paper sx={{ flexGrow: 1, }}>
                <Stack p={1} gap={1} height={100 + '%'}>

                    <h4 style={{ color: themeSystem.palette.secondary.main }}>
                        Sales Quantity
                    </h4>

                    <Box height={100 + '%'}>
                        <BarChartComponent
                            themeSystem={themeSystem}
                        />
                    </Box>

                </Stack>
            </Paper>

            <Paper sx={{ flexGrow: 1, }}>
                <Stack p={1} gap={1} height={100 + '%'}>

                    <h4 style={{ color: themeSystem.palette.secondary.main }}>
                        Sales Quantity
                    </h4>

                    <Box height={100 + '%'}>
                        <GeographyComponent
                            themeSystem={themeSystem}
                        />
                    </Box>

                </Stack>
            </Paper>

        </Stack>
    )
}

export default Row3
