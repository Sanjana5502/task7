import React from 'react';

const Users = () => {
  const usersData = [
      { email: "john.doe@email.com", password: "securepass1", signupTime: "2023-03-15", ip: "203.0.113.1" },
      { email: "alice.smith@email.com", password: "p@ssw0rd!2", signupTime: "2023-04-22", ip: "198.51.100.55" },
      { email: "bob.jones@email.com", password: "secret123", signupTime: "2023-05-10", ip: "192.168.0.10" },
      { email: "susan.miller@email.com", password: "mysecurepass", signupTime: "2023-06-05", ip: "172.16.0.5" },
      { email: "chris.wilson@email.com", password: "pass1234", signupTime: "2023-07-19", ip: "10.0.0.2" },
      { email: "emily.thomas@email.com", password: "securepass456", signupTime: "2023-08-14", ip: "192.168.1.20" },
      { email: "david.anderson@email.com", password: "myp@ssw0rd", signupTime: "2023-09-30", ip: "172.31.0.1" },
      { email: "lisa.wilkins@email.com", password: "pass5678", signupTime: "2023-10-18", ip: "198.18.0.15" },
      { email: "michael.smith@email.com", password: "securepass789", signupTime: "2023-11-03", ip: "192.168.2.30" },
      { email: "jennifer.brown@email.com", password: "password!@#", signupTime: "2023-12-08", ip: "203.0.113.25" },
      { email: "ryan.ward@email.com", password: "myp@ssword", signupTime: "2022-01-22", ip: "172.19.0.7" },
      { email: "amber.jenkins@email.com", password: "pass9876", signupTime: "2022-02-14", ip: "10.1.1.5" },
      { email: "peter.green@email.com", password: "securepass!23", signupTime: "2022-03-30", ip: "192.168.3.40" },
      { email: "sophia.davis@email.com", password: "p@ssword789", signupTime: "2022-04-18", ip: "172.20.0.2" },
      { email: "kevin.hill@email.com", password: "pass!234", signupTime: "2022-05-05", ip: "198.17.0.12" },
      { email: "natalie.turner@email.com", password: "securepass!45", signupTime: "2022-06-20", ip: "192.168.4.50" },
      { email: "jason.morris@email.com", password: "password890", signupTime: "2022-07-15", ip: "203.0.113.30" },
      { email: "lauren.walker@email.com", password: "myp@ssword123", signupTime: "2022-08-28", ip: "172.21.0.10" },
      { email: "robert.carter@email.com", password: "pass!@#678", signupTime: "2022-09-12", ip: "10.2.2.8" },
      { email: "olivia.richards@email.com", password: "securepass567", signupTime: "2022-10-05", ip: "192.168.5.60" }
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Email ID</th>
            <th>Password</th>
            <th>Signup Time</th>
            <th>IP</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user, index) => (
            <tr key={index}>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.signupTime}</td>
              <td>{user.ip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
