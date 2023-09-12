import { Table } from '@components/ui/table/table'
import { TableBodyCell } from '@components/ui/table/table-body-cell'
import { TableHeader } from '@components/ui/table/table-header'
import { TableHeaderCell } from '@components/ui/table/table-header-cell'
import { isEven } from '@utils/number'
import { formatToPtBrDate } from '@utils/string'

type TableProps = {
  // TODO dont cast to `any`
  data: any[]
}

export const SecurityUpdatesTable = ({ data = [] }: TableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableHeaderCell>ID</TableHeaderCell>
        <TableHeaderCell>Document Title</TableHeaderCell>
        <TableHeaderCell>Initial Release Date</TableHeaderCell>
        <TableHeaderCell>Current Release Date</TableHeaderCell>
      </TableHeader>

      <tbody>
        {data?.map((item, index) => (
          <tr
            className={isEven(index) ? '' : 'bg-neutral-200'}
            key={item.cvrfUrl}
          >
            <TableBodyCell className="text-left">{item.id}</TableBodyCell>
            <TableBodyCell className="text-right">
              <a href={item.cvrfUrl} target="_blank" rel="noreferrer">
                {item.documentTitle}
              </a>
            </TableBodyCell>
            <TableBodyCell>
              {formatToPtBrDate(item.initialReleaseDate)}
            </TableBodyCell>
            <TableBodyCell>
              {formatToPtBrDate(item.currentReleaseDate)}
            </TableBodyCell>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
