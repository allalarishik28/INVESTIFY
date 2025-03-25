import React from 'react';
function Signup() {
    return (
        <div>
        <div style={{ textAlign: "center", marginTop: "50px"}}>
            <h1>Open a free demat and trading account online</h1>
<p>Start investing brokerage free and join a community of 1.5+ crore investors and traders</p>
        </div>
        <div className="signup-form">
            <form>
                <label>
                    <div className='input'>
                    
                    <input type='text' placeholder='Username' required/>
                    </div>
               </label>
               </form>
        </div>
        </div>
     );
}

export default Signup;