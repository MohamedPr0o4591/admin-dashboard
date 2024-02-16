import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { Box, Paper, Stack } from '@mui/material'
import theme from '../bar chart/theme'

function Card(props) {

    const themeStyle = theme()

    return (
        <Paper className='paper'>
            <Stack direction={'row'}>
                <Stack gap={1} justifyContent={'space-between'}>
                    {props.icon}

                    <p >
                        {props.rate}
                    </p>

                    <span >
                        {props.title}
                    </span>
                </Stack>

                <Box flexGrow={1} />

                <Stack alignItems={'center'}>

                    <Box width={80 + 'px'} height={80 + 'px'} alignItems={'center'}>
                        <ResponsivePie
                            data={props.data}
                            theme={themeStyle}
                            margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
                            innerRadius={0.7}
                            cornerRadius={15}
                            activeOuterRadiusOffset={8}
                            colors={{ scheme: props.scheme }}
                            borderWidth={1}
                            borderColor={{
                                from: 'color',
                                modifiers: [
                                    [
                                        'darker',
                                        0.2
                                    ]
                                ]
                            }}
                            enableArcLinkLabels={false}
                            arcLinkLabelsSkipAngle={10}
                            arcLinkLabelsTextColor="#333333"
                            arcLinkLabelsThickness={2}
                            arcLinkLabelsColor={{ from: 'color' }}
                            enableArcLabels={false}
                            arcLabelsSkipAngle={10}
                            arcLabelsTextColor={{
                                from: 'color',
                                modifiers: [
                                    [
                                        'darker',
                                        2
                                    ]
                                ]
                            }}
                            defs={[
                                {
                                    id: 'dots',
                                    type: 'patternDots',
                                    background: 'inherit',
                                    color: 'rgba(255, 255, 255, 0.3)',
                                    size: 4,
                                    padding: 1,
                                    stagger: true
                                },
                                {
                                    id: 'lines',
                                    type: 'patternLines',
                                    background: 'inherit',
                                    color: 'rgba(255, 255, 255, 0.3)',
                                    rotation: -45,
                                    lineWidth: 6,
                                    spacing: 10
                                }
                            ]}
                            fill={[
                                {
                                    match: {
                                        id: 'ruby'
                                    },
                                    id: 'dots'
                                },
                                {
                                    match: {
                                        id: 'c'
                                    },
                                    id: 'dots'
                                },
                                {
                                    match: {
                                        id: 'go'
                                    },
                                    id: 'dots'
                                },
                                {
                                    match: {
                                        id: 'python'
                                    },
                                    id: 'dots'
                                },
                                {
                                    match: {
                                        id: 'scala'
                                    },
                                    id: 'lines'
                                },
                                {
                                    match: {
                                        id: 'lisp'
                                    },
                                    id: 'lines'
                                },
                                {
                                    match: {
                                        id: 'elixir'
                                    },
                                    id: 'lines'
                                },
                                {
                                    match: {
                                        id: 'javascript'
                                    },
                                    id: 'lines'
                                }
                            ]}
                            legends={[]}
                        />
                    </Box>
                    <span >
                        +{props.interest}%
                    </span>

                </Stack>
            </Stack>
        </Paper>
    )
}

export default Card
