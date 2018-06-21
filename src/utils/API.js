import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=285f60c591b149798efb85d7cb467bdb";

export default {
  search: function(query) {
    console.log(query);
    let topic = `&q=${query.topic}`;

    //the following if statements make inputting time ranges optional
    if(query.startYear !== ""){
      topic += `&begin_date=${query.startYear}0101'`
    }
    if(query.endYear !== "") {
      topic += `&end_date=${query.endYear}1231`
    }

    return axios.get(BASEURL+topic);
  }
};