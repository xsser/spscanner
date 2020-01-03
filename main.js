import * as spauth from 'node-sp-auth';
import * as request from 'request-promise';

spauth
    .getAuth('https://sp2013dev/sites/dev/', {
        username: 'xsser',
        password: 'P@ssword',
        fba: true
    })
    .then(data => {
        let headers = data.headers;
        headers['Accept'] = 'application/json;odata=verbose';

        request.get({
            url: 'https://sp2013dev/sites/dev/_api/web',
            headers: headers,
            json: true,
            rejectUnauthorized: false
        }).then(response => {
            console.log(response.d.Title);
        });
    });