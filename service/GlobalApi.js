// const { default: axios } = require("axios");
// import axios from "axios";


const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;
// const axiosClient = axios.create({
//   baseURL: "http://localhost:1337/api/",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${API_KEY}`,
//   }
// })

// const CreateNewResume = (data) => axiosClient.post("/user-resume-2s", data);

// const GetUserResumes=(userEmail)=>axiosClient.get('/user-resume-2s?filters[userEmail][$eq]='+userEmail);

// const UpdateResumeDetail=(id,data)=>axiosClient.put('/user-resume-2s/'+id,data)

// export default {
//   CreateNewResume,
//   GetUserResumes,
//   UpdateResumeDetail
// };


// C:/Users/Dabarati Das/Desktop/Webuild/weBuild/service/GlobalApi.js

import axios from 'axios';

const BASE_URL = 'http://localhost:1337/api';

// **Replace 'YOUR_STRAPI_API_TOKEN' with the actual token you copied from Strapi.**
// It's highly recommended to store this in an environment variable (e.g., .env file)
// instead of hardcoding it directly in the code for production.
const STRAPI_API_TOKEN = '15c1013dfda380d7a09ca4fb61933453ac0a7c9ee74134b311c3d8c9643ee1a899970aff756a4096dab7b8f584c7fe3bc8415d27b3e17ae009d710edbb58622327c16b1c316ce136da45be0d44f15a8c21ccb04a966f03dc225a7db98692df96f06e3585c109f5674dc3f78c74ddca1d8d659909da6d787891064c69d7b040dd'; // <<< PASTE YOUR TOKEN HERE

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Add the Authorization header with your API token
    'Authorization': `Bearer ${API_KEY}`
  }
});

// Your existing API functions would then use axiosClient
//const UpdateResumeDetail = (resumeId, data) => axiosClient.put(`/user-resumes/${resumeId}`, data);
//const CreateNewResume = (data) => axiosClient.post('/user-resumes', data); // Example for creating

const CreateNewResume = (data) => axiosClient.post("/user-resumes", data);

const GetUserResumes=(userEmail)=>axiosClient.get('/user-resumes?filters[userEmail][$eq]='+userEmail);

const UpdateResumeDetail=(id,data)=>axiosClient.put('/user-resumes/'+id,data)

const GetResumeById=(id)=>axiosClient.get('/user-resumes/'+id+"?populate=*");

const DeleteResumeById=(id,data)=>axiosClient.delete('/user-resumes/'+id)

export default {
  CreateNewResume,
  GetUserResumes,
  UpdateResumeDetail,
  GetResumeById,
  DeleteResumeById
};