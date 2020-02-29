import React from 'react';
import { Item } from 'semantic-ui-react';
import { Awards } from './awards/awards';
import { Storylines } from './storylines/storylines';
import { OtherNames } from './othernames/otherNames';


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
    }

    function renderOthernames() {
        return (
            <Item.Group divided>
            Other Names:
            {props.othernames.map(othername => (
                <Item key={othername.titleName}>
                    <OtherNames othername={othername} />
                    </Item>
                ))}
            </Item.Group>
        )
    }

    function renderAwards() {
        return (
            <Item.Group divided>
            Awards:
            {props.awards.map(award => (
                    <Item key={award.award}>
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
                <Item key={story.type}>
                    <Storylines story={story} />
                </Item>
                ))}
            </Item.Group>
        )
    }

    return (
        renderNeededComponent()
        //<Item.Group divided>
        //    Awards:
        //    {props.detail.awards.map(award => (
        //        <Item key={award.award}>
        //            <Awards award={award} />
        //        </Item>
        //    ))}
        //</Item.Group>
    )
}