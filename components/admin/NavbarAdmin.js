import React from 'react';
import Link from 'next/link';
const NavbarAdmin = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top"
                style={{ background: "var(--bs-dark)", color: "var(--bs-light)" }}>
                <h2 style={{ color: 'white' }} >ADMIN</h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active" >
                            <Link href="/">
                                <a className="nav-link" >Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/admin/dtmpl">
                                <a className="nav-link" >Data Mpl</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/admin/tambahdatampl">
                                <a className="nav-link" >Tambah Data</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavbarAdmin;