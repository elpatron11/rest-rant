const React = require('react')
const Def = require('./default')



function home () {
  return (
    <Def>
        <main>
            <h1>HOME</h1>
            <div className='home'>
              <img src="/images/chrisrest.jpg" alt="restaurant"></img>
            </div>
        </main>
        <a href="/places" className='button'>
    
  <button className="btn btn-primary">Places Page</button>
</a>

    </Def>
  )
}
module.exports = home