import '../pages/App.css'
import Head from '../subcontent/Head';

function Card({name, price, varient, rate ,features,features2}) {
    return (
        <div>
            <div className='box'>
                <h1>Product Name :   {name}</h1>
                <h1>Product Price :  {price}</h1>
                <h1>Product Varient: {varient}</h1>
                <h1>Product rate :   {rate}*</h1>
                <h1>Specification :  {features}</h1>
                <h1>Specification 1: {features2}</h1>
                <Head title={name} go ="hello" ho="hi" ko="hiii"/>
            </div>
        </div>
    )
}
export default Card;