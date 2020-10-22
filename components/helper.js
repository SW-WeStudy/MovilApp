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

    export const createResource = (resourceInput) => {
      let promise = new Promise((resolve, reject) => {
          axios
            .post(GraphQL_URL, {
              query:
              `
              mutation{
                createResource(resource:{idUser:"${resourceInput.idUser}",idClase:${resourceInput.idClase},content:"${resourceInput.content}"}){
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