//This is similar to API.js but it is built to look up articles based on the _id.
//This is being used for the saved articles where only the _id is being saved into the db.

import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=285f60c591b149798efb85d7cb467bdb";

export default {
  search: function(query) {
    console.log(query);
    let _id = `&_id=${query._id}`;

    return axios.get(BASEURL+_id);
  }
};