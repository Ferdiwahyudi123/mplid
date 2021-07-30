import React from 'react';
import DtMpl from '../../components/user/DtMpl';

const datampl = (props) => {

    const {dt} = props;
    return (
        <div>
                <DtMpl data = {dt} />
        </div>
    );

};

export async function getServerSideProps(){
    const res = await fetch("http://localhost:3000/api/data-mpl")
    const dt = await res.json()

    return{
        props: {
            dt,
        },
    }
}

export default datampl;