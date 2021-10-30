export default async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
    alert('Copied to clipboard!')
  } catch (error) {
    alert((error && error.message) || 'Oops! Failed to copy...')
  }
}
