import { sortProductsAction, filterProductsAction } from '../../redux/actions/producAction'; 
import { connect } from 'react-redux';


function Filter(props) {


    console.log('props :>> ', props);

    return (
        <>
        {
            (!props.filteredProduct) ? 
          (  <p>loading</p> ):
          (
            <div className="filter">
                <div className="filter-count"> {props.products.products.length} Products </div>
                <div className="filter-sort">Order
                    <select value={props. sort} onChange={(e)=> props.sortProductsAction( props.filteredProduct, e.target.value ) } name="" id="">
                        <option value="latest">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select> </div>
                 <div className="filter-size">Filter
                    <select value={props. size} onChange={(e)=>props.filterProductsAction(props.products.products, e.target.value)} name="" id="">
                        <option value="">All</option>
                        <option value="L">L</option>
                        <option value="M">M</option>
                        <option value="S">S</option>
                        <option value="XS">XS</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>

                    </select> </div>
            </div>
            )
        }
        </>
    )
}

export default connect((state)=>({
    // count: state.products.size,
    size: state.products.size,
     sort: state.products.sort,
      filteredProduct: state.products.filteredItems, 
      products:state.products.items,
}),{
    sortProductsAction,filterProductsAction,
}) (Filter);