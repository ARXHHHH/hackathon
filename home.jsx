import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { FileText } from '@phosphor-icons/react'
import * as React from 'react'
import './Home.css'

const Home = () => {
  const [from, setFrom] = React.useState('')

  const handleChange = (event) => {
    setFrom(event.target.value)
  }

  const [to, setTo] = React.useState('')

  const handle = (event) => {
    setTo(event.target.value)
  }
  return (
    <div className="conatiner">
      {/* <div className="pahra">
        <h1>
          DATA <br /> ALCHEMIST
        </h1>
      </div> */}

      <div className="file-conversions-heading">
        <h1>POPULAR CONVERSIONS</h1>
      </div>
      <div className="file-conversions">
        <div className="file-conversion-block">
          <div className="heading">
            <FileText size={32} />
            <h3>JSON to CSV</h3>
          </div>
          <br />
          <p className="intro">Reduces the size of a pdf file</p>
        </div>
        <div className="file-conversion-block">
          <h3>JSON to Excel</h3>
          <br />
          <p className="intro">
            Makes it easier and faster for image background removing
          </p>
        </div>
        <div className="file-conversion-block">
          <h3>JSON to PDF</h3>
          <br />
          <p className="intro">
            It emerges two or more pdf files into a single file.
          </p>
        </div>
      </div>

      <div className="file-actions-heading">
        <h1>OTHERS</h1>
      </div>
      <div className="file-actions">
        <div className="file-actions-option">
          <div className="file-actions-option-from">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">From</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={from}
                label="From"
                onChange={handleChange}
              >
                <MenuItem value={10}>PDF</MenuItem>
                <MenuItem value={20}>Word</MenuItem>
                <MenuItem value={30}>Other</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="file-actions-option-to">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">To</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={to}
                label="To"
                onChange={handle}
              >
                <MenuItem value={10}>PDF</MenuItem>
                <MenuItem value={20}>Word</MenuItem>
                <MenuItem value={30}>Other</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="upload-file">
          <button type="button">Upload File</button>
        </div>
      </div>
    </div>
  )
}

export default Home
