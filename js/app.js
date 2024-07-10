const url = "https://api.jsonsilo.com/b94f1ceb-2057-4c8e-8ac4-156c2f6aaf58";
const headers = {
  "X-SILO-KEY": "0KVu0jqnzljiRUFtC8WWSvavcMsFGD45590AIZKoeh",
  "Content-Type": "application/json",
};

axios
  .get(url, { headers: headers })
  .then((response) => {
    console.log(response.data);
    for (let index = 0; index < response.data.length; index++) {
      var content =
        `<div class="col-sm-6">
                <div class="card mb-3 card-custom-horizontal-2 p-2" >
                  <div class="row g-0">
                  <div class="col-md-2 d-flex flex-wrap align-items-center">
                  <img
                    src="`+response.data[index].project_logo+`"
                    class="img-fluid rounded-start p-4" 
                    alt="..."
                  />
                </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">` +
        response.data[index].project_name +
        `</h5>
                        <p class="card-text">
                          ` +
        response.data[index].project_description +
        `
                        </p>
                        <p class="card-text">
                        `;
      for (
        let index_badge = 0;
        index_badge < response.data[index].project_badges.length;
        index_badge++
      ) {
        content +=
          `<span class="badge rounded-pill bg-badges-custom m-1">` +
          response.data[index].project_badges[index_badge].badge_name +
          `</span>`;
      }
      content += `</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;

      if (response.data[index].project_platform == "website") {
        $(".website").append(content);
      }

      if (response.data[index].project_platform == "android") {
        $(".android").append(content);
      }
    }
  })
  .catch((error) => {
    console.error("There was an error with the request:", error);
  });
