'use client';

import { RecoilRoot } from 'recoil';

export default function Recoil({ children }) {
    return <RecoilRoot>{children}</RecoilRoot>
}