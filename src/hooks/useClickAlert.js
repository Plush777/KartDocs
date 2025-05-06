export default function useClickAlert(message) {
    const clickAlert = (e) => {
        alert(message);
        e.preventDefault();
    }

    return clickAlert;
}