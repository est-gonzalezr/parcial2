import React from "react";
import Card from 'react-bootstrap/Card';
import { FormattedMessage } from "react-intl";

export default function Coffees() {
    const [coffees, setCoffees] = React.useState([]);
    const [coffee, setCoffee] = React.useState(null);

    React.useEffect(() => {
        fetch("http://localhost:3001/cafes", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => setCoffees(data));
    });

    const handleCoffeeSelection = (coffee) => {
        fetch(`http://localhost:3001/cafes/${coffee.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => setCoffee(data))
    }

    const tableRows = coffees.map((coffee, index) => {

        let rowStyles = {
            // Adjust the height as needed
        };

        return (
            <tr
                key={coffee.id}
                onClick={() => handleCoffeeSelection(coffee)}
                style={{
                    rowStyles,
                    cursor: 'pointer',
                    ':hover': {
                        background: 'lightgray',
                        color: 'black',
                    },
                }}
            >
                <th scope="row">{coffee.id}</th>
                <td>{coffee.nombre}</td>
                <td>{coffee.tipo}</td>
                <td>{coffee.region}</td>
            </tr >
        );
    });

    function coffeeCard(coffee) {
        return (

            <Card className="text-center" style={{
                width: '22rem'

            }}>
                <Card.Body style={{ backgroundColor: '#f9f1f1', marginLeft: '5rem', border: '2px solid black' }}>
                    <Card.Title style={{ textAlign: 'center', fontWeight: 'bold' }}>{coffee.nombre}</Card.Title>
                    <Card.Subtitle style={{ textAlign: 'center' }} className="mb-2 text-muted">{coffee.fecha_cultivo}</Card.Subtitle>
                    <Card.Img variant="top" src={coffee.imagen} style={{ width: '10rem', marginLeft: '3rem' }} />
                    <Card.Text style={{ textAlign: 'center', marginLeft: '1rem', marginRight: '1rem' }}>
                        <FormattedMessage id="notes"></FormattedMessage>
                        <br />
                        {coffee.notas}
                    </Card.Text>
                    <Card.Text style={{ textAlign: 'center', fontWeight: 'bold', marginLeft: '1rem', marginRight: '1rem' }}>
                        <FormattedMessage id="height"></FormattedMessage> {coffee.altura} <FormattedMessage id="meters"></FormattedMessage>
                    </Card.Text>
                </Card.Body>
            </Card>

        )
    }

    function makeTable() {
        return (
            <table className="table" style={{ borderCollapse: 'separate', borderSpacing: '0 0.5rem', marginLeft: '4rem' }}>
                <thead style={{ background: '#333A40', color: 'white', height: '2.5rem' }}>
                    <tr>
                        <th scope="col" style={{ width: "5rem" }}>#</th>
                        <th scope="col" style={{ width: "20rem" }}>
                            <FormattedMessage id="name"></FormattedMessage>
                        </th>
                        <th scope="col" style={{ width: "10rem" }}>
                            <FormattedMessage id="type"></FormattedMessage>
                        </th>
                        <th scope="col" style={{ width: "15rem" }}>Region</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table >
        )
    }

    return (
        <>
            <div>
                <div
                    style={{
                        display: "flex",


                    }}>
                    {makeTable()}

                    <div>
                        {coffee && coffeeCard(coffee)}
                    </div>

                </div>
                <p style={{ textAlign: 'center', marginTop: '5rem' }}>
                    <FormattedMessage id="contact"></FormattedMessage>: +57 3102105253 - info@elaromamagico.com - @elaromamagico
                </p>
            </div>
        </>
    );
}
