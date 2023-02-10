import React from "react";

export default function ProcesFlow() {
  return (
    <div className=" mt-10">
      <div className="mb-12 space-y-2 text-center">
        <h2 className="text-2xl text-blue-900 md:text-4xl text-center">
          How it Works
        </h2>
        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-blue-900 rounded-full" />
          <span className="inline-block w-3 h-1 ml-1 bg-blue-900 rounded-full" />
          <span className="inline-block w-1 h-1 ml-1 bg-blue-900 rounded-full" />
        </div>
      </div>
      <div className=" px-8">
        <div className="container-3">
          <div className="card">
            <div className="title">Step</div>
            <div className="circle">1</div>
            <div className="content">
              <h3 className=" text-blue-900 font-bold m-2">SIGN UP</h3>
              <p>
                HTML 5 is a software solution stack that defines the properties
                and behaviors of web page content by implementing a markup based
                pattern to it.
              </p>
              <div className="icon">
                <i className="fab fa-html5" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="title">Step</div>
            <div className="circle">2</div>
            <div className="content">
              <h3 className=" text-blue-900 font-bold m-2">UPLOAD PROFILE</h3>
              <p>
                Cascading Style Sheets (CSS) is a style sheet language used for
                describing the look and formatting of a document written in a
                markup language.
              </p>
              <div className="icon">
                <i className="fab fa-css3-alt" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="title">Step</div>
            <div className="circle">3</div>
            <div className="content">
              <h3 className=" text-blue-900 font-bold m-2">
                CLIENT FLOAT REQUIRMENTS
              </h3>
              <p>
                JavaScript, often abbreviated as JS, is a high-level,
                interpreted scripting language that conforms to the ECMAScript
                specification.
              </p>
              <div className="icon">
                <i className="fab fa-js-square" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="title">Step</div>
            <div className="circle">4</div>
            <div className="content">
              <h3 className=" text-blue-900 font-bold m-2">TAKE INTERVIEW</h3>
              <p>
                PHP: Hypertext Preprocessor is a general-purpose programming
                language originally designed for web development.
              </p>
              <div className="icon">
                <i className="fab fa-php" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="title">Step</div>
            <div className="circle">5</div>
            <div className="content">
              <h3 className=" text-blue-900 font-bold m-2">GET PAID</h3>
              <p>
                MySQL is an open-source relational database management system.
                Its name is a combination of "My", the name of co-founder
                daughter.
              </p>
              <div className="icon">
                <i className="fas fa-database" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
