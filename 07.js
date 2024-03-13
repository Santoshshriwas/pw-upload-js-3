const userMap = new Map();

function addUser(name, age, email) {
  const userInfo = { age, email };
  userMap.set(name, userInfo);
}

function updateUser(name, age, email) {
  if (userMap.has(name)) {
    const userInfo = userMap.get(name);
    userInfo.age = age;
    userInfo.email = email;
  }
}

function deleteUser(name) {
  userMap.delete(name);
}

addUser("Santosh", 22, "santosh@gmail.com");
addUser("Sunli", 21, "sunil@gmail.com");
console.log(userMap);

updateUser("Santosh", 23, "Santosh@text.com");
console.log(userMap);

deleteUser("Sunil");
console.log(userMap);
