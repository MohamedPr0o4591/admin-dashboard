import { useTheme } from '@mui/material'
import React from 'react'

export default function TitlePage(props) {

    const theme = useTheme()

    return (
        <div className='my-2'>
            <h2
                className='text-uppercase'
                style={{
                    color: theme.palette.primary.main,
                }}
            >
                {props.title}
            </h2>

            <span >
                {props.description}
            </span>
        </div>
    )
}
