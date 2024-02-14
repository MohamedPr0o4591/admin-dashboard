import React, { useState } from 'react'
import TitlePage from '../../components/TitlePage'
import { Alert, Box, Button, MenuItem, Snackbar, Stack, TextField } from '@mui/material'
import { Container } from 'react-bootstrap';

const currencies = [
    {
        value: 'user',
        label: 'User',
    },
    {
        value: 'manager',
        label: 'Manager',
    },
    {
        value: 'admin',
        label: 'Admin',
    },
];

export default function FormMembers() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [active, setActive] = useState(false);

    const handleSubmit = e => {
        e.preventDefault()
        setActive(true)

        if (firstName !== '' && lastName !== '' && email !== '' && contactNumber !== '' && address1 !== '') {

            setActive(false)
            handleClick()
        }
    }

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>


            <TitlePage
                title='create User'
                description='Create a New User Profile'
            />


            <Stack mt={5} gap={2} component={'form'} onSubmit={handleSubmit}>

                <Stack direction={'row'} gap={2}>

                    <TextField

                        error={firstName == '' && active ? true : false}
                        id="filled-basic"
                        label="First Name"
                        variant="filled"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        sx={{
                            flexGrow: 1,
                        }}
                    />

                    <TextField
                        error={lastName == '' && active ? true : false}
                        id="filled-basic"
                        label="Last Name"
                        variant="filled"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        sx={{
                            flexGrow: 1,
                        }}
                    />

                </Stack>

                <TextField
                    error={email == '' && active ? true : false}
                    id="filled-basic"
                    label="E-mail"
                    type='email'
                    variant="filled"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    sx={{
                        flexGrow: 1,
                    }}
                />

                <TextField
                    error={contactNumber == '' && active ? true : false}
                    id="filled-basic"
                    label="Contact Number"
                    type='number'
                    variant="filled"
                    value={contactNumber}
                    onChange={e => setContactNumber(e.target.value)}
                    sx={{
                        flexGrow: 1,
                    }}
                />

                <TextField
                    error={address1 == '' && active ? true : false}
                    id="filled-basic"
                    label="Address 1"
                    variant="filled"
                    value={address1}
                    onChange={e => setAddress1(e.target.value)}
                    sx={{
                        flexGrow: 1,
                    }}
                />

                <TextField
                    id="filled-basic"
                    label="Address 2"
                    variant="filled"
                    value={address2}
                    onChange={e => setAddress2(e.target.value)}
                    sx={{
                        flexGrow: 1,
                    }}
                />

                <TextField
                    select
                    id="filled-select-currency"
                    label="Rate"
                    defaultValue="user"
                    variant="filled"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <Stack direction={'row'}>
                    <Box flexGrow={1} />
                    <Button
                        className='fw-bold'
                        variant='contained'
                        color='primary'
                        sx={{
                            textTransform: 'capitalize',
                        }}
                        type='submit'
                    >
                        create new user
                    </Button>
                </Stack>

            </Stack>

            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert
                    variant="filled"
                    severity="success"
                    sx={{
                        color: '#efef'
                    }}
                >
                    Account created successfully
                </Alert>
            </Snackbar>

        </div>
    )
}
