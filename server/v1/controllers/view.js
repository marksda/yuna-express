export async function Index(_req, res) {
    res.render('index.pug', { title: 'CSO', pengumuman: true });
    res.end();
}