import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGNmMTkyOTY1YzE5MTdmMjE5OWVkYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODczMDQ2MSwiZXhwIjoxNjU4OTAzMjYxfQ.sLycz7nju9qZmb4ymyy5txa_uKCl57xSDaR4SSXud78";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const adminRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});
