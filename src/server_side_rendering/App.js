import React from "react";

/*
SERVER SIDE RENDERING === ISOMORPHIC JAVASCRIPT === UNIVERSAL JAVASCRIPT
WHEN USER TYPES IN URL INTO A BROWSER,
SERVER NOTICES IT JUST GOT 'GET' REQUEST 
=> SERVER WILL RENDER APP'S MAIN COMPONENT AND WRAP IT IN
STANDARD HTML DOC 
IE) <HTML><APP/></HTML>
=> BROWSER WILL GET THAT DOC AND RENDER ENGINE WILL DOWNLOAD SCRIPTS, REACT,..ETC

### BENEFITS ###
1. PERCEIVED PERFORMANCE
   = RATHER THAN TO FINISH UNTIL JAVASCRIPT FINISH DOWNLOADING,
   = IT FETCHES HTML AND RENDER IT UPFRONT
2. SEO
3. NICE FOR CODE REUSE 
   = CAN USER SERVER CODE FOR FRONT-END
*/ 

class App extends React.Component {
    render(){
        return (
            <div>
                <h1>Server Side Rendering</h1>
            </div>
        )
    }
}

export default App;