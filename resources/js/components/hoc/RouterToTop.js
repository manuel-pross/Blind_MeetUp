import { useEffect } from 'react';

const RouterToTop = ({ history, location }) => {
    const dontScrollIntoViewOnPaths = ["/dashboard/vergangen", "/dashboard/anstehend", "/dashboard/anmelden"];

    useEffect(() => {
        if (history.action === "POP") {
            return;
        }

        let { hash, pathname } = location;
        if (hash) {
            let element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ block: "start", behavior: "smooth" });
            }
        } else if (!dontScrollIntoViewOnPaths.includes(pathname)) {
            window.scrollTo(0, 0);
        }
    });

    return null;
};

export default RouterToTop;