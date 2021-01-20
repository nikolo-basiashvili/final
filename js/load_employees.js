let block = document.getElementById('mainBlock');

function getData(){
    fetch('https://reqres.in/api/users?page=1', {method : "GET"})
    .then(function(response){
        if(response.status !== 200){
            throw 'error';
        }
        console.log(response);
        return response.json();
    })
    .then(function(empData) {
        let fragment = document.createDocumentFragment();

        let teamBlock = document.createElement('div');
        teamBlock.setAttribute('class', 'team-block');
        fragment.appendChild(teamBlock);

        empData.data.forEach(employee => {
            let emp = document.createElement('div');
            emp.setAttribute('class', 'employee');
            teamBlock.appendChild(emp);

            let profileImage = document.createElement('img');
            profileImage.setAttribute('class', 'profile-image');
            profileImage.setAttribute('src', employee.avatar);
            profileImage.setAttribute('alt', employee.first_name + " " + employee.last_name);
            emp.appendChild(profileImage);

            let name = document.createElement('h3');
            name.setAttribute('class', 'emp-name');
            name.textContent = employee.first_name + " " + employee.last_name;
            emp.appendChild(name);

            let email = document.createElement('p');
            email.setAttribute('class', 'emp-email');
            email.textContent = employee.email;
            emp.appendChild(email);
        });
        
        block.appendChild(fragment);
        
    })
    .catch(function(error){
        let errBlock = document.createElement('div');
        errBlock.setAttribute('class', 'error-block');

        let errCode = document.createElement('p');
        errCode.setAttribute('class', 'error-code');
        errCode.textContent = '404';

        let errMessage = document.createElement('p');
        errMessage.setAttribute('class', 'error-message');
        errMessage.textContent = 'Page Not Found';

        block.appendChild(errBlock);
        errBlock.appendChild(errCode);
        errBlock.appendChild(errMessage);
    })
}
getData();

