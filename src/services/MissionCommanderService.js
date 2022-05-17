import http from "../http-common";

class MissionCommanderService {
  getAll() {
    return http.get("/mission_commander");
  }
  get(id) {
    return http.get(`/mission_commander/${id}`);
  }
  create(data) {
    return http.post("/mission_commander", data);
  }
  update(id, data) {
    return http.put(`/mission_commander/${id}`, data);
  }
  delete(id) {
    return http.delete(`/mission_commander/${id}`);
  }
}

export default new MissionCommanderService();
