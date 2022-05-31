import React from 'react'
import Pdf from "react-to-pdf"
import Rating from '@mui/material/Rating';

const ref = React.createRef();

function PDF(props) {
  return (
    <>
        <div className="Eval" ref={ref} style={{textAlign: "center"}}>
            <h1>{props.title}</h1>
            <h3>{props.userId}</h3>
            <h4>{props.subtitle}</h4>
            <br />
            <Rating name="read-only" value={props.rate} readOnly />
            <br />
            <img src={props.image} alt="pic" />
            <br />
            <p>{props.content}</p>
        </div>

        <Pdf targetRef={ref} filename={"userEval.pdf"}>
            {({ toPdf }) => <button onClick={toPdf}>Capture pdf</button>}
        </Pdf>
    </>
  )
}

export default PDF