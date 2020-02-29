import React from 'react'
import { Item } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';

export const Awards = (props) => {

    return (
        <Item.Content>
            <Item.Header>{props.award.awardWon ? "Won " : "Nominated for"} {props.award.award} | {props.award.awardYear}</Item.Header>
            {props.award.participants !== null ? props.award.participants.map(p => (
                <Item.Meta key={uuidv4()}>
                    {p}
                </Item.Meta> 
            )) : null}
            <Item.Meta>{props.award.awardCompany}</Item.Meta>
        </Item.Content>
    )

}