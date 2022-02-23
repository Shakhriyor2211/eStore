function Register(props) {
  return (
    <div className="p-4 w-96 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6 w-full mx-auto shadow-md" action="#">
        {props.children}
      </form>
    </div>
  );
}

export default Register;
