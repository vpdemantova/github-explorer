interface RepositoryItemProps {
  repository: {
    name: string
    description: string
    html_url: string
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <header>
        <strong>{props.repository.name ?? 'Repository Title'}</strong>

        <p>{props.repository.description ?? 'Repository Description'}</p>
      </header>

      <footer>
        <a href={props.repository.html_url}>Acessar repositório</a>
      </footer>
    </li>
  )
}