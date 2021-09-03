import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const api2 = "4898630f183f4b9e90de2ebbdc18063d";
  const api = "290cdf1c8a5e4390b568d79522792078";
  const api3 = "bbd54ff2d2c147d5ab352a0d6a0675f7";
  const [text, setText] = useState("");

  const [news, setNews] = useState([]);
  const [isSpin, setSpin] = useState(false);
  const [page, setPage] = useState(1);

  function dataSet(newsVal) {
    let url = ` https://newsapi.org/v2/everything?q=${newsVal}&apiKey=${api}&pageSize=100&page=${page}`;
    axios({
      method: "get",
      url: url,
      responseType: "json",
    }).then(function (response) {
      setSpin(false);
      setNews(response.data.articles);
      // setSpin(false);
    });
  }
  const dataSend = () => {
    setSpin(true);
    dataSet(text);
  };

  // enter key
  document.body.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      setSpin(true);
      dataSet(text);
    }
  });

  return (
    <div className="fluid-container">
      <div className="search__bar">
        <div class="form-outline">
          <input
            type="text"
            id="form1"
            value={text}
            class="form-control "
            onChange={(e) => setText(e.target.value)}
          />
          <label class="form-label" for="form1">
            Search news
          </label>
        </div>

        <div className="btnSend" onClick={dataSend}>
          <a
            class="btn btn-primary"
            style={{ backgroundColor: "#55acee" }}
            href="#!"
            role="button"
          >
            <i class="fa fa-search me-2"></i>Search
          </a>
        </div>
      </div>
      {/* list news */}
      <div className="data__container">
        {/* spinner */}
        {isSpin ? (
          <div class="text-center spinner__search">
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
    </div>
  );
}

export default Search;
