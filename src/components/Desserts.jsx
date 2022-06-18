import React from 'react'
import Dessert from './Dessert'

const Desserts = () => {

    const products = [
        {name : 'Strawberry Cheesecake', src : 'https://www.nicepng.com/png/full/106-1064558_food-dessert-png.png', prize : '$20', flavors : 'Vanilla, Strawberry, Chocolate'},
        {name : 'Chocolate Mousse', src : 'https://images.squarespace-cdn.com/content/v1/538500e4e4b0fa9e95efc7b9/1474396722095-Z3PFWKHLRBKM4QASI7UN/adj_SoGoodChocCake.png?format=1000w', prize : '$3', flavors : 'Vanilla, Strawberry, Chocolate'},
        {name : 'Cream Vanilla Jelo', src : 'https://www.pngplay.com/wp-content/uploads/13/Dessert-Download-Free-PNG.png', prize : '$6', flavors : 'Vanilla, Strawberry, Chocolate'},
        {name : 'Waffle Honey', src : 'https://wimpy.co.za/site/images/pages/menu/desserts-and-drinks/desserts/Bar-One-Waffle.png', prize : '$14', flavors : 'Vanilla, Strawberry, Chocolate'},
        {name : 'Tropical Halo-Halo', src : 'https://static.wixstatic.com/media/a8bfeb_35bf2ead470b4f41852b457af1e4245a~mv2.png/v1/fill/w_560,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/durian-01_edited.png', prize : '$31', flavors : 'Vanilla, Strawberry, Chocolate'},
        {name : 'Velvet Mini Cake', src : 'https://www.pngall.com/wp-content/uploads/5/Cupcake-Dessert-PNG-Clipart.png', prize : '$.9', flavors : 'Vanilla, Strawberry, Chocolate'},
    ]
    return (
        <div className="flex flex-col flex-1 md:px-0 mt-20 lg:mt-36 w-full">
                <div className="flex justify-center lg:justify-between items-center text-black h-10 w-full mb-6 md:mb-0">
                    <small className="font-medium md:pl-10">Some desserts you should try.</small>
                    <small className="font-medium md:pl-10 hidden lg:block">View All</small>
                </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-x-5 gap-y-3 md:-gap-y-1 mx-auto md:mx-0 md:pl-10">

                {
                    products.map((product) => 
                    <Dessert product={product} name={product.name} flavor={product.flavor} prize={product.prize}/>
                    )
                }
                {/* <Dessert src="https://www.nicepng.com/png/full/106-1064558_food-dessert-png.png"/>
                <Dessert src="https://images.squarespace-cdn.com/content/v1/538500e4e4b0fa9e95efc7b9/1474396722095-Z3PFWKHLRBKM4QASI7UN/adj_SoGoodChocCake.png?format=1000w"/>
                <Dessert src="https://www.pngplay.com/wp-content/uploads/13/Dessert-Download-Free-PNG.png"/>
                <Dessert src="https://wimpy.co.za/site/images/pages/menu/desserts-and-drinks/desserts/Bar-One-Waffle.png"/>
                <Dessert src="https://static.wixstatic.com/media/a8bfeb_35bf2ead470b4f41852b457af1e4245a~mv2.png/v1/fill/w_560,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/durian-01_edited.png"/>
                <Dessert src="https://www.pngall.com/wp-content/uploads/5/Cupcake-Dessert-PNG-Clipart.png"/> */}
            </div>
            </div>
    )
}

export default Desserts
