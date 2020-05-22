import React from "react";

export default function MarketDetail(props) {
  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="columns is-multiline is-centered">
            {props.markets.map((market) => (
              <div className="column is-one-third">
                <div className="card  has-background-light">
                  <header className="card-header">
                    <p className="card-header-title">{market.market_id}</p>
                    <a href="/detail" className="card-header-icon" aria-label="favorite">
                      <span className="icon">
                        <i className="fas fa-heart" aria-hidden="true"></i>
                      </span>
                    </a>
                  </header>
                  <div className="card-image">
                    <figure className="image is-3by1">
                      <img
                        src="http://placegoat.com/300/100" alt="a goat"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="list is-hoverable">
                      <p className="list-item">
                        <h3>Market</h3>
                      </p>
                      <p className="list-item">
                        
                      </p>
                      <p className="list-item">
                      </p>
                      <p className="list-item">
                        Details - Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quos optio deserunt sit soluta
                        reprehenderit nisi beatae quidem sint officiis iure
                        consequuntur minima vero at iusto error, odit omnis quo
                        tempora.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
