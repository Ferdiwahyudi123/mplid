
import React from 'react';
import { useDataMpl } from '../../lib/swr-fetch'
import Link from 'next/link'
import { mutate } from 'swr';
import Router from 'next/router';

const DtMpl = () => {
    const { data, error } = useDataMpl();

    if (error) {
        return <div>Error Loading</div>
    }
    if (!data) {
        return <div>Loading....</div>
    }

    //console.log(data);

    async function hapusdatampl(id) {
        //setDeleteting(true)
        let res = await fetch(`/api/hapus-data-mpl?id=${id}`, { method: 'DELETE' })
        let json = await res.json()
        if (!res.ok) throw Error(json.message)
        mutate('/api/hapus-data-mpl')
        //setDeleteting(false)
        alert('Data Sudah Terhapus')
        Router.push('/admin/dtmpl')
    }

    return (
        <div className="container">
            <br />
            <br />
            <br />
            <div className="col" style={{ textAlign: "center" }} >
                <h3 style={{ fontFamily: "AbeeZee, sans-serif" }}>Klasemen MPL</h3>
                <div className="row">
                    <div className="col">
                    <div className="table-responsive">
                        <table className="table">
                            <thead style={{ background: "var(--bs-dark)", color: "var(--bs-light)" }}>
                                <tr>
                                    <th style={{ textAlign: "center" }}>PERINGKAT</th>
                                    <th style={{ textAlign: "center" }}>TEAM</th>
                                    <th style={{ textAlign: "center" }}>GAMES</th>
                                    <th style={{ textAlign: "center" }}>KILLS</th>
                                    <th style={{ textAlign: "center" }}>DEATHS</th>
                                    <th style={{ textAlign: "center" }}>ASSISTS</th>
                                    <th style={{ textAlign: "center" }}>AKSI</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((dt, idx) => (
                                        <tr key={idx}>
                                            <td>
                                                {idx+1}
                                            </td>
                                            <td>
                                                <img src={dt.team} alt="team"
                                                    style={{ width: '55px', height: '55px' }} />
                                            </td>
                                            <td>
                                                {dt.game}
                                            </td>
                                            <td>
                                                {dt.kil}
                                            </td>
                                            <td>
                                                {dt.death}
                                            </td>
                                            <td>
                                                {dt.assist}
                                            </td>
                                            <td style={{ width: 278 }}>
                                                <div className="d-flex justify-content-between">
                                                    <Link href={`/admin/updatedatampl?id=${dt.id}&team=${dt.team}
                                        &game=${dt.game}&kil=${dt.kil}&death=${dt.death}&assist=${dt.assist}`}>
                                                        <a className="btn btn-primary" >Edit</a>
                                                    </Link>
                                                    <span>&nbsp;&nbsp;&nbsp;</span>
                                                    <button
                                                        className="btn btn-danger"
                                                        type="button"
                                                        style={{ background: "var(--bs-red)" }}
                                                        value={dt.id}
                                                        onClick={(e) => hapusdatampl(e.target.value)}>Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DtMpl;