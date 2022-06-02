import React, { useState } from 'react'
// Make sure to import the component we just built:
import './App.css';
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'



function App(){
    let [colors] = useState ([
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ])
    
    let colorMap = colors.map((color) => {
        return (
            <ColorBlock color={color} />
        )
    })
   

    return (
        <div className="App">
            {colorMap}
            
            
        </div>
    )
}

export default App;
