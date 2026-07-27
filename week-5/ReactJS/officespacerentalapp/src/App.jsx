import officeImage from "./assets/office.jpg";

function App() {

  const office = {
    name: "DBS Business Center",
    rent: 55000,
    address: "Chennai"
  };

  const officeList = [
    {
      name: "DBS Business Center",
      rent: 55000,
      address: "Chennai"
    },
    {
      name: "Regus Workspace",
      rent: 75000,
      address: "Bangalore"
    },
    {
      name: "Smart Office Hub",
      rent: 45000,
      address: "Hyderabad"
    }
  ];

  return (
    <div style={{ margin: "20px" }}>

      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office Space"
        width="500"
        height="300"
      />

      <h2>Single Office Details</h2>

      <p><strong>Name:</strong> {office.name}</p>

      <p
        style={{
          color: office.rent < 60000 ? "red" : "green",
          fontWeight: "bold"
        }}
      >
        Rent: ₹{office.rent}
      </p>

      <p><strong>Address:</strong> {office.address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {
        officeList.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "15px",
              width: "400px"
            }}
          >
            <h3>{item.name}</h3>

            <p
              style={{
                color: item.rent < 60000 ? "red" : "green",
                fontWeight: "bold"
              }}
            >
              Rent: ₹{item.rent}
            </p>

            <p>Address: {item.address}</p>

          </div>
        ))
      }

    </div>
  );
}

export default App;