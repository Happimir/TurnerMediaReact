import React from 'react';
import { Item } from 'semantic-ui-react';
import { Awards } from './awards/awards';
import { Storylines } from './storylines/storylines';
import { OtherNames } from './othernames/otherNames';
import { v4 as uuidv4 } from 'uuid';


export const DetailsItem = (props) => {

    function renderNeededComponent() {
        if (props.awards !== null && props.awards !== undefined) {
            return renderAwards();
        } 
        if (props.storylines !== null && props.storylines !== undefined) {
            return renderStorylines()
        } 
        if (props.othernames !== null && props.othernames !== undefined) {
            return renderOthernames()
        } 

        if (props.awards === null) {
            return renderNoAwards();
        }
        if (props.storylines === null) {
            return renderNoStoryLines();
        }
        if (props.othernames === null) {
            return renderNoOtherNames();
        }

        //safety fall back
        return null;
    }

    function renderOthernames() {
        return (
            <Item.Group divided>
            Other Names:
            {props.othernames.map(othername => (
                <Item key={uuidv4()}>
                    <OtherNames othername={othername} />
                    </Item>
                ))}
            </Item.Group>
        )
    }

    //These three methods are there for us to be safe, in the case that
    //our object doesn't have those arrays. FOr example, 2 Fast 2 Furious has no Awards,
    //I assume this is because people don't like cars
    function renderNoOtherNames() {
        return (
            <Item.Group>
                <Item key="10">
                    There were no other names given.
                </Item>
            </Item.Group>
        )
    }

    function renderNoStoryLines() {
        return (
            <Item.Group>
                <Item key="20">
                    There were no storylines given.
                </Item>
            </Item.Group>
        )
    }

    function renderNoAwards() {
        return (
            <Item.Group>
                <Item key="30">
                    There were no awards given.
                </Item>
            </Item.Group>
        )
    }

    function renderAwards() {
        return (
            <Item.Group divided>
            Awards:
            {props.awards.map(award => (
                    <Item key={uuidv4()}>
                        <Awards award={award} />
                    </Item>
                ))}
            </Item.Group>
        )
    }

    function renderStorylines() {
        return (
            <Item.Group divided>
            Story Lines:
            {props.storylines.map(story => (
                <Item key={uuidv4()}>
                    <Storylines story={story} />
                </Item>
                ))}
            </Item.Group>
        )
    }

    return (
        renderNeededComponent()
    )
}