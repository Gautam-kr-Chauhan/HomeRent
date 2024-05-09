import axios from 'axios';
import React,{useEffect,useState} from 'react';
import {Link} from "react-router-dom"

const Owner = () => {
    // const homes = [{ locality: 'Patia', bhkType: '1bhk', rent: '12000',isFurnished:true,address:"patia 3310", image: "agrygr.jpg" }];
    const [homes, sethomes] = useState();
    useEffect(()=>{
        axios.get('http://localhost:3000/')
        .then(result=>{
            console.log(result.data)
            sethomes(result.data);})
        .catch(err=>console.log(err))
        //u was here
    },[])
    return (
        <div className="container my-4">
            <h1>Owner dash board</h1>
            <Link to="/AddHome" className="btn btn-sucess">Add +</Link>
            {/* you was here */}
            <div className="table-responsive">
                {homes? (
                    <table className="table table-striped my-3">
                        <thead>
                            <tr className="table-dark text-center align-middle">
                                <th>Id</th>
                                <th>Locality</th>
                                <th>bhkType</th>
                                <th>rent</th>
                                <th>isFurnished</th>
                                <th>address</th>
                                <th>image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {homes.map((row, index) => (
                                <tr className='text-center' key={index}>
                                    <td>{index}</td>
                                    <td>{row.locality}</td>
                                    <td>{row.bhkType}</td>
                                    <td>{row.rent}</td>
                                    <td>{row.isFurnished ?('yes'):('no')}</td>
                                    <td>{row.address}</td>
                                    <td><img src={`http://localhost:3000/images/${row.image}`} alt="no img found" width='50px'/></td>
                                    <td>
                                        <Link to={`/update/${home.id}`} className="btn btn-sucess">edit<i data-lucide="square-pen"></i></Link>
                                        <a href={`/delete/${row._id}`} className="text-danger">delete<i className="fas fa-trash fa-lg mx-1"></i></a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <h1 className="text-center text-secondary mt-5">No user found in the database!!</h1>
                )}
            </div>
        </div>
    );
}

export default Owner;
