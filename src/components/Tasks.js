import React from 'react';

const Tasks = () => {
  // Mock task data
  const TasksData = [
    { task_title: "Task 1", task_description: "Call client", task_list_title: "Work task", create_by: "user1@example.com", creation_time: "2023-09-14T06:33:04Z" },
    { task_title: "Task 2", task_description: "Send report", task_list_title: "Work task", create_by: "user2@example.com", creation_time: "2023-09-15T08:45:22Z" },
    { task_title: "Task 3", task_description: "Meeting with team", task_list_title: "Work task", create_by: "user3@example.com", creation_time: "2023-09-16T12:20:10Z" },
    { task_title: "Task 4", task_description: "Review proposal", task_list_title: "Work task", create_by: "user4@example.com", creation_time: "2023-09-17T14:55:30Z" },
    { task_title: "Task 5", task_description: "Update website", task_list_title: "Work task", create_by: "user5@example.com", creation_time: "2023-09-18T10:10:45Z" },
    { task_title: "Task 6", task_description: "Prepare presentation", task_list_title: "Work task", create_by: "user6@example.com", creation_time: "2023-09-19T16:28:52Z" },
    { task_title: "Task 7", task_description: "Follow up on emails", task_list_title: "Work task", create_by: "user7@example.com", creation_time: "2023-09-20T09:05:18Z" },
    { task_title: "Task 8", task_description: "Attend webinar", task_list_title: "Work task", create_by: "user8@example.com", creation_time: "2023-09-21T11:40:37Z" },
    { task_title: "Task 9", task_description: "Code review", task_list_title: "Work task", create_by: "user9@example.com", creation_time: "2023-09-22T13:15:44Z" },
    { task_title: "Task 10", task_description: "Data analysis", task_list_title: "Work task", create_by: "user10@example.com", creation_time: "2023-09-23T15:50:59Z" },
    { task_title: "Task 11", task_description: "Update documentation", task_list_title: "Work task", create_by: "user11@example.com", creation_time: "2023-09-24T07:25:12Z" },
    { task_title: "Task 12", task_description: "Project planning", task_list_title: "Work task", create_by: "user12@example.com", creation_time: "2023-09-25T19:12:08Z" },
    { task_title: "Task 13", task_description: "Client presentation", task_list_title: "Work task", create_by: "user13@example.com", creation_time: "2023-09-26T14:33:27Z" },
    { task_title: "Task 14", task_description: "Budget review", task_list_title: "Work task", create_by: "user14@example.com", creation_time: "2023-09-27T17:48:36Z" },
    { task_title: "Task 15", task_description: "Training session", task_list_title: "Work task", create_by: "user15@example.com", creation_time: "2023-09-28T20:02:45Z" },
    { task_title: "Task 16", task_description: "Quality assurance", task_list_title: "Work task", create_by: "user16@example.com", creation_time: "2023-09-29T22:19:53Z" },
    { task_title: "Task 17", task_description: "Product launch", task_list_title: "Work task", create_by: "user17@example.com", creation_time: "2023-09-30T18:40:10Z" },
    { task_title: "Task 18", task_description: "Troubleshoot issues", task_list_title: "Work task", create_by: "user18@example.com", creation_time: "2023-10-01T09:55:28Z" },
    { task_title: "Task 19", task_description: "Social media update", task_list_title: "Work task", create_by: "user19@example.com", creation_time: "2023-10-02T11:11:42Z" },
    { task_title: "Task 20", task_description: "Weekly report", task_list_title: "Work task", create_by: "user20@example.com", creation_time: "2023-10-03T13:28:55Z" }
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Task Description</th>
            <th>Task List Title</th>
            <th>Create By</th>
            <th>Creation Time</th>
          </tr>
        </thead>
        <tbody>
          {TasksData.map((task, index) => (
            <tr key={index}>
              <td>{task.task_title}</td>
              <td>{task.task_description}</td>
              <td>{task.task_list_title}</td>
              <td>{task.create_by}</td>
              <td>{task.creation_time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
