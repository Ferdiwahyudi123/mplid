//@ts-check
import React, { useState } from 'react';
import TambahDataMpl from '../../components/admin/TambahDataMpl';
import AdminLayout from '../../components/admin/AdminLayout'

const tambahdatampl = () => {
    
    return (
        <div>
            <AdminLayout>
            <TambahDataMpl/>
            </AdminLayout>
        </div>
    );
};

export default tambahdatampl;