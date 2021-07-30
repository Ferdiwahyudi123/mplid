//@ts-check

import { db } from '../../lib/db';

const handler = async (req, res) => {
    const { id, team, game, kil, death, assist } = req.body;
    
    try {
        if (!id || !team || !game ||!kil ||!death ||!assist) {
            return res.status(400).json({ message: 'Tidak Boleh Kosong!!!' })
        }

        const results = await db.query(`UPDATE datampl set id = ?, team = ?, game = ?, kil = ?, death = ?, assist = ? WHERE id = ?`, [id, team, game, kil, death, assist, id]
        );
        await db.end;

        return res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export default handler;