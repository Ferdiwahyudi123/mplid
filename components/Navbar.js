import React from 'react';
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a className="logo navbar-brand"></a>
            <h2 style={{color: 'white'}} >MPL ID</h2>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link href="/">
                            <a className="nav-link">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/berita">
                            <a className="nav-link" >Berita</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/tim">
                            <a className="nav-link" >Tim</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/user/datampl">
                            <a className="nav-link">Klasemen</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        <hr/>
        <hr/>
        <hr/>
    </div>
    );
};

export default Navbar;