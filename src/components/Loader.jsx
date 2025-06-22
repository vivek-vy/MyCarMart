export const LoaderSpinner = () => {
  return (
    <div className=" position-fixed top-50 start-50 opacity-100 w-100 z-3" style={{height:'100vh'}}>
        <div className="spinner-border text-primary " role="status" style={{borderWidth:'7px'}}>
      <span className="visually-hidden">Loading...</span>
    </div>
    </div>
  );
};
