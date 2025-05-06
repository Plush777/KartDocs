import * as N from "style/components/sidebar/NoMatch.style"

export default function NoMatch({ text }) {
    return(
        <N.Wrap>
            <N.Text>{text}</N.Text>
        </N.Wrap>
    )
}