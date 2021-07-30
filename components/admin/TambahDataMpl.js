
import { useState } from 'react';

const TambahDataMpl = () => {
    const [id, setId] = useState('');
    const [team, setTeam] = useState(null);
    const [game, setGame] = useState('');
    const [kil, setKil] = useState('');
    const [death, setDeath] = useState('');
    const [assist, setAssist] = useState('');
    const [SelectedFile, setSelectedFile] = useState('');
    const [file, setFile] = useState('');

    const onSelectImage = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        const _file = e.target.files[0];
        const reader = new FileReader()
        reader.onload = function () {
            setFile(_file);
            setTeam(reader.result);
        }
        reader.readAsDataURL(_file)
    };



    async function submitHandler(e) {
        e.preventDefault()
        console.log(team)
        try {
            const res = await fetch("http://localhost:3000/api/tambah-data-mpl", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, team, game, kil, death, assist })
            })

            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert("Tambah Data Sukses")
        } catch (e) {
            throw Error (e.message)
        }
    }

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <div className="container mt-4" style={{textAlign: "center"}}>
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 style={{fontFamily: "AbeeZee, sans-serif"}}>Pilih Team</h1>
                    <div className="text-center mb-3">
                        <label htmlFor="uploadTeam">
                            <img className="rounded-circle"
                                src={team} alt="Pilih Team"
                                style={{ background: "gray", width: "55px", height: "55px" }} />
                        </label>
                        <input
                            id="uploadTeam"
                            type="file"
                            style={{ display: "none" }}
                            onChange={onSelectImage} />
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control mb-2"
                            id="id"
                            placeholder="ID"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                        <label htmlFor="id">Id</label>
                    </div>

                    <div className="form-floating">
                        <input type="text" className="form-control mb-2"
                            id="game"
                            placeholder="Game"
                            value={game}
                            onChange={(e) => setGame(e.target.value)}
                        />
                        <label htmlFor="id">Game</label>
                    </div>

                    <div className="form-floating">
                        <input type="text" className="form-control mb-2"
                            id="kil"
                            placeholder="Kil"
                            value={kil}
                            onChange={(e) => setKil(e.target.value)}
                        />
                        <label htmlFor="id">Kill</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control mb-2"
                            id="death"
                            placeholder="Death"
                            value={death}
                            onChange={(e) => setDeath(e.target.value)}
                        />
                        <label htmlFor="id">Death</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control mb-2"
                            id="assist"
                            placeholder="Assist"
                            value={assist}
                            onChange={(e) => setAssist(e.target.value)}
                        />
                        <label htmlFor="id">Assist</label>
                    </div>
                    <div className="d-flex flex-row-reverse">
                        <button className="btn btn-primary" type="submit">Simpan</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TambahDataMpl;