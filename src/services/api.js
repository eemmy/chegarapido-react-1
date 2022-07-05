import axios from "axios";
import { useId } from "react";

let user = localStorage.getItem("user");

user = JSON.parse(user);

let token = user?.token;
token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTY4NjcwMTgsImV4cCI6MTY1NzQ3MTgxOCwicGF5bG9hZCI6eyJpZCI6IktQb2kwZGdwNjV6SEZnb3VyWElPZzdNK0lJMVRcL1JiQ1drZG93RTdxRlJVKzJDYW1UdWpwV29Vc2doYmxYSHFBdzhjdDlMSE9yRnFDSG42QlF1VFZsam1mUGVGRjlLM2dNU3BTM1p2RmJLUT0iLCJuYW1lIjoiVGVzdGUgQVBQIiwiZW1haWwiOiJ0ZXNhc2Rkc2RkYWRzYWFzZHRlQGdtYWlsLmNvbSJ9fQ.UqlHjR58sYaaCVaB4CSV61E5fl12yjX89gboLDwWD5I'

export const apiWithoutToken = axios.create({
  baseURL: "https://hml-api-customer.chegarapido.com.br/v1",
});

export const apiWithToken = axios.create({
  baseURL: "https://hml-api-customer.chegarapido.com.br/v1",
  headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
});
