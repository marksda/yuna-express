import Person from "../models/Person.model.js";
import TandaPengenal from "../models/TandaPengenal.model.js";

export async function AddPerson(req, res) {
    const { 
        tanda_pengenal, nama, tanggal_lahir, jenis_kelamin,
        agama, alamat, kontak } = req.body;

    try { 
        //create tanda pengenal
        const newTandaPengenal = new TandaPengenal({...tanda_pengenal});

        const existingTandaPengenal = await TandaPengenal.findOne({...tanda_pengenal});
        
        if(existingTandaPengenal) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Duplikasi: Tanda pengenal sudah ada."
            });
        }

        const [_id, ...data] = await newTandaPengenal.save();
       
        const newPerson = new Person({
            tanda_pengenal: _id, 
            nama, tanggal_lahir,
            jenis_kelamin, agama, alamat, kontak
        });

        const existingPerson = await Person.findOne({kode});
        
        if(existingPerson) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Duplikasi: Person sudah ada."
            });
        }

        await newPerson.save();
        
        res.status(200).json({
            status: "sukses",
            data: [{kode, nama, propinsi}],
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

    const items = await Person
                    .find(filter)
                    .select('kode nama propinsi')
                    .populate('propinsi')
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