import React from "react";
import './style/ani.css';
const ChapatiImg = 'image/catelogimg/chapati.jpg'
const Aloo = 'image/catelogimg/alooparatha.jpg'
const Fish = 'image/catelogimg/fish.jpg'
const Chicken = 'image/catelogimg/chicken.jpg'
const Rice = 'image/catelogimg/rice.jpg'
const Poha = 'image/catelogimg/vegpoha.jpg'
const Soup = 'image/catelogimg/soup.jpg'
const Idli = 'image/catelogimg/idli.jpg'

const CatLayout = ({photo,foodname, price}) => {
    return (
        <>

            <div className="cat-box shadow d-flex flex-row fluid justify-content-start">

                <img src={photo} alt={photo} className="img-fluid cat-img ml-2"></img>

                <div className="d-flex flex-column text-left ml-4">
                    <h6 className="text-center" style={{ marginTop: '10px' }}>{foodname}</h6>

                    <h5 style={{ fontSize: 'medium' }}>{price}</h5>
                </div>
            </div>

        </>
    )
}

const Cateloglist = () => {
   

    return (
        <>

            <div className="col-lg-3 col-md-3 col-sm-12 success mr-5">


                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 shadow head">
                        <h4 className="text-center" style={{}}>Donate a meal</h4>

                        <div className="list-group">

                            <div className="list-group-item list-group-item-action  align-items-center">
                            <CatLayout photo = {ChapatiImg} foodname = {'Chapati Meal'} price = {'Rs 20'}/>
                            </div>

                            <span className="list-group-item list-group-item-action" >
                            <CatLayout photo = {Rice} foodname = {'Rice Meal'} price = {'Rs 40'}/>
                            </span>

                            <span className="list-group-item list-group-item-action">
                            <CatLayout photo = {Fish} foodname = {'Fish Meal'} price = {'Rs 65'}/>
                            </span>
                            <span className="list-group-item list-group-item-action">
                            <CatLayout photo = {Chicken} foodname = {'Chicken Meal'} price = {'Rs 80'}/>
                            </span>

                            <span className="list-group-item list-group-item-action">
                            <CatLayout photo = {Aloo} foodname = {'Aloo Paratha'} price = {'Rs 30'}/>
                            </span>

                            <span className="list-group-item list-group-item-action">
                            <CatLayout photo = {Poha} foodname = {'Veg Poha'} price = {'Rs 40'}/>
                            </span>

                            <span className="list-group-item list-group-item-action">
                            <CatLayout photo = {Idli} foodname = {'Idli Meal'} price = {'Rs 40'}/>
                            </span>

                            <span className="list-group-item list-group-item-action">
                            <CatLayout photo = {Soup} foodname = {'Chicken Soup'} price = {'Rs 70'}/>
                            </span>
                        </div>

                    </div>
                </div>


            </div>

        </>
    )
}



export {CatLayout, Cateloglist};


const Catelog = () => {
    return(
        <>

        <Cateloglist />

        </>
    )
}

export default Catelog;