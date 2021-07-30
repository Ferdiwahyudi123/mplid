import { db } from '../../lib/db';

const handler = async (req, res) => {
    const {id, team, game, kil, death, assist } = req.body;

    try {
        if (!id || !team || !game || !kil || !death || !assist ) {
            return res.status(400).json({ message: 'Harus Diisi Ya!!!' })
        }

        const results = await db.query(`INSERT INTO datampl VALUES (?,?,?,?,?,?)`, [id, team, game, kil, death, assist,]
        );

       
        await db.end;

        return res.json(results)
    } catch (e) {
        res.status(500).json({message: e.message });
    }
}

export default handler;