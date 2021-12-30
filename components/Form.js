const Form = ({submit}) => {
  const _today = () => {
    const today = new Date()
    return today.toISOString().substring(0, 10)
  }
  const _yesterday = () => {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1 )
    return yesterday.toISOString().substring(0, 10)
  }

  return (
    <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="py-8 px-6 shadow rounded-lg sm:px-10">
      <form onSubmit={submit} className="mb-0 space-y-6">
        <div>
          <label className="block text-sm font-medium">From</label>
          <input type='date' name='from' defaultValue={_yesterday()}></input>
        </div>
        <div>
          <label className="block text-sm font-medium">To</label>
          <input type='date' name='to' defaultValue={_today()}></input>
        </div>
        <button className="w-full flex justify-center py-2 px-4 border 
                          border-transparent rounded-md shadow-sm text-sm 
                          font-medium text-white bg-green-600 hover:bg-green-800">Submit</button>
      </form>
    </div>
  </div>
  )
}

export default Form