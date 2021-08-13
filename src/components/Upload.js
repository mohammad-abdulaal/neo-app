import React , {useEffect} from 'react';
import {useDropzone} from 'react-dropzone';
import readXlsxFile from 'read-excel-file';
function Upload(props) {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: '.xlsx'
  });

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  console.log(acceptedFiles)
  useEffect(()=>{
    console.log("files:",acceptedFiles)
    props.setFile(acceptedFiles)
    console.log(props.file)
  }
  ,[])


  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <h4>Drop the excel here please</h4>
        <input {...getInputProps()} />
        <a class="waves-effect waves-light btn blue darken-3" style={{marginTop:50 , marginLeft:300}}>Press button</a>
      </div>
      <aside>
        <h4>Files Uploaded</h4>
        <ul>{acceptedFileItems}</ul>

      </aside>
    </section>
  );
}

export default Upload;