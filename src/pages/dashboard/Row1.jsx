import { EmailRounded, PersonAddAlt1Rounded, SocialDistanceRounded, TrafficRounded } from '@mui/icons-material'
import { Box, Paper, Stack, useTheme } from '@mui/material'
import React from 'react'
import { data1, data2, data3, data4 } from './data';
import Card from './Card';


function Row1() {

    const themeMode = useTheme()


    return (
        <Stack
            direction={'row'}
            flexWrap={'wrap'}
            gap={1}
            justifyContent={'space-between'}
        >

            <Card
                icon={
                    <EmailRounded
                        color='secondary'
                    />
                }
                rate={'12,921'}
                title='Emails Sent'
                data={data1}
                interest={14}
                scheme='nivo'
            />

            <Card
                icon={
                    <SocialDistanceRounded
                        color='secondary'
                    />
                }
                rate={'431,225'}
                title='Sales Obtained'
                data={data2}
                scheme='accent'
                interest={21}
            />

            <Card
                icon={
                    <PersonAddAlt1Rounded
                        color='secondary'
                    />
                }
                rate={'32,441'}
                title='New Clients'
                data={data3}
                scheme='paired'
                interest={5}
            />

            <Card
                icon={
                    <TrafficRounded
                        color='secondary'
                    />
                }
                rate={'1,325,134'}
                title='Traffic Received'
                data={data4}
                scheme='pastel2'
                interest={43}
            />
        </Stack>
    )
}

export default Row1
