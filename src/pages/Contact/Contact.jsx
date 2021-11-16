import React from "react";

const Contact = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                  />
                </div>
              </div>
              {/* phone number form input */}
              <div className="form-group">
                <label for="exampleFormControlTextarea3"></label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlTextarea3"
                  placeholder="Phone Number"
                ></input>
              </div>
              {/* email address form input */}
              <div className="form-group">
                <label for="exampleFormControlInput1"></label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email Address"
                />
              </div>
              {/* Program inquiring about */}
              <div className="form-group">
                <label for="exampleFormControlTextarea1"></label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              {/* submit form button */}
              <div className="col-12">
                  <button className="btn btn-outline-primary" type="submit">
                      Submit
                  </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
