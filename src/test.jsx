import React, { useState } from 'react';
import axios from 'axios'
const AddHome = () => {
    const [locality, setlocality] = useState();
    const [bhkType, setbhkType] = useState();
    const [rent, setrent] = useState();
    const [isFurnished, setisFurnished] = useState();
    const [address, setaddress] = useState();
    const [image, setimage] = useState();
    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/add", { locality:locality, bhkType:bhkType, rent:rent, isFurnished:isFurnished, address:address, image:image })
            .then(result => console.log(result.data))
            .catch(err => console.log("Error in post" + err))
    }
    return (
        <div>
            <div className="container ">
                <h1>Add a new home</h1>
                <form method="post" id="add-form" onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="loacality" className="form-label">Locality</label>
                        <input type="text" className="form-control" name="locality"
                            onChange={(e) => setlocality(e.target.value)} />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="bhkType" className="form-label">Bhk Type</label>
                        <input type="text" className="form-control" name="bhkType"
                            onChange={(e) => setbhkType(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="rent" className="form-label">rent</label>
                        <input type="text" className="form-control" name="rent"
                            onChange={(e) => setrent(e.target.value)} />
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name='isFurnished'
                            value='true'
                            onChange={(e) => setisFurnished(e.target.value === 'true')}
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">Furnished      </label>
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name='isFurnished'
                            value='false'
                            onChange={(e) => setisFurnished(e.target.value === 'true')}
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">Non Furnished</label>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="address" className="form-control" name="address"
                            onChange={(e) => setaddress(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">image</label>
                        <input type="file" className="form-control" name="image" required
                            onChange={(e) => setimage(e.target.files)} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}


