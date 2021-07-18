// const loader = () => {
//     return (
//         <div >
//             Code it like its Hot
//         </div>
//     )
// }

// export default loader

import React from 'react'

import './Loader.css'

function Loader() {
    return (
        <div style={{ height: "80vh", justifyContent: "center", display: "flex", flexDirection: "column", background: '#fff' }}>
            <div className="head">LOADING </div>
            {/* <img className="loader-gif" src={gif} alt={"Loader"} /> */}
        </div>
    )
}

export default Loader
