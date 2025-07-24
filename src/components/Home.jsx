import BrowseBooks from "./BrowseBooks"


function Home() {
  return (
    <>
      <div className="message">
        <h1>Welcome to the Library!</h1>
      </div>
      <BrowseBooks />
    </>
  )
}

export default Home