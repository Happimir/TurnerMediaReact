import React, { Component, Fragment } from 'react';
import { Grid, Segment, Item } from 'semantic-ui-react';
import { DetailsItem } from './detailsItem';
import { Participants } from './participants/participants';
import { v4 as uuidv4 } from 'uuid';

export class DetailsLanding extends Component {
    constructor(props) {
        super(props);

        this.state = {
            details: [],
            search: "",
            showDetail: false,
            viewParticipants: false,
            detail: {}
        };
    }

    markAsSelected(target) {
        let elements = document.querySelectorAll(".ui.clearing.segment .ui.divided.items .item.selected");
        [].forEach.call(elements, function (element) {
            element.classList.remove("selected");
        });

        target.classList.add("selected");
    }

    loadDetails(event) {
        let target = document.getElementById("item" + event.target.id);
        fetch("api/titles/gettitle/" + event.target.id)
            .then(response => response.json())
            .then(data => {
                this.markAsSelected(target);
                this.setState({
                    viewParticipants: false,
                    showDetail: true,
                    detail: data
                });
            })
    }

    displayParticipants(event) {
        let target = document.getElementById("item" + event.target.id);
        let myDetail = this.state.details.find(x => x._id === event.target.id);
        this.markAsSelected(target);
        this.setState({
            showDetail: false,
            viewParticipants: true,
            detail: myDetail
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
            showDetail: false,
            viewParticipants: false
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
                                <Item key={detail._id} id={"item" + detail._id}>
                                    <Item.Content>
                                        <Item.Header>{detail.titleName}</Item.Header>
                                        <Item.Meta>Year: {detail.releaseYear}</Item.Meta>
                                        <Item.Meta className="truncate">Genres: {detail.keyGenres ? detail.keyGenres.join() : detail.genres.join()}</Item.Meta>
                                        <Item.Extra>
                                            <button className="ui button modalButton" id={detail._id} onClick={this.displayParticipants.bind(this)}> View Participants</button>
                                            <button className="ui button detailsButton" id={detail._id} onClick={this.loadDetails.bind(this)}> Details</button>
                                        </Item.Extra>
                                    </Item.Content>
                                </Item>
                            ))}
                        </Item.Group>
                    </Segment>
                </Grid.Column>
                {this.state.showDetail ?
                    <Fragment>
                        <Grid.Column width={4} id="detailsArea">
                            <Segment clearing>
                                <DetailsItem awards={this.state.detail.awards} />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Segment clearing>
                                <DetailsItem storylines={this.state.detail.storylines} />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Segment clearing>
                                <DetailsItem othernames={this.state.detail.otherNames} />
                            </Segment>
                        </Grid.Column>
                    </Fragment> : null
                }
                {this.state.viewParticipants ?
                    <Grid.Column width={12}>
                        <Participants key={uuidv4()} participants={this.state.detail.participants} />
                    </Grid.Column> : null
                }
            </Grid>
        )
    }

    render() {
        return this.renderData();

    }
}
