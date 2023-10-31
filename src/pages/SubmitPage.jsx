import React from 'react';

const SubmitPage = () => {
  return (
    <main className='bg_gray'>
      <div id='error_page'>
        <div className='container'>
          <div className='row justify-content-center text-center'>
            <div className='col-xl-7 col-lg-9'>
              <figure>
                <img
                  src='img/404.svg'
                  alt=''
                  className='img-fluid'
                  width={550}
                  height={234}
                />
              </figure>
              <p>
                We're sorry, but the page you were looking for doesn't exist.
              </p>
              <form method='post' action='grid-listing-filterscol.html'>
                <div className='row g-0 custom-search-input'>
                  <div className='col-lg-10'>
                    <div className='form-group'>
                      <input
                        className='form-control no_border_r'
                        type='text'
                        placeholder='What are you looking for?'
                      />
                    </div>
                  </div>
                  <div className='col-lg-2'>
                    <button className='btn_1 gradient' type='submit'>
                      Search
                    </button>
                  </div>
                </div>
                {/* /row */}
              </form>
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
      {/* /error */}
    </main>
  );
  {
    /* /main */
  }
};

export default SubmitPage;
