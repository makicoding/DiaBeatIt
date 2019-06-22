import axios from "axios";

export default {
  // Saves calorie info to the database
  saveInfo: function(Data) {
    return axios.post("/api/calorie", Data); 
  },

  // Gets  calorie info that matches the search
  getInfo: function(query) {
    return axios.get("/api/calorie/" + query );
  },
  
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/calorie/" + id);
  },
};

// return axios.get(`/api/calorie/${query || ''}`);
//   console.log("/api/calorie/" + "{username: " + query.userName + "},{date:" + query.userDate + "}")