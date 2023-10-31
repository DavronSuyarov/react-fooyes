import React from 'react';

const HelpPage = () => {
  return (
    <main>
      <div
        className='hero_single inner_pages background-image'
        data-background='url(img/hero_general_2.jpg)'
      >
        <div className='opacity-mask' data-opacity-mask='rgba(0, 0, 0, 0.5)'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-xl-8 col-lg-10 col-md-8'>
                <h1>Help and support</h1>
                <p>Search questions or useful articles</p>
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
        </div>
        <div className='wave hero gray' />
      </div>
      {/* /hero_single */}
      <div className='bg_gray'>
        <div className='container margin_30_40'>
          <div className='main_title center'>
            <span>
              <em />
            </span>
            <h2>Select a topic</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <a className='box_topic' href='#0'>
                <span>
                  <i className='icon_wallet' />
                </span>
                <h3>Payments</h3>
                <p>
                  Id mea congue dictas, nec et summo mazim impedit. Vim te
                  audiam impetus interpretaris.
                </p>
              </a>
            </div>
            <div className='col-lg-4 col-md-6'>
              <a className='box_topic' href='#0'>
                <i className='icon_cloud-upload_alt' />
                <h3>Submission</h3>
                <p>
                  Id mea congue dictas, nec et summo mazim impedit. Vim te
                  audiam impetus interpretaris.
                </p>
              </a>
            </div>
            <div className='col-lg-4 col-md-6'>
              <a className='box_topic' href='#0'>
                <i className='icon_lifesaver' />
                <h3>General help</h3>
                <p>
                  Id mea congue dictas, nec et summo mazim impedit. Vim te
                  audiam impetus interpretaris.
                </p>
              </a>
            </div>
            <div className='col-lg-4 col-md-6'>
              <a className='box_topic' href='#0'>
                <i className='icon_globe-2' />
                <h3>International</h3>
                <p>
                  Id mea congue dictas, nec et summo mazim impedit. Vim te
                  audiam impetus interpretaris.
                </p>
              </a>
            </div>
            <div className='col-lg-4 col-md-6'>
              <a className='box_topic' href='#0'>
                <i className='icon_document_alt' />
                <h3>Cancellation</h3>
                <p>
                  Id mea congue dictas, nec et summo mazim impedit. Vim te
                  audiam impetus interpretaris.
                </p>
              </a>
            </div>
            <div className='col-lg-4 col-md-6'>
              <a className='box_topic' href='#0'>
                <i className='icon_comment_alt' />
                <h3>Reviews</h3>
                <p>
                  Id mea congue dictas, nec et summo mazim impedit. Vim te
                  audiam impetus interpretaris.
                </p>
              </a>
            </div>
          </div>
        </div>
        {/* /container */}
      </div>
      {/* /bg_gray */}
      <div className='container margin_60_40'>
        <div className='main_title version_2'>
          <span>
            <em />
          </span>
          <h2>Popular articles</h2>
          <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
        </div>
        <div className='list_articles clearfix'>
          <ul>
            <li>
              <a href='#0'>
                <i className='icon_documents_alt' />
                Et dicit vidisse epicurei pri
              </a>
            </li>
            <li>
              <a href='#0'>
                <i className='icon_documents_alt' />
                Ad sit virtute rationibus efficiantur
              </a>
            </li>
            <li>
              <a href='#0'>
                <i className='icon_documents_alt' />
                Partem vocibus omittam pri ne
              </a>
            </li>
            <li>
              <a href='#0'>
                <i className='icon_documents_alt' />
                Case debet appareat duo cu
              </a>
            </li>
            <li>
              <a href='#0'>
                <i className='icon_documents_alt' />
                Impedit torquatos quo in
              </a>
            </li>
            <li>
              <a href='#0'>
                <i className='icon_documents_alt' />
                Nec omnis alienum no
              </a>
            </li>
            <li>
              <a href='#0'>
                <i className='icon_documents_alt' />
                Quo eu soleat facilisi menandri
              </a>
            </li>
            <li>
              <a href='#0'>
                <i className='icon_documents_alt' />
                Et dicit vidisse epicurei pri
              </a>
            </li>
          </ul>
        </div>
        {/* /list_articles */}
      </div>
      {/* /container */}
    </main>
  );
  {
    /* /main */
  }
};

export default HelpPage;
