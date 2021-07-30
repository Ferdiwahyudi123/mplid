
import React, { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router'

const UpdateDataMpl = () => {
    //Deklarasi State
    const [_id, setId] = useState('');
    const [_team, setTeam] = useState(null);
    const [_game, setGame] = useState('');
    const [_kil, setKil] = useState('');
    const [_death, setDeath] = useState('');
    const [_assist, setAssist] = useState('');
    const [_SelectedFile, setSelectedFile] = useState('');
    const [_file, setFile] = useState('');

    //Mengambail data yang dikirim melalui router
    const router = useRouter();
    const { id, team, game, kil, death, assist } = router.query;

    useEffect(() => {
        if(typeof id == 'string'){
            setId(id);
        }
        if(typeof team == 'string'){
            setTeam(team);
        }
        if(typeof game == 'string'){
            setGame(game);
        }
        if(typeof kil == 'string'){
            setKil(kil);
        }
        if(typeof death == 'string'){
            setDeath(death);
        }
        if(typeof assist == 'string'){
            setAssist(assist);
        }
    },[id,team,game,kil,death,assist],)

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

    const submitHandler = async(e) =>{
        e.preventDefault()
        try {
            const res = await fetch("/api/update-data-mpl", {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    id: _id,
                    team: _team,
                    game: _game, 
                    kil: _kil,
                    death: _death,
                    assist: _assist,
                })
            })

            const json = await res.json()

            if (!res.ok) throw Error(json.message)

            alert("Update Data Sukses")
            Router.push('/admin/dtmpl')
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
                <form className= "w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 style={{fontFamily: "AbeeZee, sans-serif"}}>Edit Data</h1>

                    <div className="text-center mb-3">
                        <label htmlFor="uploadLogoTeam">
                            <img className="rounded-circle"
                                src={_team} alt="Pilih Logo Team"
                                style={{ background: "gray", width: "55px", height: "55px" }} />
                        </label>
                        <input
                            id="uploadLogoTeam"
                            type="file"
                            style={{ display: "none" }}
                            onChange={onSelectImage} />
                    </div>

                    <div className="form-floating">
                        <input type="text" className="form-control mb-2"
                            id = "id"
                            placeholder = "ID"
                            value = {_id}
                            onChange = {(e) => setId(e.target.value)}
                        />
                            <label htmlFor="id">Id</label>
                    </div>

                    <div className="form-floating">
                        <input type="text" className="form-control mb-2"
                            id = "game"
                            placeholder = "Game"
                            value = {_game}
                            onChange = {(e) => setGame(e.target.value)}
                        />
                            <label htmlFor="id">Game</label>
                    </div>

                    <div className="form-floating">
                        <input type="text" className="form-control mb-2"
                            id = "kil"
                            placeholder = "Kil"
                            value = {_kil}
                            onChange = {(e) => setKil(e.target.value)}
                        />
                            <label htmlFor="id">Kill</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control mb-2"
                            id = "death"
                            placeholder = "Death"
                            value = {_death}
                            onChange = {(e) => setDeath(e.target.value)}
                        />
                            <label htmlFor="id">Death</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control mb-2"
                            id = "assist"
                            placeholder = "Assist"
                            value = {_assist}
                            onChange = {(e) => setAssist(e.target.value)}
                        />
                            <label htmlFor="id">Assist</label>
                    </div>
                        <div className="d-flex flex-row-reverse">
                            <button className="btn btn-primary" type="submit">Update</button>
                        </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateDataMpl;