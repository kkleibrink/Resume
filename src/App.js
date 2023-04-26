import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container">
          <header className="text-center my-5">
        <h1>Kyler Kleibrink</h1>
        <p>Calgary, AB</p>
        <p>Email: kkleibrink@outlook.com</p>
        <p>Phone: +1 403 869 3904</p>
      </header>

      <section className="my-5">
        <h2>Summary</h2>
        <p>Mechanical Engineering graduate with a strong background in software development, automation, and 3D modeling. Highly adaptable, hardworking, and dedicated to improving processes and tackling challenges. Demonstrated experience in Smart3D administration, project coordination, and operations engineering.</p>
      </section>

      <section className="my-5">
        <h2>Education</h2>
        <p><strong>Bachelor's Degree in Mechanical Engineering</strong></p>
        <p>University of Calgary, Calgary, AB</p>
        <p>September 2013 - April 2018</p>
      </section>

      <section className="my-5">
        <h2>Work Experience</h2>
        <div className="card mb-3">
          <div className="card-header">
            Smart3D Automation Specialist and Administrator
          </div>
          <div className="card-body">
            <h5 className="card-title">Canadian Natural, Calgary, AB</h5>
            <p className="card-text">August 2020 - Present</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Develop and maintain custom automation commands for Smart3D</li>
              <li className="list-group-item">Create and maintain custom pipe supports, symbols, and user interfaces</li>
              <li className="list-group-item">Perform database and object manipulation commands</li>
              <li className="list-group-item">Configure Smart3D for stress isometric exports to Caesar II stress modeling</li>
              <li className="list-group-item">Provide daily administration duties, including support, training, and job instructions</li>
              <li className="list-group-item">Develop custom commands and programs for process automation</li>
              <li className="list-group-item">Interface with Hexagon to address key software issues</li>
            </ul>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-header">
            Summer Student (Drafting)
          </div>
          <div className="card-body">
            <h5 className="card-title">Canadian Natural, Calgary, AB</h5>
            <p className="card-text">June 2018 - May 2019</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Placed thickness management locations (TML) using Smart Plant and Plant Design System</li>
              <li className="list-group-item">Coordinated and instructed offshore drafting team on TML placement</li>
              <li className="list-group-item">Created instruction manuals</li>
            </ul>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-header">
            Operations Engineering Intern
          </div>
          <div className="card-body">
          <h5 className="card-title">Canadian General Electric, Calgary, AB</h5>
            <p className="card-text">October 2016 - December 2017</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Collaborated with Applications Engineer and Operations</li>
              <li className="list-group-item">Designed and innovated 3D parts for Pipeline Pigs</li>
              <li className="list-group-item">Gained hands-on experience in the shop and field</li>
              <li className="list-group-item">Assisted in executing pigging runs</li>
              <li className="list-group-item">Developed engineering drawing skills (creating and reading)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="my-5">
        <h2>Skills</h2>
        <div className="row">
          <div className="col-md-4">
            <h5>Programming:</h5>
            <li>.NET Framework</li>
              <li>C#</li>
              <li>C/C++</li>
              <li>Python</li>
              <li>Javascript</li>
              <li>SQL</li>
              <li>Visual Basic</li>
              <li>XML</li>
              <li>MERN Stack (MongoDB, React, Node.js) </li>

          </div>
          <div className="col-md-4">
            <h5>Software:</h5>
            <li>Microsoft SQL Server</li>
              <li>MySQL</li>
              <li>Visual Studio</li>
              <li>Autodesk Inventor</li>
              <li>Visual Studio Code</li>
              
          </div>
          <div className="col-md-4">
            <h5>Engineering:</h5>
            <li>Mechanical engineering</li>
              <li>Drafting</li>
              <li>Software development</li>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="row">
          <div className="col-md-4">
            <h2>Languages</h2>
            <li>English - Advanced</li>
          </div>
          <div className="col-md-8">
            <h2>My Personal Projects</h2>
            <div className="card">
              <div className="card-header">
                <a href="https://travelplans.io" target="_blank" rel="noopener noreferrer">
                  TravelPlans.io
                </a>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Showcases a simple React website with a frontend and backend that is accessing OpenAI and displaying a travel plan for the destination, dates, and any additional context provided. My plan is to build on this site to add up-to-date destination information and booking capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



export default App;
