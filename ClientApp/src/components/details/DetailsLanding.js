import React, { Component } from 'react';
import { Grid, Segment, Item } from 'semantic-ui-react';
import { DetailsItem } from './detailsItem';
import { Storylines } from './storylines/storylines';

export class DetailsLanding extends Component {
    constructor(props) {
        super(props);

        this.state = {
            details: [],
            search: "",
            showDetail: false,
            detail: {}
        };
    }

    loadDetails(event) {
        fetch("api/titles/gettitle/" + event.target.id)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    showDetail: true,
                    detail: data
                });
            })
    }

    componentDidMount() {
        fetch("api/titles")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    details: data
                });
            });
    }

    handleChange(event) {
        var value = event.target.value.substr(0, 50);
        this.setState({
            search: value,
            showDetail: false
        });
    }

    //I am using raw divs in here as well as for some reason using <Search> throws Object is not a function exceptions,
    //like wise the same applies to <Button> when done from semantic. Note that if i use it as a separate element. 
    renderData() {
        let filtered = this.state.details.filter((detail) => {
            return detail.titleName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || this.state.search === "";
        });

        return (
            <Grid className="marginedGrid">
                <Grid.Column width={4}>
                    <div className="ui search">
                        <div className="ui icon input">
                            <input type="text" value={this.state.search} placeholder="Movie Title" tabIndex="0" className="prompt" autoComplete="off" onChange={this.handleChange.bind(this)} />
                            <i aria-hidden="true" className="search icon"></i>
                        </div>
                    </div>
                    <Segment clearing>
                        <Item.Group divided>
                            {filtered.map(detail => (
                                <Item key={detail._id}>
                                    <Item.Content>
                                        <Item.Header>{detail.titleName}</Item.Header>
                                        <Item.Meta>Year: {detail.releaseYear}</Item.Meta>
                                        <Item.Meta>Genres: {detail.keyGenres ? detail.keyGenres.join() : detail.genres.join()}</Item.Meta>
                                        <Item.Extra>
                                            <button className="ui button detailsButton" id={detail._id} onClick={this.loadDetails.bind(this)}> Details</button>
                                        </Item.Extra>
                                    </Item.Content>
                                </Item>
                            ))}
                        </Item.Group>
                    </Segment>
                </Grid.Column>
            
                <Grid.Column width={4} id="detailsArea">
                    {this.state.showDetail ?
                        <Segment clearing>
                            <DetailsItem awards={this.state.detail.awards} />
                            <DetailsItem othernames={this.state.detail.otherNames} />
                        </Segment> : null}
                </Grid.Column>
                <Grid.Column width={4}>
                    {this.state.showDetail ?
                        <Segment clearing>
                            <DetailsItem storylines={this.state.detail.storylines} />
                    </Segment> : null}
                </Grid.Column>

            </Grid>
        )
    }

    render() {
        return this.renderData();

    }
}
