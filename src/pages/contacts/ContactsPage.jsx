import React from 'react'
import TitlePage from '../../components/TitlePage'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { columns, rows } from './data';
import { Box } from '@mui/material';

function ContactsPage() {
    return (
        <div>
            <TitlePage
                title='Contacts'
                description='List of Contacts for Future Reference'
            />

            <Box sx={{ height: 75 + 'vh', width: '100%', }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    slots={{ toolbar: GridToolbar }}
                />
            </Box>
        </div>
    )
}

export default ContactsPage
