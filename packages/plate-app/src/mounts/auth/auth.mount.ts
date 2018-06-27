import { Mount, Route } from '@plate/core';

@Mount({
    module: module,
    base:'/user',
    views:[
        'views'
    ]
})
export class AuthMount{

    @Route({ method:'get', url:'/login' }) login(){

    }
    @Route({ method:'get', url:'/register' }) register(){

    }

}