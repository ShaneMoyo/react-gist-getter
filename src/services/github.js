export const getGistsByUsername = username => { 
    return fetch(`https://api.github.com/users/${username}/gists`)
        .then(res => {
            if(res.status !== 200) throw new Error('server error');
            return res.json() 
        }); 
    }