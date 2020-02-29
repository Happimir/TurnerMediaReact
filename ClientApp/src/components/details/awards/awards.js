import React from 'react'
import { Item } from 'semantic-ui-react';


export const Awards = (props) => {

    return (
        <Item.Content>
            <Item.Header>{props.award.award} | {props.award.awardYear}</Item.Header>
            <Item.Meta>{props.award.awardCompany} for {props.award.awardYear}</Item.Meta>
        </Item.Content>
    )

}