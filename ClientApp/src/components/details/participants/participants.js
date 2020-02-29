import React from 'react'
import { Table} from 'semantic-ui-react'
import { v4 as uuidv4 } from 'uuid';

export const Participants = (props) => {

    return (
        <Table>
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
                {props.participants.map(p => (
                    <Table.Row key={uuidv4()}>
                        <Table.Cell>{p.name}</Table.Cell>
                        <Table.Cell>{p.isKey ? "Yes" : "No"}</Table.Cell>
                        <Table.Cell>{p.roleType}</Table.Cell>
                        <Table.Cell>{p.isOnScreen ? "Yes" : "No"}</Table.Cell>
                        <Table.Cell>{p.participantType}</Table.Cell>
                    </Table.Row> 
                ))}
            </Table.Body>
        </Table>
    )
}