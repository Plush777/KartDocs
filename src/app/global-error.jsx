'use client';

import PageError from "components/pages/PageError";

export default function GlobalError({ error, reset }) {
    return <PageError type="error" error={error} reset={reset}/>
}
