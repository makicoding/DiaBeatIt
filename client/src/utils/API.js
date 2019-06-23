import axios from "axios";

export default {
  // Saves calorie info to the database
  saveInfo: function(Data) {
    return axios.post("/api/calorie", Data); 
  },

  // Gets  calorie info that matches the search
  getInfo: function(userQuery) {
    return axios.get("/api/calorie/", {
      params: {...userQuery}      
    } );
  },
  
  // Edits the book with the given id
  editInfo: function(userQuery) {
    return axios.put("/api/calorie/" + userQuery.id, userQuery);
  },

  // Deletes the book with the given id
  deleteInfo: function(id) {
    return axios.delete("/api/calorie/" + id);
  },
};
