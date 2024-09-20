import React from 'react';

export const Services = () => {
  return (
    <div>
      <main>
        {/* Header Start */}
        <div className="slider-area">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap">
                    <h2>My Services</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">My Services</a>
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}
        {/* Categories Area Start */}
        <section className="categories-area categories-area2 section-padding30">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <span className="flaticon-pen"></span>
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="services.html">UI/UX Design</a>
                    </h5>
                    <p>
                      Free resource that will help understand the design process and improve quality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <span className="flaticon-speaker"></span>
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="services.html">Digital Marketing</a>
                    </h5>
                    <p>
                      Free resource that will help understand the design process and improve quality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <span className="flaticon-portfolio"></span>
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="services.html">Website Design</a>
                    </h5>
                    <p>
                      Free resource that will help understand the design process and improve quality.
                    </p>
                  </div>
                </div>
              </div>
              {/* Duplicate content removed for better clarity */}
            </div>
          </div>
        </section>
        {/* Categories Area End */}
        {/* Want To Work Start */}
        <section className="wantToWork-area w-padding2">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-6 col-lg-8 col-md-8">
                <div className="wantToWork-caption wantToWork-caption2">
                  <h2>Don't worry, I’m available for contact</h2>
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
        {/* Contact Info Start */}
        <div
          className="contact-info-area w-padding2"
          style={{ backgroundImage: 'url(assets/img/gallery/section_bg04.jpg)' }}
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-5 col-lg-7">
                <div className="contact-caption mb-50">
                  <h3>If Not Now, When? Let’s Work Together!</h3>
                  <p>
                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <img src="assets/img/gallery/sin.png" alt="" />
                </div>
              </div>
              <div className="col-xl-5 col-lg-5">
                <form action="#" className="contact-wrapper">
                  <input type="text" name="name" placeholder="Full Name" />
                  <input type="email" name="email" placeholder="Email Address" />
                  <textarea name="message" id="message" placeholder="Your Message" />
                  <button className="submit-btn2" type="submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Info End */}
      </main>
    </div>
  );
};
