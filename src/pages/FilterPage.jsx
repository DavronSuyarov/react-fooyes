import React from 'react';

const FilterPage = () => {
  return <main>
  <div className="page_header element_to_stick">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 col-lg-7 col-md-7 d-none d-md-block">
          <h1>145 restaurants in Convent Street 2983</h1>
          <a href="#0">Change address</a>
        </div>
        <div className="col-xl-4 col-lg-5 col-md-5">
          <div className="search_bar_list">
            <input type="text" className="form-control" placeholder="Dishes, restaurants or cuisines" />
            <button type="submit"><i className="icon_search" /></button>
          </div>
        </div>
      </div>
      {/* /row */}		       
    </div>
  </div>
  {/* /page_header */}
  <div className="collapse" id="collapseMap">
    <div id="map" className="map" />
  </div>
  {/* /Map */}
  <div className="container margin_30_20">			
    <div className="row">
      <aside className="col-lg-3" id="sidebar_fixed">
        <a className="btn_map d-flex align-items-center justify-content-center" data-bs-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap"><span className="btn_map_txt" data-text-swap="Hide Map" data-text-original="View on Map">View on Map</span></a>
        <div className="type_delivery">
          <ul className="clearfix">
            <li>
              <label className="container_radio">Delivery
                <input type="radio" name="type_d" defaultChecked="checked" />
                <span className="checkmark" />
              </label>
            </li>
            <li>
              <label className="container_radio">Take away
                <input type="radio" name="type_d" />
                <span className="checkmark" />
              </label>
            </li>
          </ul>
        </div>
        {/* /type_delivery */}
        <a className="btn_map mobile btn_filters" data-bs-toggle="collapse" href="#collapseMap"><i className="icon_pin_alt" /></a>
        <a href="#0" className="open_filters btn_filters"><i className="icon_adjust-vert" /><span>Filters</span></a>
        <div className="filter_col">
          <div className="inner_bt clearfix">Filters<a href="#" className="open_filters"><i className="icon_close" /></a></div>
          <div className="filter_type">
            <h4><a href="#filter_1" data-bs-toggle="collapse" className="opened">Sort</a></h4>
            <div className="collapse show" id="filter_1">
              <ul>
                <li>
                  <label className="container_radio">Top Rated
                    <input type="radio" name="filter_sort" defaultChecked />
                    <span className="checkmark" />
                  </label>
                </li>
                <li>
                  <label className="container_radio">Reccomended
                    <input type="radio" name="filter_sort" />
                    <span className="checkmark" />
                  </label>
                </li>
                <li>
                  <label className="container_radio">Price: low to high
                    <input type="radio" name="filter_sort" />
                    <span className="checkmark" />
                  </label>
                </li>
                <li>
                  <label className="container_radio">Up to 15% off
                    <input type="radio" name="filter_sort" />
                    <span className="checkmark" />
                  </label>
                </li>
                <li>
                  <label className="container_radio">All Offers
                    <input type="radio" name="filter_sort" />
                    <span className="checkmark" />
                  </label>
                </li>
                <li>
                  <label className="container_radio">Distance
                    <input type="radio" name="filter_sort" />
                    <span className="checkmark" />
                  </label>
                </li>
              </ul>
            </div>
          </div>
          {/* /filter_type */}
          <div className="filter_type">
            <h4><a href="#filter_2" data-bs-toggle="collapse" className="closed">Categories</a></h4>
            <div className="collapse" id="filter_2">
              <ul>
                <li>
                  <label className="container_check">Pizza - Italian <small>12</small>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </li>
                <li>
                  <label className="container_check">Japanese - Sushi <small>24</small>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </li>
                <li>
                  <label className="container_check">Burghers <small>23</small>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </li>
                <li>
                  <label className="container_check">Vegetarian <small>11</small>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </li>
                <li>
                  <label className="container_check">Bakery <small>18</small>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </li>
                <li>
                  <label className="container_check">Chinese <small>12</small>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </li>
                <li>
                  <label className="container_check">Mexican <small>15</small>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </li>
              </ul>
            </div>
          </div>
          {/* /filter_type */}
          <div className="filter_type">
            <h4><a href="#filter_3" data-bs-toggle="collapse" className="closed">Distance</a></h4>
            <div className="collapse" id="filter_3">
              <div className="distance"> Radius around selected destination <span /> km</div>
              <div className="add_bottom_25"><input type="range" min={10} max={50} step={5} defaultValue={20} data-orientation="horizontal" /></div>
            </div>
          </div>
          {/* /filter_type */}
          <div className="filter_type last">
            <h4><a href="#filter_4" data-bs-toggle="collapse" className="closed">Rating</a></h4>
            <div className="collapse" id="filter_4">
              <ul>
                <li>
                  <label className="container_check">Superb 9+ <small>06</small>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </li>
                <li>
                  <label className="container_check">Very Good 8+ <small>12</small>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </li>
                <li>
                  <label className="container_check">Good 7+ <small>17</small>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </li>
                <li>
                  <label className="container_check">Pleasant 6+ <small>43</small>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </li>
              </ul>
            </div>
          </div>
          {/* /filter_type */}
          <p><a href="#0" className="btn_1 outline full-width">Filter</a></p>
        </div>
      </aside>
      <div className="col-lg-9">
        <div className="row">
          <div className="col-12">
            <h2 className="title_small">Top Categories</h2>
            <div className="owl-carousel owl-theme categories_carousel_in listing">
              <div className="item">
                <figure>
                  <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_1.jpg" alt="" className="owl-lazy" />
                  <a href="#0"><h3>Pizza</h3></a>
                </figure>
              </div>
              <div className="item">
                <figure>
                  <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_2.jpg" alt="" className="owl-lazy" />
                  <a href="#0"><h3>Sushi</h3></a>
                </figure>
              </div>
              <div className="item">
                <figure>
                  <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_3.jpg" alt="" className="owl-lazy" />
                  <a href="#0"><h3>Dessert</h3></a>
                </figure>
              </div>
              <div className="item">
                <figure>
                  <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_4.jpg" alt="" className="owl-lazy" />
                  <a href="#0"><h3>Hamburgher</h3></a>
                </figure>
              </div>
              <div className="item">
                <figure>
                  <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_5.jpg" alt="" className="owl-lazy" />
                  <a href="#0"><h3>Ice Cream</h3></a>
                </figure>
              </div>
              <div className="item">
                <figure>
                  <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_6.jpg" alt="" className="owl-lazy" />
                  <a href="#0"><h3>Kebab</h3></a>
                </figure>
              </div>
              <div className="item">
                <figure>
                  <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_7.jpg" alt="" className="owl-lazy" />
                  <a href="#0"><h3>Italian</h3></a>
                </figure>
              </div>
              <div className="item">
                <figure>
                  <img src="img/cat_listing_placeholder.png" data-src="img/cat_listing_8.jpg" alt="" className="owl-lazy" />
                  <a href="#0"><h3>Chinese</h3></a>
                </figure>
              </div>	
            </div>
            {/* /carousel */}
          </div>
        </div>
        {/* /row */}
        <div className="promo">
          <h3>Free Delivery for your first 14 days!</h3>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
          <i className="icon-food_icon_delivery" />
        </div>
        {/* /promo */}
        <div className="row">
          <div className="col-12"><h2 className="title_small">Top Rated</h2></div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
            <div className="strip">
              <figure>
                <span className="ribbon off">15% off</span>
                <img src="img/lazy-placeholder.png" data-src="img/location_1.jpg" className="img-fluid lazy" alt="" />
                <a href="detail-restaurant.html" className="strip_info">
                  <small>Pizza</small>
                  <div className="item_title">
                    <h3>Da Alfredo</h3>
                    <small>27 Old Gloucester St</small>
                  </div>
                </a>
              </figure>
              <ul>
                <li><span className="take yes">Takeaway</span> <span className="deliv yes">Delivery</span></li>
                <li>
                  <div className="score"><strong>8.9</strong></div>
                </li>
              </ul>
            </div>
          </div>
          {/* /strip grid */}
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
            <div className="strip">
              <figure>
                <img src="img/lazy-placeholder.png" data-src="img/location_2.jpg" className="img-fluid lazy" alt="" />
                <a href="detail-restaurant.html" className="strip_info">
                  <small>Burghers</small>
                  <div className="item_title">
                    <h3>Best Burghers</h3>
                    <small>27 Old Gloucester St</small>
                  </div>
                </a>
              </figure>
              <ul>
                <li><span className="take no">Takeaway</span> <span className="deliv yes">Delivery</span></li>
                <li>
                  <div className="score"><strong>9.5</strong></div>
                </li>
              </ul>
            </div>
          </div>
          {/* /strip grid */}
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
            <div className="strip">
              <figure>
                <span className="ribbon off">15% off</span>
                <img src="img/lazy-placeholder.png" data-src="img/location_3.jpg" className="img-fluid lazy" alt="" />
                <a href="detail-restaurant.html" className="strip_info">
                  <small>Vegetarian</small>
                  <div className="item_title">
                    <h3>Vego Life</h3>
                    <small>27 Old Gloucester St</small>
                  </div>
                </a>
              </figure>
              <ul>
                <li><span className="take yes">Takeaway</span> <span className="deliv no">Delivery</span></li>
                <li>
                  <div className="score"><strong>7.5</strong></div>
                </li>
              </ul>
            </div>
          </div>
          {/* /strip grid */}
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
            <div className="strip">
              <figure>
                <img src="img/lazy-placeholder.png" data-src="img/location_4.jpg" className="img-fluid lazy" alt="" />
                <a href="detail-restaurant.html" className="strip_info">
                  <small>Japanese</small>
                  <div className="item_title">
                    <h3>Sushi Temple</h3>
                    <small>27 Old Gloucester St</small>
                  </div>
                </a>
              </figure>
              <ul>
                <li><span className="take no">Takeaway</span> <span className="deliv no">Delivery</span></li>
                <li>
                  <div className="score"><strong>9.5</strong></div>
                </li>
              </ul>
            </div>
          </div>
          {/* /strip grid */}
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
            <div className="strip">
              <figure>
                <img src="img/lazy-placeholder.png" data-src="img/location_5.jpg" className="img-fluid lazy" alt="" />
                <a href="detail-restaurant.html" className="strip_info">
                  <small>Pizza</small>
                  <div className="item_title">
                    <h3>Auto Pizza</h3>
                    <small>27 Old Gloucester St</small>
                  </div>
                </a>
              </figure>
              <ul>
                <li><span className="take yes">Takeaway</span> <span className="deliv no">Delivery</span></li>
                <li>
                  <div className="score"><strong>7.0</strong></div>
                </li>
              </ul>
            </div>
          </div>
          {/* /strip grid */}
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
            <div className="strip">
              <figure>
                <img src="img/lazy-placeholder.png" data-src="img/location_6.jpg" className="img-fluid lazy" alt="" />
                <a href="detail-restaurant.html" className="strip_info">
                  <small>Burghers</small>
                  <div className="item_title">
                    <h3>Alliance</h3>
                    <small>27 Old Gloucester St</small>
                  </div>
                </a>
              </figure>
              <ul>
                <li><span className="take no">Takeaway</span> <span className="deliv yes">Delivery</span></li>
                <li>
                  <div className="score"><strong>8.9</strong></div>
                </li>
              </ul>
            </div>
          </div>
          {/* /strip grid */}
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
            <div className="strip">
              <figure>
                <img src="img/lazy-placeholder.png" data-src="img/location_7.jpg" className="img-fluid lazy" alt="" />
                <a href="detail-restaurant.html" className="strip_info">
                  <small>Chinese</small>
                  <div className="item_title">
                    <h3>Alliance</h3>
                    <small>27 Old Gloucester St</small>
                  </div>
                </a>
              </figure>
              <ul>
                <li><span className="take no">Takeaway</span> <span className="deliv yes">Delivery</span></li>
                <li>
                  <div className="score"><strong>8.9</strong></div>
                </li>
              </ul>
            </div>
          </div>
          {/* /strip grid */}
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
            <div className="strip">
              <figure>
                <img src="img/lazy-placeholder.png" data-src="img/location_8.jpg" className="img-fluid lazy" alt="" />
                <a href="detail-restaurant.html" className="strip_info">
                  <small>Sushi</small>
                  <div className="item_title">
                    <h3>Dragon Tower</h3>
                    <small>27 Old Gloucester St</small>
                  </div>
                </a>
              </figure>
              <ul>
                <li><span className="take yes">Takeaway</span> <span className="deliv no">Delivery</span></li>
                <li>
                  <div className="score"><strong>8.9</strong></div>
                </li>
              </ul>
            </div>
          </div>
          {/* /strip grid */}
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
            <div className="strip">
              <figure>
                <img src="img/lazy-placeholder.png" data-src="img/location_9.jpg" className="img-fluid lazy" alt="" />
                <a href="detail-restaurant.html" className="strip_info">
                  <small>Mexican</small>
                  <div className="item_title">
                    <h3>El Paso Tacos</h3>
                    <small>27 Old Gloucester St</small>
                  </div>
                </a>
              </figure>
              <ul>
                <li><span className="take yes">Takeaway</span> <span className="deliv yes">Delivery</span></li>
                <li>
                  <div className="score"><strong>8.9</strong></div>
                </li>
              </ul>
            </div>
          </div>
          {/* /strip grid */}
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
            <div className="strip">
              <figure>
                <img src="img/lazy-placeholder.png" data-src="img/location_10.jpg" className="img-fluid lazy" alt="" />
                <a href="detail-restaurant.html" className="strip_info">
                  <small>Bakery</small>
                  <div className="item_title">
                    <h3>Monnalisa</h3>
                    <small>27 Old Gloucester St</small>
                  </div>
                </a>
              </figure>
              <ul>
                <li><span className="take yes">Takeaway</span> <span className="deliv yes">Delivery</span></li>
                <li>
                  <div className="score"><strong>8.9</strong></div>
                </li>
              </ul>
            </div>
          </div>
          {/* /strip grid */}
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
            <div className="strip">
              <figure>
                <img src="img/lazy-placeholder.png" data-src="img/location_11.jpg" className="img-fluid lazy" alt="" />
                <a href="detail-restaurant.html" className="strip_info">
                  <small>Mexican</small>
                  <div className="item_title">
                    <h3>Guachamole</h3>
                    <small>135 Newtownards Road</small>
                  </div>
                </a>
              </figure>
              <ul>
                <li><span className="take yes">Takeaway</span> <span className="deliv yes">Delivery</span></li>
                <li>
                  <div className="score"><strong>8.9</strong></div>
                </li>
              </ul>
            </div>
          </div>
          {/* /strip grid */}
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
            <div className="strip">
              <figure>
                <img src="img/lazy-placeholder.png" data-src="img/location_12.jpg" className="img-fluid lazy" alt="" />
                <a href="detail-restaurant.html" className="strip_info">
                  <small>Chinese</small>
                  <div className="item_title">
                    <h3>Pechino Express</h3>
                    <small>27 Old Gloucester St</small>
                  </div>
                </a>
              </figure>
              <ul>
                <li><span className="take no">Takeaway</span> <span className="deliv yes">Delivery</span></li>
                <li>
                  <div className="score"><strong>8.9</strong></div>
                </li>
              </ul>
            </div>
          </div>
          {/* /strip grid */}
        </div>
        {/* /row */}
        <div className="pagination_fg">
          <a href="#">«</a>
          <a href="#" className="active">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">»</a>
        </div>
      </div>
      {/* /col */}
    </div>		
  </div>
  {/* /container */}
</main>
{/* /main */}

};

export default FilterPage;
