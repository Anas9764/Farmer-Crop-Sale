import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, fs } from "../Config/Config";

// import firebaseDB from "./firebase";
import "./App.scss";

export const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      toast.error("Please provide value in each input field");
    } else {
      // fs.child("contacts").push(state);
      // setState({ name: "", email: "", subject: "", message: "" });
      // toast.success("Form Submitted Successfully");

      fs.collection("contacts")
        .add({
          name,
          email,
          subject,
          message,
        })
        .then(() => {
          alert("are you sure to submit");
          toast.success("Form Submitted Successfully");
        }, 3000);
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <section className="contact-section">
      <div className="container">
        <ToastContainer position="top-center" />
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="contact-wrap w-100 p-lg-5 p-4">
                    <h3 className="mb-4">Send us a message</h3>
                    <form
                      id="contactForm"
                      className="contactForm"
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Name"
                              onChange={handleInputChange}
                              value={name}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                              onChange={handleInputChange}
                              value={email}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              placeholder="Subject"
                              onChange={handleInputChange}
                              value={subject}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              type="text"
                              className="form-control"
                              name="message"
                              placeholder="Message"
                              cols="30"
                              rows="6"
                              onChange={handleInputChange}
                              value={message}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              className="btn btn-primary"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="info-wrap w-100 p-lg-5 p-4 img">
                    <h3>Contact us</h3>
                    <p className="mb-4">
                      We're open for any suggestion or just to have a chat
                    </p>
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Address:</span> 198 West 21th Street, Suite 721
                          New York NY 10016
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Phone:</span>
                          <a href="tel://123456789">+1235 2355 98</a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Email:</span>
                          <a href="mailto:info@yoursite.com">
                            info@yoursite.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Website:</span>
                          <a href="#">yoursite.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// <!--Section: Contact v.2-->
// <section class="mb-4">

//     <!--Section heading-->
//     <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
//     <!--Section description-->
//     <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
//         a matter of hours to help you.</p>

//     <div class="row">

//         <!--Grid column-->
//         <div class="col-md-9 mb-md-0 mb-5">
//             <form id="contact-form" name="contact-form" action="mail.php" method="POST">

//                 <!--Grid row-->
//                 <div class="row">

//                     <!--Grid column-->
//                     <div class="col-md-6">
//                         <div class="md-form mb-0">
//                             <input type="text" id="name" name="name" class="form-control">
//                             <label for="name" class="">Your name</label>
//                         </div>
//                     </div>
//                     <!--Grid column-->

//                     <!--Grid column-->
//                     <div class="col-md-6">
//                         <div class="md-form mb-0">
//                             <input type="text" id="email" name="email" class="form-control">
//                             <label for="email" class="">Your email</label>
//                         </div>
//                     </div>
//                     <!--Grid column-->

//                 </div>
//                 <!--Grid row-->

//                 <!--Grid row-->
//                 <div class="row">
//                     <div class="col-md-12">
//                         <div class="md-form mb-0">
//                             <input type="text" id="subject" name="subject" class="form-control">
//                             <label for="subject" class="">Subject</label>
//                         </div>
//                     </div>
//                 </div>
//                 <!--Grid row-->

//                 <!--Grid row-->
//                 <div class="row">

//                     <!--Grid column-->
//                     <div class="col-md-12">

//                         <div class="md-form">
//                             <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
//                             <label for="message">Your message</label>
//                         </div>

//                     </div>
//                 </div>
//                 <!--Grid row-->

//             </form>

//             <div class="text-center text-md-left">
//                 <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
//             </div>
//             <div class="status"></div>
//         </div>
//         <!--Grid column-->

//         <!--Grid column-->
//         <div class="col-md-3 text-center">
//             <ul class="list-unstyled mb-0">
//                 <li><i class="fas fa-map-marker-alt fa-2x"></i>
//                     <p>San Francisco, CA 94126, USA</p>
//                 </li>

//                 <li><i class="fas fa-phone mt-4 fa-2x"></i>
//                     <p>+ 01 234 567 89</p>
//                 </li>

//                 <li><i class="fas fa-envelope mt-4 fa-2x"></i>
//                     <p>contact@mdbootstrap.com</p>
//                 </li>
//             </ul>
//         </div>
//         <!--Grid column-->

//     </div>

// </section>
// <!--Section: Contact v.2-->
