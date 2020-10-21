import axios from "axios";
// IP's
const FORUM_IP = "http://52.200.134.90:3000"
const GraphQL_URL = "http://3.138.86.155/graphql"
//URLS
const URL_FORUMS = `${FORUM_IP}/forums`;;

export const getForumsByCourse = () => {
  let promise = new Promise((resolve, reject) => {
    axios
      .post(
        GraphQL_URL,
        {
          query: `
          query{
            getForumsByCourse(course_id: "0"){
              _id
              name
              userCreator
              course_id
              posts
            }
          }
          `,
          variables: {},
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        resolve(res.data.data.getForumsByCourse);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
  return promise;
};

export const getPosts = async (id) => {
  let promise = new Promise((resolve, reject) => {
    axios
      .get(`${URL_FORUMS}/${id}`)
      .then((res) => {
        console.log(res.data)
        resolve(res);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
  return promise;
};
