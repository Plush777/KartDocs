import * as L from "style/components/loading/LoadingSpinner.style";

export default function LoadingSpinner({ type }) {
    return (
        <L.Wrap type={type}>
            <L.Ring type={type}>
                <L.Item></L.Item>
                <L.Item></L.Item>
                <L.Item></L.Item>
                <L.Item></L.Item>
            </L.Ring>
        </L.Wrap>
    )
}