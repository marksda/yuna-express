import { LogoutService } from "../services/auth-service.js";

export async function Index(req, res) {
    res.render('index.pug', { title: 'CSO', isAuthenticated: req.statusVerify, user: req.statusVerify ? req.user:null});
    res.end();
}

export async function Beranda(req, res) {
    if(req.statusVerify) {
        res.render('beranda.pug', { title: 'CSO', isAuthenticated: req.statusVerify, user: req.statusVerify ? req.user:null});
        res.end();
    }
    else {
        res.redirect('/beranda');
    }
}

export async function Masuk(req, res) {
    if(req.statusVerify) {
        res.redirect('/beranda');
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
        
    res.redirect('/');
    res.end();
}