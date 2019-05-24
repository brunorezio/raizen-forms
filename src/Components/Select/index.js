import React from 'react'

const Select = props => {
  const { options, defaultOption } = props
  console.log({options})
  return (
    <select name="countries">
      <option value="0">{defaultOption}</option>
      {options.map(option =>
        <option key={option} value={option}>{option}</option>
      )}
    </select>
  )
}

export default Select

