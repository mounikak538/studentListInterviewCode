import React, { useEffect, useState } from "react";
import { list } from "./../mock-data/List";

export const Dashboard = ({ sortItem }) => {
  let [studentList, setStudentList] = useState(
    JSON.parse(JSON.stringify(list.students))
  );

  useEffect(() => {
    let arr = JSON.parse(JSON.stringify(studentList));
    studentList.forEach((student) => {
      student.grade = getGrade(student);
      student.attendance = getAttendence(student);
    });
    setStudentList(arr);
  }, []);

  let getGrade = (student) => {
    if (student.score > 7.5) {
      return "A";
    } else if (student.score >= 4.5 && student.score <= 7.5) {
      return "B";
    } else if (student.score < 4.5) {
      return "C";
    }
  };
  let getAttendence = (student) => {
    return (student.attendance / list.totalNoOfWorkingDays).toFixed(2) * 100;
  };
  useEffect(() => {
    if (sortItem) {
      let arr = JSON.parse(JSON.stringify(studentList));

      arr.sort((a, b) => {
        return a[sortItem] > b[sortItem] ? 1 : -1;
      });
      setStudentList(arr);
    }
  }, [sortItem]);
  return (
    <>
      {studentList.map((student) => {
        return (
          <div className="card" style={{ width: "50%", margin: "1rem auto" }}>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-3">
                  <img src="student.png" style={{ width: "6rem" }} />
                </div>
                <div className="col-lg-6">
                  <div>Name:{student.name}</div>
                  <div>Dept:{student.dept}</div>
                  <div>Score:{student.score}</div>
                  <div>Attendence:{student.attendance}%</div>
                </div>
                <div className="col-lg-3">
                  <button
                    className="btn btn-success btn-circle btn-sm"
                    type="buttton"
                  >
                    <div>Grade</div>
                    <div>{student.grade}</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
