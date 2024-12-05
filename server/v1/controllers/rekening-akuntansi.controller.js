import RekeningAkuntansi from "../models/RekeningAkuntansi.model.js";

export async function AddRekeningAkuntansi(req, res) {
    const { kode, nama, header, level, jenis_rekening_akuntansi, perusahaan, urutan, id_parent } = req.body;

    try {   

        const existingRekeningAkuntansi = await RekeningAkuntansi.findOne({kode});
        
        if(existingRekeningAkuntansi) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Duplikasi: RekeningAkuntansi sudah ada."
            });
        }

        //generate urutan
        // const urutan = generateUrutan(id_parent)

        const newRekeningAkuntansi = new RekeningAkuntansi({
            kode, nama, header, level, id_jns_rek_akun: jenis_rekening_akuntansi._id,
            id_perusahaan: perusahaan._id, urutan
        });

        const savedRekeningAkuntansi = await newRekeningAkuntansi.save();
        const {createdAt, updatedAt, __v, ...hasil} = savedRekeningAkuntansi._doc;
        
        res.status(200).json({
            status: "sukses",
            data: hasil,
            message: "RekeningAkuntansi berhasil ditambahkan.",
        });
    } catch (error) {
        res.status(500).json({
            status: "gagal",
            code: 500,
            data: [],
            message: "server mengalami kegagalan internal"
        });
    }
}

export async function GetRekeningAkuntansi(req, res) {
    let filter = {};

    const items = await RekeningAkuntansi
                    .find(filter)
                    .select('kode nama header level id_jns_rek_akun id_perusahaan urutan id_parent')
                    .exec();
    
    if(!items) {
        return res.status(401).json({
            status: "gagal",
            data: [],
            message: "Data tidak ditemukan."
        });
    }

    res.status(200).json({
        status: "sukses",
        data: items,
        message: "Data berhasil ditemukan.",
    });
}