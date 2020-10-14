import { Select } from '@chakra-ui/core'

const NumberInput = ({ max = 1, ...rest }) => {
  return (
    <Select w={70} {...rest}>
      {Array(max)
        .fill()
        .map((a, i) => (
          <option value={i + 1}>{i + 1}</option>
        ))}
    </Select>
  )
}

export default NumberInput
