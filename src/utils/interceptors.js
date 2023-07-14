import axios from "axios";

const API_KEY = "bb3f608a486c3f6351720f92858ab349";
const BASEURL = "http://wan.piinakin.co.in:8443/api/v0/";

export const API = axios.create({
  baseURL: BASEURL,
  headers: { "X-Auth-Token": API_KEY },
});
