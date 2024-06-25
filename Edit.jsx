import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FileText } from '@phosphor-icons/react';
import * as React from 'react';
import './Home.css';

const Home = () => {
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const [file, setFile] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleChange = (event) => {
    setFrom(event.target.value);
    setErrorMessage(''); // Clear error message on new selection
  };

  const handle = (event) => {
    setTo(event.target.value);
    setErrorMessage(''); // Clear error message on new selection
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      const validFileTypes = {
        'PDF': 'application/pdf',
        'Word': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Other': '' // You can add more file types here if needed
      };
      const selectedFileType = validFileTypes[from];
      if (uploadedFile.type === selectedFileType || from === 'Other') {
        setFile(uploadedFile);
        setErrorMessage('');
      } else {
        setFile(null);
        setErrorMessage(`Invalid file type. Expected a ${from} file.`);
      }
    }
  };

  return (
    <div className="container">
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
              <InputLabel id="from-select-label">From</InputLabel>
              <Select
                labelId="from-select-label"
                id="from-select"
                value={from}
                label="From"
                onChange={handleChange}
              >
                <MenuItem value={'PDF'}>PDF</MenuItem>
                <MenuItem value={'Word'}>Word</MenuItem>
                <MenuItem value={'Other'}>Other</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="file-actions-option-to">
            <FormControl fullWidth>
              <InputLabel id="to-select-label">To</InputLabel>
              <Select
                labelId="to-select-label"
                id="to-select"
                value={to}
                label="To"
                onChange={handle}
              >
                <MenuItem value={'PDF'}>PDF</MenuItem>
                <MenuItem value={'Word'}>Word</MenuItem>
                <MenuItem value={'Other'}>Other</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="upload-file">
          <input
            type="file"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            id="file-upload"
          />
          <label htmlFor="file-upload">
            <button type="button">Upload File</button>
          </label>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Home;
