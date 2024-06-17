import css from './header.module.css';

function Header() {
    return (
        <header className={css.header}>
            <div>
                <div>
                    <h5>Hello, dear!</h5>
                </div>
                <div>
                    <p>Some useful info</p>
                </div>
            </div>
        </header>
    );
}

export default Header;