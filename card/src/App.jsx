import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">My App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a  className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>



      <h1 className="text-center text-danger text-capitalize my-4">
        Welcome To Our Website
      </h1>
      <div className="container">
        <div className="row">
          {/* First Row */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." height="200px"/>
              <div className="card-body p-3">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://picsum.photos/200/301" className="card-img-top" alt="..." height="200px"/>
              <div className="card-body p-3">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://picsum.photos/200/302" className="card-img-top" alt="..." height="200px"/>
              <div className="card-body p-3">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Second Row */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://picsum.photos/200/303" className="card-img-top" alt="..." height="200px"/>
              <div className="card-body p-3">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://picsum.photos/200/304" className="card-img-top" alt="..." height="200px"/>
              <div className="card-body p-3">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://picsum.photos/200/305" className="card-img-top" alt="..." height="200px"/>
              <div className="card-body p-3">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Third Row */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://picsum.photos/200/306" className="card-img-top" alt="..." height="200px"/>
              <div className="card-body p-3">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://picsum.photos/200/307" className="card-img-top" alt="..." height="200px"/>
              <div className="card-body p-3">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://picsum.photos/200/308" className="card-img-top" alt="..." height="200px"/>
              <div className="card-body p-3">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Fourth Row */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://picsum.photos/200/309" className="card-img-top" alt="..." height="200px"/>
              <div className="card-body p-3">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://picsum.photos/200/310" className="card-img-top" alt="..." height="200px"/>
              <div className="card-body p-3">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://picsum.photos/200/311" className="card-img-top" alt="..." height="200px"/>
              <div className="card-body p-3">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;




// function App() {
//   return (
//     <>
//       <h1 className="text-center text-danger text-capitalize margin-white">
//         Welcome back
//       </h1>
//       <div className="container">
//         <div className="row">
//           {/* First Row */}
//           <div className="col-md-4">
//             <div className="card">
//               <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." height="200px"/>
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card">
//               <img src="https://picsum.photos/200/301" className="card-img-top" alt="..." height="200px"/>
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card">
//               <img src="https://picsum.photos/200/302" className="card-img-top" alt="..." height="200px"/>
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           {/* Second Row */}
//           <div className="col-md-4">
//             <div className="card">
//               <img src="https://picsum.photos/200/303" className="card-img-top" alt="..." height="200px"/>
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card">
//               <img src="https://picsum.photos/200/304" className="card-img-top" alt="..." height="200px"/>
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card">
//               <img src="https://picsum.photos/200/305" className="card-img-top" alt="..." height="200px"/>
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           {/* Third Row */}
//           <div className="col-md-4">
//             <div className="card">
//               <img src="https://picsum.photos/200/306" className="card-img-top" alt="..." height="200px"/>
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card">
//               <img src="https://picsum.photos/200/307" className="card-img-top" alt="..." height="200px"/>
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card">
//               <img src="https://picsum.photos/200/308" className="card-img-top" alt="..." height="200px"/>
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           {/* Fourth Row */}
//           <div className="col-md-4">
//             <div className="card">
//               <img src="https://picsum.photos/200/309" className="card-img-top" alt="..." height="200px"/>
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card">
//               <img src="https://picsum.photos/200/310" className="card-img-top" alt="..." height="200px"/>
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card">
//               <img src="https://picsum.photos/200/311" className="card-img-top" alt="..." height="200px"/>
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </>
//   );
// }

// export default App;



// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <>
//       <h1 className="text-center text-danger text-capitalize my-5">
//         Welcome back
//       </h1>
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <div className="card">
//               <img src="https://picsum.photos/200/305" className="card-img-top" alt="..." height="200px" />
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card">
//               <img src="https://picsum.photos/200/306" className="card-img-top" alt="..." height="200px"/>
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card">
//               <img src="https://picsum.photos/200/302" className="card-img-top" alt="..." height="200px"/>
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <>
//       <h1 className="text-center text-danger text-captalize margin-white>
//         Welcome back
//       <h1/>
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <div className="card">
//               <img src="https://picsum.photos/200/305" className="card-img-top" alt="..." height='200px'/>
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card">
//               <img src="https://picsum.photos/200/306" className="card-img-top" alt="..." height='200px'/>
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card">
//               <img src="https://picsum.photos/200/302" className="card-img-top" alt="..." height='200px'/>
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

// const textToSpeak="hello there";
// const utterance=new SpeechSynthesisUtterance(textToSpeak);
// window.speechSynthesis.speak(utterance);



// import React from 'react'
// import './App.css'

// function App() {
 

//   return (
//     <>
//     <h1>
//       Welcome back
//     </h1>
//     <div className="container">
//   <div className="row">
//     <div className="col">
//       <div class="card" >
//   <img src="..." class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//     <div className="col">
//       <div class="card" >
//   <img src="..." class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//     <div className="col">
//       <div class="card" >
//   <img src="..." class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//   </div>
// </div>
//     </>
//   )
// }

// export default App


// const textToSpeak="hello there"
// const utterance=new SpeechSynthesisUtterance(textToSpeak);
// window.speechSynthesis.speak(utterance);