import axios from "axios";
// IP's
const FORUM_IP = "http://52.200.134.90:3000"
const GraphQL_URL = "http://3.138.86.155/graphql"

export const getCourses = () => {
    let promise = new Promise((resolve, reject) => {
      axios
        .post(GraphQL_URL, {
          query:`
          query{
            getAllCourses{
              name,
              id_course
            }
          }
          `,
          variables: {}
        },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        .then((res) => {
          // console.log(res.data.data.getAllCourses)
          resolve(res);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
    return promise;
  };