import React, { useState } from 'react';

const Semaforo = () => {
    let [brillo, setBrillo] = useState(null);
    let [texto, setTexto] = useState("open")
    return (
        <div className="d-flex flex-column align-items-center">
            <div className="bg-dark p-1 mb-2" style={{ height: "140px", width: "8px" }}></div>
            <div className="bg-dark p-4 rounded-3 d-flex flex-column align-items-center">
                <div className="bg-danger rounded-circle p-4 mb-3 " style={brillo === "red" ? { boxShadow: "0 0 10px 5px rgba(245, 245, 154, 1), 0 0 20px 15px rgba(245, 245, 245, 0.89)" } : {}}
                    onClick={() => setBrillo("red")}
                ></div>
                <div className="bg-warning rounded-circle p-4 mb-3 " style={brillo === "yellow" ? { boxShadow: "0 0 10px 5px rgba(245, 245, 154, 1), 0 0 20px 15px rgba(245, 245, 245, 0.89)" } : {}}
                    onClick={() => setBrillo("yellow")}
                ></div>
                <div
                    className="bg-success rounded-circle p-4 " style={brillo === "green" ? { boxShadow: "0 0 10px 5px rgba(245, 245, 154, 1), 0 0 20px 15px rgba(245, 245, 245, 0.89)" } : {}}
                    onClick={() => setBrillo("green")}
                ></div>
                <div className="collapse mt-3" id="collapseExample">
                    <div
                        className="rounded-circle p-4"
                        style={{
                            backgroundColor: "#8F00FF",
                            ...(brillo === "purple"
                                ? {
                                    boxShadow:
                                        "0 0 10px 5px rgba(245, 245, 154, 1), 0 0 20px 15px rgba(245, 245, 245, 0.89)",}: {}), }} onClick={() => setBrillo("purple")}/>
                    </div>
                    <button className="btn btn-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"  onClick={() => {setTexto((prev) => (prev === "open" ? "close" : "open")); setBrillo(null);}}>
                    {texto}
                    </button>
             </div>
            </div>
    );
};

export default Semaforo;