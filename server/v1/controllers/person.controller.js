import Orang from "../models/Person.model.js";
import TandaPengenal from "../models/TandaPengenal.model.js";

export async function AddPerson(req, res) {
    const { 
        tanda_pengenal, nama, tanggal_lahir, jenis_kelamin,
        agama, alamat, kontak } = req.body;

    try { 
        //create tanda pengenal
        const newTandaPengenal = new TandaPengenal({
            jenis_tanda_pengenal: tanda_pengenal.jenis_tanda_pengenal,
            number: tanda_pengenal.number
        });

        const existingTandaPengenal = await TandaPengenal.findOne({
            jenis_tanda_pengenal: tanda_pengenal.jenis_tanda_pengenal,
            number: tanda_pengenal.number
        });       
        
        if(existingTandaPengenal) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Duplikasi: Tanda pengenal sudah ada."
            });
        }

        const existingPerson = await Orang.findOne({nama});

        if(existingTandaPengenal && existingPerson) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Duplikasi: Person sudah ada."
            });
        }

        const savedTandaPengenal = await newTandaPengenal.save();
       
        const newPerson = new Orang({
            tanda_pengenal: savedTandaPengenal._id, 
            nama, tanggal_lahir,
            jenis_kelamin, agama, alamat, kontak
        });

        const savedPerson = await newPerson.save();
        const {createdAt, updatedAt, __v, ...hasil} = savedPerson._doc;
        
        res.status(200).json({
            status: "sukses",
            data: hasil,
            message: "Person berhasil ditambahkan.",
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

export async function GetPerson(req, res) {
    // let pageNumber = req.query.filter.pageNumber;
    // let pageSize = req.query.filter.pageSize;
    // let filters = req.query.filter.filters;
    // let sortOrders = req.query.filter.sortOrders;
    // const query = Person.find({ [filters[0].fieldName]: filters[0].value });

    let filter = {};

    // let filter = {
    //     $and: [
    //         {kode: '1101020'},
    //         {propinsi:'6731733405e5826b4e416a89'}
    //     ]
    // };

    const items = await Orang
                    .find(filter)
                    .populate({
                        path: 'alamat.propinsi',
                        select: 'nama'
                    })
                    .populate({
                        path: 'alamat.kabupaten',
                        select: 'nama'
                    })
                    .populate({
                        path: 'alamat.kecamatan',
                        select: 'nama'
                    })
                    .populate({
                        path: 'alamat.desa',
                        select: 'nama'
                    })
                    .populate({
                        path: 'tanda_pengenal',
                        select: 'jenis_tanda_pengenal number',
                        populate: {
                            path: 'jenis_tanda_pengenal',
                            select: 'keterangan'
                        }
                    })
                    .populate({
                        path: 'jenis_kelamin',
                        select: 'keterangan'
                    })
                    .populate({
                        path: 'agama',
                        select: 'keterangan'
                    })
                    .select('nama tanggal_lahir jenis_kelamin tanda_pengenal alamat kontak status_verifikasi')
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