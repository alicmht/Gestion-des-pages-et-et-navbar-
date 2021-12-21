import React from 'react'

const  Tutorial=()=>{

  return(
      <div className='container '>
          <h1>Tutoriels</h1>
          <div className="card" Style="width: 18rem;" >
    <img src="/logo192.png" className="card-img-top" alt="Pas Images "/>
    <div className="card-body">
    <h5 className="card-title">Les Nouvelles</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Moree</a>
  </div>
    </div >
    <div d-inline p-1 bg-ffffff text-white flex>
    <div className="card" Style="width: 30rem;">
    <img src="/logo192.png" className="card-img-top" alt="Pas Images "/>
    <div className="card-body">
    <h5 className="card-title">Les Nouvelles</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Moree</a>
  </div>
    </div>
    </div>
      </div>
  )

}
export default Tutorial;