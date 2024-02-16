import React from 'react'
import TitlePage from '../../components/TitlePage'
import './HomePage.css'
import { Box, Button, Stack } from '@mui/material'
import { DownloadOutlined } from '@mui/icons-material'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'

function HomePage() {
    return (
        <Stack className='home_page' gap={1}>
            <Stack direction={'row'}>
                <TitlePage
                    title='Dashboard'
                    description='Welcome to your dashboard'
                />
                <Box flexGrow={1} />

                <Box className='display_flex_center '>
                    <Button
                        variant='contained'
                        color='primary'
                    >
                        <DownloadOutlined />
                        download reports
                    </Button>
                </Box>
            </Stack>

            <Row1 />

            <Row2 />

            <Row3 />

        </Stack>
    )
}

export default HomePage
