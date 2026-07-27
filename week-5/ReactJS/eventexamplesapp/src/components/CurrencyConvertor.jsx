import { useState } from "react";

function CurrencyConvertor() {

    const [rupees, setRupees] = useState("");
    const [euro, setEuro] = useState("");

    const exchangeRate = 90;

    const handleSubmit = () => {

        if (rupees === "") {
            alert("Enter Amount");
            return;
        }

        const result = (Number(rupees) / exchangeRate).toFixed(2);

        setEuro(result);
    };

    return (

        <div>

            <h2>Currency Convertor</h2>

            <input
                type="number"
                placeholder="Enter Rupees"
                value={rupees}
                onChange={(e) => setRupees(e.target.value)}
            />

            <button
                onClick={handleSubmit}
                style={{ marginLeft: "10px" }}
            >
                Convert
            </button>

            <h3>Euro : € {euro}</h3>

        </div>

    );
}

export default CurrencyConvertor;