import React from 'react'
import { Item } from 'semantic-ui-react';

export const Storylines = (props) => {
    return (
        <Item.Content>
            <Item.Description>{props.story.description}</Item.Description>
            <Item.Meta>Language: {props.story.language} | Type: {props.story.type}</Item.Meta>
        </Item.Content>
    )
}