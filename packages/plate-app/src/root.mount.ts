import { Mount, Route } from '@plate/core';

@Mount({
    module: module,
    base:'/',
    views:[
        'views',
        'foo'
    ]
})
export class RootMount{

    @Route({ method:'get', url:'/' }) front(){

    }

}