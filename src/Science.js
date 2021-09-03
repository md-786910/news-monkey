import React, { useState, useEffect } from "react";
import axios from "axios";
//  news
function Science({ value }) {
  const api = "290cdf1c8a5e4390b568d79522792078";
  const [isSpin, setSpin] = useState(true);
  const [news, setNews] = useState([]);
  let url = ` https://newsapi.org/v2/everything?q=${value}&apiKey=${api}&pageSize=100&page=1`;

  useEffect(() => {
    axios({
      method: "get",
      url: url,
      responseType: "json",
    }).then(function (response) {
      setSpin(false);
      setNews(response.data.articles);
    });
  }, []);

  // set infinite scroll
  return (
    <div className="home">
      {/* spinner */}
      {isSpin ? (
        <div class="text-center">
          <div class="spinner-border d-flex justify-center" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* end */}
      {news.map((elem, index) => {
        return (
          <div class="card">
            <div
              class="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              <img alt="news" src={elem.urlToImage} class="img-fluid" />
              <a href={elem.url}>
                <div
                  class="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </div>
            <div class="card-body">
              <h5 class="card-title"> NEWS</h5>
              <p class="card-text">{elem.title}</p>
              <a href={elem.url} class="btn btn-primary">
                description
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Science;
