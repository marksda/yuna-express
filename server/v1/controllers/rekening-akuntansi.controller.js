import Perusahaan from "../models/Perusahaan.model.js";
import RekeningAkuntansi from "../models/RekeningAkuntansi.model.js";

export async function AddRekeningAkuntansi(req, res) {
    const { kode, nama, header, level, jenis_rekening_akuntansi, perusahaan, parent_rekening_akuntansi } = req.body;

    try { 
        const existingPerusahaan = await Perusahaan.findOne({npwp: perusahaan.npwp});
        
        const existingRekeningAkuntansi = await RekeningAkuntansi.findOne({kode, id_perusahaan: existingPerusahaan._id});
        
        if(existingRekeningAkuntansi) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Duplikasi: RekeningAkuntansi sudah ada."
            });
        }

        //generate urutan
        const urutan = await generateUrutan(id_parent, level);

        if(urutan == null) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Urutan: Gagal mengenerate urutan rekening akuntansi."
            });
        }

        const newRekeningAkuntansi = new RekeningAkuntansi({
            kode, nama, header, level, 
            id_jns_rek_akun: jenis_rekening_akuntansi._id,
            id_perusahaan: perusahaan._id, urutan, id_parent
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
                    .sort({urutan: 1})
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

export async function generateUrutan(id_parent, level) {
    let urutan = null;
    let rknAkutansiLastSibling = null;
    let spltUrutan = null;

    if(id_parent == null) {
        rknAkutansiLastSibling = await RekeningAkuntansi
                                .findOne({level})
                                .sort({urutan: -1})
                                .select('urutan')
                                .exec();
        if(rknAkutansiLastSibling) {
            spltUrutan = rknAkutansiLastSibling.urutan.split("-");
            urutan = Number.parseInt(spltUrutan[spltUrutan.length - 1]) + 1;
            spltUrutan[spltUrutan.length - 1] = urutan.toString();
            urutan = spltUrutan.join("-");
        }
        else {
            urutan = "1";
        }
    }
    else {
        const parentRknAkuntansi = await RekeningAkuntansi.findById(id_parent);
        if(parentRknAkuntansi) {
            rknAkutansiLastSibling = await RekeningAkuntansi
                                            .findOne({id_parent, level})
                                            .sort({urutan: -1})
                                            .select('urutan')
                                            .exec();

            if(rknAkutansiLastSibling) {
                spltUrutan = rknAkutansiLastSibling.urutan.split("-");
                urutan = Number.parseInt(spltUrutan[spltUrutan.length - 1]) + 1;
                spltUrutan[spltUrutan.length - 1] = urutan.toString();
                urutan = spltUrutan.join("-"); 
            }
            else {
                urutan = parentRknAkuntansi.urutan + "-1";
            }
        }
        else {
            urutan = null;
        }
    }

    return urutan;
}