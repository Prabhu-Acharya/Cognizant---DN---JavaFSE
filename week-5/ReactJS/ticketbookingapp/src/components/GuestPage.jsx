function GuestPage() {

    const flights = [
        {
            id: 1,
            name: "Air India",
            from: "Delhi",
            to: "Mumbai",
            price: 5000
        },
        {
            id: 2,
            name: "Indigo",
            from: "Bangalore",
            to: "Chennai",
            price: 3500
        },
        {
            id: 3,
            name: "Vistara",
            from: "Hyderabad",
            to: "Delhi",
            price: 4500
        }
    ];


    return (

        <div>

            <h1>Welcome Guest</h1>

            <h2>Available Flights</h2>

            {
                flights.map((flight) => (

                    <div key={flight.id}>

                        <h3>{flight.name}</h3>

                        <p>
                            From: {flight.from}
                        </p>

                        <p>
                            To: {flight.to}
                        </p>

                        <p>
                            Ticket Price: ₹{flight.price}
                        </p>

                        <hr />

                    </div>

                ))
            }


            <h3>
                Please Login to Book Tickets
            </h3>


        </div>

    );

}

export default GuestPage;