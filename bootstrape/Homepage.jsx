import React from 'react'

export default function Homepage() {
  return (
   <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary dar bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Darshan</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  {/* <li><a  class="dropdown-divider"></li> */}
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            
            <form class="d-flex" role="search">
              {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
              <input type="text" class="form-control me-2" placeholder="Search" name="" id="" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/* Home */}

    <div className="home-pagr">
        <div className="home-text">
            <h2>Decorate your Home...</h2>
            <h5>With DRN pvt ltd</h5>
            <button class="butt">Explore</button>
        </div>
        <div className="home-img">

        </div>
    </div>


    <div className="shop-section row">
     <div className="product col col-12 col-md-4 col-sm-6 p-2">
       <div className="inner_product h-100 w-100">
         <div className="product-img img-1"></div>
         <h2>Mini sofa</h2>
         <h6>Beast of perfomence</h6>
         <button>Buy Now</button>
       </div>
     </div>
     <div className="product col col-12 col-md-4 col-sm-6 p-2">
     <div className="inner_product h-100 w-100">
     <div className="product-img img-2"></div>
         <h2>Large sofa</h2>
         <h6>Inhanced camera provider</h6>
         <button>Buy Now</button>
       </div>
     </div>
     <div className="product col p-2">
     <div className="inner_product h-100 w-100 ">
     <div className="product-img img-3"></div>
         <h2>Small Sofa</h2>
         <h6>Your on Top Allrounder</h6>
         <button>Buy Now</button>
      </div>
     </div>
  </div>
  <div className="footer">
    <div className="footer_head">
      <h2>Thanks for Visit</h2>
    </div>
    <div className="main-footer row">
      <div className="footer_cont  col col-12 col-md-4 col-sm-6">
          <h2>Branches</h2>
          <span>America</span>
          <span>Malesia</span>
          <span>India</span>
          <span>Bulistan</span>
          <span>Dubai</span>
      </div>
      <div className="footer_cont  col col-12 col-md-4 col-sm-6">
      <h2>Products</h2>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="footer_cont col ">
        <h2>Services</h2>
          <span>Home</span>
          <span>About</span>
          <span>Help</span>
          <span>Contact</span>
        </div>
    </div>
    <span className="copyright">
    © 1996-2024, Amazon.com, Inc. or its affiliates
    </span>
  </div>
 
    </>
  )
}