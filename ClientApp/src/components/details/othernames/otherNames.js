import React from 'react'
import { Item } from 'semantic-ui-react';

export const OtherNames = (props) => {

    return (
        <Item.Content>
            <Item.Description>Language: {props.othername.titleNameLanguage}</Item.Description>
            <Item.Description>Primary Language: {props.othername.titleNameType === "Primary" ? "Yes" : "No"}</Item.Description>
            <Item.Description>Title Name: {props.othername.titleName}</Item.Description>
        </Item.Content>    
    )
}