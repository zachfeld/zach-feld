export default function Footer() {
    return (
        <div className="fixed bottom-0 left-0 p-4 flex justify-between items-end w-full">
          <h1>Zach Feldman</h1>
          <div className="flex flex-col items-end gap-2">
            <a href="mailto:zachfeldy@gmail.com">zachfeldy@gmail.com</a>
            <div className="flex gap-2">
              <h2>Software Leader</h2>
              <h2>|</h2>
              <h2>New York City</h2>
            </div>
          </div>
      </div>
    )
}