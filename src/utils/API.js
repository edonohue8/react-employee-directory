import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=40&nat=us";

// Exporting object with "search" method looking for passed query
export default {
    search: function () {
        return axios.get(BASEURL);
    }
};