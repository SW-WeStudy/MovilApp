import axios from "axios";
// IP's
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
          resolve(res.data.data.getAllCourses);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
    return promise;
  };
export const getNotes = (id) =>{
  let promise = new Promise((resolve, reject) => {
    axios
      .post(GraphQL_URL, {
        query:`
        query{
          getNotesByClass(id_course:${id}){
            id_note,
            content
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
        resolve(res.data.data.getNotesByClass);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
  return promise;
};
export const getForums = (id) =>{
  let promise = new Promise((resolve, reject) => {
    axios
      .post(GraphQL_URL, {
        query:`
        query{
          getForumsByCourse(course_id:"${id}"){
            name,
            _id
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
        resolve(res.data.data.getForumsByCourse);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
  return promise;
};
export const getStudyRooms = () =>{
  let promise = new Promise((resolve, reject) => {
    axios
      .post(GraphQL_URL, {
        query:`
        query{
          get_study_rooms{
            name
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
        resolve(res.data.data.get_study_rooms);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
  return promise;
};