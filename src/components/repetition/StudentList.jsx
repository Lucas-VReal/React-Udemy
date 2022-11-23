import React from "react";
import Students from "../../data/Students";

export default (props) => {
  const lis = Students.map((student) => {
    return (
      <li key={student.id}>
        {student.id}. {student.name} - {student.pontuation}
      </li>
    );
  });
  return (
    <div>
      <ul style={ {textAlign: 'left'} }>
        {lis}
      </ul>
    </div>
  );
};
