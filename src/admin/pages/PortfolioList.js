import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProjects,
  changePageTitle,
  increaseNumber,
  logIn,
} from "../../store/actions";
import firebaseconnection from "../../models/connection";
import Project from "../../models/ProjectsClass";

export default function PortfolioList() {
  document.title = "Portfolio List | Dashboard";

  // const myvalue = useSelector((value)={

  // const thisisDispatcher = useDispatch();

  // const isLogin = useSelector((state) => state.changePageTitle);

  // const Data = useSelector((state) => state.getProjectData);

  // const projectDataDispatcher = useDispatch();

  // })

  // const [projects, setProjects] = useState([]);
  // const [refreshData, setrefreshData] = useState(false);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const collectionRef = firebaseconnection
  //         .firestore()
  //         .collection("projects");
  //       const snapshot = await collectionRef.get();

  //       const projectList = snapshot.docs.map((doc) => {
  //         const data = doc.data();
  //         return new Project(
  //           data.project_id,
  //           data.project_title,
  //           data.project_description,
  //           data.project_github,
  //           data.client_name,
  //           data.date_to_start,
  //           data.date_to_end,
  //           data.feature_image,
  //           data.project_link,
  //           data.builtsin
  //         );
  //       });
  //       projectDataDispatcher(addProjects(projectList));

  //       setProjects(projectList);
  //     } catch (error) {
  //       console.error("Error fetching projects:", error);
  //     }
  //   };

  //   fetchProjects();
  // }, [refreshData]);

 

  // setProjects(useSelector((state) => state.ProjectArchive));

  //  ProjectArchive=[{}];

  // cont text

   const Test = useSelector((state) => state.ProjectArchive);
 const [ProjectArchive, setProjectArchive] = useState(useSelector((state) => state.ProjectArchive));
//   useEffect(()=>{ 
  
// setProjectArchive(Test);
// console.log(ProjectArchive);
//   },[])




  // const ProjectArchive = [{
  //   title:"01 okay"
  // },
  // {
  //   title:"02 okay"
  // }]



   // Add this line to check the contents

  return (
    <section className="bg-white dark:bg-gray-900">
      <div>
        OkAY
        {/* {ProjectArchive[0].title}  */}
       { ProjectArchive.forEach(element => {

<h1>{element.project_title}</h1>
          
        })}
        {/* {ProjectArchive.map((p, index) => {
          return <div key={index}>
            <h1>{p.project_title}</h1>
            </div>
          
        })} */}

{/* <h1>Project Archive</h1>
      <ul>
        {ProjectArchive.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul> */}
      </div>

    </section>
  );
}



