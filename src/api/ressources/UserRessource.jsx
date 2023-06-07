import httpClient from "../httpClient";

const UserResource = {
  async getUsers() {
    return await httpClient.get("users");
  },
};

export default UserResource;
