import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=1000&nat=us";

export default {
	employees: function () {
		return axios.get(BASEURL)
	}
};


