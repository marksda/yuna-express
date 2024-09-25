export async function Index(req, res) {
    res.render('index.pug', { title: 'CSO', isAuthenticated: req.user ? true:false});
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
    if(req.user) {
        
    }
    else {
        res.redirect('/');
        res.end();
    }    
}