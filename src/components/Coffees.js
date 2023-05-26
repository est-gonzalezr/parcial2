import React from "react";
import Card from 'react-bootstrap/Card';

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
            height: '40px', // Adjust the height as needed
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
            <Card style={{
                width: '18rem',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"

            }}>
                <Card.Body>
                    <Card.Title>{coffee.nombre}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{coffee.fecha_cultivo}</Card.Subtitle>
                    <Card.Img variant="top" src={coffee.imagen} style={{ width: '10rem' }} />
                    <Card.Text>
                        Notas
                        <br />
                        {coffee.notas}
                    </Card.Text>
                    <Card.Text>
                        Cultivado a una altura de: {coffee.altura} msnm
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }

    function makeTable() {
        return (
            <table className="table" style={{ borderCollapse: 'separate', borderSpacing: '0 0.5rem' }}>
                <thead style={{ background: 'black', color: 'white' }}>
                    <tr>
                        <th scope="col" style={{ width: "5rem" }}>#</th>
                        <th scope="col" style={{ width: "20rem" }}>Nombre</th>
                        <th scope="col" style={{ width: "10rem" }}>Tipo</th>
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
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh"
                }}>
                {makeTable()}

                <div>
                    {coffee && coffeeCard(coffee)}
                </div>
            </div>
        </>
    );
}
