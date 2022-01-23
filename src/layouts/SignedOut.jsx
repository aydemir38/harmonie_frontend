import React from 'react'
import { Button,Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button primary onClick={signIn}  >Anmelden </Button>
                <Button primary style={{marginLeft:'0.5em'}}  as={NavLink} to="/auth">Registrieren</Button>
            </Menu.Item>

        </div>
    )
}
// {localStorage.getItem("currentUser")== null ? <Link to="/auth>">Anmelden </Link>