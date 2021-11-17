import React, { useRef } from "react";
// importing emailjs
import emailjs, { init } from "emailjs-com";
// initalize the user
init("user_BOZUySatPuiuYCYuzaVro");

const Contact = () => {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ntbd4ya",
        "template_nmnbql5",
        e.target,
        "user_BOZUySatPuiuYCYuzaVro"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    //   resetting the form after it's being submit
    e.target.reset();
  }
  return (
    <div>
      <div className="container">
        <form ref={form} onSubmit={sendEmail}>
          <div className="col-8 form-group mx-auto ">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <textarea
              className="form-control"
              id=""
              cols="30"
              rows="8"
              placeholder="Your Message"
              name="message"
            ></textarea>
          </div>
          <div className="col-8 pt-3 mx-auto">
            <input
              type="submit"
              className="btn-get-started"
              value="Send Message"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
