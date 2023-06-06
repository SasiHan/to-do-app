import Navbar from "../component/NavBar";
import './AddTodo.css'
function AddTodo () {
    return (
        <div className="AddContent">
            <Navbar/>
            <div className="AddTodo-Box-Fake">
                <div className="AddTodo-Box">
                    <div className="Top-AB">
                        <input className="Date" type="date"/>
                        <input className="Time" type="time"/>
                    </div>
                    <input></input>
                    <input></input>
                    <input></input>
                </div>
            </div>
        </div>
    );
}

export default AddTodo;