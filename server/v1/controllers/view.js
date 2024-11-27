import { LogoutService } from "../services/auth-service.js";

export async function Index(req, res) {
    res.render('index.pug', { title: 'CSO', isAuthenticated: req.statusVerify, user: req.statusVerify ? req.user:null});
    res.end();
}

export async function Masuk(req, res) {
    if(req.user) {
        res.redirect('/');
    }
    else {
        res.render('masuk.pug', { 
            title: 'CSO', 
            pengumuman: true,
            isAuthenticated: req.user ? true:false 
        });
    }    
    res.end();
}

export async function Keluar(req, res) {
    if(req.statusVerify) {
        const isLogouted = await LogoutService(req.accessToken);
        if(isLogouted) {
            res.setHeader('Clear-Site-Data', '"cookies"');
        }
    }

    // const authHeader = req.headers["cookie"];

    // if(authHeader) {        
    //     const cookie = authHeader.split('=')[1]; // If there is, split the cookie string to get the actual jwt token
    //     const accessToken = cookie.split(';')[0];
    //     const isLogouted = await LogoutService(accessToken);
    //     if(isLogouted) res.setHeader('Clear-Site-Data', '"cookies"');
    // }
        
    res.redirect('/');
    res.end();
}