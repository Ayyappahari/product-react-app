import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewProducts = () => {

    const [ data, changeData ] = useState(
        [
            { "name": "Cauliflower", "price": "RS. 34", "avatar": "https://www.bbassets.com/media/uploads/p/m/10000074_21-fresho-cauliflower.jpg?tr=w-154,q-80" },
            { "name": "Cornflakes", "price": "RS. 352", "avatar": "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/09ece9f7-7ac9-4d1e-afbb-f8ac572add38/hp_sbf_m_breakfast-cereals_480_250923.jpg?tr=w-480,q-80https://www.bbassets.com/media/uploads/p/m/10000074_21-fresho-cauliflower.jpg?tr=w-154,q-80" },
            { "name": "Pediasure", "price": "RS. 1475", "avatar": "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/09ece9f7-7ac9-4d1e-afbb-f8ac572add38/hp_sbf_m_breakfast-cereals_480_250923.jpg?tr=w-480,q-80https://www.bbassets.com/media/uploads/p/m/10000074_21-fresho-cauliflower.jpg?tr=w-154,q-80" },
            { "name": "Chicken Leg Boneless", "price": "RS. 582", "avatar": "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/09ece9f7-7ac9-4d1e-afbb-f8ac572add38/hp_sbf_m_breakfast-cereals_480_250923.jpg?tr=w-480,q-80https://www.bbassets.com/media/uploads/p/m/10000074_21-fresho-cauliflower.jpg?tr=w-154,q-80" },
            { "name": "Brown & White Egg Combo", "price": "RS. 299", "avatar": "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/09ece9f7-7ac9-4d1e-afbb-f8ac572add38/hp_sbf_m_breakfast-cereals_480_250923.jpg?tr=w-480,q-80https://www.bbassets.com/media/uploads/p/m/10000074_21-fresho-cauliflower.jpg?tr=w-154,q-80" }
        ]
    )
    return (
        <div>

            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            {data.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                            <div class="card">
                                                <img src={value.avatar} height="300px" class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h6 class="card-title">{value.name}</h6>
                                                    <h6 class="card-title">{value.price}</h6>
                                                    <a href="#" class="btn btn-success">Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </div>
                )
}

                export default ViewProducts