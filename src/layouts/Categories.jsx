

 import React from "react";
 import { Menu } from "semantic-ui-react";
//  import {  Form, Button } from "semantic-ui-react";

export default function Categories() {
  
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item name="home" />
        <Menu.Item name="messages" />
        <Menu.Item name="friends" />
      </Menu>
    
      {/* <div>
        <Form className="ui form">
          <Form.Field>
            <label>Title</label>
            <input placeholder="title" />
          </Form.Field>
          <Form.Field>
            <label>Text</label>
            <input placeholder="text" />
          </Form.Field>

          <Button type="submit">Submit</Button>
        </Form>
      </div> */}
    </div>
  );
}
