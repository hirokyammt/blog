export default async function copyToClipboard(event, text) {
  if (!navigator.clipboard) {
    return
  }
  try {
    await navigator.clipboard.writeText(text)
    event.target.textContent = 'Copied to Clipboard!'
  } catch (error) {
    alert((error && error.message) || 'Oops! Failed to Copy...')
  }
}
