import React from 'react';
import NavBar from '../NavBar';
import FrenchImg from "../../img/french.png"

const Profile = () => {
  return (
    <div>
      <NavBar/>
      <div className="bottomshadow" style={{ backgroundColor: '#A7D397' }}>
        <div className="container py-5">
          <div>
            <div>
              <div className="row d-flex align-items-center">
                <div className="col col-md-9 col-lg-7 col-xl-5">
                  <div className="card" style={{ borderRadius: '15px' }}>
                    <div className="card-body p-4 justify-content-center">
                      <h3>Profile</h3>
                      <div className="d-flex text-black">
                        <div className="flex-shrink-0">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                            alt="Generic placeholder image"
                            className="img-fluid"
                            style={{ width: '180px', borderRadius: '10px', paddingRight: '5px' }}
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="mb-1">Danny McLoan</h5>
                          <p className="mb-2 pb-1" style={{ color: '#2b2a2a' }}>
                            Student
                          </p>
                          <div className="rounded-3 p-2 mb-2" style={{ backgroundColor: '#efefef' }}>
                            <div>
                              <p className="small text-muted mb-1">Registered Course</p>
                              <p className="mb-0">French for beginners</p>
                            </div>
                            <div className="px-3">
                              <p className="small text-muted mb-1">Quiz Score:</p>
                              <p className="mb-0">5</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="col-12 mb-5">
              <h2 className="text-uppercase font-weight-bold">Courses</h2>
            </div>
            <div className="col-12">
              <div className="items">
                <div className="card" style={{ width: '300px', display: 'inline-block' }}>
                  <img
                    className="img-fluid card-img-top"
                    src={FrenchImg}
                    style={{ height: '200px' }}
                  />
                  <div className="card-body">
                    <h5 className="mb-3 text-success font-weight-bold">French for beginners</h5>
                    <p className="mb-0">Learn French even if you are a beginner till the advance</p>
                  </div>
                </div>
                {/* Add more courses here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
