import React from 'react'
import { Menu,Image,Dropdown} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src='/images/IMG_E4510.JPG' size='mini' />
                <Dropdown pointig="top left" text="Ali">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Meine Daten"  icon="info"
                         as = {NavLink} to ={{pathname : '/user/' + localStorage.getItem("currentUser") }
                          + '/username/' + localStorage.getItem("userName")}>

                         </Dropdown.Item>
                            
                    
                            

                        <Dropdown.Item onClick={props.signOut} text="Logout" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>

        </div>
    )
}
