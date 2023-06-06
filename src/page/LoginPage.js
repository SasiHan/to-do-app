import "./LoginPage.css";

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
                <p className="btnText2">GO!</p>
                </div>
                </div>
                </div>

                                                       

          {/* </div> */}
        </div>
    </div>
    );
}

export default LoginPage;