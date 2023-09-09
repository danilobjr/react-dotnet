import { formatToPtBrDate } from '@utils/string'

type TableProps = {
  data: any[]
}

export const Table = ({ data = [] }: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Document Title</th>
          <th>Initial Release Date</th>
          <th>Current Release Date</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr key={item.cvrfUrl}>
            <td>{item.id}</td>
            <td>
              <a href={item.cvrfUrl} target="_blank" rel="noreferrer">
                {item.documentTitle}
              </a>
            </td>
            <td>{formatToPtBrDate(item.initialReleaseDate)}</td>
            <td>{formatToPtBrDate(item.currentReleaseDate)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
