export default async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
    event.target.textContent = 'Successfully Copied to Clipboard!'
  } catch (error) {
    alert((error && error.message) || 'Oops! Failed to Copy...')
  }
}
