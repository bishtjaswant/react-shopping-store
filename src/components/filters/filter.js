export default function Filter(props) {
    const { count, size, sort, filterProductHandler, sortProductHandler } = props;
    return (
        <>
            <div className="filter">
                <div className="filter-count"> {count} Products </div>
                <div className="filter-sort">Order
                    <select value={sort} onChange={sortProductHandler} name="" id="">
                        <option value="latest">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select> </div>
                <div className="filter-size">Filter
                    <select value={size} onChange={filterProductHandler} name="" id="">
                        <option value="">All</option>
                        <option value="L">L</option>
                        <option value="M">M</option>
                        <option value="S">S</option>
                        <option value="XS">XS</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>

                    </select> </div>
            </div>
        </>
    )
}