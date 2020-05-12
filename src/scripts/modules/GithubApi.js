export default class GithubApi {
    constructor (opt){      
      this._gitUserName = opt.gitUserName;
      this._gitUsersRepo = opt.gitUsersRepo;
      

    }
    getCommits (){
        return fetch(`https://api.github.com/repos/${this._gitUserName}/${this._gitUsersRepo}/commits`, {
            method: 'GET',           
          })
          .then(res => {
            if (res.ok) {
              return res.json(); 
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
    }   
}

