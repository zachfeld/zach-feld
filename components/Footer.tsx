export default function Footer() {
    return (
      <div className="fixed bottom-0 left-0 p-4 flex justify-between items-end w-full">
      <h1>Zach Feldman</h1>
      <div className="flex flex-col items-end gap-2">
        <a href="mailto:zachfeldy@gmail.com">zachfeldy@gmail.com</a>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-right">
          <h2 className="text-right">Software Leader</h2>
          <h2 className="hidden sm:block">|</h2>
          <h2 className="text-right">New York City</h2>
        </div>
      </div>
      </div>

    )
}

/*

      <div className="fixed bottom-0 left-0 p-4 flex flex-col sm:flex-row justify-between items-end w-full">
        <h1>Zach Feldman</h1>
        <div className="flex flex-col items-end gap-2 sm:flex-row md:flex-col">
          <a href="mailto:zachfeldy@gmail.com">zachfeldy@gmail.com</a>
          <div className="flex gap-2 items-center sm:flex-col">
            <h2>Software Leader</h2>
            <h2 className="hidden sm:block">|</h2>
            <h2>New York City</h2>
          </div>
        </div>
      </div>
*/