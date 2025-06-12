import React, { useEffect, useState } from 'react'

function Productlistpage() {
    const [mydata, setdata] = useState([])

    const Myapi = () => {
        fetch('https://dummyjson.com/products').then((res) => {
            // console.log(res.json());
            return res.json()
        }).then((d) => {
            console.log(d);
            setdata(d.products)

        })
    }

useEffect(()=>{
    Myapi();
},[]);

    return (
        <div className="container-fluid">
             <input type='button' value="api" onClick={Myapi} />
            <div className='row'>
                {mydata.map((d) => {
                    return (<div className='col-md-3 mt-2' key={d.id}>
                        <div className='card p-3'>
                            <h5>Pro Id:{d.id}</h5>
                            <img src={d.thumbnail} />
                           
                        </div>
                    </div>)

                })}

            </div>
        </div>
    )
}

export default Productlistpage