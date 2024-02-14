import React, { Component } from 'react'
import TitlePage from '../../components/TitlePage'
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './data';
import { Box } from '@mui/material';

export class InvoicesPage extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <TitlePage
                    title='iNvoices'
                    description='List of Invoice Balances'
                />

                <Box sx={{ height: 75 + 'vh', width: '100%', }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </Box>
            </div>
        )
    }
}

export default InvoicesPage
