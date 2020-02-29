import React, { Component } from 'react'
import { Table, Menu} from 'semantic-ui-react'
import { v4 as uuidv4 } from 'uuid';

export class Participants extends Component {

    constructor(props) {
        super(props);
        this.state = { participants: [], takeParticipants : []}      
    }

    componentDidMount() {
        this.setState({
            participants: this.props.participants,
            takeParticipants: this.props.participants.slice(0, 26)
        });
    }

    handlePagination(event) {
        var page = event.target.id;
        var start = page * 26 - 26;
        var end = page * 26;

        this.setState({
            takeParticipants: this.state.participants.slice(start, end).length !== 0 ? this.state.participants.slice(start, end) : this.state.participants.slice(0)
        })

    }

    render() {
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Key Role</Table.HeaderCell>
                        <Table.HeaderCell>Role</Table.HeaderCell>
                        <Table.HeaderCell>On Screen</Table.HeaderCell>
                        <Table.HeaderCell>Type Of Participant</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.state.takeParticipants.map(p => (
                        <Table.Row key={uuidv4()}>
                            <Table.Cell>{p.name}</Table.Cell>
                            <Table.Cell>{p.isKey ? "Yes" : "No"}</Table.Cell>
                            <Table.Cell>{p.roleType}</Table.Cell>
                            <Table.Cell>{p.isOnScreen ? "Yes" : "No"}</Table.Cell>
                            <Table.Cell>{p.participantType}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='5'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' id="1" onClick={this.handlePagination.bind(this)}>1</Menu.Item>
                                <Menu.Item as='a' id="2" onClick={this.handlePagination.bind(this)}>2</Menu.Item>
                                <Menu.Item as='a' id="3" onClick={this.handlePagination.bind(this)}>3</Menu.Item>
                                <Menu.Item as='a' id="4" onClick={this.handlePagination.bind(this)}>4</Menu.Item>
                                <Menu.Item as='a' id="5" onClick={this.handlePagination.bind(this)}>5</Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        )
    }
    
}