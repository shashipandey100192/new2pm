import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Productlistpage() {
    const [mydata, setdata] = useState([])

    // const Myapi = () => {
    //     fetch('https://dummyjson.com/products').then((res) => {
    //         console.log(res);
    //         return res.json()
    //     }).then((d) => {
    //         console.log(d);
    //         setdata(d.products)

    //     })
    // }

    const Myapi = ()=>{
        axios.get('https://dummyjson.com/products').then((d)=>{
            console.log(d.data.products);
            setdata(d.data.products);
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
                            <Link to={`detailspage/`+d.id} className='btn btn-primary'>Product Details</Link>
                           
                        </div>
                    </div>)

                })}

            </div>
        </div>
    )
}

export default Productlistpage