import React from 'react';

const HomePage = () => {
  return (
    <main>
      <div id='carousel-home'>
        <div className='owl-carousel owl-theme'>
          <div
            className='owl-slide cover'
            style={{ backgroundImage: 'url(img/slides/slide_home_1.jpg)' }}
          >
            {/* /Would probably better not use LazyLoad fo the first item */}
            <div
              className='opacity-mask d-flex align-items-center'
              data-opacity-mask='rgba(0, 0, 0, 0.5)'
            >
              <div className='container'>
                <div className='row justify-content-center justify-content-md-end'>
                  <div className='col-lg-6 static'>
                    <div className='slide-text text-end white'>
                      <h2 className='owl-slide-animated owl-slide-title'>
                        Enjoy
                        <br />
                        unique food
                      </h2>
                      <p className='owl-slide-animated owl-slide-subtitle'>
                        Huge variery of food at the best price
                      </p>
                      <div className='owl-slide-animated owl-slide-cta'>
                        <a
                          className='btn_1'
                          href='grid-listing-filterscol.html'
                          role='button'
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/owl-slide*/}
          <div
            className='owl-slide cover owl-lazy'
            data-src='img/slides/slide_home_2.jpg'
          >
            <div
              className='opacity-mask d-flex align-items-center'
              data-opacity-mask='rgba(0, 0, 0, 0.5)'
            >
              <div className='container'>
                <div className='row justify-content-center justify-content-md-start'>
                  <div className='col-lg-6 static'>
                    <div className='slide-text white'>
                      <h2 className='owl-slide-animated owl-slide-title'>
                        Discover
                        <br />
                        and Order
                      </h2>
                      <p className='owl-slide-animated owl-slide-subtitle'>
                        The best restaurants at the best price
                      </p>
                      <div className='owl-slide-animated owl-slide-cta'>
                        <a
                          className='btn_1'
                          href='grid-listing-filterscol.html'
                          role='button'
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/owl-slide*/}
          <div
            className='owl-slide cover owl-lazy'
            data-src='img/slides/slide_home_3.jpg'
          >
            <div
              className='opacity-mask d-flex align-items-center'
              data-opacity-mask='rgba(0, 0, 0, 0.6)'
            >
              <div className='container'>
                <div className='row justify-content-center justify-content-md-start'>
                  <div className='col-lg-12 static'>
                    <div className='slide-text text-center white'>
                      <h2 className='owl-slide-animated owl-slide-title'>
                        Enjoy
                        <br />a friends dinner
                      </h2>
                      <p className='owl-slide-animated owl-slide-subtitle'>
                        The best restaurants at the best price
                      </p>
                      <div className='owl-slide-animated owl-slide-cta'>
                        <a
                          className='btn_1'
                          href='grid-listing-filterscol.html'
                          role='button'
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/owl-slide*/}
          </div>
        </div>
        <div id='icon_drag_mobile' />
        <div className='wave hero' />
      </div>
      {/*/carousel*/}
      <div className='container margin_30_60'>
        <div className='main_title center'>
          <span>
            <em />
          </span>
          <h2>Popular Categories</h2>
          <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
        </div>
        {/* /main_title */}
        <div className='row small-gutters categories_grid'>
          <div className='col-sm-12 col-md-6'>
            <a href='grid-listing-filterscol.html'>
              <img
                src='img/img_cat_home_placeholder.png'
                data-src='img/img_cat_home_1.jpg'
                alt=''
                className='img-fluid lazy'
              />
              <div className='wrapper'>
                <h2>Pizza - Italian</h2>
                <p>115 Restaurants</p>
              </div>
            </a>
          </div>
          <div className='col-sm-12 col-md-6'>
            <div className='row small-gutters'>
              <div className='col-sm-6'>
                <a href='grid-listing-filterscol.html'>
                  <img
                    src='img/img_cat_home_placeholder.png'
                    data-src='img/img_cat_home_2.jpg'
                    alt=''
                    className='img-fluid lazy'
                  />
                  <div className='wrapper'>
                    <h2>Sushi</h2>
                    <p>150 Restaurants</p>
                  </div>
                </a>
              </div>
              <div className='col-sm-6'>
                <a href='grid-listing-filterscol.html'>
                  <img
                    src='img/img_cat_home_placeholder.png'
                    data-src='img/img_cat_home_3.jpg'
                    alt=''
                    className='img-fluid lazy'
                  />
                  <div className='wrapper'>
                    <h2>Burghers</h2>
                    <p>90 Restaurants</p>
                  </div>
                </a>
              </div>
              <div className='col-sm-12 margin'>
                <a href='grid-listing-filterscol.html'>
                  <img
                    src='img/img_cat_home_placeholder.png'
                    data-src='img/img_cat_home_4.jpg'
                    alt=''
                    className='img-fluid lazy'
                  />
                  <div className='wrapper'>
                    <h2>Bakery Cakes</h2>
                    <p>120 Restaurants</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*/categories_grid*/}
      </div>
      {/* /container */}
      <div className='bg_gray'>
        <div className='container margin_60'>
          <div className='main_title'>
            <span>
              <em />
            </span>
            <h2>Top Rated Restaurants</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
            <a href='#0'>View All</a>
          </div>
          <div className='owl-carousel owl-theme carousel_4'>
            <div className='item'>
              <div className='strip'>
                <figure>
                  <span className='ribbon off'>-30%</span>
                  <img
                    src='img/lazy-placeholder.jpg'
                    data-src='img/location_1.jpg'
                    className='owl-lazy'
                    alt=''
                    width={460}
                    height={310}
                  />
                  <a href='detail-restaurant.html' className='strip_info'>
                    <small>Pizza</small>
                    <div className='item_title'>
                      <h3>Da Alfredo</h3>
                      <small>27 Old Gloucester St</small>
                    </div>
                  </a>
                </figure>
                <ul>
                  <li>
                    <span className='take yes'>Take away</span>{' '}
                    <span className='deliv yes'>Delivery</span>
                  </li>
                  <li>
                    <div className='score'>
                      <strong>8.9</strong>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='item'>
              <div className='strip'>
                <figure>
                  <span className='ribbon off'>-40%</span>
                  <img
                    src='img/lazy-placeholder.jpg'
                    data-src='img/location_2.jpg'
                    className='owl-lazy'
                    alt=''
                    width={460}
                    height={310}
                  />
                  <a href='detail-restaurant.html' className='strip_info'>
                    <small>Burghers</small>
                    <div className='item_title'>
                      <h3>Best Burghers</h3>
                      <small>27 Old Gloucester St</small>
                    </div>
                  </a>
                </figure>
                <ul>
                  <li>
                    <span className='take yes'>Take away</span>{' '}
                    <span className='deliv yes'>Delivery</span>
                  </li>
                  <li>
                    <div className='score'>
                      <strong>7.5</strong>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='item'>
              <div className='strip'>
                <figure>
                  <span className='ribbon off'>-30%</span>
                  <img
                    src='img/lazy-placeholder.jpg'
                    data-src='img/location_3.jpg'
                    className='owl-lazy'
                    alt=''
                    width={460}
                    height={310}
                  />
                  <a href='detail-restaurant.html' className='strip_info'>
                    <small>Vegetarian</small>
                    <div className='item_title'>
                      <h3>Vego Life</h3>
                      <small>27 Old Gloucester St</small>
                    </div>
                  </a>
                </figure>
                <ul>
                  <li>
                    <span className='take no'>Take away</span>{' '}
                    <span className='deliv yes'>Delivery</span>
                  </li>
                  <li>
                    <div className='score yes'>
                      <strong>8.9</strong>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='item'>
              <div className='strip'>
                <figure>
                  <span className='ribbon off'>-25%</span>
                  <img
                    src='img/lazy-placeholder.jpg'
                    data-src='img/location_4.jpg'
                    className='owl-lazy'
                    alt=''
                    width={460}
                    height={310}
                  />
                  <a href='detail-restaurant.html' className='strip_info'>
                    <small>Japanese</small>
                    <div className='item_title'>
                      <h3>Sushi Temple</h3>
                      <small>27 Old Gloucester St</small>
                    </div>
                  </a>
                </figure>
                <ul>
                  <li>
                    <span className='take yes'>Take away</span>{' '}
                    <span className='deliv no'>Delivery</span>
                  </li>
                  <li>
                    <div className='score yes'>
                      <strong>8.9</strong>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='item'>
              <div className='strip'>
                <figure>
                  <span className='ribbon off'>-30%</span>
                  <img
                    src='img/lazy-placeholder.jpg'
                    data-src='img/location_5.jpg'
                    className='owl-lazy'
                    alt=''
                    width={460}
                    height={310}
                  />
                  <a href='detail-restaurant.html' className='strip_info'>
                    <small>Pizza</small>
                    <div className='item_title'>
                      <h3>Auto Pizza</h3>
                      <small>27 Old Gloucester St</small>
                    </div>
                  </a>
                </figure>
                <ul>
                  <li>
                    <span className='take no'>Take away</span>{' '}
                    <span className='deliv yes'>Delivery</span>
                  </li>
                  <li>
                    <div className='score yes'>
                      <strong>8.9</strong>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='item'>
              <div className='strip'>
                <figure>
                  <span className='ribbon off'>-15%</span>
                  <img
                    src='img/lazy-placeholder.jpg'
                    data-src='img/location_6.jpg'
                    className='owl-lazy'
                    alt=''
                    width={460}
                    height={310}
                  />
                  <a href='detail-restaurant.html' className='strip_info'>
                    <small>Burghers</small>
                    <div className='item_title'>
                      <h3>Alliance</h3>
                      <small>27 Old Gloucester St</small>
                    </div>
                  </a>
                </figure>
                <ul>
                  <li>
                    <span className='take yes'>Take away</span>{' '}
                    <span className='deliv yes'>Delivery</span>
                  </li>
                  <li>
                    <div className='score yes'>
                      <strong>8.9</strong>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='item'>
              <div className='strip'>
                <figure>
                  <span className='ribbon off'>-30%</span>
                  <img
                    src='img/lazy-placeholder.jpg'
                    data-src='img/location_7.jpg'
                    className='owl-lazy'
                    alt=''
                    width={460}
                    height={310}
                  />
                  <a href='detail-restaurant.html' className='strip_info'>
                    <small>Chinese</small>
                    <div className='item_title'>
                      <h3>Alliance</h3>
                      <small>27 Old Gloucester St</small>
                    </div>
                  </a>
                </figure>
                <ul>
                  <li>
                    <span className='take no'>Take away</span>{' '}
                    <span className='deliv yes'>Delivery</span>
                  </li>
                  <li>
                    <div className='score yes'>
                      <strong>8.9</strong>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /carousel */}
        </div>
      </div>
      {/* /bg_gray */}
      <div className='shape_element_2'>
        <div className='container margin_60_0'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='box_how'>
                    <figure>
                      <img
                        src='img/lazy-placeholder-100-100-white.png'
                        data-src='img/how_1.svg'
                        alt=''
                        width={150}
                        height={167}
                        className='lazy'
                      />
                    </figure>
                    <h3>Easly Order</h3>
                    <p>
                      Faucibus ante, in porttitor tellus blandit et. Phasellus
                      tincidunt metus lectus sollicitudin.
                    </p>
                  </div>
                  <div className='box_how'>
                    <figure>
                      <img
                        src='img/lazy-placeholder-100-100-white.png'
                        data-src='img/how_2.svg'
                        alt=''
                        width={130}
                        height={145}
                        className='lazy'
                      />
                    </figure>
                    <h3>Quick Delivery</h3>
                    <p>
                      Maecenas pulvinar, risus in facilisis dignissim, quam nisi
                      hendrerit nulla, id vestibulum.
                    </p>
                  </div>
                </div>
                <div className='col-lg-6 align-self-center'>
                  <div className='box_how'>
                    <figure>
                      <img
                        src='img/lazy-placeholder-100-100-white.png'
                        data-src='img/how_3.svg'
                        alt=''
                        width={150}
                        height={132}
                        className='lazy'
                      />
                    </figure>
                    <h3>Enjoy Food</h3>
                    <p>
                      Morbi convallis bibendum urna ut viverra. Maecenas quis
                      consequat libero, a feugiat eros.
                    </p>
                  </div>
                </div>
              </div>
              <p className='text-center mt-3 d-block d-lg-none'>
                <a href='#0' className='btn_1 medium gradient pulse_bt mt-2'>
                  Register Now!
                </a>
              </p>
            </div>
            <div className='col-lg-5 offset-lg-1 align-self-center'>
              <div className='intro_txt'>
                <div className='main_title'>
                  <span>
                    <em />
                  </span>
                  <h2>Start Ordering Now</h2>
                </div>
                <p className='lead'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  imperdiet libero id nisi euismod, sed porta est consectetur
                  deserunt.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  <a href='#0' className='btn_1 medium gradient pulse_bt mt-2'>
                    Register
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /shape_element_2 */}
    </main>
  );
};

export default HomePage;
