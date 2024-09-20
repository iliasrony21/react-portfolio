import React from 'react';

export const About = () => {
  return (
    <div>
      <main>
        {/* Hero Start */}
        <div className="slider-area">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap">
                    <h2>About me</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">About me</a>
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero End */}

        {/* About Me Start */}
        <div className="about-me pb-top">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="about-me-img mb-30">
                  <img src="assets/img/gallery/aboutme.png" alt="About me" />
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="about-me-caption">
                  <h2>I Create Products Not Just Art.</h2>
                  <p className="pb-30">
                    Unlimited rewards. Enjoy attractive discounts, flexible payment options, global usage.
                  </p>
                  <h5>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</h5>
                  <p>
                    Unlimited rewards. Enjoy attractive discounts, flexible payment options, global usage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Me End */}

        {/* About Area Start */}
        <section className="about-area section-paddingt30">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="about-caption mb-50">
                  <h3>Designing With Passion While Exploring The World.</h3>
                  <p className="pera1">
                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                    ipsum suspendisse gravida. Risus commodo viverra.
                  </p>
                  <p>
                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <div className="about-caption2">
                  <h3>Any Type Of Query & Discussion.</h3>
                  <p>Late talk with me</p>
                  <div className="send-cv">
                    <a href="#">hire@colorlib.com</a>
                    <i className="ti-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Area End */}

        {/* Want To Work Start */}
        <section className="wantToWork-area w-padding2">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-6 col-lg-8 col-md-8">
                <div className="wantToWork-caption wantToWork-caption2">
                  <h2>Don't worry for contact, I'm available</h2>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3">
                <a href="#" className="btn btn-black f-right">
                  Contact Me Now
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Want To Work End */}

        {/* Client Comments */}
        <div className="client-comments section-paddingt30">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-8 col-md-10">
                <div className="section-tittle mb-70">
                  <h2>Some Positive Feedback That Encourages Us</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Blog Area */}
          <div className="latest-blog-area">
            <div className="container">
              <div className="row">
               
                  {/* Single Items */}
                  <div className="col-xl-4">
                    <div className="blog-wrapper border rounded">
                      <div className="blog-inner">
                        <div className="blog-top">
                          <div className="person-img">
                            <img src="assets/img/gallery/blog1.png" alt="Feedback 1" />
                          </div>
                          <div className="comment-person">
                            <h2>Bradley Erickson</h2>
                            <span>UI/UX Designer</span>
                          </div>
                        </div>
                        <p>
                          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Repeat Single Items */}
                  <div className="col-xl-4">
                    <div className="blog-wrapper border rounded">
                      <div className="blog-inner">
                        <div className="blog-top">
                          <div className="person-img">
                            <img src="assets/img/gallery/blog2.png" alt="Feedback 2" />
                          </div>
                          <div className="comment-person">
                            <h2>Bradley Erickson</h2>
                            <span>UI/UX Designer</span>
                          </div>
                        </div>
                        <p>
                          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Single Items */}
                  <div className="col-xl-4">
                    <div className="blog-wrapper border rounded">
                      <div className="blog-inner">
                        <div className="blog-top">
                          <div className="person-img">
                            <img src="assets/img/gallery/blog3.png" alt="Feedback 3" />
                          </div>
                          <div className="comment-person">
                            <h2>Bradley Erickson</h2>
                            <span>UI/UX Designer</span>
                          </div>
                        </div>
                        <p>
                          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </div>
               
              </div>
            </div>
          </div>
          {/* End Latest Blog Area */}
        </div>

        {/* Contact Info Area */}
        <div className="contact-info-area w-padding2 bg-info">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-5 col-lg-7">
                <div className="contact-caption mb-50">
                  <h3>If Not Now, When? Let’s Work Together!</h3>
                  <p>
                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                    ipsum suspendisse gravida.
                  </p>
                  <img src="assets/img/gallery/sin.png" alt="Signature" />
                </div>
              </div>
              <div className="col-xl-5 col-lg-5">
                <form action="#" className="contact-wrapper">
                  <input type="text" name="name" placeholder="Full Name" />
                  <input type="email" name="email" placeholder="Email Address" />
                  <textarea name="message" placeholder="Your Message"></textarea>
                  <button className="submit-btn2" type="submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
