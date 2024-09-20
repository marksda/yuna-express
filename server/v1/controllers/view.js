export async function Index(_req, res) {
    res.render('index.pug', { title: 'CSO', pengumuman: true });
    res.end();
}

export async function Masuk(_req, res) {
    res.render('masuk.pug', { title: 'CSO', pengumuman: true });
    res.end();
}