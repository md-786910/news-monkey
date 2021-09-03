import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

// random news
const query = "mc";
const page = 1;

function Home(query, page) {
  const api2 = "4898630f183f4b9e90de2ebbdc18063d";
  const api = "290cdf1c8a5e4390b568d79522792078";
  const api3 = "bbd54ff2d2c147d5ab352a0d6a0675f7";
  const [news, setNews] = useState([]);
  const [isSpin, setSpin] = useState(true);
  const [pages, setPage] = useState(1);
  let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${api2}&pageSize=38&page=${pages}`;

  function getData() {
    axios({
      method: "get",
      url: url,
      responseType: "json",
    }).then(function (response) {
      setSpin(false);
      setNews(response.data.articles);
    });
  }

  useEffect(() => {
    getData();
  }, [page]);

  // set infinite scroll
  const { clientHeight, scrollHeight, scrollTop } = document.documentElement;
  window.addEventListener("scroll", () => {
    setPage(page + 1);
  });

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
              <img alt="newsimage" src={elem.urlToImage} class="img-fluid" />
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

export default Home;
