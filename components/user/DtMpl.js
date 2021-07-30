import React from 'react';
import { useDataMpl } from '../../lib/swr-fetch'
import dtmpl from '../../pages/admin/dtmpl';
import Layout from '../Layout';
const DtMpl = ({ data }) => {
    // const {data, error} = useDataParfum();

    // if (error){
    //     return <div>Error Loading</div>
    // }
    // if (!data) {
    //     return <div>Loading....</div>
    // }

    //console.log(data);

    return (
        <div>
            <Layout>
                <div className="col" style={{ textAlign: "center" }} >
                    <h3 style={{ fontFamily: "AbeeZee, sans-serif" }}>Data MPL</h3>
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((dt, idx) => (
                                                <tr key={idx} >
                                                    <td>
                                                        {idx+1}
                                                    </td>
                                                    <td>
                                                        <img src={dt.team} alt="team"
                                                            style={{ width: '50px', height: '50px' }} />
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
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default DtMpl;