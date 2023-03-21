let userList = [];

window.addEventListener('DOMContentLoaded', () => {
    displayUsersData(userList);
});

const getUsersDataFromServer = () => {
    let serverUrl = "https://randomuser.me/api?results=50";
    axios.get(serverUrl).then((response) => {
        userList = response.data?.results;
        displayUsersData(userList);
    }).catch((error) => {
        console.error(error);
    });
};

let buttonElement = document.querySelector('#user-data-btn');
buttonElement.addEventListener('click', getUsersDataFromServer);

let displayUsersData = (userList) => {
    let tableBodyElement = document.querySelector('#table-body');
    let tableRows = "";
    if(userList.length > 0){
        for(let user of userList){
            tableRows += `<tr>
                            <td>${user.login.uuid.substring(user.login.uuid.length - 5)}</td>
                            <td>
                                <img src="${user.picture.large}" alt="">
                            </td>
                            <td>${user.name.title}. ${user.name.first} ${user.name.last}</td>
                            <td>${user.dob.age} yrs.</td>
                            <td>${user.location.city}</td>
                            <td>${user.location.state}</td>
                            <td>${user.location.country}</td>
                      </tr>`;
        }
        tableBodyElement.innerHTML = tableRows;
    }
    else{
        tableBodyElement.innerHTML = `<tr><td colspan="7">No Records Found</td></tr>`
    }

};