import { Box, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { rows } from './data'
import './TeamPage.css'
import { AdminPanelSettingsRounded, LockPersonRounded, SecurityRounded } from '@mui/icons-material'

function TeamPage() {

    const theme = useTheme()

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            headerAlign: 'center',
            width: 44,
            align: 'center',
        }
        ,
        {
            field: 'name',
            headerName: 'Name',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
        }
        ,
        {
            field: 'email',
            headerName: 'E-mail',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
        }
        ,
        {
            field: 'age',
            headerName: 'Age',
            headerAlign: 'center',
            align: 'center',
            width: 44,
        }
        ,
        {
            field: 'phone',
            headerName: 'Phone Number',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
        }
        ,
        {
            field: 'access',
            headerName: 'Access',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        sx={{
                            p: '5px 20px',
                            background: access === "admin" ? theme.palette.success.dark :
                                access === 'manager' ? theme.palette.secondary.dark :
                                    theme.palette.primary.dark,
                            borderRadius: .4 + 'rem',
                            color: "#efef",
                            textTransform: 'capitalize',
                            alignItems: 'center',
                            display: 'flex',
                            gap: .5,
                            pointerEvents: 'none',
                        }}
                    >
                        {
                            access === 'admin' ? (
                                <AdminPanelSettingsRounded />
                            ) :
                                access === 'manager' ? (
                                    <SecurityRounded />
                                ) : (
                                    <LockPersonRounded />
                                )
                        }    {access}
                    </Box>
                )
            }
        }
    ]

    return (
        <div className='team-page'>
            <Box sx={{ height: 85 + 'vh', width: '100%', }}>
                <DataGrid
                    rows={rows}
                    columns={columns}

                />
            </Box>
        </div>
    )
}

export default TeamPage
