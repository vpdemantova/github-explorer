import { useState, useEffect } from "react"
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.sass'

interface Repository {
  name: string
    description: string
    html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/vitorpetri/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  },[])

  return (
    <section className="repository-list">
      <h1><a href="https://github.com/vitorpetri?tab=repositories">Lista de repositórios bacana</a></h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}

      </ul>
    </section>
  )
}