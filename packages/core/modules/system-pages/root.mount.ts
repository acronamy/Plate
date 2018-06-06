import Route from '../../features/decorators/plate.route';
import Mount from '../../features/decorators/plate.mount';

@Mount({
    module: module,
    base:'/',
    views:[
        'views'
    ]
})
export class RootMount{
    
    @Route({ method:'get', url:'/404' }) systemPage404(req, res){
        
        return '404.html';
    }

    @Route({ method:'get', url:'/403' }) systemPage403(req, res){
        
        return '404.html';
    }

    @Route({ method:'get', url:'/500' }) systemPage500(req, res){
        
        return '404.html';
    }

    @Route({ method:'get', url:'/503' }) systemPage503(req, res){
        
        return '404.html';
    }

    @Route({ method:'get', url:'/504' }) systemPage504(req, res){
        
        return '404.html';
    }

}