const Signup = () => {
  const submit = () => {};

  return (
    <div className="w-fit flex flex-col justify-center items-center bg-slate-600 rounded-lg">
      <p className="text-2xl p-4">Sign Up</p>
      <div className="text-lg p-8">
        <form onSubmit={submit} className="flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-2">
            <label>User Name</label>
            <input
              name="query"
              placeholder="Enter username"
              className="p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Password</label>
            <input
              name="query"
              placeholder="Enter password"
              className="p-2 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-fit py-2 px-4 m-4 bg-red-400 rounded-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
