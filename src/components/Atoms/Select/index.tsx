import ReactSelect from "react-select"

type SelectProps = {
  options: Array<{
    label: string
    value: string
  }>
  isLoading?: boolean
}

export const Select = ({ options, isLoading = false }: SelectProps) => {
  return <ReactSelect options={options} isLoading={isLoading}></ReactSelect>
}
