

import axios from "axios";
// IP's
const FORUM_IP = "http://52.200.134.90:3000"
const GraphQL_URL = "http://3.138.86.155:3000/graphql"
//URLS
const URL_FORUMS = `${FORUM_IP}/forums`;;

export const getForumsByCourse = (id) => {
  let promise = new Promise((resolve, reject) => {
    axios
      .post(
        GraphQL_URL,
        {
          query: `
          query{
            getForumsByCourse(course_id: "${id}"){
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

export const getPosts = async (_id) => {
  let promise = new Promise((resolve, reject) => {
    axios
      .get(`${URL_FORUMS}/${_id}`)
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
          console.log("error courses")
          console.log(error);
          reject(error);
        });
    });
    return promise;
  };

export const getResources = (idResource) => {
    let promise = new Promise((resolve, reject) => {
        axios
          .post(GraphQL_URL, {
            query:`
            query{
                allResourcesOfClass(id:${idResource}){
                  id,
                  idClase,
                  idUser,
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
            console.log(res);
            resolve(res.data.data.allResourcesOfClass);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      });
      return promise;
    };

    export const createResource = (query) => {
      let promise = new Promise((resolve, reject) => {
          axios
            .post(GraphQL_URL, {
              query:
              `
              mutation{
                createResource(resource:${query}){
                  message
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
              console.log(res);
              resolve(res.data.data.createResource);
            })
            .catch((error) => {
              console.log(error);
              reject(error);
            });
        });
        return promise;
      };
      export const deleteResource = (idResource) => {
        let promise = new Promise((resolve, reject) => {
            axios
              .post(GraphQL_URL, {
                query:
                `
                mutation{
                  deleteResource(id:${idResource}){
                    message
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
                console.log(res);
                resolve(res.data.data.deleteResource);
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
export const getStudyRooms = (id) =>{
  let promise = new Promise((resolve, reject) => {
    axios
      .post(GraphQL_URL, {
        query:`
        query{
          get_study_rooms(courseId:"${id}"){
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

export const createNote = (content,id) =>{
  let promise = new Promise((resolve, reject) => {
    axios
      .post(GraphQL_URL, {
        query:`
        mutation{
          createNote(note:{content:"${content}",id_user:2,id_course:${id}}){
            ok
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
        console.log(res.data.data.createNote.ok)
        resolve(res.data.data.createNote);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
  return promise;
};

export const createUser = (cred) =>{
  let promise = new Promise((resolve, reject) => {
    axios
      .post(GraphQL_URL, {
        query:`
        mutation{
          createUser(user:{email:"${cred.email}",displayName:"${cred.name}",password:"${cred.password}"}){
            displayName
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
        resolve(res.data.data.createUser);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
  return promise;
};
export const deleteNote = (id) =>{
  let promise = new Promise((resolve, reject) => {
    axios
      .post(GraphQL_URL, {
        query:`
        mutation{
          deleteNote(id_note:${id}){
            ok
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
        resolve(res.data.data.deleteNote.ok);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
  return promise;
};

