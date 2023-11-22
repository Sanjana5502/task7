import React from 'react';

const TaskLists = () => {
  const TaskListsData = [
      { task_list_title: "Task list 1", create_by: "user1@example.com", no_of_tasks: 15, creation_time: "10/12/2022", last_updated: "9/1/2022" },
      { task_list_title: "Task list 2", create_by: "user2@example.com", no_of_tasks: 20, creation_time: "11/18/2022", last_updated: "10/5/2022" },
      { task_list_title: "Task list 3", create_by: "user3@example.com", no_of_tasks: 10, creation_time: "12/24/2022", last_updated: "11/15/2022" },
      { task_list_title: "Task list 4", create_by: "user4@example.com", no_of_tasks: 18, creation_time: "1/30/2023", last_updated: "1/15/2023" },
      { task_list_title: "Task list 5", create_by: "user5@example.com", no_of_tasks: 12, creation_time: "2/14/2023", last_updated: "2/1/2023" },
      { task_list_title: "Task list 6", create_by: "user6@example.com", no_of_tasks: 22, creation_time: "3/22/2023", last_updated: "3/10/2023" },
      { task_list_title: "Task list 7", create_by: "user7@example.com", no_of_tasks: 14, creation_time: "4/6/2023", last_updated: "4/1/2023" },
      { task_list_title: "Task list 8", create_by: "user8@example.com", no_of_tasks: 25, creation_time: "5/12/2023", last_updated: "5/5/2023" },
      { task_list_title: "Task list 9", create_by: "user9@example.com", no_of_tasks: 17, creation_time: "6/18/2023", last_updated: "6/10/2023" },
      { task_list_title: "Task list 10", create_by: "user10@example.com", no_of_tasks: 30, creation_time: "7/24/2023", last_updated: "7/15/2023" },
      { task_list_title: "Task list 11", create_by: "user11@example.com", no_of_tasks: 16, creation_time: "8/8/2023", last_updated: "8/1/2023" },
      { task_list_title: "Task list 12", create_by: "user12@example.com", no_of_tasks: 28, creation_time: "9/14/2023", last_updated: "9/5/2023" },
      { task_list_title: "Task list 13", create_by: "user13@example.com", no_of_tasks: 19, creation_time: "10/20/2023", last_updated: "10/10/2023" },
      { task_list_title: "Task list 14", create_by: "user14@example.com", no_of_tasks: 23, creation_time: "11/26/2023", last_updated: "11/15/2023" },
      { task_list_title: "Task list 15", create_by: "user15@example.com", no_of_tasks: 21, creation_time: "12/12/2023", last_updated: "12/5/2023" },
      { task_list_title: "Task list 16", create_by: "user16@example.com", no_of_tasks: 14, creation_time: "1/18/2024", last_updated: "1/10/2024" },
      { task_list_title: "Task list 17", create_by: "user17@example.com", no_of_tasks: 27, creation_time: "2/24/2024", last_updated: "2/15/2024" },
      { task_list_title: "Task list 18", create_by: "user18@example.com", no_of_tasks: 18, creation_time: "3/1/2024", last_updated: "3/5/2024" },
      { task_list_title: "Task list 19", create_by: "user19@example.com", no_of_tasks: 32, creation_time: "4/6/2024", last_updated: "4/1/2024" },
      { task_list_title: "Task list 20", create_by: "user20@example.com", no_of_tasks: 15, creation_time: "5/12/2024", last_updated: "5/5/2024" }    
];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Task List Title</th>
            <th>Create By</th>
            <th>Creation Time</th>
            <th>No Of Tasks</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {TaskListsData.map((TaskL, index) => (
            <tr key={index}>
              <td>{TaskL.task_list_title}</td>
              <td>{TaskL.create_by}</td>
              <td>{TaskL.creation_time}</td>
              <td>{TaskL.no_of_tasks}</td>
              <td>{TaskL.last_updated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskLists;
