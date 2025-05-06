import { usePathname } from "next/navigation";

export default function useMenuActive () {
    const pathname = usePathname();
    const pathnameArray = pathname.split('/').filter((path) => path);
    const myPathArray = pathnameArray.slice(0, 2);
    const myPath = `/${myPathArray.join('/')}`;

    return {
        myPath
    }
}