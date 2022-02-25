function Account(props) {
  return (
    <div className="bg-blue-600 min-h-screen flex items-center justify-center ">
      <form className="min-h-80 p-10 bg-white rounded shadow-lg">
        {props.children}
      </form>
    </div>
  );
}

export default Account;
