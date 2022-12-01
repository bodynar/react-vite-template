import "bulma/bulma.sass";

import { Home } from "./home";

export const App = (): JSX.Element => {

    return (
        <main>
            <nav className="navbar is-info">
                <div className="navbar-menu px-5">
                </div>
            </nav>
            <hr />
            <main className="container mt-5">
                <Home />
            </main>
        </main>
    );
};
