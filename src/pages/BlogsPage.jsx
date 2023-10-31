import React from 'react';
import { Link } from 'react-router-dom';

const BlogsPage = () => {
  return (
    <main>
      <div className='page_header blog element_to_stick'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-8 col-lg-7 col-md-7 d-none d-md-block'>
              <h1>Blog and Articles</h1>
            </div>
            <div className='col-xl-4 col-lg-5 col-md-5'>
              <div className='search_bar_list'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Dishes, restaurants or cuisines'
                />
                <button type='submit'>
                  <i className='icon_search' />
                </button>
              </div>
            </div>
          </div>
          {/* /row */}
        </div>
      </div>
      {/* /page_header */}
      <div className='container margin_60_20'>
        <div className='row'>
          <div className='col-lg-9'>
            <div className='row'>
              <div className='col-md-6'>
                <article className='blog'>
                  <figure>
                    <a href='blog-post.html'>
                      <img src='img/blog-1.jpg' alt='' />
                      <div className='preview'>
                        <span>Read more</span>
                      </div>
                    </a>
                  </figure>
                  <div className='post_info'>
                    <small>Category - 20 Nov. 2017</small>
                    <h2>
                      <Link to='/post'>Ea exerci option hendrerit</Link>
                    </h2>
                    <p>
                      Quodsi sanctus pro eu, ne audire scripserit quo. Vel an
                      enim offendit salutandi, in eos quod omnes epicurei, ex
                      veri qualisque scriptorem mei.
                    </p>
                    <ul>
                      <li>
                        <div className='thumb'>
                          <img src='img/avatar.jpg' alt='' />
                        </div>{' '}
                        Admin
                      </li>
                      <li>
                        <i className='icon_comment_alt' />
                        20
                      </li>
                    </ul>
                  </div>
                </article>
                {/* /article */}
              </div>
              {/* /col */}
              <div className='col-md-6'>
                <article className='blog'>
                  <figure>
                    <a href='blog-post.html'>
                      <img src='img/blog-2.jpg' alt='' />
                      <div className='preview'>
                        <span>Read more</span>
                      </div>
                    </a>
                  </figure>
                  <div className='post_info'>
                    <small>Category - 20 Nov. 2017</small>
                    <h2>
                      <a href='blog-post.html'>At usu sale dolorum offendit</a>
                    </h2>
                    <p>
                      Quodsi sanctus pro eu, ne audire scripserit quo. Vel an
                      enim offendit salutandi, in eos quod omnes epicurei, ex
                      veri qualisque scriptorem mei.
                    </p>
                    <ul>
                      <li>
                        <div className='thumb'>
                          <img src='img/avatar.jpg' alt='' />
                        </div>{' '}
                        Admin
                      </li>
                      <li>
                        <i className='icon_comment_alt' />
                        20
                      </li>
                    </ul>
                  </div>
                </article>
                {/* /article */}
              </div>
              {/* /col */}
              <div className='col-md-6'>
                <article className='blog'>
                  <figure>
                    <a href='blog-post.html'>
                      <img src='img/blog-3.jpg' alt='' />
                      <div className='preview'>
                        <span>Read more</span>
                      </div>
                    </a>
                  </figure>
                  <div className='post_info'>
                    <small>Category - 20 Nov. 2017</small>
                    <h2>
                      <a href='blog-post.html'>Iusto nominavi petentium in</a>
                    </h2>
                    <p>
                      Quodsi sanctus pro eu, ne audire scripserit quo. Vel an
                      enim offendit salutandi, in eos quod omnes epicurei, ex
                      veri qualisque scriptorem mei.
                    </p>
                    <ul>
                      <li>
                        <div className='thumb'>
                          <img src='img/avatar.jpg' alt='' />
                        </div>{' '}
                        Admin
                      </li>
                      <li>
                        <i className='icon_comment_alt' />
                        20
                      </li>
                    </ul>
                  </div>
                </article>
                {/* /article */}
              </div>
              {/* /col */}
              <div className='col-md-6'>
                <article className='blog'>
                  <figure>
                    <a href='blog-post.html'>
                      <img src='img/blog-4.jpg' alt='' />
                      <div className='preview'>
                        <span>Read more</span>
                      </div>
                    </a>
                  </figure>
                  <div className='post_info'>
                    <small>Category - 20 Nov. 2017</small>
                    <h2>
                      <a href='blog-post.html'>Assueverit concludaturque quo</a>
                    </h2>
                    <p>
                      Quodsi sanctus pro eu, ne audire scripserit quo. Vel an
                      enim offendit salutandi, in eos quod omnes epicurei, ex
                      veri qualisque scriptorem mei.
                    </p>
                    <ul>
                      <li>
                        <div className='thumb'>
                          <img src='img/avatar.jpg' alt='' />
                        </div>{' '}
                        Admin
                      </li>
                      <li>
                        <i className='icon_comment_alt' />
                        20
                      </li>
                    </ul>
                  </div>
                </article>
                {/* /article */}
              </div>
              {/* /col */}
              <div className='col-md-6'>
                <article className='blog'>
                  <figure>
                    <a href='blog-post.html'>
                      <img src='img/blog-5.jpg' alt='' />
                      <div className='preview'>
                        <span>Read more</span>
                      </div>
                    </a>
                  </figure>
                  <div className='post_info'>
                    <small>Category - 20 Nov. 2017</small>
                    <h2>
                      <a href='blog-post.html'>
                        Nec nihil menandri appellantur
                      </a>
                    </h2>
                    <p>
                      Quodsi sanctus pro eu, ne audire scripserit quo. Vel an
                      enim offendit salutandi, in eos quod omnes epicurei, ex
                      veri qualisque scriptorem mei.
                    </p>
                    <ul>
                      <li>
                        <div className='thumb'>
                          <img src='img/avatar.jpg' alt='' />
                        </div>{' '}
                        Admin
                      </li>
                      <li>
                        <i className='icon_comment_alt' />
                        20
                      </li>
                    </ul>
                  </div>
                </article>
                {/* /article */}
              </div>
              {/* /col */}
              <div className='col-md-6'>
                <article className='blog'>
                  <figure>
                    <a href='blog-post.html'>
                      <img src='img/blog-6.jpg' alt='' />
                      <div className='preview'>
                        <span>Read more</span>
                      </div>
                    </a>
                  </figure>
                  <div className='post_info'>
                    <small>Category - 20 Nov. 2017</small>
                    <h2>
                      <a href='blog-post.html'>
                        Te congue everti his salutandi
                      </a>
                    </h2>
                    <p>
                      Quodsi sanctus pro eu, ne audire scripserit quo. Vel an
                      enim offendit salutandi, in eos quod omnes epicurei, ex
                      veri qualisque scriptorem mei.
                    </p>
                    <ul>
                      <li>
                        <div className='thumb'>
                          <img src='img/avatar.jpg' alt='' />
                        </div>{' '}
                        Admin
                      </li>
                      <li>
                        <i className='icon_comment_alt' />
                        20
                      </li>
                    </ul>
                  </div>
                </article>
                {/* /article */}
              </div>
              {/* /col */}
            </div>
            {/* /row */}
            <div className='pagination_fg'>
              <a href='#'>«</a>
              <a href='#' className='active'>
                1
              </a>
              <a href='#'>2</a>
              <a href='#'>3</a>
              <a href='#'>4</a>
              <a href='#'>5</a>
              <a href='#'>»</a>
            </div>
          </div>
          {/* /col */}
          <aside className='col-lg-3'>
            <div className='widget'>
              <div className='widget-title first'>
                <h4>Latest Post</h4>
              </div>
              <ul className='comments-list'>
                <li>
                  <div className='alignleft'>
                    <a href='#0'>
                      <img src='img/blog-5.jpg' alt='' />
                    </a>
                  </div>
                  <small>Category - 11.08.2016</small>
                  <h3>
                    <a href='#' title>
                      Verear qualisque ex minimum...
                    </a>
                  </h3>
                </li>
                <li>
                  <div className='alignleft'>
                    <a href='#0'>
                      <img src='img/blog-6.jpg' alt='' />
                    </a>
                  </div>
                  <small>Category - 11.08.2016</small>
                  <h3>
                    <a href='#' title>
                      Verear qualisque ex minimum...
                    </a>
                  </h3>
                </li>
                <li>
                  <div className='alignleft'>
                    <a href='#0'>
                      <img src='img/blog-4.jpg' alt='' />
                    </a>
                  </div>
                  <small>Category - 11.08.2016</small>
                  <h3>
                    <a href='#' title>
                      Verear qualisque ex minimum...
                    </a>
                  </h3>
                </li>
              </ul>
            </div>
            {/* /widget */}
            <div className='widget'>
              <div className='widget-title'>
                <h4>Categories</h4>
              </div>
              <ul className='cats'>
                <li>
                  <a href='#'>
                    Food <span>(12)</span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    Places to visit <span>(21)</span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    New Places <span>(44)</span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    Suggestions and guides <span>(31)</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* /widget */}
            <div className='widget'>
              <div className='widget-title'>
                <h4>Popular Tags</h4>
              </div>
              <div className='tags'>
                <a href='#'>Food</a>
                <a href='#'>Bars</a>
                <a href='#'>Cooktails</a>
                <a href='#'>Shops</a>
                <a href='#'>Best Offers</a>
                <a href='#'>Transports</a>
                <a href='#'>Restaurants</a>
              </div>
            </div>
            {/* /widget */}
          </aside>
          {/* /aside */}
        </div>
        {/* /row */}
      </div>
      {/* /container */}
    </main>
  );
  {
    /* /main */
  }
};

export default BlogsPage;
