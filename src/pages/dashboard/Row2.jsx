import { DownloadOutlined } from '@mui/icons-material'
import { Box, IconButton, Paper, Stack, useTheme } from '@mui/material'
import React from 'react'
import LineChartComponent from './../../components/LineChartComponent';
import theme from '../bar chart/theme';
import { data } from './../line chart/data';

function Row2() {

    const themeSystem = useTheme()
    const themeStyle = theme()

    return (
        <Stack gap={1} width={100 + '%'} className='row2'>
            <Paper
                className='paper-row2'
                sx={{
                    p: 1,
                    height: 100 + '%',
                }}
            >
                <Stack gap={1} height={100 + '%'}>
                    <Stack direction={'row'}>
                        <Box >
                            <h4
                                style={{
                                    color: themeSystem.palette.secondary.main,
                                }}
                            >
                                Revenue Generated
                            </h4>
                            <span >
                                $59,342,32
                            </span>
                        </Box>

                        <Box flexGrow={1} />

                        <Box >
                            <IconButton >
                                <DownloadOutlined />
                            </IconButton>
                        </Box>
                    </Stack>

                    <Box width={100 + '%'} height={100 + '%'}>
                        <LineChartComponent
                            themeStyle={themeStyle}
                            data={data}
                        />
                    </Box>
                </Stack>
            </Paper>

            <Box flexGrow={1} height={100 + '%'} overflow={'auto'}>
                <Paper
                    sx={{ width: 100 + '%', p: 1, mb: 1 }}
                >
                    <h4
                        style={{
                            color: themeSystem.palette.secondary.main,
                        }}
                    >
                        Recent Transactions
                    </h4>
                </Paper>

                <Paper
                    sx={{ width: 100 + '%', p: 1, mb: 1 }}
                >
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >

                        <Stack gap={1}>
                            <strong >
                                Mohamed Mokhtar
                            </strong>

                            <span >
                                description ...
                            </span>
                        </Stack>

                        <span >
                            01-01-2024
                        </span>

                        <Box sx={{ pointerEvents: 'none' }}>
                            <span
                                style={{
                                    padding: 10,
                                    background: themeSystem.palette.error.main,
                                    borderRadius: .6 + 'rem',
                                }}
                            >
                                $43.91
                            </span>
                        </Box>

                    </Stack>
                </Paper>

                <Paper
                    sx={{ width: 100 + '%', p: 1, mb: 1 }}
                >
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >

                        <Stack gap={1}>
                            <strong >
                                Mohamed Mokhtar
                            </strong>

                            <span >
                                description ...
                            </span>
                        </Stack>

                        <span >
                            01-01-2024
                        </span>

                        <Box sx={{ pointerEvents: 'none' }}>
                            <span
                                style={{
                                    padding: 10,
                                    background: themeSystem.palette.error.main,
                                    borderRadius: .6 + 'rem',
                                }}
                            >
                                $43.91
                            </span>
                        </Box>

                    </Stack>
                </Paper>

                <Paper
                    sx={{ width: 100 + '%', p: 1, mb: 1 }}
                >
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >

                        <Stack gap={1}>
                            <strong >
                                Mohamed Mokhtar
                            </strong>

                            <span >
                                description ...
                            </span>
                        </Stack>

                        <span >
                            01-01-2024
                        </span>

                        <Box sx={{ pointerEvents: 'none' }}>
                            <span
                                style={{
                                    padding: 10,
                                    background: themeSystem.palette.error.main,
                                    borderRadius: .6 + 'rem',
                                }}
                            >
                                $43.91
                            </span>
                        </Box>

                    </Stack>
                </Paper>

                <Paper
                    sx={{ width: 100 + '%', p: 1, mb: 1 }}
                >
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >

                        <Stack gap={1}>
                            <strong >
                                Mohamed Mokhtar
                            </strong>

                            <span >
                                description ...
                            </span>
                        </Stack>

                        <span >
                            01-01-2024
                        </span>

                        <Box sx={{ pointerEvents: 'none' }}>
                            <span
                                style={{
                                    padding: 10,
                                    background: themeSystem.palette.error.main,
                                    borderRadius: .6 + 'rem',
                                }}
                            >
                                $43.91
                            </span>
                        </Box>

                    </Stack>
                </Paper>

                <Paper
                    sx={{ width: 100 + '%', p: 1, mb: 1 }}
                >
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >

                        <Stack gap={1}>
                            <strong >
                                Mohamed Mokhtar
                            </strong>

                            <span >
                                description ...
                            </span>
                        </Stack>

                        <span >
                            01-01-2024
                        </span>

                        <Box sx={{ pointerEvents: 'none' }}>
                            <span
                                style={{
                                    padding: 10,
                                    background: themeSystem.palette.error.main,
                                    borderRadius: .6 + 'rem',
                                }}
                            >
                                $43.91
                            </span>
                        </Box>

                    </Stack>
                </Paper>

                <Paper
                    sx={{ width: 100 + '%', p: 1, mb: 1 }}
                >
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >

                        <Stack gap={1}>
                            <strong >
                                Mohamed Mokhtar
                            </strong>

                            <span >
                                description ...
                            </span>
                        </Stack>

                        <span >
                            01-01-2024
                        </span>

                        <Box sx={{ pointerEvents: 'none' }}>
                            <span
                                style={{
                                    padding: 10,
                                    background: themeSystem.palette.error.main,
                                    borderRadius: .6 + 'rem',
                                }}
                            >
                                $43.91
                            </span>
                        </Box>

                    </Stack>
                </Paper>

            </Box>
        </Stack>
    )
}

export default Row2
