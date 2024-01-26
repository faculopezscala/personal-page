import React from 'react';
import Link from 'next/link';
import '../public/styles.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Link href="/">
                    <a className="logo">Facu Lopez</a>
                </Link>
                <nav>
                    <ul className="nav-links">
                        <li>
                            <Link href="/#twitter">
                                <a>Twitter</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#linkedin">
                                <a>LinkedIn</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#instagram">
                                <a>Instagram</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;