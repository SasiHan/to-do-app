// import Navbar from "../component/NavBar";
// import './AddTodo.css'
// import "./NavBar.css";
function AddTodo () {
    return (
        // <div className="AddContent">
        //     <Navbar/>
            <div className="AddTodo-Box-Fake">
                <div className="AddTodo-Box">
                    <div className="Top-AB">
                        <input className="Date" type="date"/>
                        <input className="Time" type="time"/>
                    </div>
                    <div className="Mid-AB">
                        <input className="Header" type="text"></input>
                        <input className="Subject" type="text"></input>
                    </div>
                    <div className="Bottom-AB">
                        <textarea className="Detail" ></textarea>
                        <div className="BT">
                            <p className="Save-BT">Save!</p>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default AddTodo;