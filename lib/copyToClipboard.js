export default async function copyToClipboard(event, text) {
  if (!navigator.clipboard) {
    return
  }
  try {
    await navigator.clipboard.writeText(text)
    event.target.textContent = 'Copied to Clipboard!'
    setTimeout(() => event.target.textContent = 'Copy Link to Share', 2000)
  } catch (error) {
    alert((error && error.message) || 'Oops! Failed to Copy...')
  }
}
