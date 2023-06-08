// import "./LoginPage.css";
import { Outlet, Link } from "react-router-dom";
function LoginPage() {
    return (
    <div className="Container">
        <div className="Login-Box">
          <div className="Username"> 
            <p className="Text-Username"> Username </p> 
            <input className="Input-Username" type="text"></input>
          </div>

          <div className="Password">
            <p className="Text-Password"> Password </p> 
            <input className="Input-Password" type="password"></input>
          </div> 

          {/* <div className="Login-Button"> */}
                <div id="holder">
                <div className="button">
                <p className="btnText">Log-in</p>
                <div className="btnTwo">
                <Link style={{textDecoration: 'none'}} to={`addtodo`} >
                <p className="btnText2">Go</p>
                </Link>
                </div>
                </div>
                </div>
          {/* </div> */}
        </div>
    </div>
    );
}

export default LoginPage;