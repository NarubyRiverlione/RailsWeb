type HeaderTypes = {
  cbTraceFilename: (filename: Blob) => void
}
const Header = ({ cbTraceFilename }: HeaderTypes) => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { files } } = event
    if (files?.length !== 1) return
    cbTraceFilename(files[0])
  }

  return (
    <header>
      <h1>Rails</h1>
      <div>
        Load trace file
        <input type="file" name="file" onChange={changeHandler} />
      </div>

    </header>
  )
}
export default Header
