import React from "react";

function Footer() {
  return (
    <footer className='bg-light border-top mt-3 position-sticky bottom-0' style={{ backgroundColor: '#ffc0cb', boxShadow: '0px -4px 8px rgba(0, 0, 0, 0.1)' }}>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-2">
          <div className="col-md-4 d-flex align-items-center">
            <div className="mb-md-0 text-body-secondary text-wrap fw-medium" style={{ color: 'pink' }}>©2024 Halk Plajları by Hanife Ekinci</div>
          </div>
          <div className='col-md-8 d-flex justify-content-end'>
            <ul className="nav col justify-content-end align-items-center list-unstyled d-flex fs-5">
              <li className="ms-3 fs-6" style={{ color: '#ff1493' }}>Bizi Takip Edin: </li> 
              <li className="ms-3"><a className="text-body-secondary" href="#"><i className="fab fa-twitter" style={{ color: '#ff1493' }}></i></a></li>
              <li className="ms-3"><a className="text-body-secondary" href="#"><i className="fab fa-instagram" style={{ color: '#ff1493' }}></i></a></li>
              <li className="ms-3"><a className="text-body-secondary" href="#"><i className="fab fa-linkedin" style={{ color: '#ff1493' }}></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
