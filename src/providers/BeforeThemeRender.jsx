export default function BeforeThemeRender() {
  const script = `
        document.body.dataset.theme = window.localStorage.getItem("theme") || 'light';

        if (document.body.dataset.theme === 'dark') {
            document.body.style.backgroundColor = '#121212';
        } else if (document.body.dataset.theme === 'light') {
            document.body.style.backgroundColor = '#ffffff';
        }
    `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
