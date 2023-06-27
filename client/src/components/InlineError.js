import React from "react";
import '../scss/scssComponents/InlineError.scss';

function InlineError({ error }) {
    return (
        <p className="error">{error}</p>
    )
}

export default InlineError;