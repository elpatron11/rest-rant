const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
    <h1>HOME</h1>
    <div className='home'>
      <img height="300" width="500" src="/images/seafoodrest.jpg" alt="seafoodrest" display="flex"  />
      <div>
        Photo by <a href="AUTHOR_LINK">Raul</a> 
      </div>
    </div>
    <a href="/places" className='button'>
        <button className="btn btn-primary">Places Page</button>
    </a>
</main>
        </Def>
    )
}

module.exports = home