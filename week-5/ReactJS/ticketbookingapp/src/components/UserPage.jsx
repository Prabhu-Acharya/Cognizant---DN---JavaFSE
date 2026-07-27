function UserPage() {

    return (

        <div>

            <h2>Welcome User</h2>

            <h3>Book Your Flight Ticket</h3>


            <label>
                Passenger Name:
            </label>

            <br />

            <input 
                type="text"
            />


            <br /><br />


            <label>
                Select Flight:
            </label>

            <br />

            <select>

                <option>
                    Air India
                </option>

                <option>
                    Indigo
                </option>

                <option>
                    Vistara
                </option>

            </select>


            <br /><br />


            <button>
                Book Ticket
            </button>


        </div>

    );
}

export default UserPage;