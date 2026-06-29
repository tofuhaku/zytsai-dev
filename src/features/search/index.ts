export function openSearch(): void {
  document.getElementById('search-backdrop')?.classList.add('is-open');
  (document.getElementById('search-input') as HTMLInputElement | null)?.focus();
}

export function closeSearch(): void {
  document.getElementById('search-backdrop')?.classList.remove('is-open');
  const input = document.getElementById('search-input') as HTMLInputElement | null;
  if (input) input.value = '';
  const results = document.getElementById('search-results');
  if (results) results.innerHTML = '';
}
