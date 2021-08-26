import React from "react";
import styles from "./index.css";

import { Logo } from "@/components/css";

export const Header: React.FC = () => {
    return (
        <div className="header" <% if (testing === 'testing-library') { %> data-testid="container" <% } %> >
            <Logo />
        </div>
    );
};
