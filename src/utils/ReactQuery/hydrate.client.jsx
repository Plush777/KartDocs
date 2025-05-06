"use client";

import { Hydrate as RQHydrate } from "@tanstack/react-query";

export default function Hydrate(props) {
    return <RQHydrate {...props} />;
}