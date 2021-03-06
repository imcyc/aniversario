import useSWR from 'swr'

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json())
}

export function UseEntries() {
  const { data, error } = useSWR(`/api/get-productos`, fetcher)

  return {
    entries: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function UseEntry(id: string) {
  return useSWR(`/api/get-entry?id=${id}`, fetcher)
}