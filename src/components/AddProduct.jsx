import React from 'react'
import NavigationBar from './NavigationBar'

const AddProduct = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<NavigationBar />
<div className="row g-3">
    <div className="col col-12 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Product Code</label>
<input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Product Name</label>
        <input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Category</label>
<input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Brand</label>
<input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Price</label>
<input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


<label htmlFor="" className="form-label">Discount(%)</label>
<input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Stock Quantity</label>
<input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Description</label>
<textarea name="" id="" className="form-control"></textarea>

    </div>
    <div className="col col-12 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Product Image URL</label>
<input type="url" name="" id="" className="form-control" />

    </div>
    <div className="col col-12 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Rating</label>
<select name="" id="" className="form-control">
    <option className="5">5</option>
    <option className="4">4</option>
    <option className="3">3</option>
    <option className="2">2</option>
    <option className="1">1</option>
</select>

    </div>
    <div className="col col-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<button className="btn btn-primary">Submit</button>

    </div>
</div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AddProduct