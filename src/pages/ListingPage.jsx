import React from 'react';

const ListingPage = () => {
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
  <div className="filters_full clearfix add_bottom_15">
    <div className="container">
      <div className="type_delivery">
        <ul className="clearfix">
          <li>
            <label className="container_radio">All
              <input type="radio" name="type_d" defaultValue="all" id="all" defaultChecked data-filter="*" className="selected" />
              <span className="checkmark" />
            </label>
          </li>
          <li>
            <label className="container_radio">Delivery
              <input type="radio" name="type_d" defaultValue="delivery" id="delivery" data-filter=".delivery" />
              <span className="checkmark" />
            </label>
          </li>
          <li>
            <label className="container_radio">Takeaway
              <input type="radio" name="type_d" defaultValue="takeway" id="takeaway" data-filter=".takeaway" />
              <span className="checkmark" />
            </label>
          </li>
        </ul>
      </div>
      {/* /type_delivery */}
      <a className="btn_map mobile btn_filters" data-bs-toggle="collapse" href="#collapseMap"><i className="icon_pin_alt" /></a>
      <a href="#collapseFilters" data-bs-toggle="collapse" className="btn_filters"><i className="icon_adjust-vert" /><span>Filters</span></a>
    </div>
  </div>
  {/* /filters_full */}
  <div className="collapse" id="collapseMap">
    <div id="map" className="map" />
  </div>
  {/* /Map */}
  <div className="collapse filters_2" id="collapseFilters">
    <div className="container margin_30_20">
      <div className="row">
        <div className="col-md-4">
          <div className="filter_type">
            <h6>Categories</h6>
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
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="filter_type">
            <h6>Rating</h6>
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
        <div className="col-md-4">
          <div className="filter_type">
            <h6>Distance</h6>
            <div className="distance"> Radius around selected destination <span /> km</div>
            <div className="mb-3
	                        "><input type="range" min={10} max={100} step={10} defaultValue={30} data-orientation="horizontal" /></div>
          </div>
        </div>
      </div>
      {/* /row */}
    </div>
  </div>
  {/* /filters */}
  <div className="container margin_30_20">
    <div className="promo mb_30">
      <h3>Free Delivery for your first 14 days!</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
      <i className="icon-food_icon_delivery" />
    </div>
    {/* /promo */}
    <div className="row isotope-wrapper">
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 isotope-item delivery">
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
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 isotope-item delivery">
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
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 isotope-item takeaway">
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
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 isotope-item takeaway">
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
            <li><span className="take">Takeaway</span> <span className="deliv no">Delivery</span></li>
            <li>
              <div className="score"><strong>9.5</strong></div>
            </li>
          </ul>
        </div>
      </div>
      {/* /strip grid */}
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 isotope-item takeaway">
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
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 isotope-item delivery">
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
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 isotope-item delivery">
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
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 isotope-item takeaway">
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
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 isotope-item takeaway delivery">
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
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 isotope-item latest">
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
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 isotope-item delivery">
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
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 isotope-item delivery takeaway">
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
    </div>
    {/* /strip row */}
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
  {/* /container */}
</main>
{/* /main */}

};

export default ListingPage;
